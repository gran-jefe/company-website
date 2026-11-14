# Gran Jefe Solutions — SME Client Storefronts & Portals Master Prompts

This document contains turnkey, self-contained master prompts for scaffolding and building the remaining SME products in the Gran Jefe Solutions portfolio. 

Whenever you are ready to build one of these businesses:
1. Create a dedicated project directory:
   ```bash
   mkdir -p /Users/granjefe/GRAN_JEFE_PROJECTS/<folder_name>
   cd /Users/granjefe/GRAN_JEFE_PROJECTS/<folder_name>
   ```
2. Open Antigravity (or your AI coding agent) inside that folder.
3. Copy and paste the corresponding **Master Prompt** below. Each prompt is engineered to build a production-grade, zero-dependency-fail Next.js 16 product with mock data fallback, full administrative console, bank transfer checkout, and mobile-first UX.

---

## Architecture Standards Across All Products

Every project follows the same battle-tested tech stack and standards:
- **Framework**: Next.js 16 (App Router) with `"build": "next build --webpack"` in `package.json` to prevent worker panics.
- **Styling**: Tailwind CSS v4 or v3, modern styling with warm, high-contrast, accessible typography.
- **Icons**: `lucide-react`.
- **Backend / Data Layer**: Firebase (Firestore, Auth, Storage) with **instant local fallback** (seeding from `localStorage` or mock defaults if Firebase environment variables are not yet provided).
- **Payment Method**: Nigerian Direct Bank Transfer (showing Bank Name, Account Number, Account Name with one-click copy) + receipt screenshot upload/proof submission, plus optional Paystack integration point.
- **Order Tracking**: Public tracking screen (`/track`) by reference code with zero customer PII exposed.
- **Admin Portal**: Dedicated `/admin` route with inventory/menu management, live order status pipeline, and store settings.
- **UI/UX Quality Gate**: 44x44px interactive tap targets, accessible labels, clear feedback loops, WCAG AA contrast.

---

## Index of Projects

1. [Food Rascals (The Galley Kitchen)](#1-food-rascals-the-galley-kitchen) — Lagos Cloud Kitchen & Party Platters
2. [Folarin Fashion House](#2-folarin-fashion-house) — Bespoke Nigerian Tailoring & Menswear
3. [ppbakes](#3-ppbakes) — Luxury Custom Celebration Cakes & Pastries
4. [Royal Apparel](#4-royal-apparel) — Streetwear & Contemporary Urban Fashion
5. [Hafsy Couture / Scents](#5-hafsy-couture--scents) — Luxury Fragrances, Perfume Decants & Gift Sets
6. [Gadget Vault / Electronics Brand](#6-gadget-vault--electronics-brand) — Consumer Electronics & Gadget Hub with Warranty Lookup
7. [Gran Academy / Mr. Bello's School Portal](#7-gran-academy--school-portal-mr-bello) — Complete School Information, Admissions & Result Checker Portal

---

## 1. Food Rascals (The Galley Kitchen)

- **Target Folder**: `/Users/granjefe/GRAN_JEFE_PROJECTS/foodrascals`
- **Industry**: Lagos Cloud Kitchen, Party Food Trays, Seafood Boils, Gourmet Pastas
- **Color Palette**: Deep Charcoal (`#121212`), Fiery Amber/Orange (`#F97316`), Warm Cream (`#FFFBEB`)
- **Key Features**: 
  - Tray size selector (1.5L vs 3L trays, feeds 3-5 vs 8-12)
  - Seafood boil customizer (Heat levels: Mild, Naija Spicy, Extreme Ghost Pepper)
  - Delivery Zone selector with auto delivery fee calculation (Lagos Island vs Mainland zones)
  - Delivery date & time slot selector
  - Bank transfer checkout with receipt proof upload
  - Admin Menu & Order Management console

### Master Prompt for `foodrascals`

```markdown
You are building the full production-grade web storefront and admin management portal for "Food Rascals — The Galley Kitchen", a premier Lagos gourmet cloud kitchen specializing in Nigerian party platters, seafood boils, gourmet pastas, and grills.

Build this in the current directory (`/Users/granjefe/GRAN_JEFE_PROJECTS/foodrascals`).

### Core Requirements & Stack
1. **Tech Stack**:
   - Next.js 16 (App Router, TypeScript)
   - Tailwind CSS for modern, mouth-watering visual design (Deep Charcoal `#121212`, Fiery Spice Orange `#F97316`, Golden Amber `#F59E0B`)
   - `lucide-react` icons
   - Firebase (Firestore, Auth, Storage) with a self-contained local fallback (so if Firebase keys are missing, it loads rich mock menu data and saves orders to `localStorage` without crashing)
   - In `package.json`, set `"build": "next build --webpack"`

2. **Customer Storefront Features**:
   - **Hero Section**: Bold culinary branding, "Order For Today or Pre-Order For Events", operational status ("Kitchen Open — Delivering across Lagos").
   - **Menu Explorer**:
     - Category filters: All, Party Trays (1.5L & 3L), Seafood Boils, Pastas & Grills, Finger Foods & Shawarmas, Refreshing Drinks.
     - Food Cards: High-res images, pricing in Naira (₦), spicy heat meter (🌶️ Mild, 🌶️🌶️ Naija Pepper, 🌶️🌶️🌶️ Ghost), portion size badges (e.g., "Feeds 4-6", "Feeds 10-12").
     - Item Modal: Allows selecting Tray Size (1.5L vs 3L), add-on proteins (extra prawns, turkey wings, grilled croaker, boiled eggs), and spice level.
   - **Slide-out Cart Drawer**:
     - Live item summary with selected options/add-ons.
     - Delivery Zone Selector (Lagos Island / Ikoyi / VI / Lekki Phase 1: ₦2,500; Lekki Phase 2 / Ajah: ₦3,500; Ikeja / Maryland / Surulere: ₦3,000; Magodo / Gbagada: ₦3,500; Outskirts: ₦5,000).
     - Subtotal, delivery fee, and grand total.
   - **Checkout Experience (`/checkout`)**:
     - Delivery Contact details: Full Name, Phone (WhatsApp reachable), Delivery Address, Nearest Landmark.
     - Dispatch Scheduling: Date picker + Delivery Window (Lunch 12pm-2pm, Dinner 5pm-8pm, or Immediate Dispatch).
     - Special Chef's Notes: Any allergies, extra sauce, or packaging preferences.
     - Payment Option: Direct Bank Transfer (displaying Bank Name: Kuda Bank / GTBank, Account Number: 2049182910, Account Name: The Galley Kitchen Ltd).
     - Receipt / Proof of Payment upload (or transaction reference input).
     - Submitting creates order with unique tracking code (e.g. `FR-8291`) and opens instant WhatsApp order notification button.
   - **Live Order Tracker (`/track`)**:
     - Public search by Order Code (`FR-XXXX`).
     - Visual Timeline: Order Received -> Payment Confirmed -> In Kitchen (Prepping/Cooking) -> With Dispatch Rider -> Delivered.
     - No sensitive customer PII leaked publicly.

3. **Admin Management Portal (`/admin`)**:
   - Password/PIN protected or Firebase Auth login.
   - **Live Orders Kitchen Board**: Filter by New / Prepping / Out with Rider / Delivered. Shows customer name, items, delivery zone, delivery slot, proof of payment thumbnail, and single-click status progression.
   - **Menu & Tray Inventory**: Add new food item, toggle in/out of stock, change prices, update portion sizes.
   - **Kitchen Settings**: Toggle kitchen status ("Taking Orders" vs "Sold Out / Closed for the Day"), edit bank account details, and update announcement banner.

4. **Product Quality & Verification**:
   - Ensure all touch targets are at least 44x44px.
   - Seed delicious initial mock menu data (e.g., "Asun Fried Rice Party Tray", "Signature Seafood Boil Bag with Crabs, Jumbo Prawns, Corn & Potatoes", "Creamy Cajun Prawn Linguine", "Smoked Turkey Wings in Pepper Jam", "Crispy Catfish Bites").
   - Test build cleanly with `npm run build` so that all routes compile with zero TypeScript or JSX errors.
```

---

## 2. Folarin Fashion House

- **Target Folder**: `/Users/granjefe/GRAN_JEFE_PROJECTS/folarinfashion`
- **Industry**: Bespoke African Luxury Menswear, Agbada, Senator Sets, Kaftans & Corporate Native
- **Color Palette**: Royal Emerald (`#064E3B`), Rich Obsidian (`#0F172A`), Champagne Gold (`#D97706`), Off-White Silk (`#F8FAFC`)
- **Key Features**:
  - Interactive Measurement Guide & Multi-step Measurement Input Form
  - "Bring Your Own Fabric" vs "Select Premium Wool/Cashmere/Aso-Oke Fabric"
  - Ready-to-Wear catalog with instant checkout vs Bespoke Custom Tailoring Booking
  - Production Stage Tracker (Fabric Cutting -> Stitching & Embroidery -> Hand Finishing -> Pressing & Quality Audit -> Dispatched)
  - Admin Tailoring Queue & Measurement Card archive

### Master Prompt for `folarinfashion`

```markdown
You are building the full production-grade web storefront and bespoke tailoring management system for "Folarin Fashion House", an elite Nigerian luxury menswear and bespoke tailoring house specializing in modern Agbada, Kaftans, Senator suits, and ceremonial African attire.

Build this in the current directory (`/Users/granjefe/GRAN_JEFE_PROJECTS/folarinfashion`).

### Core Requirements & Stack
1. **Tech Stack**:
   - Next.js 16 (App Router, TypeScript)
   - Tailwind CSS for an authoritative, luxury editorial feel (Royal Emerald `#064E3B`, Obsidian `#0F172A`, Champagne Gold `#D97706`, Silk White `#F8FAFC`)
   - `lucide-react` icons
   - Firebase (Firestore, Auth, Storage) with a local demo fallback (mock catalog, mock tailoring bookings saved to `localStorage` when Firebase is not yet connected)
   - In `package.json`, set `"build": "next build --webpack"`

2. **Customer Storefront Features**:
   - **Editorial Hero**: Haute couture Nigerian craftsmanship, "Bespoke Sartorial Elegance", dual CTAs ("Explore Ready-to-Wear" and "Book Bespoke Fitting").
   - **Ready-to-Wear & Signature Collection**:
     - Categories: Grand Agbada Sets, Senator & Kaftan Sets, Casual Linen Tunics, Ceremonial Caps (Fila) & Accessories.
     - Product Detail: Fabric type (Cashmere, 7-Star Wool, Irish Linen, Hand-woven Aso-Oke), standard sizing (S, M, L, XL, XXL) with precise size charts in inches and centimeters.
     - Instant Cart & Checkout with Nigerian bank transfer.
   - **Bespoke Measurement Studio (`/bespoke`)**:
     - Visual step-by-step measurement guide (How to measure Neck, Chest, Shoulder, Sleeve Length, Bicep, Kaftan Length, Waist, Hip, Thigh, Trouser Length, Ankle).
     - Easy measurement form with unit toggle (Inches / CM) and option to save customer measurement profile.
     - Fabric selection: "Choose House Fabric" (with high-res swatch previews) or "I will provide my own fabric".
     - Embroidery pattern preferences: Minimalist, Geometric Traditional, or Hand-beaded Regal.
     - Desired Completion Date (Standard 10-14 days vs Express 4-day Rush).
   - **Client Garment Tracker (`/track`)**:
     - Public look-up by Tailoring Reference (e.g. `FFH-9104`).
     - 5-Stage Visual Progress: Measurement & Fabric Verified -> Pattern Drafting & Cutting -> Master Tailor Stitching & Embroidery -> Hand Pressing & Quality Audit -> Ready for Pickup / Dispatched with Courier.

3. **Admin & Master Tailor Portal (`/admin`)**:
   - **Tailoring Orders Dashboard**: View all pending bespoke commissions, download/view client measurement cards, assign deadlines, update garment production stages.
   - **Ready-to-Wear Inventory Manager**: Update stock levels, add seasonal designs, edit prices.
   - **Store & Account Settings**: Update bank transfer credentials, WhatsApp concierge hotline, and studio appointment hours.

4. **Product Quality & Verification**:
   - Touch targets >= 44x44px.
   - High-contrast, prestigious typography.
   - Clean compilation with `npm run build` passing with zero errors.
```

---

## 3. ppbakes

- **Target Folder**: `/Users/granjefe/GRAN_JEFE_PROJECTS/ppbakes`
- **Industry**: Luxury Celebration Cakes, Bento Cakes, Gourmet Cupcakes & Dessert Tables
- **Color Palette**: Warm Pastel Rose (`#F43F5E` / `#FFE4E6`), Soft Cream (`#FFFDF7`), Rich Cocoa (`#3E2723`), Gold Foil (`#EAB308`)
- **Key Features**:
  - Interactive Cake Customizer (Tiers, Sponge flavor, Filling, Frosting, Custom cake topper inscription)
  - Date availability calendar enforcing minimum 72-hour baking lead time
  - Bento Cake & Cupcake Box builder (Choose 4, 6, or 12 flavor assortment)
  - Direct Bank Transfer checkout with deposit (70% deposit vs 100% full payment toggle)
  - Admin Cake Calendar & Bakery production schedule

### Master Prompt for `ppbakes`

```markdown
You are building the full production web storefront and bakery order manager for "ppbakes", a high-end boutique bakery creating bespoke celebration cakes, bento cakes, gourmet cupcakes, and artisan desserts in Nigeria.

Build this in the current directory (`/Users/granjefe/GRAN_JEFE_PROJECTS/ppbakes`).

### Core Requirements & Stack
1. **Tech Stack**:
   - Next.js 16 (App Router, TypeScript)
   - Tailwind CSS with an inviting, sweet luxury aesthetic (Blush Rose `#FB7185`, Warm Vanilla Cream `#FFFDF7`, Cocoa Brown `#3E2723`, Golden Honey `#F59E0B`)
   - `lucide-react` icons
   - Firebase (Firestore, Auth, Storage) with automatic local demo fallback to `localStorage`
   - In `package.json`, set `"build": "next build --webpack"`

2. **Customer Storefront Features**:
   - **Hero Section**: Warm bakery storytelling, "Cakes Made For Your Most Cherished Milestones", "Order Custom Celebration Cakes or Daily Sweet Treats".
   - **Interactive Cake Builder (`/custom-cake`)**:
     - Step 1: Cake Occasion & Style (Birthday, Wedding, Anniversary, Kids Fantasy, Minimalist Bento).
     - Step 2: Size & Tiers (Single Tier 6-inch, Single Tier 8-inch, 2-Tier 6+8-inch, 3-Tier Grand).
     - Step 3: Sponge Flavor (Madagascar Vanilla Bean, Rich Belgian Chocolate, Red Velvet with Cream Cheese, Lotus Biscoff Crunch, Tangy Lemon Curd).
     - Step 4: Buttercream & Finish (Silk Swiss Meringue, Vintage Lambeth Piping, Modern Floral Watercolor, Metallic Gold Leaf).
     - Step 5: Custom Message on Cake / Acrylic Cake Topper text (e.g., "Happy 30th Birthday Michelle!").
     - Dynamic price calculation based on selections.
   - **Ready-to-Order Catalog**:
     - Bento Cakes (Same-day & 24h pickup options).
     - Box of 6 / Box of 12 Gourmet Cupcakes with mixed flavor picker.
     - Brownie Bites & Dessert Party Trays.
   - **Bakery Calendar & Event Date Picker**:
     - Enforces a minimum 3-day lead time for celebration cakes (with warning: "Please allow 72 hours for custom artistic baking").
     - Time slot selection (Morning Pickup 10am-1pm, Afternoon Delivery 2pm-5pm).
   - **Checkout & Deposit Options (`/checkout`)**:
     - Delivery Address vs Bakery Studio Pickup.
     - Payment Option: 100% Full Payment OR 70% Production Deposit (with remaining 30% due on delivery).
     - Bank transfer details with one-click copy and receipt upload.
   - **Cake Order Status Tracker (`/track`)**:
     - Order Code look-up (`PPB-XXXX`).
     - Progress: Order Confirmed -> Baking Sponges -> Assembling & Chilling -> Piping & Decorating -> Packed in Cake Box -> Out for Delivery.

3. **Admin Bakery Portal (`/admin`)**:
   - **Bakery Schedule Calendar**: Visual day-by-day cake dispatch list showing which cakes must be baked and decorated for each date.
   - **Order Card Details**: View custom topper text, customer allergies, selected flavors, deposit status, and receipt screenshot.
   - **Menu & Flavor Toggles**: Easily mark specific flavors or seasonal dates as "Fully Booked".
   - **Store Settings**: Update bank details and bakery operating hours.

4. **Product Quality & Verification**:
   - Touch targets >= 44x44px.
   - Delightful empty states and clear validation.
   - Build cleanly with `npm run build` with zero errors.
```

---

## 4. Royal Apparel

- **Target Folder**: `/Users/granjefe/GRAN_JEFE_PROJECTS/royalapparel`
- **Industry**: Contemporary Urban Streetwear, Graphic Tees, Hoodies, Caps & Athleisure
- **Color Palette**: Pitch Black (`#0A0A0A`), Electric Indigo (`#6366F1`), Off-White (`#FAFAFA`), Neon Cyber Yellow (`#EAB308`)
- **Key Features**:
  - Multi-variant product catalog (Size: S, M, L, XL, XXL; Colors: Onyx Black, Heather Grey, Vintage Cream, Cobalt Blue)
  - Live stock counter ("Only 3 left in Size L!")
  - Interactive Size Recommendation Guide
  - Quick-add cart drawer with instant subtotal and coupon code field
  - Bank transfer checkout + Paystack ready architecture
  - Admin Inventory Matrix (manage stock per size/color variant)

### Master Prompt for `royalapparel`

```markdown
You are building the full production web storefront and inventory management portal for "Royal Apparel", a trending Nigerian streetwear and modern urban fashion brand known for premium oversized graphic tees, heavyweight fleece hoodies, trucker caps, and athleisure.

Build this in the current directory (`/Users/granjefe/GRAN_JEFE_PROJECTS/royalapparel`).

### Core Requirements & Stack
1. **Tech Stack**:
   - Next.js 16 (App Router, TypeScript)
   - Tailwind CSS for an edgy, high-energy streetwear aesthetic (Pitch Black `#0A0A0A`, Electric Violet/Indigo `#6366F1`, Crisp Stark White `#FAFAFA`, Steel Grey `#262626`)
   - `lucide-react` icons
   - Firebase (Firestore, Auth, Storage) with complete local demo fallback (`localStorage` + mock drops)
   - In `package.json`, set `"build": "next build --webpack"`

2. **Customer Storefront Features**:
   - **Hero Drop Section**: High-impact editorial streetwear banners, "Drop 04 Now Live — Limited Run", countdown timer or limited-quantity scarcity tags.
   - **Product Catalog & Drops**:
     - Filters: All Drops, Oversized Tees, Heavyweight Hoodies, Cargo Pants & Sweats, Headwear & Accessories.
     - Product Cards: Hover secondary image preview, stock pill ("In Stock", "Few Left", "Sold Out"), price in ₦.
   - **Product Detail Page / Modal**:
     - Color swatch selector with instant image switching.
     - Size buttons (S, M, L, XL, XXL) with out-of-stock strike-throughs.
     - "Find Your Fit" Size Guide popup modal (chest and length measurements in inches).
     - Fabric breakdown badge (e.g. "300 GSM 100% Organic Cotton").
   - **Slide-out Bag / Cart**:
     - Live item summary with chosen size and color variant.
     - Promo / Discount Code input field (e.g. `ROYAL10` for 10% off).
     - Nationwide delivery selector (Lagos Express: ₦2,500, Abuja/PH Express: ₦4,500, Other States: ₦5,500).
   - **Checkout (`/checkout`)**:
     - Customer information, shipping address, WhatsApp phone number.
     - Nigerian Bank Transfer (Bank Name, Account Number, Account Name with copy button).
     - Payment receipt screenshot upload.
     - Instant order confirmation with tracking ID (`RYL-XXXX`).
   - **Tracking Screen (`/track`)**:
     - Track by `RYL-XXXX`.
     - Timeline: Order Placed -> Payment Verified -> Packed in Royal Dust Bag -> Picked Up by Courier -> Delivered.

3. **Admin Management Portal (`/admin`)**:
   - **Inventory Matrix**: Update stock quantity per individual size and color variant. Auto-tag as "Sold Out" when count reaches 0.
   - **Orders Pipeline**: View orders, customer shipping details, view uploaded payment receipt, approve payment, update shipping status, add courier tracking number (e.g., GIG Logistics, DHL, Speedaf).
   - **Promo Code Manager**: Create discount codes with percentage or fixed discount.

4. **Product Quality & Verification**:
   - 44x44px minimum tap targets.
   - Fast, fluid micro-interactions and zero layout shifts.
   - Verified with `npm run build` passing with zero errors.
```

---

## 5. Hafsy Couture / Scents

- **Target Folder**: `/Users/granjefe/GRAN_JEFE_PROJECTS/hafsycouture`
- **Industry**: Luxury Fragrances, Arabian Oud, Niche Perfume Decants & Curated Scent Boxes
- **Color Palette**: Deep Midnight Plum (`#2A0845`), Burnished Gold (`#D4AF37`), Velvety Rose Gold (`#E0A99E`), Silk Pearl (`#FAF5F0`)
- **Key Features**:
  - Olfactory Pyramid breakdown for every fragrance (Top Notes, Heart Notes, Base Notes)
  - Scent Profile Tags (Woody, Oriental Oud, Floral, Gourmand, Fresh Citrus, Spicy)
  - Bottle Size / Decant selector (3ml Travel Decant, 10ml Purse Spray, 50ml Full Bottle, 100ml Extrait)
  - "Build Your Own Discovery Box" (Choose any 4 sample decants for a flat promotional price)
  - Admin Fragrance Inventory & Decant Stock manager

### Master Prompt for `hafsycouture`

```markdown
You are building the full production-grade web storefront and inventory management system for "Hafsy Couture / Hafsy Scents", an opulent Nigerian fragrance atelier specializing in authentic Arabian ouds, niche designer perfumes, concentrated perfume oils, decants, and personalized luxury scent gift sets.

Build this in the current directory (`/Users/granjefe/GRAN_JEFE_PROJECTS/hafsycouture`).

### Core Requirements & Stack
1. **Tech Stack**:
   - Next.js 16 (App Router, TypeScript)
   - Tailwind CSS for an opulent luxury aesthetic (Midnight Plum `#2A0845`, Burnished Arabic Gold `#D4AF37`, Rose Gold `#E0A99E`, Pearl White `#FAF5F0`)
   - `lucide-react` icons
   - Firebase (Firestore, Auth, Storage) with complete local demo fallback (`localStorage` + mock catalog)
   - In `package.json`, set `"build": "next build --webpack"`

2. **Customer Storefront Features**:
   - **Hero Section**: Opulent perfume storytelling, "Leave an Unforgettable Trail", "Artisanal Ouds, Niche Extraits & Curated Decants".
   - **Fragrance Explorer**:
     - Filter by Scent Family: All, Pure Arabian Oud, Warm Gourmand & Vanilla, Fresh & Aquatic, Smoky Leather & Woods, Romantic Floral.
     - Filter by Gender: Unisex, For Him, For Her.
     - Product Cards: Fragrance concentration badge ("Eau de Parfum", "Extrait de Parfum 35%", "Pure Attar Oil"), Longevity rating (e.g., "12+ Hours"), Sillage indicator ("Intense").
   - **Interactive Fragrance Detail Modal**:
     - Visual Olfactory Pyramid:
       - Top Notes (e.g. Saffron, Bergamot, Pink Pepper)
       - Heart Notes (e.g. Bulgarian Rose, Oud Wood, Ambergris)
       - Base Notes (e.g. Madagascar Vanilla, Tonka Bean, White Musk)
     - Size & Decant Selector:
       - 3ml Pocket Decant (₦4,500)
       - 10ml Deluxe Atomizer (₦12,000)
       - 50ml Full Bottle (₦45,000)
       - 100ml Master Edition (₦80,000)
   - **"Build Your Discovery Box" Feature (`/discovery-box`)**:
     - Customers can select any 4 or 6 fragrance sample vials (5ml each) into a luxury branded presentation box at a bundled discounted price (e.g. 4 for ₦20,000).
   - **Cart & Direct Bank Transfer Checkout (`/checkout`)**:
     - Gift Wrapping & Personalized Wax-Sealed Note option.
     - Bank details display with one-click copy and receipt upload.
     - Tracking ID generation (`HAF-XXXX`).
   - **Order Tracking (`/track`)**:
     - Look up `HAF-XXXX`.
     - Timeline: Order Logged -> Scent Verification -> Hand-Poured & Boxed -> Sealed with Ribbon -> Dispatched.

3. **Admin Atelier Portal (`/admin`)**:
   - **Fragrance Catalog Manager**: Add/edit perfumes, manage notes pyramid, bottle sizes, and stock counts.
   - **Orders & Gift Orders Console**: View customer details, gift card notes, uploaded payment receipt, and update dispatch status.
   - **Atelier Settings**: Update bank account information and promotional announcement bar.

4. **Product Quality & Verification**:
   - 44x44px minimum tap targets.
   - High contrast, WCAG AA compliance.
   - Build cleanly with `npm run build` with zero errors.
```

---

## 6. Gadget Vault / Electronics Brand

- **Target Folder**: `/Users/granjefe/GRAN_JEFE_PROJECTS/gadgetvault`
- **Industry**: Consumer Electronics, Smart Gadgets, Laptops, Phones & Accessories
- **Color Palette**: Cyber Dark Slate (`#0F172A`), Electric Neon Cyan (`#06B6D4`), Silver Mesh (`#E2E8F0`), Emerald Success (`#10B981`)
- **Key Features**:
  - Detailed Tech Specs Comparison (RAM, Processor, Storage, Battery Health / Capacity)
  - Condition badges ("Brand New Sealed", "Certified Pre-Owned Grade A+", "Open Box")
  - Serial Number & Warranty Verification Lookup Tool (`/warranty`)
  - Express Same-Day Lagos Delivery vs 48-Hour Nationwide Delivery
  - Admin Inventory & IMEI/Serial tracker

### Master Prompt for `gadgetvault`

```markdown
You are building the full production web storefront, warranty tracking system, and inventory manager for "Gadget Vault", an authorized retailer of smart electronics, laptops, flagship smartphones, gaming accessories, and audio gear in Nigeria.

Build this in the current directory (`/Users/granjefe/GRAN_JEFE_PROJECTS/gadgetvault`).

### Core Requirements & Stack
1. **Tech Stack**:
   - Next.js 16 (App Router, TypeScript)
   - Tailwind CSS for a high-tech, precision engineering feel (Dark Slate `#0F172A`, Cyber Cyan `#06B6D4`, Titanium Silver `#94A3B8`, Pure White `#FFFFFF`)
   - `lucide-react` icons
   - Firebase (Firestore, Auth, Storage) with automatic local demo fallback (`localStorage` + mock inventory)
   - In `package.json`, set `"build": "next build --webpack"`

2. **Customer Storefront Features**:
   - **Hero Section**: High-tech gadget showroom, "100% Genuine Tech with Guaranteed Warranty", "Shop Flagships, Laptops & Smart Audio".
   - **Electronics Catalog**:
     - Categories: Flagship Phones, Laptops & Workstations, Smartwatches & Wearables, Audio & Soundbars, Fast Chargers & Power Banks.
     - Product Cards: Condition tag ("Brand New Sealed", "Grade A+ Refurbished"), Key specs preview (e.g., "M3 Chip • 16GB RAM • 512GB SSD"), Battery health rating (for pre-owned items), Price in ₦.
   - **Interactive Technical Specs Modal**:
     - Complete technical specifications grid (Processor, Display, Storage, Battery Life, Ports, OS version, Box contents).
     - Storage variant buttons (128GB, 256GB, 512GB, 1TB) with dynamic price adjustment.
     - Warranty badge (e.g. "Includes 12-Month Gadget Vault Warranty + 7-Day Replacement Guarantee").
   - **Serial / Warranty Lookup Engine (`/warranty`)**:
     - Customer can input their device Serial / IMEI or Order Code.
     - Displays active warranty status, coverage start date, expiry date, and claim procedure.
   - **Cart & Fast Checkout (`/checkout`)**:
     - Nationwide delivery options: Same-Day Express Lagos (₦3,500), Next-Day Abuja/PH (₦5,000), Standard Interstate (₦4,000).
     - Direct Nigerian Bank Transfer payment details with one-click copy and receipt upload.
     - Order Tracking ID generated (`GVT-XXXX`).
   - **Public Delivery Tracker (`/track`)**:
     - Timeline: Order Placed -> Payment Verified -> IMEI Logged & Inspected -> Packed in Anti-Shock Case -> Handed to Courier -> Delivered.

3. **Admin Electronics Portal (`/admin`)**:
   - **Inventory & Serial Manager**: Add device listings, specify technical specs, record IMEI/Serial numbers, and manage stock counts.
   - **Orders Console**: Inspect payment receipts, verify transfers, assign courier waybill number, and issue warranty certificates.
   - **Store Settings**: Configure payment bank details and contact numbers.

4. **Product Quality & Verification**:
   - 44x44px minimum tap targets.
   - High data density with clean, readable monospace typography for specifications.
   - Build cleanly with `npm run build` with zero errors.
```

---

## 7. Gran Academy / School Portal (Mr. Bello)

- **Target Folder**: `/Users/granjefe/GRAN_JEFE_PROJECTS/bello-academy`
- **Industry**: Private Nursery, Primary & Secondary School
- **Color Palette**: Academic Royal Navy (`#1E3A8A`), Gold Crest (`#D97706`), Warm Academic Cream (`#FDFBF7`), Slate Grey (`#334155`)
- **Key Features**:
  - Full School Public Website (About, Vision & Mission, History, Principal's Welcome, Facilities)
  - Dynamic School Gallery & Campus Life photo wall
  - Online Admissions Portal & Student Application Form
  - Public School News, Term Calendar & Examination Updates
  - Student & Parent Result Checker Portal (`/results`) with Student ID + Scratchcard/PIN validation
  - Admin Portal for publishing announcements, uploading gallery photos, and updating student academic records

### Master Prompt for `bello-academy`

```markdown
You are building the full production web portal for a prestigious Nigerian private institution: "Grand Academy (Nursery, Primary & Secondary School)", owned and directed by Mr. Bello.

Build this in the current directory (`/Users/granjefe/GRAN_JEFE_PROJECTS/bello-academy`).

### Core Requirements & Stack
1. **Tech Stack**:
   - Next.js 16 (App Router, TypeScript)
   - Tailwind CSS for an authoritative, dignified academic presence (Academic Royal Navy `#1E3A8A`, Regal Gold Crest `#D97706`, Warm Parchment Cream `#FDFBF7`, Slate Grey `#334155`)
   - `lucide-react` icons
   - Firebase (Firestore, Auth, Storage) with complete local demo fallback (`localStorage` + mock student results and announcements)
   - In `package.json`, set `"build": "next build --webpack"`

2. **Public School Portal Features**:
   - **School Header & Hero**:
     - Institution crest, motto: "Excellence, Character & Wisdom", accredited by Ministry of Education & WAEC/NECO/BECE boards.
     - Quick action buttons: "Online Admission", "Check Term Results", "School Calendar".
   - **School Profile & Foundations**:
     - Vision, Mission, and Core Values.
     - Principal / Proprietor's Welcome Note (photo placeholder, inspiring academic leadership message).
     - School History & Milestones since establishment.
     - Educational Sections: Early Years / Crèche, Primary School, Junior Secondary (JSS 1-3), Senior Secondary (SSS 1-3 Science, Arts & Commercial).
   - **Campus Life & Dynamic Gallery (`/gallery`)**:
     - Categorized photo galleries: Science Labs, ICT Suite, Sports & Inter-House Athletics, Cultural Day Celebrations, Graduation & Prize Giving Ceremonies.
     - Lightbox image viewer modal.
   - **Online Admissions Hub (`/admissions`)**:
     - Admission guidelines, entrance exam dates, required documents checklist (birth certificate, previous term report cards, passport photos).
     - Interactive Online Admission Application Form:
       - Child information (Full name, DOB, intended grade/class, gender).
       - Parent / Guardian contacts (Phone, WhatsApp, Email, Home address, Occupation).
       - Medical & emergency information.
       - Submitting generates an Application Confirmation Slip with unique Registration Number (e.g. `GA-ADM-2026-084`).
   - **School News & Examination Updates (`/news`)**:
     - Important circulars: Resumption dates, Mid-term break schedules, Continuous Assessment (CA) tests timetable, WAEC/NECO registration deadlines, PTA meeting announcements.
   - **Online Student Result Checker (`/results`)**:
     - Secure Student Result Portal:
       - Input fields: Student Registration Number (e.g. `GA/2024/0142`), Academic Session (e.g. `2025/2026`), Term (First / Second / Third Term), and Security PIN / Scratchcard code.
     - Report Card View:
       - School header, student photo, class, position in class, total marks, percentage, attendance record.
       - Subject Grade Table (1st CA /20, 2nd CA /20, Exam /60, Total /100, Grade A/B/C/D/E/F, Teacher Remark).
       - Form Master's & Principal's stamped signature comment.
       - One-click "Print / Save PDF Report Sheet" button formatted for clean single-page printing.

3. **Admin School Portal (`/admin`)**:
   - Protected login for School Administration and Examination Officers.
   - **Admissions Management**: View submitted online student applications, download applicant list, update application status (Pending Review -> Exam Scheduled -> Admitted).
   - **News & Circular Publisher**: Create and publish new announcements and exam schedules.
   - **Gallery Manager**: Upload new event photos with captions and category tags.
   - **Student Academic Records**: Enter or upload student grades per subject, update remarks, and generate report cards.
   - **Settings**: Update school contact numbers, tuition bank account details, and term resumption dates.

4. **Product Quality & Verification**:
   - 44x44px minimum tap targets.
   - Print-friendly stylesheets (`@media print`) for the student report card.
   - Zero layout shifts, high contrast WCAG AA readability.
   - Build cleanly with `npm run build` with zero errors.
```

---

## How to Execute Any Build

When you are ready to build any of the above:
1. Open a terminal in `/Users/granjefe/GRAN_JEFE_PROJECTS/`
2. Run:
   ```bash
   mkdir <folder-name>
   cd <folder-name>
   ```
3. Launch your Antigravity or AI agent session in that directory.
4. Paste the entire master prompt block for that client.
5. The agent will scaffold the complete repository, install dependencies, wire the UI components, implement the local demo data fallback, author the admin and tracking systems, and run `npm run build` to verify clean compilation.
