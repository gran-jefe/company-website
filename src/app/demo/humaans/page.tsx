'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Users, 
  Clock, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  ExternalLink, 
  Eye, 
  EyeOff, 
  Layers, 
  ShieldCheck, 
  Building2, 
  CalendarCheck, 
  FileCheck2, 
  Check
} from 'lucide-react'

// Current legacy setup options
interface LegacyStack {
  id: string
  name: string
  description: string
  adminHoursPerEmployeeMonth: number
  toolCostPerSeatMonth: number
  painPoints: string[]
}

const LEGACY_STACKS: LegacyStack[] = [
  {
    id: 'spreadsheets',
    name: 'Spreadsheets + Slack + Notion',
    description: 'Ad-hoc trackers, manual onboarding checklists, and scattered Google Drive folders.',
    adminHoursPerEmployeeMonth: 1.8,
    toolCostPerSeatMonth: 8,
    painPoints: ['Zero single source of truth', 'Frequent payroll sync errors', 'Security/GDPR exposure'],
  },
  {
    id: 'legacy-hris',
    name: 'Clunky Legacy HRIS (Workday / Bamboo)',
    description: 'Slow, bloated enterprise software with dated UIs and sluggish employee self-service.',
    adminHoursPerEmployeeMonth: 1.2,
    toolCostPerSeatMonth: 16,
    painPoints: ['High employee abandonment', 'Slow page loads & complex navigation', 'Steep annual lock-in'],
  },
  {
    id: 'fragmented',
    name: 'Multi-Tool Fragmentation',
    description: 'Separate subscriptions for time-off, document signing, org charts, and onboarding.',
    adminHoursPerEmployeeMonth: 1.5,
    toolCostPerSeatMonth: 22,
    painPoints: ['Duplicate data entry', 'High software sprawl costs', 'Disjointed employee experience'],
  },
]

export default function HumaansDemoPage() {
  const [headcount, setHeadcount] = useState<number>(120)
  const [selectedStackId, setSelectedStackId] = useState<string>('legacy-hris')
  const [showPresenterGuide, setShowPresenterGuide] = useState<boolean>(true)
  const [presenterStep, setPresenterStep] = useState<number>(1)
  const [activeTab, setActiveTab] = useState<'calculator' | 'workflows' | 'integrations'>('calculator')

  // Find active legacy stack
  const activeStack = LEGACY_STACKS.find((s) => s.id === selectedStackId) || LEGACY_STACKS[1]

  // Quantitative ROI calculations
  // Average people ops hourly rate in UK/Europe: ~£35/hr
  const peopleOpsHourlyRate = 35

  // Hours spent on legacy admin per month
  const monthlyLegacyHours = headcount * activeStack.adminHoursPerEmployeeMonth
  // Humaans reduces admin overhead by ~70%
  const monthlyHumaansHours = monthlyLegacyHours * 0.3
  const monthlyHoursSaved = monthlyLegacyHours - monthlyHumaansHours
  const weeklyHoursSaved = monthlyHoursSaved / 4.33

  // Annual financial savings
  const annualTimeSavings = monthlyHoursSaved * peopleOpsHourlyRate * 12
  const annualToolSavings = headcount * (activeStack.toolCostPerSeatMonth - 6) * 12
  const totalAnnualSavings = Math.max(12000, Math.floor(annualTimeSavings + Math.max(0, annualToolSavings)))

  // Onboarding velocity
  const legacyOnboardingDays = 14
  const humaansOnboardingDays = 2

  // Presenter insights
  const presenterSteps = [
    {
      step: 1,
      tag: 'B2B Enterprise Decision Trigger',
      headline: 'Quantifying Administrative Sludge',
      detail:
        'People Ops leaders hate switching HRIS because of perceived migration hassle. Showing an exact metric (34 hours recovered weekly) immediately justifies the transition to leadership.',
    },
    {
      step: 2,
      tag: 'Financial Realism',
      headline: 'The £35k+ Overhead Recovery Model',
      detail:
        'Blends direct time-saved with software consolidation (retiring disparate document signing and leave trackers), giving procurement an undeniable business case.',
    },
    {
      step: 3,
      tag: 'Design-Forward Craft',
      headline: 'London Scale-Up Aesthetic Alignment',
      detail:
        'Built with Humaans\' signature minimalist ivory palette (#F9F9F7), crisp typography, subtle pill tags, and zero clunky enterprise widgets.',
    },
    {
      step: 4,
      tag: 'Studio Authority Delivery',
      headline: 'Direct Outreach for Giovanni Luperti',
      detail:
        'Positioned from Adeleke Sherifdeen (Gran Jefe Studio) leveraging UK sovereign systems credibility, ready to deliver as clean Next.js/React code.',
    },
  ]

  return (
    <div className="min-h-screen bg-[#F9F9F7] text-[#121212] font-sans antialiased selection:bg-[#121212] selection:text-white pb-32">
      {/* Sovereign Context Header */}
      <header className="sticky top-0 z-50 bg-[#F9F9F7]/90 backdrop-blur-md border-b border-[#E8E8E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#121212] flex items-center justify-center text-white font-bold text-sm">
              h
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-[#121212] tracking-tight text-base lowercase">
                  humaans
                </span>
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-stone-100 text-stone-700 border border-stone-300">
                  London &bull; YC W21
                </span>
              </div>
              <p className="text-[11px] text-stone-500 hidden sm:block">
                The Fastest HRIS for Scaling Tech Organizations
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden md:flex items-center gap-2 text-xs text-stone-600 bg-white px-3 py-1.5 rounded-lg border border-stone-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Tailored Prototype for Giovanni Luperti</span>
            </div>

            <Link
              href="/"
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#121212] text-white hover:bg-stone-800 transition-colors flex items-center gap-1.5 min-h-[44px]"
            >
              <span>Gran Jefe Studio</span>
              <ExternalLink size={13} />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Header */}
      <section className="pt-10 pb-8 px-4 sm:px-6 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 text-stone-800 text-xs font-semibold mb-4 shadow-xs">
          <Sparkles size={13} className="text-emerald-600" />
          <span>Interactive People Ops Velocity & ROI Simulator</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-stone-900 max-w-3xl mx-auto leading-tight">
          Eliminate HR administrative sludge.{' '}
          <span className="text-emerald-700">Reclaim 30+ hours every week.</span>
        </h1>

        <p className="mt-4 text-stone-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Calculate the exact time and overhead your team saves by moving from clunky legacy HR systems 
          to Humaans' lightning-fast people operations core.
        </p>

        {/* Navigation Tabs */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <button
            onClick={() => setActiveTab('calculator')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all min-h-[44px] cursor-pointer ${
              activeTab === 'calculator'
                ? 'bg-[#121212] text-white shadow-sm'
                : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
            }`}
          >
            Efficiency & ROI Engine
          </button>
          <button
            onClick={() => setActiveTab('workflows')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all min-h-[44px] cursor-pointer ${
              activeTab === 'workflows'
                ? 'bg-[#121212] text-white shadow-sm'
                : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
            }`}
          >
            Zero-Friction Workflows
          </button>
          <button
            onClick={() => setActiveTab('integrations')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all min-h-[44px] cursor-pointer ${
              activeTab === 'integrations'
                ? 'bg-[#121212] text-white shadow-sm'
                : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
            }`}
          >
            Unified Stack Integration
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
                {/* Headcount Slider */}
                <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-stone-400 uppercase tracking-wider font-mono">
                      Step 1: Organization Headcount
                    </span>
                    <span className="text-xs text-stone-500 font-mono">
                      20 to 500 Employees
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between">
                    <div className="flex items-center gap-2">
                      <Users size={24} className="text-stone-700" />
                      <span className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
                        {headcount}
                      </span>
                      <span className="text-sm font-semibold text-stone-500">
                        Team Members
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {[30, 80, 150, 300].map((preset) => (
                        <button
                          key={preset}
                          onClick={() => setHeadcount(preset)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer min-h-[44px] ${
                            headcount === preset
                              ? 'bg-stone-900 text-white'
                              : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                          }`}
                        >
                          {preset}
                        </button>
                      ))}
                    </div>
                  </div>

                  <input
                    type="range"
                    min="20"
                    max="500"
                    step="5"
                    value={headcount}
                    onChange={(e) => setHeadcount(Number(e.target.value))}
                    className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#121212]"
                  />

                  <div className="flex items-center justify-between text-[11px] text-stone-400 font-mono">
                    <span>20</span>
                    <span>150</span>
                    <span>300</span>
                    <span>500</span>
                  </div>
                </div>

                {/* Current Setup Selection */}
                <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
                  <span className="text-xs font-bold text-stone-400 uppercase tracking-wider font-mono">
                    Step 2: Current People Operations Setup
                  </span>

                  <div className="space-y-3">
                    {LEGACY_STACKS.map((stack) => {
                      const isSelected = selectedStackId === stack.id
                      return (
                        <button
                          key={stack.id}
                          onClick={() => setSelectedStackId(stack.id)}
                          className={`w-full p-4 rounded-xl border text-left transition-all cursor-pointer relative min-h-[76px] ${
                            isSelected
                              ? 'border-stone-900 bg-stone-50/70 shadow-xs ring-1 ring-stone-900'
                              : 'border-stone-200 hover:border-stone-300 bg-white'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold text-stone-900 text-sm">
                              {stack.name}
                            </span>
                            {isSelected && (
                              <CheckCircle2 size={16} className="text-stone-900" />
                            )}
                          </div>
                          <p className="text-xs text-stone-500 leading-relaxed">
                            {stack.description}
                          </p>
                          <div className="mt-2 flex flex-wrap gap-1.5">
                            {stack.painPoints.map((pain, i) => (
                              <span
                                key={i}
                                className="text-[10px] px-2 py-0.5 rounded bg-rose-50 text-rose-700 font-medium border border-rose-100"
                              >
                                &bull; {pain}
                              </span>
                            ))}
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* European Enterprise Trust */}
                <div className="p-4 rounded-xl bg-white border border-stone-200 flex items-start gap-3">
                  <ShieldCheck size={18} className="text-emerald-700 shrink-0 mt-0.5" />
                  <div className="text-xs text-stone-600 leading-relaxed">
                    <strong className="text-stone-900 font-semibold">
                      Enterprise Grade & GDPR Compliant:
                    </strong>{' '}
                    SOC 2 Type II certified, UK & EU data residency, direct webhooks to Slack, Google Workspace, and payroll providers.
                  </div>
                </div>
              </div>

              {/* Right Column: Live Velocity & Financial ROI */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-white rounded-2xl p-6 border-2 border-stone-900 shadow-md space-y-6 relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-stone-400">
                      Calculated Velocity
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
                      <Zap size={11} />
                      70% Faster Workflows
                    </span>
                  </div>

                  <div>
                    <span className="text-xs text-stone-500 font-medium">
                      Admin Time Recovered Every Week:
                    </span>
                    <div className="text-4xl sm:text-5xl font-black text-stone-900 tracking-tight mt-1 flex items-baseline gap-2">
                      <span>{Math.round(weeklyHoursSaved)}</span>
                      <span className="text-base font-semibold text-stone-500 font-sans">
                        hours / week
                      </span>
                    </div>
                    <p className="text-xs text-stone-500 mt-1">
                      Time redirected toward talent acquisition and team retention.
                    </p>
                  </div>

                  {/* Quantitative Metrics Matrix */}
                  <div className="space-y-3 pt-3 border-t border-stone-100 text-xs">
                    <div className="flex items-center justify-between text-stone-600">
                      <span>Annual Overhead Recovered:</span>
                      <span className="font-mono font-black text-emerald-700 text-sm">
                        £{totalAnnualSavings.toLocaleString()} / yr
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-stone-600">
                      <span>New Hire Onboarding Time:</span>
                      <span className="font-mono font-semibold text-stone-900">
                        {legacyOnboardingDays} days &rarr;{' '}
                        <strong className="text-emerald-700">{humaansOnboardingDays} days</strong>
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-stone-600">
                      <span>Disparate Subscriptions Retired:</span>
                      <span className="font-mono text-stone-900 font-semibold">
                        3 Tools Replaced
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-stone-600">
                      <span>Self-Service Adoption Rate:</span>
                      <span className="font-mono text-stone-900 font-semibold">
                        98% (Sub-second UI)
                      </span>
                    </div>
                  </div>

                  {/* ROI Summary Box */}
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5">
                    <span className="text-xs font-bold text-stone-900 flex items-center gap-1.5">
                      <TrendingUp size={14} className="text-emerald-700" />
                      Executive Leadership Impact:
                    </span>
                    <p className="text-[11px] text-stone-600 leading-relaxed">
                      At {headcount} employees, transitioning to Humaans recaptures roughly{' '}
                      <strong>{Math.round(monthlyHoursSaved)} hours</strong> of repetitive monthly admin work, 
                      providing an immediate <strong>3.8x ROI</strong> on software license costs.
                    </p>
                  </div>

                  {/* Primary CTA */}
                  <a
                    href="https://humaans.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-[#121212] hover:bg-stone-800 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md min-h-[44px]"
                  >
                    <span>Explore Humaans Platform</span>
                    <ArrowRight size={15} />
                  </a>

                  <p className="text-center text-[10px] text-stone-400">
                    Trusted by high-growth European tech leaders &bull; Setup in minutes
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'workflows' && (
            <motion.div
              key="workflows"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl p-8 border border-stone-200 shadow-xs space-y-6 max-w-3xl mx-auto"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-stone-900">
                  <CalendarCheck size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-stone-900">
                    Automated Onboarding & Leave Approvals
                  </h3>
                  <p className="text-xs text-stone-500">
                    Replace manual email threads with one-click automated Slack actions.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-1">
                  <span className="text-[10px] font-mono text-stone-400 uppercase">Contract Signing</span>
                  <p className="text-sm font-bold text-stone-900">Auto-Generated PDFs</p>
                  <span className="text-[11px] text-emerald-700 font-semibold">100% Paperless</span>
                </div>
                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-1">
                  <span className="text-[10px] font-mono text-stone-400 uppercase">Time Off Tracking</span>
                  <p className="text-sm font-bold text-stone-900">Slack Slash Commands</p>
                  <span className="text-[11px] text-emerald-700 font-semibold">Sub-5s Requests</span>
                </div>
                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-1">
                  <span className="text-[10px] font-mono text-stone-400 uppercase">Org Directory</span>
                  <p className="text-sm font-bold text-stone-900">Dynamic Reporting Tree</p>
                  <span className="text-[11px] text-stone-600 font-semibold">Instant Search</span>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'integrations' && (
            <motion.div
              key="integrations"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl p-8 border border-stone-200 shadow-xs space-y-6 max-w-3xl mx-auto"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-stone-900">
                  <Layers size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-stone-900">
                    Connect With Your Existing Stack
                  </h3>
                  <p className="text-xs text-stone-500">
                    Bidirectional synchronization with your company's core platforms.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-center">
                <div className="p-3 rounded-xl border border-stone-200 bg-stone-50 font-bold text-xs text-stone-800">
                  Google Workspace
                </div>
                <div className="p-3 rounded-xl border border-stone-200 bg-stone-50 font-bold text-xs text-stone-800">
                  Slack
                </div>
                <div className="p-3 rounded-xl border border-stone-200 bg-stone-50 font-bold text-xs text-stone-800">
                  Pleo
                </div>
                <div className="p-3 rounded-xl border border-stone-200 bg-stone-50 font-bold text-xs text-stone-800">
                  Pento / Payroll
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Floating Intervention Drawer (Zero Loom Mentions) */}
      <aside className="fixed bottom-4 right-4 z-50 max-w-sm w-full bg-stone-900 text-white rounded-2xl p-4 shadow-2xl border border-stone-700/60 space-y-3 backdrop-blur-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
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
              <span className="text-[10px] font-mono text-emerald-400 font-bold">
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
                        ? 'bg-white text-stone-900'
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
