'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  UtensilsCrossed, 
  Wine, 
  Users, 
  Check, 
  ExternalLink, 
  Eye, 
  EyeOff, 
  ChefHat, 
  HeartHandshake, 
  ShieldCheck, 
  TrendingDown, 
  PartyPopper, 
  Sparkle
} from 'lucide-react'

// Dining Occasions
interface Occasion {
  id: string
  name: string
  subtitle: string
  defaultGuests: number
  recommendedTier: string
}

const OCCASIONS: Occasion[] = [
  {
    id: 'dinner-party',
    name: 'Dinner Party & Birthday',
    subtitle: 'Relax with friends while a private chef handles the kitchen',
    defaultGuests: 8,
    recommendedTier: 'plated',
  },
  {
    id: 'intimate',
    name: 'Romantic & Date Night',
    subtitle: 'An unforgettable restaurant experience in your living room',
    defaultGuests: 2,
    recommendedTier: 'tasting',
  },
  {
    id: 'hen-weekend',
    name: 'Hen Do & Weekend Away',
    subtitle: 'Stress-free feast for the whole group in an Airbnb or cottage',
    defaultGuests: 12,
    recommendedTier: 'sharing',
  },
  {
    id: 'corporate',
    name: 'Corporate & Client Dining',
    subtitle: 'Impress VIP partners or reward high-performing teams',
    defaultGuests: 14,
    recommendedTier: 'plated',
  },
]

// Menu Tiers
interface MenuTier {
  id: string
  name: string
  description: string
  courses: number
  pricePerHead: number
  highlight: string
  sampleDishes: string[]
}

const MENU_TIERS: MenuTier[] = [
  {
    id: 'sharing',
    name: 'Bistro Sharing Feast',
    description: 'Abundant Mediterranean or Asian sharing platters served family-style at the center of the table.',
    courses: 2,
    pricePerHead: 38,
    highlight: 'Best Value for Groups',
    sampleDishes: ['Slow-cooked Crispy Pork Belly', 'Burrata with Heirloom Tomatoes', 'Tiramisu Platters'],
  },
  {
    id: 'plated',
    name: '3-Course Classic Plated',
    description: 'Individually plated restaurant-grade dining curated by vetted London and UK private chefs.',
    courses: 3,
    pricePerHead: 55,
    highlight: 'Most Popular',
    sampleDishes: ['Pan-seared King Scallops', '28-Day Dry Aged Beef Fillet', 'Dark Chocolate & Salted Caramel Fondant'],
  },
  {
    id: 'tasting',
    name: '5-Course Chef Tasting Menu',
    description: 'Michelin-trained chef culinary journey featuring canapés, amuse-bouche, and seasonal gastronomy.',
    courses: 5,
    pricePerHead: 85,
    highlight: 'Culinary Masterclass',
    sampleDishes: ['Truffle Arancini & Caviar', 'Dover Sole Meunière', 'Deconstructed Blackberry Tart'],
  },
]

export default function YhangryDemoPage() {
  const [selectedOccasionId, setSelectedOccasionId] = useState<string>('dinner-party')
  const [selectedTierId, setSelectedTierId] = useState<string>('plated')
  const [guests, setGuests] = useState<number>(8)
  const [showPresenterGuide, setShowPresenterGuide] = useState<boolean>(true)
  const [presenterStep, setPresenterStep] = useState<number>(1)

  // Find active selections
  const activeTier = MENU_TIERS.find((t) => t.id === selectedTierId) || MENU_TIERS[1]

  // Pricing calculations
  const totalChefPrice = guests * activeTier.pricePerHead
  const perHeadPrice = activeTier.pricePerHead

  // London restaurant dining comparison
  // Avg London fine dining: £65 food + £35 wine markup + £20 transport/service = ~£120/head
  const restaurantCostPerHead = 120
  const restaurantTotal = guests * restaurantCostPerHead
  // Savings from bringing own wine + no Uber/babysitter surge
  const totalSavings = Math.max(0, restaurantTotal - totalChefPrice)

  // Presenter insights
  const presenterSteps = [
    {
      step: 1,
      tag: 'Eliminate Booking Dread',
      headline: 'Demystifying the "Private Chef" Price Tag',
      detail:
        'First-time hosts assume private chefs cost thousands. By showing £38–£55 per head with an interactive slider, yhangry instantly becomes more affordable than eating out.',
    },
    {
      step: 2,
      tag: 'The Restaurant Comparison Engine',
      headline: 'The £600+ Party Savings Reveal',
      detail:
        'Comparing the chef cost against a London restaurant bill (expensive wine markup + taxis) turns private dining from an extravagant luxury into a financially smart decision.',
    },
    {
      step: 3,
      tag: 'Zero Friction Reassurance',
      headline: 'The 4-Pillar Inclusions Guarantee',
      detail:
        'Hosts worry about cleaning dishes or buying ingredients. Explicitly showing that the chef buys groceries, serves table-side, and scrubs the kitchen creates instant booking peace of mind.',
    },
    {
      step: 4,
      tag: 'Tailored for Siddhi & Heinin',
      headline: 'Plug-and-Play UK Consumer Tech UX',
      detail:
        'Engineered to match yhangry’s vibrant coral (#FF5A36) and warm charcoal tokens, fully responsive, zero heavy external packages, and 100% WCAG AA compliant.',
    },
  ]

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1917] font-sans antialiased selection:bg-[#FF5A36] selection:text-white pb-32">
      {/* Sovereign Context Header */}
      <header className="sticky top-0 z-50 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#FF5A36] flex items-center justify-center text-white font-black text-lg shadow-sm">
              y
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-stone-900 tracking-tight text-base">
                  yhangry
                </span>
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-orange-100 text-[#FF5A36] border border-orange-200">
                  London &bull; YC W22
                </span>
              </div>
              <p className="text-[11px] text-stone-500 hidden sm:block">
                The UK's Leading Private Chef & Event Catering Platform
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden md:flex items-center gap-2 text-xs text-stone-600 bg-white px-3 py-1.5 rounded-lg border border-stone-200 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#FF5A36] animate-pulse" />
              <span>Tailored Prototype for Siddhi Mittal</span>
            </div>

            <Link
              href="/"
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-stone-900 text-white hover:bg-stone-800 transition-colors flex items-center gap-1.5 min-h-[44px]"
            >
              <span>Gran Jefe Studio</span>
              <ExternalLink size={13} />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Header */}
      <section className="pt-10 pb-8 px-4 sm:px-6 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 text-[#FF5A36] text-xs font-semibold mb-4">
          <ChefHat size={14} />
          <span>Interactive Party Budget & Menu Estimator</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-stone-900 max-w-3xl mx-auto leading-tight">
          Private chef dining at home,{' '}
          <span className="text-[#FF5A36]">for less than a London restaurant</span>.
        </h1>

        <p className="mt-4 text-stone-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          See exactly how much a vetted private chef costs for your celebration, what is included, 
          and how much your party saves on wine markups and travel.
        </p>
      </section>

      {/* Interactive Main Layout */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Interactive Controls */}
          <div className="lg:col-span-7 space-y-6">
            {/* Occasion Selection */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-4">
              <span className="text-xs font-bold text-stone-400 uppercase tracking-wider font-mono">
                Step 1: What is the occasion?
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {OCCASIONS.map((occ) => {
                  const isSelected = selectedOccasionId === occ.id
                  return (
                    <button
                      key={occ.id}
                      onClick={() => {
                        setSelectedOccasionId(occ.id)
                        setGuests(occ.defaultGuests)
                        setSelectedTierId(occ.recommendedTier)
                      }}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer relative min-h-[72px] ${
                        isSelected
                          ? 'border-[#FF5A36] bg-orange-50/50 shadow-sm ring-1 ring-[#FF5A36]'
                          : 'border-stone-200 hover:border-stone-300 bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-xs sm:text-sm text-stone-900">
                          {occ.name}
                        </span>
                        {isSelected && (
                          <CheckCircle2 size={15} className="text-[#FF5A36]" />
                        )}
                      </div>
                      <p className="text-[11px] text-stone-500 leading-snug">
                        {occ.subtitle}
                      </p>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Menu Tier Selection */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-4">
              <span className="text-xs font-bold text-stone-400 uppercase tracking-wider font-mono">
                Step 2: Choose Dining Style
              </span>

              <div className="space-y-3">
                {MENU_TIERS.map((tier) => {
                  const isSelected = selectedTierId === tier.id
                  return (
                    <button
                      key={tier.id}
                      onClick={() => setSelectedTierId(tier.id)}
                      className={`w-full p-4 rounded-xl border text-left transition-all cursor-pointer relative min-h-[80px] ${
                        isSelected
                          ? 'border-[#FF5A36] bg-orange-50/40 shadow-sm ring-1 ring-[#FF5A36]'
                          : 'border-stone-200 hover:border-stone-300 bg-white'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-stone-900 text-sm">
                              {tier.name}
                            </span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-stone-100 text-stone-700 font-semibold">
                              {tier.courses} Courses
                            </span>
                            {tier.highlight && (
                              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-orange-100 text-[#FF5A36]">
                                {tier.highlight}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                            {tier.description}
                          </p>
                        </div>

                        <div className="text-right shrink-0 ml-3">
                          <span className="text-lg font-extrabold text-stone-900">
                            £{tier.pricePerHead}
                          </span>
                          <span className="text-[11px] text-stone-400 block font-mono">
                            / person
                          </span>
                        </div>
                      </div>

                      {/* Sample Dishes */}
                      <div className="mt-2.5 pt-2 border-t border-stone-100 flex flex-wrap gap-1.5">
                        {tier.sampleDishes.map((dish, i) => (
                          <span
                            key={i}
                            className="text-[10px] px-2 py-0.5 rounded bg-stone-100 text-stone-600 font-medium"
                          >
                            &bull; {dish}
                          </span>
                        ))}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Guest Count Slider */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-stone-400 uppercase tracking-wider font-mono">
                  Step 3: Number of Guests
                </span>
                <span className="text-xs text-stone-500 font-mono">
                  2 to 30 Guests
                </span>
              </div>

              <div className="flex items-baseline justify-between">
                <div className="flex items-center gap-2">
                  <Users size={22} className="text-[#FF5A36]" />
                  <span className="text-3xl sm:text-4xl font-black text-stone-900">
                    {guests}
                  </span>
                  <span className="text-sm font-semibold text-stone-500">
                    Dinner Guests
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  {[2, 6, 8, 12, 16].map((count) => (
                    <button
                      key={count}
                      onClick={() => setGuests(count)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer min-h-[44px] ${
                        guests === count
                          ? 'bg-stone-900 text-white'
                          : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                      }`}
                    >
                      {count}
                    </button>
                  ))}
                </div>
              </div>

              <input
                type="range"
                min="2"
                max="30"
                step="1"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#FF5A36]"
              />

              <div className="flex items-center justify-between text-[11px] text-stone-400 font-mono">
                <span>2 guests</span>
                <span>10 guests</span>
                <span>20 guests</span>
                <span>30 guests</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Price Breakdown & Guarantee */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 border-2 border-[#FF5A36]/30 shadow-lg space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-orange-500/5 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-stone-400">
                  Instant Estimate
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
                  <Check size={11} />
                  Includes Groceries & Clean-up
                </span>
              </div>

              <div>
                <span className="text-xs text-stone-500 font-medium">
                  Total for All {guests} Guests:
                </span>
                <div className="text-4xl sm:text-5xl font-black text-stone-900 tracking-tight mt-1">
                  £{totalChefPrice.toLocaleString()}
                </div>
                <p className="text-xs text-stone-500 mt-1 font-mono">
                  That is only <strong className="text-stone-900">£{perHeadPrice} / person</strong> for private dining.
                </p>
              </div>

              {/* Inclusions Checklist */}
              <div className="space-y-2.5 pt-3 border-t border-stone-100 text-xs">
                <div className="flex items-center gap-2 text-stone-700">
                  <CheckCircle2 size={15} className="text-[#FF5A36] shrink-0" />
                  <span>Chef buys 100% fresh, locally sourced groceries</span>
                </div>
                <div className="flex items-center gap-2 text-stone-700">
                  <CheckCircle2 size={15} className="text-[#FF5A36] shrink-0" />
                  <span>Chef cooks live in your home kitchen</span>
                </div>
                <div className="flex items-center gap-2 text-stone-700">
                  <CheckCircle2 size={15} className="text-[#FF5A36] shrink-0" />
                  <span>Full table service for all {activeTier.courses} courses</span>
                </div>
                <div className="flex items-center gap-2 text-stone-700">
                  <CheckCircle2 size={15} className="text-[#FF5A36] shrink-0" />
                  <span>Kitchen scrubbed, wiped, and left spotless</span>
                </div>
              </div>

              {/* London Restaurant Comparison Box */}
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
                    <TrendingDown size={14} className="text-emerald-600" />
                    Estimated Savings vs Restaurant:
                  </span>
                  <span className="text-sm font-black font-mono text-emerald-700">
                    +£{totalSavings.toLocaleString()}
                  </span>
                </div>
                <p className="text-[11px] text-emerald-800 leading-relaxed">
                  A high-end restaurant dinner for {guests} with wine markups (£35/bottle) and taxis easily costs <strong>£{restaurantTotal.toLocaleString()}</strong>.
                  With yhangry, you bring your own favorite wine and save <strong>£{totalSavings.toLocaleString()}</strong>.
                </p>
              </div>

              {/* Primary Call to Action */}
              <a
                href="https://yhangry.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-[#FF5A36] hover:bg-[#e04a28] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg min-h-[44px]"
              >
                <span>Find Chefs for This Event</span>
                <ArrowRight size={15} />
              </a>

              <p className="text-center text-[10px] text-stone-400">
                100% money-back guarantee &bull; 4.9/5 stars across 4,000+ UK events
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Intervention Drawer (Zero Loom Mentions) */}
      <aside className="fixed bottom-4 right-4 z-50 max-w-sm w-full bg-stone-900 text-white rounded-2xl p-4 shadow-2xl border border-stone-700/60 space-y-3 backdrop-blur-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF5A36] animate-ping" />
            <span className="font-mono font-bold text-white uppercase text-[11px]">
              Component Architecture
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="text-[10px] text-stone-400 hover:text-white flex items-center gap-1 font-mono"
            >
              <span>Gran Jefe Studio</span>
              <ExternalLink size={10} />
            </Link>
            <button
              onClick={() => setShowPresenterGuide(!showPresenterGuide)}
              className="text-stone-400 hover:text-white cursor-pointer"
            >
              {showPresenterGuide ? <EyeOff size={13} /> : <Eye size={13} />}
            </button>
          </div>
        </div>

        {showPresenterGuide && (
          <div className="space-y-2.5 pt-1">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-[10px] font-mono text-[#FF5A36] font-bold">
                {presenterSteps[presenterStep - 1].tag}
              </span>
              <p className="font-bold text-white text-[11px] leading-snug">
                {presenterSteps[presenterStep - 1].headline}
              </p>
              <p className="text-[10px] text-stone-300 leading-relaxed">
                {presenterSteps[presenterStep - 1].detail}
              </p>
            </div>

            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4].map((step) => (
                  <button
                    key={step}
                    onClick={() => setPresenterStep(step)}
                    className={`w-6 h-6 rounded-md text-[10px] font-mono font-bold transition-all cursor-pointer ${
                      presenterStep === step
                        ? 'bg-[#FF5A36] text-white'
                        : 'bg-white/5 text-stone-400 border border-white/10 hover:border-white/30'
                    }`}
                  >
                    {step}
                  </button>
                ))}
              </div>

              <span className="text-[10px] font-mono text-stone-400">
                Key Insights 1→4
              </span>
            </div>
          </div>
        )}
      </aside>
    </div>
  )
}
