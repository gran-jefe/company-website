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
  ArrowRight,
  Check,
  Star,
  Layers,
  Activity,
  Sliders,
  Eye,
  EyeOff,
  Sun,
  Moon
} from 'lucide-react'

export default function DisputeNinjaDemoPage() {
  // Calculator State
  const [monthlyVolume, setMonthlyVolume] = useState<number>(150000)
  const [disputeRate, setDisputeRate] = useState<number>(0.7) // 0.7%
  const [showPresenterGuide, setShowPresenterGuide] = useState<boolean>(true)
  const [presenterStep, setPresenterStep] = useState<number>(1)

  // Calculations
  const averageTicketSize = 125 // average chargeback ticket
  const estimatedDisputeVolume = (monthlyVolume * (disputeRate / 100))
  const estimatedDisputeCount = Math.max(1, Math.round(estimatedDisputeVolume / averageTicketSize))
  const stripeFeesAtRisk = estimatedDisputeCount * 15 // $15 per dispute
  const totalMonthlyLoss = Math.round(estimatedDisputeVolume + stripeFeesAtRisk)

  // DisputeNinja saves ~76% of disputes
  const winRate = 0.76
  const monthlyRecovered = Math.round(estimatedDisputeVolume * winRate)
  const annualRecovered = monthlyRecovered * 12
  const netDisputeRateAfterNinja = (disputeRate * (1 - winRate)).toFixed(2)

  // Presenter Guided Script Steps (for Adeleke's silent screen recording)
  const presenterSteps = [
    {
      id: 1,
      tag: '01 / CONVERSION PROBLEM',
      headline: 'Merchants Buy on Math, Not Paragraphs',
      detail: 'When merchants land on disputeninja.ai, they read text but have to guess their actual dollar ROI.',
    },
    {
      id: 2,
      tag: '02 / THE HIGH-LEVERAGE FIX',
      headline: 'Interactive Revenue Recovery Calculator',
      detail: 'Drag the monthly volume slider: merchants see $15k–$50k+ in cash returned in under 5 seconds.',
    },
    {
      id: 3,
      tag: '03 / STRIPE ACCOUNT HEALTH GAUGE',
      headline: 'Guaranteed Below Stripe’s 0.75% Penalty Line',
      detail: 'Visualizing that their net dispute ratio drops safely to green status eliminates account shutdown fear.',
    },
    {
      id: 4,
      tag: '04 / OAUTH TRUST CONSOLE',
      headline: 'Removing 3rd-Party Stripe Permission Hesitation',
      detail: 'Restricted Read-Only token verification assures CTOs before they authorize the Stripe OAuth app.',
    },
  ]

  return (
    <div className="min-h-screen bg-[#F8F4F1] text-[#120A0B] selection:bg-[#9886FE] selection:text-white font-sans antialiased">
      
      {/* ======================================================== */}
      {/* 1. DISPUTENINJA NATIVE LIGHT TOP BANNER                  */}
      {/* ======================================================== */}
      <div className="w-full bg-[#EDE6E1] border-b border-[#E3E2E2] py-2.5 px-4 text-center text-xs font-medium text-[#454140] flex items-center justify-center gap-2">
        <span className="px-2 py-0.5 rounded-full bg-[#9886FE] text-white text-[10px] font-bold uppercase tracking-wider">
          New
        </span>
        <span className="font-semibold text-[#120A0B]">Try our free AI response tool</span>
        <ArrowRight size={13} className="text-[#9886FE]" />
      </div>

      {/* ======================================================== */}
      {/* 2. DISPUTENINJA 1:1 NATIVE LIGHT NAVBAR                  */}
      {/* ======================================================== */}
      <header className="sticky top-0 z-40 bg-[#F8F4F1]/90 backdrop-blur-md border-b border-[#E3E2E2]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#9886FE] to-[#7CE1FF] flex items-center justify-center text-white font-extrabold text-base shadow-md shadow-[#9886FE]/20">
              🥷
            </div>
            <span className="font-extrabold text-lg tracking-tight text-[#120A0B] font-sans">
              DisputeNinja
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-[#454140]">
            <a href="#features" className="hover:text-[#120A0B] transition-colors">AI Response Tool</a>
            <a href="#how-it-works" className="hover:text-[#120A0B] transition-colors">Docs</a>
            <a href="#blog" className="hover:text-[#120A0B] transition-colors">Blog</a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-4">
            <button className="text-xs font-medium text-[#454140] hover:text-[#120A0B] transition-colors hidden sm:block">
              Sign In
            </button>
            <a
              href="https://wa.me/2348085448371?text=Hi%20Adeleke%2C%20saw%20the%20DisputeNinja%20revenue%20calculator"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full text-xs font-semibold bg-[#9886FE] hover:bg-[#8672FE] text-white transition-all shadow-md shadow-[#9886FE]/20 hover:scale-102 cursor-pointer"
            >
              Schedule a call
            </a>
          </div>
        </div>
      </header>

      {/* ======================================================== */}
      {/* 3. DISPUTENINJA 1:1 NATIVE LIGHT HERO                    */}
      {/* ======================================================== */}
      <section className="relative pt-16 pb-12 sm:pt-24 sm:pb-16 px-4 sm:px-6 overflow-hidden">
        {/* Soft Ambient Light Gradient */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-br from-[#9886FE]/10 via-[#7CE1FF]/10 to-[#C9FF85]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-white border border-[#E3E2E2] text-[#454140] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span>The AI Platform for Chargeback Teams</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#120A0B] leading-[1.08]">
            Scale revenue recovery with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B66FF] via-[#9886FE] to-[#3B82F6]">
              AI-optimized responses.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#454140] leading-relaxed font-normal">
            Automate evidence collection, generate tailored rebuttals without generic templates, and protect your Stripe account from reserve penalties.
          </p>

          {/* Hero Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#calculator"
              className="w-full sm:w-auto px-7 py-3 rounded-full text-sm font-semibold bg-[#9886FE] hover:bg-[#8672FE] text-white shadow-lg shadow-[#9886FE]/20 transition-all hover:scale-102 text-center"
            >
              Calculate Your Revenue Return
            </a>
            <button className="w-full sm:w-auto px-6 py-3 rounded-full text-sm font-medium bg-white hover:bg-zinc-50 text-[#120A0B] border border-[#E3E2E2] transition-colors text-center shadow-xs">
              Watch 2-Min Product Demo
            </button>
          </div>

          {/* Quick Metrics Strip */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-[#454140]">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-[#0E6247]">76%</span>
              <span className="text-[#5A5052]">Average Win Rate</span>
            </div>
            <div className="w-px h-4 bg-[#E3E2E2] hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-[#7B66FF]">5x</span>
              <span className="text-[#5A5052]">More Disputes Handled</span>
            </div>
            <div className="w-px h-4 bg-[#E3E2E2] hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-[#0284C7]">&lt; 60s</span>
              <span className="text-[#5A5052]">Evidence Assembly</span>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. THE HIGH-CONVERTING INTERACTIVE RECOVERY CALCULATOR    */}
      {/* (Clean, Crisp White Surface Matching DisputeNinja Light) */}
      {/* ======================================================== */}
      <section id="calculator" className="relative py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Component Container */}
          <div className="relative rounded-3xl bg-white border border-[#E3E2E2] shadow-xl shadow-zinc-200/50 p-6 sm:p-10 space-y-8">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E3E2E2]">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#7B66FF]">
                  <Sparkles size={13} />
                  <span>INTERACTIVE ROI SIMULATOR</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#120A0B]">
                  Estimate Your Recovered Revenue with DisputeNinja
                </h2>
                <p className="text-xs sm:text-sm text-[#454140]">
                  Slide your monthly volume to see real-time cash recovery and your net dispute ratio.
                </p>
              </div>

              <div className="px-3 py-1.5 rounded-full bg-[#F8F4F1] border border-[#E3E2E2] text-xs font-mono text-[#454140] self-start sm:self-auto shrink-0 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                <span className="font-semibold text-[#120A0B]">Live Calculator</span>
              </div>
            </div>

            {/* Controls */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Slider 1: Monthly Volume */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#120A0B]">
                    Monthly Processing Volume
                  </span>
                  <span className="text-xl font-mono font-bold text-[#7B66FF]">
                    ${monthlyVolume.toLocaleString()}
                  </span>
                </div>

                <input
                  type="range"
                  min={25000}
                  max={1000000}
                  step={10000}
                  value={monthlyVolume}
                  onChange={(e) => setMonthlyVolume(Number(e.target.value))}
                  className="w-full h-2 bg-[#F8F4F1] rounded-lg appearance-none cursor-pointer accent-[#9886FE]"
                />

                {/* Preset Chips */}
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-[10px] font-mono text-[#7A7072]">Presets:</span>
                  {[50000, 150000, 350000, 750000].map((preset) => (
                    <button
                      key={preset}
                      onClick={() => setMonthlyVolume(preset)}
                      className={`px-2.5 py-0.5 rounded-md text-[10px] font-mono font-medium transition-colors cursor-pointer ${
                        monthlyVolume === preset
                          ? 'bg-[#9886FE] text-white font-bold'
                          : 'bg-[#F8F4F1] text-[#454140] hover:text-[#120A0B] border border-[#E3E2E2]'
                      }`}
                    >
                      ${preset >= 1000000 ? `${preset / 1000000}M` : `${preset / 1000}k`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider 2: Dispute Rate */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#120A0B]">
                    Current Dispute Rate
                  </span>
                  <span className={`text-xl font-mono font-bold ${
                    disputeRate >= 0.75 ? 'text-red-600' : 'text-amber-600'
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
                  className="w-full h-2 bg-[#F8F4F1] rounded-lg appearance-none cursor-pointer accent-[#9886FE]"
                />

                <div className="flex items-center justify-between text-[10px] font-mono text-[#7A7072]">
                  <span className="text-[#0E6247] font-semibold">0.2% (Healthy)</span>
                  <span className="text-red-600 font-semibold">0.75% (Stripe Penalty Threshold)</span>
                  <span>1.5%</span>
                </div>
              </div>
            </div>

            {/* Calculated Results Cards (Light Themed) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              
              {/* Card 1: Monthly Cash Recovered */}
              <div className="p-5 rounded-2xl bg-[#F8F4F1] border border-[#E3E2E2] space-y-1">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0E6247] flex items-center gap-1.5">
                  <CheckCircle2 size={13} /> Monthly Recovered
                </div>
                <div className="text-2xl sm:text-3xl font-mono font-extrabold text-[#120A0B]">
                  +${monthlyRecovered.toLocaleString()}
                </div>
                <div className="text-[11px] text-[#5A5052]">
                  Based on 76% AI rebuttal win rate
                </div>
              </div>

              {/* Card 2: Annual Net Return */}
              <div className="p-5 rounded-2xl bg-[#F8F4F1] border-2 border-[#9886FE]/60 space-y-1 shadow-sm">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#7B66FF] flex items-center gap-1.5">
                  <TrendingUp size={13} /> Annual Cash Return
                </div>
                <div className="text-2xl sm:text-3xl font-mono font-extrabold text-[#7B66FF]">
                  +${annualRecovered.toLocaleString()}
                </div>
                <div className="text-[11px] text-[#5A5052]">
                  Direct revenue back in your account
                </div>
              </div>

              {/* Card 3: Stripe Health Ratio */}
              <div className="p-5 rounded-2xl bg-[#F8F4F1] border border-[#E3E2E2] space-y-1">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0284C7] flex items-center gap-1.5">
                  <ShieldCheck size={13} /> Net Dispute Rate
                </div>
                <div className="text-2xl sm:text-3xl font-mono font-extrabold text-[#0E6247] flex items-center gap-2">
                  <span>{netDisputeRateAfterNinja}%</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#E1F5EE] text-[#0E6247] border border-[#A7E3D0] font-mono font-bold">
                    HEALTHY
                  </span>
                </div>
                <div className="text-[11px] text-[#5A5052]">
                  Safely below Stripe’s 0.75% penalty zone
                </div>
              </div>
            </div>

            {/* Enterprise Security Proof Strip (Light Themed) */}
            <div className="pt-6 border-t border-[#E3E2E2]">
              <div className="text-[10px] font-mono uppercase font-bold text-[#454140] mb-3 flex items-center gap-2">
                <Lock size={12} className="text-[#9886FE]" />
                <span>Stripe Verified App &amp; Security Standards</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-[#F8F4F1] border border-[#E3E2E2] flex items-center gap-2">
                  <Check size={14} className="text-[#0E6247] shrink-0" />
                  <span className="text-[#120A0B] text-[11px] font-medium">Restricted Read Tokens</span>
                </div>

                <div className="p-3 rounded-xl bg-[#F8F4F1] border border-[#E3E2E2] flex items-center gap-2">
                  <Check size={14} className="text-[#0E6247] shrink-0" />
                  <span className="text-[#120A0B] text-[11px] font-medium">Zero Cardholder Storage</span>
                </div>

                <div className="p-3 rounded-xl bg-[#F8F4F1] border border-[#E3E2E2] flex items-center gap-2">
                  <Check size={14} className="text-[#0E6247] shrink-0" />
                  <span className="text-[#120A0B] text-[11px] font-medium">256-Bit TLS &amp; Webhooks</span>
                </div>

                <div className="p-3 rounded-xl bg-[#F8F4F1] border border-[#E3E2E2] flex items-center gap-2">
                  <Check size={14} className="text-[#0E6247] shrink-0" />
                  <span className="text-[#120A0B] text-[11px] font-medium">1-Click Stripe Connect</span>
                </div>
              </div>
            </div>

            {/* Direct Call to Action */}
            <div className="pt-2 text-center">
              <a
                href="https://wa.me/2348085448371?text=Hi%20Adeleke%2C%20saw%20the%20DisputeNinja%20revenue%20calculator"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#9886FE] hover:bg-[#8672FE] text-white shadow-lg shadow-[#9886FE]/20 transition-all hover:scale-102 cursor-pointer"
              >
                <span>Automate Your Stripe Disputes Now</span>
                <ChevronRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. DISPUTENINJA REAL SOCIAL PROOF SECTION (Light)        */}
      {/* ======================================================== */}
      <section className="py-16 px-4 sm:px-6 border-t border-[#E3E2E2] bg-white">
        <div className="max-w-4xl mx-auto space-y-8 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-[#7A7072]">
            Trusted by modern chargeback teams
          </p>

          {/* Real Quote from Live Site */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#F8F4F1] border border-[#E3E2E2] max-w-2xl mx-auto text-left space-y-4">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <p className="text-sm sm:text-base text-[#120A0B] italic leading-relaxed">
              “DisputeNinja significantly reduces manual work and the headache of maintaining templates. Our team handles 5x more cases without adding headcount.”
            </p>
            <div className="text-xs font-mono">
              <span className="font-bold text-[#120A0B]">Runbo L.</span>
              <span className="text-[#7A7072]"> • CEO, Magic Hour</span>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. DISPUTENINJA 1:1 NATIVE LIGHT FOOTER                  */}
      {/* ======================================================== */}
      <footer className="py-12 px-4 sm:px-8 border-t border-[#E3E2E2] text-xs text-[#7A7072]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#120A0B]">DisputeNinja</span>
            <span>© 2026. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#120A0B] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#120A0B] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#120A0B] transition-colors">Documentation</a>
          </div>
        </div>
      </footer>

      {/* ======================================================== */}
      {/* 7. PROTOTYPE ARCHITECTURE SUMMARY BAR                    */}
      {/* ======================================================== */}
      <aside className="fixed bottom-4 right-4 z-50 max-w-sm w-full p-4 rounded-2xl bg-white/95 border border-[#9886FE]/50 shadow-2xl backdrop-blur-xl text-xs space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
            <span className="font-mono font-bold text-[#120A0B] uppercase text-[11px]">
              Component Architecture
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="text-[10px] text-[#5A5052] hover:text-[#120A0B] flex items-center gap-1 font-mono"
            >
              <span>Gran Jefe Studio</span>
              <ExternalLink size={10} />
            </Link>
            <button
              onClick={() => setShowPresenterGuide(!showPresenterGuide)}
              className="text-[#5A5052] hover:text-[#120A0B]"
            >
              {showPresenterGuide ? <EyeOff size={13} /> : <Eye size={13} />}
            </button>
          </div>
        </div>

        {showPresenterGuide && (
          <div className="space-y-2.5 pt-1">
            <div className="p-2.5 rounded-xl bg-[#F8F4F1] border border-[#E3E2E2] space-y-1">
              <span className="text-[10px] font-mono text-[#7B66FF] font-bold">
                {presenterSteps[presenterStep - 1].tag}
              </span>
              <p className="font-bold text-[#120A0B] text-[11px] leading-snug">
                {presenterSteps[presenterStep - 1].headline}
              </p>
              <p className="text-[10px] text-[#5A5052] leading-relaxed">
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
                        ? 'bg-[#9886FE] text-white'
                        : 'bg-white text-[#454140] border border-[#E3E2E2] hover:border-[#9886FE]'
                    }`}
                  >
                    {step}
                  </button>
                ))}
              </div>

              <span className="text-[10px] font-mono text-[#7A7072]">
                Key Insights 1→4
              </span>
            </div>
          </div>
        )}
      </aside>

    </div>
  )
}
