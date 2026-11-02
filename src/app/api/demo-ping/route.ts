import { NextResponse } from 'next/server'
import { notifyStudio } from '@/lib/resend'

// In-memory rate limiting map (IP + Target) to prevent flooding the inbox on reloads
const recentAlerts = new Map<string, number>()

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null)
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ ok: false }, { status: 400 })
    }

    const target = typeof body.target === 'string' ? body.target : 'unknown'
    const targetName = typeof body.targetName === 'string' ? body.targetName : target
    const event = typeof body.event === 'string' ? body.event : 'page_view'
    const details = body.details ? JSON.stringify(body.details) : ''

    const userAgent = request.headers.get('user-agent') || 'Unknown'
    const referer = request.headers.get('referer') || 'Direct / Email Client'
    const forwardedFor = request.headers.get('x-forwarded-for') || ''
    const ip = forwardedFor.split(',')[0]?.trim() || request.headers.get('x-real-ip') || 'Unknown IP'
    const city = request.headers.get('x-vercel-ip-city') || 'Unknown City'
    const country = request.headers.get('x-vercel-ip-country') || 'Unknown Country'

    console.log(`[DEMO RADAR] 🎯 ${targetName} (${target}) viewed from ${city}, ${country} [${ip}]`)

    // Throttling: send 1 email alert per IP + Target every 15 minutes
    const alertKey = `${ip}-${target}`
    const lastAlertTime = recentAlerts.get(alertKey) || 0
    const now = Date.now()

    if (now - lastAlertTime > 15 * 60 * 1000) {
      recentAlerts.set(alertKey, now)

      try {
        await notifyStudio({
          subject: `🎯 FOUNDER RADAR: ${targetName} is viewing their demo!`,
          replyTo: 'granjefetech@gmail.com',
          text: [
            `A target founder or team member just opened their prototype!`,
            ``,
            `Target: ${targetName}`,
            `Demo URL: https://thegranjefe.com/demo/${target}`,
            `Event: ${event}`,
            `Location: ${city}, ${country}`,
            `Device / Client: ${userAgent}`,
            `Referrer: ${referer}`,
            `Timestamp: ${new Date().toUTCString()}`,
            details ? `Details: ${details}` : '',
            ``,
            `---`,
            `Gran Jefe Studio Automated Outbound Tracker`
          ].filter(Boolean).join('\n')
        })
      } catch (err) {
        console.warn('[demo-ping] Notice: Email alert could not be delivered (Check RESEND_API_KEY):', err)
      }
    }

    return NextResponse.json({ ok: true, city, country })
  } catch (error) {
    console.error('[demo-ping] Internal error:', error)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
