import { NextResponse } from 'next/server'

// In-memory / edge-compatible product cache for demonstrations and live webhook updates
interface StoreProduct {
  id: string
  name: string
  price: number
  inStock: boolean
  badge?: string
  description?: string
  image?: string
  lastUpdated: string
}

// Default initial catalog
let storeCatalog: Record<string, StoreProduct> = {
  'dupree-gold': {
    id: 'dupree-gold',
    name: 'Dupree Midi - Gold',
    price: 45000,
    inStock: true,
    badge: 'Signature Bestseller',
    description: 'Geometric faceted metallic gold acrylic beads with top handle.',
    image: '/craftycottage/products/dupree-gold.jpg',
    lastUpdated: new Date().toISOString()
  },
  'dupree-purple': {
    id: 'dupree-purple',
    name: 'Dupree Midi - Royal Purple',
    price: 45000,
    inStock: true,
    badge: 'Royal Amethyst Edition',
    description: 'Rich translucent deep amethyst purple crystal beads.',
    image: '/craftycottage/products/dupree-purple.jpg',
    lastUpdated: new Date().toISOString()
  },
  'pearly': {
    id: 'pearly',
    name: 'Pearly Handbag',
    price: 35000,
    inStock: true,
    badge: 'Oversized Pearls',
    description: 'Lustrous jumbo faux-pearl beads with oversized arch handle.',
    image: '/craftycottage/products/pearly.jpg',
    lastUpdated: new Date().toISOString()
  },
  'first-lady': {
    id: 'first-lady',
    name: 'First Lady Textured Clutch',
    price: 40000,
    inStock: true,
    badge: 'Loop Fringe Clutch',
    description: 'Statement loop-fringe textural beadwork in ivory champagne.',
    image: '/craftycottage/products/first-lady.jpg',
    lastUpdated: new Date().toISOString()
  }
}

/**
 * GET Handler - WhatsApp Cloud API Webhook Verification Challenge
 * Meta sends a GET request to verify the webhook endpoint.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const mode = searchParams.get('hub.mode')
  const token = searchParams.get('hub.verify_token')
  const challenge = searchParams.get('hub.challenge')

  const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN || 'granjefe_wa_sync_token'

  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    return new Response(challenge || '', {
      status: 200,
      headers: { 'Content-Type': 'text/plain' }
    })
  }

  // Also support fetching the current live catalog via GET for websites
  if (searchParams.get('action') === 'get_catalog') {
    return NextResponse.json({
      success: true,
      catalog: Object.values(storeCatalog),
      updatedAt: new Date().toISOString()
    })
  }

  return NextResponse.json({ error: 'Unauthorized challenge verification' }, { status: 403 })
}

/**
 * POST Handler - WhatsApp Incoming Messages & Commands
 */
export async function POST(request: Request) {
  try {
    const payload = await request.json()

    // 1. Direct Simulator or UI test dispatch
    if (payload.isSimulator) {
      const response = processCommand(payload.message || '', payload.sender || '+2347035596492')
      return NextResponse.json({
        success: true,
        reply: response.reply,
        action: response.action,
        product: response.product,
        updatedCatalog: Object.values(storeCatalog)
      })
    }

    // 2. Official Meta WhatsApp Cloud API Webhook Payload
    const entry = payload?.entry?.[0]
    const changes = entry?.changes?.[0]?.value
    const message = changes?.messages?.[0]

    if (!message) {
      // Status update or read receipt, return 200 to acknowledge
      return NextResponse.json({ status: 'ignored' }, { status: 200 })
    }

    const sender = message.from // e.g. "2347035596492"
    let incomingText = ''

    if (message.type === 'text') {
      incomingText = message.text?.body || ''
    } else if (message.type === 'image') {
      // Photo with caption: "Dupree Emerald, 48000, Limited festive edition"
      incomingText = message.image?.caption || 'New Product'
    }

    // Process the command
    const result = processCommand(incomingText, sender)

    // Send reply via Meta Cloud API if configured
    if (process.env.WHATSAPP_ACCESS_TOKEN && process.env.WHATSAPP_PHONE_NUMBER_ID) {
      await sendWhatsAppReply(sender, result.reply)
    }

    return NextResponse.json({
      success: true,
      processed: true,
      reply: result.reply,
      catalogSize: Object.keys(storeCatalog).length
    })
  } catch (error) {
    console.error('[WhatsApp Webhook Error]:', error)
    return NextResponse.json({ error: 'Failed to process webhook' }, { status: 500 })
  }
}

/**
 * Command Parser & Store Updater
 */
function processCommand(text: string, sender: string) {
  const trimmed = text.trim()
  const lower = trimmed.toLowerCase()

  // 1. SOLD OUT: [Product]
  if (lower.startsWith('sold out:') || lower.startsWith('soldout:')) {
    const query = trimmed.replace(/^sold\s*out:\s*/i, '').toLowerCase()
    const target = findProduct(query)

    if (target) {
      target.inStock = false
      target.lastUpdated = new Date().toISOString()
      return {
        action: 'sold_out',
        product: target,
        reply: `🔴 Done! *${target.name}* is now marked as *SOLD OUT* on your website.\n\n🌐 View live: craftycottage.ng`
      }
    }
    return {
      action: 'not_found',
      reply: `⚠️ Could not find a product matching "${query}". Text *CATALOG* to see your active item names.`
    }
  }

  // 2. RESTOCK: [Product]
  if (lower.startsWith('restock:') || lower.startsWith('available:')) {
    const query = trimmed.replace(/^(restock|available):\s*/i, '').toLowerCase()
    const target = findProduct(query)

    if (target) {
      target.inStock = true
      target.lastUpdated = new Date().toISOString()
      return {
        action: 'restocked',
        product: target,
        reply: `🟢 Restocked! *${target.name}* is now marked *AVAILABLE* and open for orders on your website.`
      }
    }
    return {
      action: 'not_found',
      reply: `⚠️ Could not find a product matching "${query}".`
    }
  }

  // 3. PRICE: [Product], [Price]
  if (lower.startsWith('price:')) {
    const content = trimmed.replace(/^price:\s*/i, '')
    const parts = content.split(/[,:]/)
    if (parts.length >= 2) {
      const prodQuery = parts[0].trim()
      const rawPrice = parts[1].replace(/[^0-9]/g, '')
      const newPrice = parseInt(rawPrice, 10)

      const target = findProduct(prodQuery)
      if (target && !isNaN(newPrice)) {
        target.price = newPrice
        target.lastUpdated = new Date().toISOString()
        return {
          action: 'price_updated',
          product: target,
          reply: `💰 Updated! Price for *${target.name}* changed to *₦${newPrice.toLocaleString()}* on your website.`
        }
      }
    }
    return {
      action: 'invalid_format',
      reply: `⚠️ Format: *Price: ProductName, 48000*`
    }
  }

  // 4. ADD: [Name], [Price], [Optional Description]
  if (lower.startsWith('add:') || lower.includes(',')) {
    const content = trimmed.replace(/^add:\s*/i, '')
    const parts = content.split(',')

    if (parts.length >= 2) {
      const name = parts[0].trim()
      const rawPrice = parts[1].replace(/[^0-9]/g, '')
      const price = parseInt(rawPrice, 10)
      const desc = parts[2]?.trim() || 'Handcrafted bespoke artisan piece.'

      if (name && !isNaN(price)) {
        const id = name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
        const newProduct: StoreProduct = {
          id,
          name,
          price,
          inStock: true,
          badge: 'New Drop',
          description: desc,
          image: '/craftycottage/products/dupree-gold.jpg', // fallback image
          lastUpdated: new Date().toISOString()
        }
        storeCatalog[id] = newProduct
        return {
          action: 'product_added',
          product: newProduct,
          reply: `✨ Added! *${name}* is now live on your website at *₦${price.toLocaleString()}*.\n\nCustomers can now order it directly via WhatsApp!`
        }
      }
    }
  }

  // 5. CATALOG / MENU / LIST
  if (lower === 'catalog' || lower === 'menu' || lower === 'products') {
    const items = Object.values(storeCatalog)
      .map((p, i) => `${i + 1}. *${p.name}* - ₦${p.price.toLocaleString()} [${p.inStock ? '✅ In Stock' : '❌ Sold Out'}]`)
      .join('\n')

    return {
      action: 'catalog',
      reply: `📋 *CURRENT STORE CATALOG:*\n\n${items}\n\n💡 *Commands:*\n• *Sold out: [Name]*\n• *Restock: [Name]*\n• *Price: [Name], [NewPrice]*\n• *Add: [Name], [Price], [Description]*`
    }
  }

  // 6. DEFAULT / HELP
  return {
    action: 'help',
    reply: `👋 *Crafty Cottage Store Bot*\n\nManage your website directly from WhatsApp without logging into any computer:\n\n1️⃣ *Mark Sold Out:* Text _Sold out: Pearly_\n2️⃣ *Restock Item:* Text _Restock: Pearly_\n3️⃣ *Update Price:* Text _Price: Pearly, 38000_\n4️⃣ *Add Product:* Text _Add: Dupree Emerald, 48000, Limited Edition_\n5️⃣ *View Items:* Text _Catalog_`
  }
}

/**
 * Helper to fuzzy search a product by name
 */
function findProduct(query: string): StoreProduct | undefined {
  const q = query.toLowerCase().trim()
  const list = Object.values(storeCatalog)
  return list.find(p => p.id.includes(q) || p.name.toLowerCase().includes(q) || q.includes(p.id))
}

/**
 * Dispatches WhatsApp message back to the user via Meta Cloud API
 */
async function sendWhatsAppReply(to: string, messageText: string) {
  const url = `https://graph.facebook.com/v19.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`
  await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to,
      type: 'text',
      text: { preview_url: true, body: messageText }
    })
  }).catch(err => console.error('[Meta WhatsApp Send Error]:', err))
}
