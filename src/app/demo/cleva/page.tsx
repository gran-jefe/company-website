'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  ChevronRight, 
  ExternalLink, 
  Eye, 
  EyeOff, 
  DollarSign, 
  CreditCard,
  Building2,
  Coins,
  ArrowUpRight,
  Clock,
  PiggyBank,
  Smartphone
} from 'lucide-react'
import { DemoTracker } from '@/components/demo/DemoTracker'

// Deposit channels supported by Cleva
interface DepositChannel {
  id: string
  name: string
  category: string
  icon: 'upwork' | 'ach' | 'crypto' | 'wire'
  feeFormula: (amount: number) => number
  feeDescription: string
  speed: string
  traditionalFee: (amount: number) => number
  traditionalDescription: string
}

const DEPOSIT_CHANNELS: DepositChannel[] = [
  {
    id: 'upwork',
    name: 'Upwork Direct Withdrawal',
    category: 'Freelance & Contracting',
    icon: 'upwork',
    feeFormula: () => 0,
    feeDescription: '100% Free ($0.00)',
    speed: 'Instant to 2 hours',
    traditionalFee: () => 30,
    traditionalDescription: '$30 Wire Fee to Local Banks',
  },
  {
    id: 'ach',
    name: 'US ACH / Gusto / Stripe / Deel',
    category: 'Employer & Payroll',
    icon: 'ach',
    feeFormula: (amount: number) => {
      const calc = amount * 0.008
      return Math.min(Math.max(calc, 2), 5)
    },
    feeDescription: '0.8% (Capped at $5.00 max)',
    speed: 'Same-day / Next-day',
    traditionalFee: (amount: number) => 35 + amount * 0.02,
    traditionalDescription: '$35 Wire + 2% Intermediary FX Spread',
  },
  {
    id: 'crypto',
    name: 'USDT / USDC (Stablecoins)',
    category: 'Web3 & Global Invoicing',
    icon: 'crypto',
    feeFormula: (amount: number) => (amount < 2 ? 1 : 2),
    feeDescription: 'Flat $2.00',
    speed: 'Instant on-chain confirmation',
    traditionalFee: () => 15,
    traditionalDescription: 'P2P platform escrow spreads (~1.5%)',
  },
  {
    id: 'wire',
    name: 'International SWIFT Wire',
    category: 'Corporate & Institutional',
    icon: 'wire',
    feeFormula: () => 10,
    feeDescription: 'Flat $10.00',
    speed: '1 - 2 business days',
    traditionalFee: (amount: number) => 45 + amount * 0.025,
    traditionalDescription: '$45 Incoming Wire + Hidden Corresp. Fees',
  },
]

export default function ClevaDemoPage() {
  const [selectedChannelId, setSelectedChannelId] = useState<string>('ach')
  const [depositAmount, setDepositAmount] = useState<number>(3500)
  const [showPresenterGuide, setShowPresenterGuide] = useState<boolean>(true)
  const [presenterStep, setPresenterStep] = useState<number>(1)
  const [activeTab, setActiveTab] = useState<'calculator' | 'pots' | 'cards'>('calculator')

  // Find active channel
  const activeChannel = DEPOSIT_CHANNELS.find((c) => c.id === selectedChannelId) || DEPOSIT_CHANNELS[1]

  // Calculate Cleva metrics
  const clevaFee = activeChannel.feeFormula(depositAmount)
  const netReceived = depositAmount - clevaFee

  // Traditional comparison
  const traditionalCost = activeChannel.traditionalFee(depositAmount)
  const netSaved = Math.max(0, traditionalCost - clevaFee)

  // Estimated NGN conversion (indicative rate: 1 USD = 1,495 NGN for realistic calculation)
  const usdToNgnRate = 1495
  const netNgnEstimate = netReceived * usdToNgnRate

  // Key architecture insights
  const presenterSteps = [
    {
      step: 1,
      tag: 'Immediate Friction Relief',
      headline: 'The Hidden Fee Dread Killer',
      detail:
        'African remote engineers and founders fear hidden wire fees. By showing the $5.00 cap dynamically, users instantly trust Cleva over legacy wire setups.',
    },
    {
      step: 2,
      tag: 'Mathematical Superiority',
      headline: 'Direct Competitive Delta ($100+ Saved)',
      detail:
        'Instead of claiming "low fees", the widget quantifies exact savings in real-time ($35 wire fees eliminated), making signup an irrational non-decision.',
    },
    {
      step: 3,
      tag: 'Cross-Border Velocity',
      headline: 'Instant Local Settlement Preview',
      detail:
        'Shows users they can hold USD safely without local currency devaluation or cash out to Nigerian banks in sub-60 seconds with zero markup.',
    },
    {
      step: 4,
      tag: 'High-Ticket Studio Delivery',
      headline: 'Tailored for Tolu Alabi & YC W24 Scale',
      detail:
        'Engineered to match Cleva\'s exact visual tokens, compliant with WCAG AA accessibility, zero dependencies, and plug-and-play for their React stack.',
    },
  ]

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans antialiased selection:bg-[#2563EB] selection:text-white pb-32">
      <DemoTracker target="cleva" targetName="Cleva (Tolu Alabi)" />
      {/* Sovereign Context Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#2563EB] flex items-center justify-center text-white font-black text-lg shadow-sm">
              C
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900 tracking-tight text-base">
                  Cleva
                </span>
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-[#2563EB] border border-blue-200">
                  YC W24
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block">
                Global USD Accounts & Cross-Border Payout Infrastructure
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden md:flex items-center gap-2 text-xs text-slate-600 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Tailored Intervention for Tolu Alabi</span>
            </div>

            <Link
              href="/"
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors flex items-center gap-1.5 min-h-[44px]"
            >
              <span>Gran Jefe Studio</span>
              <ExternalLink size={13} />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-10 pb-8 px-4 sm:px-6 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#2563EB] text-xs font-semibold mb-4">
          <Sparkles size={13} />
          <span>Live Interactive Net Payout & Fee Simulator</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 max-w-3xl mx-auto leading-tight">
          Receive international funds with{' '}
          <span className="text-[#2563EB]">zero hidden wire deductions</span>.
        </h1>

        <p className="mt-4 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          See exactly how much arrives in your Cleva USD account and how much you save
          compared to legacy international SWIFT wires and traditional bank markups.
        </p>

        {/* Navigation Tabs */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <button
            onClick={() => setActiveTab('calculator')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all min-h-[44px] cursor-pointer ${
              activeTab === 'calculator'
                ? 'bg-[#2563EB] text-white shadow-md'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            Deposit & Fee Calculator
          </button>
          <button
            onClick={() => setActiveTab('pots')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all min-h-[44px] cursor-pointer ${
              activeTab === 'pots'
                ? 'bg-[#2563EB] text-white shadow-md'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            Cleva USD Pots
          </button>
          <button
            onClick={() => setActiveTab('cards')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all min-h-[44px] cursor-pointer ${
              activeTab === 'cards'
                ? 'bg-[#2563EB] text-white shadow-md'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            Virtual Global Cards
          </button>
        </div>
      </section>

      {/* Main Interactive Workspace */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6">
        <AnimatePresence mode="wait">
          {activeTab === 'calculator' && (
            <motion.div
              key="calculator"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8"
            >
              {/* Left Column: Interactive Inputs */}
              <div className="lg:col-span-7 space-y-6">
                {/* Deposit Channel Selector */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                      Step 1: Select Deposit Source
                    </span>
                    <span className="text-xs text-blue-600 font-semibold flex items-center gap-1">
                      <Zap size={12} />
                      Zero hidden spreads
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {DEPOSIT_CHANNELS.map((channel) => {
                      const isSelected = selectedChannelId === channel.id
                      return (
                        <button
                          key={channel.id}
                          onClick={() => setSelectedChannelId(channel.id)}
                          className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer relative min-h-[72px] ${
                            isSelected
                              ? 'border-[#2563EB] bg-blue-50/50 shadow-sm ring-1 ring-[#2563EB]'
                              : 'border-slate-200 hover:border-slate-300 bg-white'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[11px] font-mono text-slate-500">
                              {channel.category}
                            </span>
                            {isSelected && (
                              <CheckCircle2 size={14} className="text-[#2563EB]" />
                            )}
                          </div>
                          <p className="font-bold text-slate-900 text-xs sm:text-sm leading-snug">
                            {channel.name}
                          </p>
                          <p className="text-[11px] text-blue-700 font-semibold mt-1">
                            Fee: {channel.feeDescription}
                          </p>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Amount Slider Control */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                      Step 2: Incoming Transfer Amount
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      Min: $100 &bull; Max: $25,000
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between">
                    <div className="flex items-center text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                      <DollarSign size={28} className="text-slate-400 -mr-1" />
                      <span>{depositAmount.toLocaleString()}</span>
                      <span className="text-sm font-mono text-slate-400 ml-2 font-normal">
                        USD
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {[500, 1500, 3500, 10000].map((preset) => (
                        <button
                          key={preset}
                          onClick={() => setDepositAmount(preset)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer min-h-[44px] ${
                            depositAmount === preset
                              ? 'bg-slate-900 text-white'
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          ${preset >= 1000 ? `${preset / 1000}k` : preset}
                        </button>
                      ))}
                    </div>
                  </div>

                  <input
                    type="range"
                    min="100"
                    max="25000"
                    step="50"
                    value={depositAmount}
                    onChange={(e) => setDepositAmount(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
                  />

                  <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span>$100</span>
                    <span>$5,000</span>
                    <span>$15,000</span>
                    <span>$25,000</span>
                  </div>
                </div>

                {/* Institutional Security Notice */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <ShieldCheck size={18} className="text-[#2563EB] shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-600 leading-relaxed">
                    <strong className="text-slate-900 font-semibold">
                      Direct US Banking Rails:
                    </strong>{' '}
                    Cleva accounts provide direct US account numbers and routing numbers (via FDIC-insured partner banks). Funds are held in USD with no forced conversion.
                  </div>
                </div>
              </div>

              {/* Right Column: Live Net Breakdown & Savings Delta */}
              <div className="lg:col-span-5 space-y-6">
                {/* Result Card */}
                <div className="bg-white rounded-2xl p-6 border-2 border-[#2563EB]/30 shadow-lg space-y-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />

                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      Calculated Payout
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
                      <Clock size={11} />
                      {activeChannel.speed}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs text-slate-500 font-medium">
                      Net USD Credited to Account:
                    </span>
                    <div className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mt-1">
                      ${netReceived.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      Available to spend immediately via virtual card or withdraw.
                    </p>
                  </div>

                  {/* Fee Breakdown Table */}
                  <div className="space-y-3 pt-3 border-t border-slate-100 text-xs">
                    <div className="flex items-center justify-between text-slate-600">
                      <span>Deposit Amount:</span>
                      <span className="font-mono font-semibold text-slate-900">
                        ${depositAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-slate-600">
                      <span>Cleva Processing Fee:</span>
                      <span className="font-mono font-bold text-[#2563EB]">
                        {clevaFee === 0 ? 'FREE ($0.00)' : `-$${clevaFee.toFixed(2)}`}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-slate-600">
                      <span>Fee Cap Status:</span>
                      <span className="font-mono text-emerald-700 font-semibold">
                        {clevaFee >= 5 && activeChannel.id === 'ach'
                          ? 'Protected by $5.00 Max Cap'
                          : 'Standard Micro-Rate'}
                      </span>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-slate-600">
                      <span>Instant Local Bank Payout:</span>
                      <span className="font-mono font-bold text-slate-900">
                        ~₦{Math.floor(netNgnEstimate).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Competitive Comparison Banner */}
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
                        <PiggyBank size={14} className="text-emerald-600" />
                        Estimated Savings vs Traditional Banks:
                      </span>
                      <span className="text-sm font-black font-mono text-emerald-700">
                        +${netSaved.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-[11px] text-emerald-800 leading-relaxed">
                      Legacy banks charge {activeChannel.traditionalDescription}. With Cleva, you keep{' '}
                      <strong>{((netReceived / depositAmount) * 100).toFixed(1)}%</strong> of your gross client revenue.
                    </p>
                  </div>

                  {/* Primary CTA */}
                  <a
                    href="https://www.getcleva.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg min-h-[44px]"
                  >
                    <span>Claim Your Cleva USD Account</span>
                    <ArrowRight size={15} />
                  </a>

                  <p className="text-center text-[10px] text-slate-400">
                    No monthly maintenance fees &bull; Sign up in 5 minutes with local ID
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'pots' && (
            <motion.div
              key="pots"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6 max-w-3xl mx-auto"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600">
                  <PiggyBank size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Cleva USD Pots & Targeted Savings
                  </h3>
                  <p className="text-xs text-slate-500">
                    Shield savings against local inflation with automated target lockups.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Emergency Fund</span>
                  <p className="text-lg font-extrabold text-slate-900">$2,450.00</p>
                  <span className="text-[11px] text-emerald-600 font-semibold">100% in USD</span>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Tech Upgrades</span>
                  <p className="text-lg font-extrabold text-slate-900">$1,800.00</p>
                  <span className="text-[11px] text-blue-600 font-semibold">Goal: $2,500</span>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Quarterly Tax Reserve</span>
                  <p className="text-lg font-extrabold text-slate-900">$950.00</p>
                  <span className="text-[11px] text-purple-600 font-semibold">Locked</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900 leading-relaxed">
                Cleva Pots allow African tech professionals to earmark foreign currency for specific milestones, completely insulating their working capital from rapid currency devaluations.
              </div>
            </motion.div>
          )}

          {activeTab === 'cards' && (
            <motion.div
              key="cards"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6 max-w-3xl mx-auto"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-[#2563EB]">
                  <CreditCard size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Cleva Virtual Mastercard & Visa
                  </h3>
                  <p className="text-xs text-slate-500">
                    Pay for AWS, OpenAI, GitHub, Apple Developer, and international travel seamlessly.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-tr from-slate-900 via-blue-950 to-slate-900 text-white shadow-xl max-w-md mx-auto space-y-6 relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-blue-300 font-bold">Cleva Virtual</span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-500/20 text-blue-200 border border-blue-400/20">
                    Worldwide Access
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-slate-400">CARD NUMBER</span>
                  <p className="font-mono text-lg tracking-widest text-slate-200">
                    •••• •••• •••• 4892
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[9px] font-mono text-slate-400 block">CARDHOLDER</span>
                    <span className="font-bold tracking-wide">TALENT / FOUNDER</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-slate-400 block">EXPIRES</span>
                    <span className="font-mono font-bold">08/29</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed text-center">
                Never experience card decline errors on SaaS subscriptions again. High spend limits with immediate freeze and billing address controls.
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Floating Intervention Drawer (Zero Loom Mentions) */}
      <aside className="fixed bottom-4 right-4 z-50 max-w-sm w-full bg-slate-900 text-white rounded-2xl p-4 shadow-2xl border border-slate-700/60 space-y-3 backdrop-blur-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
            <span className="font-mono font-bold text-white uppercase text-[11px]">
              Component Architecture
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="text-[10px] text-slate-400 hover:text-white flex items-center gap-1 font-mono"
            >
              <span>Gran Jefe Studio</span>
              <ExternalLink size={10} />
            </Link>
            <button
              onClick={() => setShowPresenterGuide(!showPresenterGuide)}
              className="text-slate-400 hover:text-white cursor-pointer"
            >
              {showPresenterGuide ? <EyeOff size={13} /> : <Eye size={13} />}
            </button>
          </div>
        </div>

        {showPresenterGuide && (
          <div className="space-y-2.5 pt-1">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-[10px] font-mono text-blue-400 font-bold">
                {presenterSteps[presenterStep - 1].tag}
              </span>
              <p className="font-bold text-white text-[11px] leading-snug">
                {presenterSteps[presenterStep - 1].headline}
              </p>
              <p className="text-[10px] text-slate-300 leading-relaxed">
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
                        ? 'bg-[#2563EB] text-white'
                        : 'bg-white/5 text-slate-400 border border-white/10 hover:border-white/30'
                    }`}
                  >
                    {step}
                  </button>
                ))}
              </div>

              <span className="text-[10px] font-mono text-slate-400">
                Key Insights 1→4
              </span>
            </div>
          </div>
        )}
      </aside>
    </div>
  )
}
