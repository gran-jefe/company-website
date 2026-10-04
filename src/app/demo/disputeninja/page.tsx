'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ShieldCheck, 
  ArrowLeft, 
  Sparkles, 
  TrendingUp, 
  Lock, 
  CheckCircle2, 
  Zap, 
  ExternalLink,
  ChevronRight,
  Flame,
  Info
} from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

export default function DisputeNinjaDemoPage() {
  // Calculator State
  const [monthlyVolume, setMonthlyVolume] = useState<number>(150000)
  const [disputeRate, setDisputeRate] = useState<number>(0.7) // 0.7%
  const [activeStep, setActiveStep] = useState<number>(1)

  // Calculations
  const averageTicketSize = 120 // average chargeback transaction
  const estimatedDisputeVolume = (monthlyVolume * (disputeRate / 100))
  const estimatedDisputeCount = Math.max(1, Math.round(estimatedDisputeVolume / averageTicketSize))
  const stripeFeesAtRisk = estimatedDisputeCount * 15 // $15 per dispute
  const totalMonthlyLoss = estimatedDisputeVolume + stripeFeesAtRisk

  // DisputeNinja saves ~76% of disputes
  const winRate = 0.76
  const monthlyRecovered = Math.round(estimatedDisputeVolume * winRate)
  const annualRecovered = monthlyRecovered * 12
  const netDisputeRateAfterNinja = (disputeRate * (1 - winRate)).toFixed(2)

  // Guided Captions for Silent Loom Recording
  const captions = [
    {
      id: 1,
      tag: '01 / CONVERSION PROBLEM',
      headline: 'Merchants Buy on Math, Not Paragraphs',
      detail: 'Founders landing on disputeninja.ai have to read text to guess their dollar savings. Long text creates hesitation.',
    },
    {
      id: 2,
      tag: '02 / THE HIGH-LEVERAGE FIX',
      headline: 'Interactive Revenue Recovery Calculator',
      detail: 'Drag the volume slider below: founders immediately see $10,000+ in annual recovered cash in under 5 seconds.',
    },
    {
      id: 3,
      tag: '03 / STRIPE HEALTH GAUGE',
      headline: 'Keeping Accounts Safe Under the 0.75% Warning Line',
      detail: 'Visualizing that their net dispute ratio drops to safe green status eliminates Stripe account shutdown anxiety.',
    },
    {
      id: 4,
      tag: '04 / OAUTH TRUST CONSOLE',
      headline: 'Removing 3rd-Party Stripe Permission Fear',
      detail: 'Restricted Read-Only token badges and PCI-DSS compliance assure CTOs before they authorize the Stripe OAuth app.',
    },
  ]

  return (
    <div className="min-h-screen bg-[#FFF0E3] dark:bg-[#11070D] text-[#2E0E1D] dark:text-[#FFF0E3] selection:bg-brand-terra selection:text-white transition-colors duration-300 font-sans">
      {/* Top Prototype Navigation Bar */}
      <header className="sticky top-0 z-50 bg-[#FFF0E3]/95 dark:bg-[#11070D]/95 backdrop-blur-md border-b border-[#EAD3C4] dark:border-[#EAD3C4]/15">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-dm font-semibold text-[#5A3846] dark:text-[#E6D0C2] hover:text-brand-terra dark:hover:text-[#FF5528] py-1.5 px-2.5 rounded-lg bg-[#FAF0E6] dark:bg-[#1D0E17] border border-[#EAD3C4] dark:border-[#EAD3C4]/15"
            >
              <ArrowLeft size={13} />
              <span>Studio</span>
            </Link>
            <div className="h-4 w-px bg-[#EAD3C4] dark:bg-[#EAD3C4]/20 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-terra animate-pulse" />
              <span className="font-mono text-xs font-bold text-[#2E0E1D] dark:text-[#FFF0E3]">
                PROTOTYPE LAB
              </span>
              <span className="text-[11px] font-mono text-[#7A4A38] dark:text-[#B88E7D] hidden md:inline">
                // Prepared for Max Wu &amp; Bowen Xue (DisputeNinja)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-[#E1F5EE] text-[#0E6247] dark:bg-emerald-500/10 dark:text-emerald-400 border border-[#A7E3D0] dark:border-emerald-500/30">
              Interactive Teardown
            </span>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
        
        {/* Silent Loom Guide Banner */}
        <section className="p-4.5 sm:p-5 rounded-2xl bg-[#FAF0E6] dark:bg-[#1D0E17] border border-brand-terra/40 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-terra dark:text-[#FF5528] px-2 py-0.5 rounded-md bg-brand-terra/10 border border-brand-terra/20">
                  {captions[activeStep - 1].tag}
                </span>
                <span className="text-xs font-mono text-[#7A4A38] dark:text-[#B88E7D]">
                  Step {activeStep} of 4
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-syne font-bold text-[#2E0E1D] dark:text-[#FFF0E3]">
                {captions[activeStep - 1].headline}
              </h2>
              <p className="text-xs sm:text-sm font-dm text-[#5A3846] dark:text-[#E6D0C2]">
                {captions[activeStep - 1].detail}
              </p>
            </div>

            {/* Step Selector Pills */}
            <div className="flex items-center gap-1.5 shrink-0 self-start md:self-auto">
              {[1, 2, 3, 4].map((step) => (
                <button
                  key={step}
                  onClick={() => setActiveStep(step)}
                  className={`w-7 h-7 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                    activeStep === step
                      ? 'bg-brand-terra text-white shadow-xs'
                      : 'bg-[#FFF0E3] dark:bg-[#25121E] text-[#5A3846] dark:text-[#E6D0C2] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 hover:border-brand-terra'
                  }`}
                >
                  {step}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* DisputeNinja Native Live Simulation Container */}
        <div className="rounded-3xl border border-white/10 bg-[#120A0B] text-white shadow-2xl overflow-hidden font-sans">
          
          {/* DisputeNinja Mock Header */}
          <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#160E10]">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-[#9886FE] flex items-center justify-center text-[#120A0B] font-extrabold text-sm shadow-md shadow-[#9886FE]/30">
                🥷
              </div>
              <span className="font-bold text-sm tracking-tight text-white font-syne">
                DisputeNinja
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-[#9886FE] border border-[#9886FE]/30 hidden sm:inline">
                Stripe App Verified
              </span>
            </div>

            <div className="hidden md:flex items-center gap-6 text-xs text-zinc-400 font-medium">
              <span className="hover:text-white transition-colors cursor-pointer">AI Evidence</span>
              <span className="hover:text-white transition-colors cursor-pointer">Stripe Integration</span>
              <span className="hover:text-white transition-colors cursor-pointer">Pricing</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#9886FE] hover:bg-[#8672FE] text-[#120A0B] transition-all font-sans shadow-md shadow-[#9886FE]/20">
                Book a Demo
              </span>
            </div>
          </div>

          {/* DisputeNinja Hero Teaser */}
          <div className="p-6 sm:p-10 text-center space-y-3 bg-gradient-to-b from-[#160E10] to-[#120A0B]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#9886FE]/10 text-[#9886FE] border border-[#9886FE]/25">
              <Sparkles size={13} /> Stripe Revenue Recovery Engine
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white max-w-2xl mx-auto leading-tight">
              Stop losing revenue to chargebacks. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9886FE] via-[#C9FF85] to-[#7CE1FF]">
                Recover up to 78% automatically.
              </span>
            </h1>
            <p className="max-w-xl mx-auto text-xs sm:text-sm text-zinc-400">
              Calculate your exact monthly cash recovery, dispute fee savings, and Stripe account health score below:
            </p>
          </div>

          {/* The Live Interactive ROI Calculator Card (DisputeNinja Native) */}
          <div className="p-6 sm:p-10 space-y-8 bg-[#160E10]/70 border-t border-white/5">
            
            {/* Controls Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 pb-8 border-b border-white/10">
              
              {/* Control 1: Monthly Stripe Processing Volume */}
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <label className="font-semibold text-xs sm:text-sm text-zinc-300">
                    Monthly Stripe Processing Volume
                  </label>
                  <span className="font-mono font-bold text-lg sm:text-xl text-[#9886FE]">
                    ${monthlyVolume.toLocaleString()}
                  </span>
                </div>

                <input
                  type="range"
                  min={20000}
                  max={1000000}
                  step={10000}
                  value={monthlyVolume}
                  onChange={(e) => setMonthlyVolume(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#9886FE]"
                />

                {/* Quick Presets */}
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-[10px] font-mono text-zinc-500">Presets:</span>
                  {[50000, 150000, 350000, 750000].map((preset) => (
                    <button
                      key={preset}
                      onClick={() => setMonthlyVolume(preset)}
                      className={`px-2.5 py-0.5 rounded-md text-[10px] font-mono font-medium transition-colors cursor-pointer ${
                        monthlyVolume === preset
                          ? 'bg-[#9886FE] text-[#120A0B] font-bold'
                          : 'bg-white/5 text-zinc-400 hover:text-white border border-white/10'
                      }`}
                    >
                      ${preset >= 1000000 ? `${preset / 1000000}M` : `${preset / 1000}k`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Control 2: Current Dispute Ratio */}
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <label className="font-semibold text-xs sm:text-sm text-zinc-300">
                    Current Dispute Rate
                  </label>
                  <span className={`font-mono font-bold text-lg sm:text-xl ${
                    disputeRate >= 0.75 ? 'text-red-400' : 'text-[#FFD86F]'
                  }`}>
                    {disputeRate}%
                  </span>
                </div>

                <input
                  type="range"
                  min={0.2}
                  max={1.5}
                  step={0.05}
                  value={disputeRate}
                  onChange={(e) => setDisputeRate(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#9886FE]"
                />

                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span className="text-[#C9FF85]">0.2% (Healthy)</span>
                  <span className="text-red-400 font-bold">0.75% (Stripe Penalty Threshold)</span>
                  <span>1.5%</span>
                </div>
              </div>
            </div>

            {/* Results Display */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Box 1: Monthly Cash Recovered */}
              <div className="p-5 rounded-2xl bg-[#1B1315] border border-white/10 text-left space-y-1.5 shadow-md">
                <div className="text-[11px] font-mono uppercase font-bold text-[#C9FF85] flex items-center gap-1.5">
                  <CheckCircle2 size={13} /> Monthly Recovered Cash
                </div>
                <div className="font-mono font-extrabold text-2xl sm:text-3xl text-white">
                  +${monthlyRecovered.toLocaleString()}
                </div>
                <div className="text-[11px] text-zinc-400">
                  Based on 76% AI evidence win-rate
                </div>
              </div>

              {/* Box 2: Annual Net Return */}
              <div className="p-5 rounded-2xl bg-[#1B1315] border border-[#9886FE]/40 text-left space-y-1.5 shadow-md shadow-[#9886FE]/5">
                <div className="text-[11px] font-mono uppercase font-bold text-[#9886FE] flex items-center gap-1.5">
                  <TrendingUp size={13} /> Annual Cash Return
                </div>
                <div className="font-mono font-extrabold text-2xl sm:text-3xl text-[#9886FE]">
                  +${annualRecovered.toLocaleString()}
                </div>
                <div className="text-[11px] text-zinc-400">
                  Direct revenue back into your bank account
                </div>
              </div>

              {/* Box 3: Stripe Health Status */}
              <div className="p-5 rounded-2xl bg-[#1B1315] border border-white/10 text-left space-y-1.5 shadow-md">
                <div className="text-[11px] font-mono uppercase font-bold text-[#7CE1FF] flex items-center gap-1.5">
                  <ShieldCheck size={13} /> Net Dispute Rate
                </div>
                <div className="font-mono font-extrabold text-2xl sm:text-3xl text-[#C9FF85] flex items-center gap-2">
                  <span>{netDisputeRateAfterNinja}%</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#C9FF85]/10 text-[#C9FF85] border border-[#C9FF85]/30 font-mono">
                    SAFE
                  </span>
                </div>
                <div className="text-[11px] text-zinc-400">
                  Safely below Stripe’s 0.75% reserve penalty
                </div>
              </div>
            </div>

            {/* Bank-Grade Security Strip (DisputeNinja Native Style) */}
            <div className="pt-6 border-t border-white/10">
              <div className="text-[11px] font-mono uppercase font-bold text-zinc-400 mb-3.5 flex items-center gap-2">
                <Lock size={12} className="text-[#9886FE]" />
                <span>Enterprise Security &amp; Stripe OAuth Protocols</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#C9FF85] shrink-0" />
                  <span className="text-zinc-200 text-[11px]">Restricted Read-Only Tokens</span>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#C9FF85] shrink-0" />
                  <span className="text-zinc-200 text-[11px]">Zero Cardholder Storage</span>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#C9FF85] shrink-0" />
                  <span className="text-zinc-200 text-[11px]">256-Bit TLS &amp; Webhooks</span>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#C9FF85] shrink-0" />
                  <span className="text-zinc-200 text-[11px]">1-Click Stripe Connect</span>
                </div>
              </div>
            </div>

            {/* Direct CTA */}
            <div className="pt-3 text-center">
              <button
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#9886FE] hover:bg-[#8672FE] text-[#120A0B] shadow-lg shadow-[#9886FE]/25 transition-all hover:scale-102 cursor-pointer"
              >
                <span>Automate Disputes on Stripe Now</span>
                <ChevronRight size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* Engineering Studio Attribution */}
        <div className="p-5 rounded-2xl bg-[#FAF0E6] dark:bg-[#1D0E17] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-dm text-[#5A3846] dark:text-[#E6D0C2]">
          <div className="flex items-center gap-3">
            <Logo variant="auto" size="sm" />
            <div>
              <div className="font-bold text-[#2E0E1D] dark:text-[#FFF0E3]">Architected by Gran Jefe Studio</div>
              <div className="text-[11px] text-[#7A4A38] dark:text-[#B88E7D] font-mono">
                Bespoke Performance &amp; Conversion Engineering for High-Growth Tech
              </div>
            </div>
          </div>

          <Link
            href="/"
            className="text-brand-terra dark:text-[#FF5528] font-bold hover:underline shrink-0 flex items-center gap-1"
          >
            <span>Explore thegranjefe.com</span>
            <ExternalLink size={12} />
          </Link>
        </div>
      </main>
    </div>
  )
}
