'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Zap,
  ShieldCheck,
  Smartphone,
  Gauge,
  RefreshCw,
  CheckCircle2,
  Lock,
  Globe,
  Award,
  Sparkles,
  ArrowRight,
  TrendingUp,
  CreditCard,
  Layers,
  Cpu,
  Check
} from 'lucide-react'

export function ProductConsole() {
  const [activeTab, setActiveTab] = useState<'performance' | 'experience' | 'security'>('performance')
  const [isAuditing, setIsAuditing] = useState(false)
  const [auditScore, setAuditScore] = useState(99)
  const [mobileScreen, setMobileScreen] = useState<'checkout' | 'curriculum' | 'security'>('checkout')

  const handleRunAudit = () => {
    setIsAuditing(true)
    setAuditScore(75)
    let current = 75
    const interval = setInterval(() => {
      current += 4
      if (current >= 99) {
        setAuditScore(99)
        setIsAuditing(false)
        clearInterval(interval)
      } else {
        setAuditScore(current)
      }
    }, 70)
  }

  return (
    <div className="rounded-2xl bg-zinc-900/95 border border-zinc-800/90 shadow-2xl overflow-hidden text-white backdrop-blur-xl transition-all">
      {/* Console Header Bar */}
      <div className="px-4 py-3 bg-zinc-950/90 border-b border-zinc-800/80 flex flex-wrap items-center justify-between gap-3 text-xs font-mono select-none">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-zinc-400 font-bold hidden sm:inline">STUDIO_RUNTIME // v2.6</span>
        </div>

        {/* Tab Switchers with layoutId animated pill */}
        <div className="flex items-center gap-1 bg-zinc-900/90 p-1 rounded-xl border border-zinc-800/80">
          <button
            onClick={() => setActiveTab('performance')}
            className={`relative px-3 py-1.5 rounded-lg text-xs font-dm font-semibold transition-colors flex items-center gap-1.5 z-10 ${
              activeTab === 'performance' ? 'text-white' : 'text-zinc-400 hover:text-white'
            }`}
          >
            {activeTab === 'performance' && (
              <motion.div
                layoutId="activeConsoleTab"
                className="absolute inset-0 bg-brand-terra rounded-lg shadow-sm -z-10"
                transition={{ type: 'spring', stiffness: 450, damping: 30 }}
              />
            )}
            <Gauge size={13} />
            <span>Speed Score</span>
          </button>

          <button
            onClick={() => setActiveTab('experience')}
            className={`relative px-3 py-1.5 rounded-lg text-xs font-dm font-semibold transition-colors flex items-center gap-1.5 z-10 ${
              activeTab === 'experience' ? 'text-white' : 'text-zinc-400 hover:text-white'
            }`}
          >
            {activeTab === 'experience' && (
              <motion.div
                layoutId="activeConsoleTab"
                className="absolute inset-0 bg-brand-terra rounded-lg shadow-sm -z-10"
                transition={{ type: 'spring', stiffness: 450, damping: 30 }}
              />
            )}
            <Smartphone size={13} />
            <span>Interactive Simulator</span>
          </button>

          <button
            onClick={() => setActiveTab('security')}
            className={`relative px-3 py-1.5 rounded-lg text-xs font-dm font-semibold transition-colors flex items-center gap-1.5 z-10 ${
              activeTab === 'security' ? 'text-white' : 'text-zinc-400 hover:text-white'
            }`}
          >
            {activeTab === 'security' && (
              <motion.div
                layoutId="activeConsoleTab"
                className="absolute inset-0 bg-brand-terra rounded-lg shadow-sm -z-10"
                transition={{ type: 'spring', stiffness: 450, damping: 30 }}
              />
            )}
            <ShieldCheck size={13} />
            <span>Security &amp; SLA</span>
          </button>
        </div>
      </div>

      {/* Tab Content Stage */}
      <div className="p-6 md:p-7 min-h-[380px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          {/* TAB 1: PERFORMANCE SPEED SCORE */}
          {activeTab === 'performance' && (
            <motion.div
              key="performance"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                    <Sparkles size={13} />
                    <span>GOOGLE LIGHTHOUSE BENCHMARK // AUDITED</span>
                  </div>
                  <h3 className="mt-1 font-syne font-bold text-xl sm:text-2xl text-white">
                    Sub-Second Page Load Speed
                  </h3>
                </div>

                <button
                  onClick={handleRunAudit}
                  disabled={isAuditing}
                  className="px-3.5 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-mono text-zinc-200 border border-zinc-700/80 flex items-center gap-2 self-start sm:self-auto transition-colors disabled:opacity-50 cursor-pointer shadow-xs"
                >
                  <RefreshCw size={13} className={isAuditing ? 'animate-spin text-emerald-400' : ''} />
                  <span>{isAuditing ? 'Running Benchmark...' : 'Re-Run Audit'}</span>
                </button>
              </div>

              {/* Gauge & Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {/* Gauge Card */}
                <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 flex flex-col items-center justify-center text-center">
                  <div className="relative w-22 h-22 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-zinc-800/80"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-emerald-400 transition-all duration-300"
                        strokeDasharray={`${auditScore}, 100`}
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute text-2xl font-mono font-extrabold text-emerald-400">
                      {auditScore}
                    </span>
                  </div>
                  <span className="mt-2 text-[11px] font-mono font-bold text-zinc-300">
                    PERFORMANCE SCORE
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono">Google Lighthouse v11</span>
                </div>

                {/* Metric 1: LCP */}
                <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                    <span>LCP TIME</span>
                    <Zap size={14} className="text-amber-400" />
                  </div>
                  <div className="my-1.5">
                    <span className="text-2xl font-mono font-extrabold text-white">0.48s</span>
                    <span className="text-xs text-emerald-400 font-mono ml-2">Top 1%</span>
                  </div>
                  <div className="text-[11px] font-dm text-zinc-400">
                    Largest Contentful Paint loads before the user blinks.
                  </div>
                </div>

                {/* Metric 2: CLS & INP */}
                <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                    <span>LAYOUT SHIFT</span>
                    <CheckCircle2 size={14} className="text-dev-cyan" />
                  </div>
                  <div className="my-1.5">
                    <span className="text-2xl font-mono font-extrabold text-white">0.00</span>
                    <span className="text-xs text-emerald-400 font-mono ml-2">Zero Jitter</span>
                  </div>
                  <div className="text-[11px] font-dm text-zinc-400">
                    Rock solid layout with zero unexpected visual jumps.
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: INTERACTIVE SIMULATOR */}
          {activeTab === 'experience' && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-mono text-dev-cyan flex items-center gap-1.5">
                    <Smartphone size={13} />
                    <span>INTERACTIVE MOBILE VIEWPORT PREVIEW</span>
                  </div>
                  <h3 className="mt-1 font-syne font-bold text-xl text-white">
                    Fluid Mobile Engineering
                  </h3>
                </div>

                {/* Screen Switchers */}
                <div className="flex items-center gap-1 bg-zinc-950 p-1 rounded-lg border border-zinc-800 text-[11px] font-mono">
                  <button
                    onClick={() => setMobileScreen('checkout')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      mobileScreen === 'checkout' ? 'bg-brand-terra text-white' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Checkout
                  </button>
                  <button
                    onClick={() => setMobileScreen('curriculum')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      mobileScreen === 'curriculum' ? 'bg-brand-terra text-white' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Tracker
                  </button>
                  <button
                    onClick={() => setMobileScreen('security')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      mobileScreen === 'security' ? 'bg-brand-terra text-white' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Ledger
                  </button>
                </div>
              </div>

              {/* Interactive Phone Screen Mockup */}
              <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 min-h-[160px] flex flex-col justify-center">
                {mobileScreen === 'checkout' && (
                  <motion.div
                    key="sc-checkout"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CreditCard size={16} className="text-brand-ember" />
                        <span className="text-xs font-mono font-bold text-zinc-200">Payceler One-Tap Checkout</span>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                        Verified 200 OK
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-between">
                      <div>
                        <div className="text-[11px] text-zinc-400 font-dm">Total Charge</div>
                        <div className="text-lg font-mono font-bold text-white">₦24,500.00</div>
                      </div>
                      <div className="px-3 py-1.5 rounded-lg bg-brand-terra text-white text-xs font-dm font-semibold flex items-center gap-1">
                        <span>Pay Securely</span>
                        <ArrowRight size={13} />
                      </div>
                    </div>
                    <div className="text-[11px] font-mono text-zinc-400 flex items-center gap-1.5">
                      <Check size={12} className="text-emerald-400" />
                      <span>Sub-second biometric authorization • 0% cart abandonment</span>
                    </div>
                  </motion.div>
                )}

                {mobileScreen === 'curriculum' && (
                  <motion.div
                    key="sc-curriculum"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Layers size={16} className="text-dev-cyan" />
                        <span className="text-xs font-mono font-bold text-zinc-200">Learning Hub Milestone Sync</span>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/15 text-dev-cyan border border-cyan-500/30">
                        Active Streak: 14 Days
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-between">
                      <div>
                        <div className="text-[11px] text-zinc-400 font-dm">Python &amp; Django Track</div>
                        <div className="text-sm font-mono font-bold text-white">4 of 5 Modules Mastered (80%)</div>
                      </div>
                      <div className="h-2 w-24 bg-zinc-800 rounded-full overflow-hidden">
                        <div className="h-full bg-dev-cyan rounded-full w-4/5" />
                      </div>
                    </div>
                    <div className="text-[11px] font-mono text-zinc-400 flex items-center gap-1.5">
                      <Check size={12} className="text-emerald-400" />
                      <span>Offline-first MMKV sync with instantaneous state persistence</span>
                    </div>
                  </motion.div>
                )}

                {mobileScreen === 'security' && (
                  <motion.div
                    key="sc-security"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Cpu size={16} className="text-amber-400" />
                        <span className="text-xs font-mono font-bold text-zinc-200">Double-Entry Financial Ledger</span>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/15 text-amber-400 border border-amber-500/30">
                        ACID Compliant
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-between">
                      <div>
                        <div className="text-[11px] text-zinc-400 font-dm">Idempotency Lock Status</div>
                        <div className="text-sm font-mono font-bold text-white">Zero Double Charges Guaranteed</div>
                      </div>
                      <Lock size={16} className="text-emerald-400" />
                    </div>
                    <div className="text-[11px] font-mono text-zinc-400 flex items-center gap-1.5">
                      <Check size={12} className="text-emerald-400" />
                      <span>HMAC-SHA512 webhook validation and automated reconciliation</span>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}

          {/* TAB 3: SECURITY & SLA */}
          {activeTab === 'security' && (
            <motion.div
              key="security"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="space-y-6"
            >
              <div>
                <div className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                  <ShieldCheck size={13} />
                  <span>ENTERPRISE GUARANTEE &amp; COMPLIANCE</span>
                </div>
                <h3 className="mt-1 font-syne font-bold text-xl sm:text-2xl text-white">
                  99.99% Uptime &amp; Bank-Grade Security
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 text-center space-y-2">
                  <Lock size={20} className="mx-auto text-emerald-400" />
                  <div className="font-syne font-bold text-base text-white">256-bit SSL</div>
                  <div className="text-xs font-dm text-zinc-400">End-to-end encrypted user credentials &amp; payments</div>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 text-center space-y-2">
                  <Globe size={20} className="mx-auto text-dev-cyan" />
                  <div className="font-syne font-bold text-base text-white">Global Edge CDN</div>
                  <div className="text-xs font-dm text-zinc-400">Lightning response worldwide from 300+ edge nodes</div>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 text-center space-y-2">
                  <Award size={20} className="mx-auto text-amber-400" />
                  <div className="font-syne font-bold text-base text-white">Zero Data Loss</div>
                  <div className="text-xs font-dm text-zinc-400">Continuous ACID transactions &amp; automated cloud backups</div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer Status Bar */}
        <div className="pt-5 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-emerald-400 font-semibold">ALL SYSTEMS OPERATIONAL</span>
          </div>
          <span className="text-zinc-500">// Zero Maintenance Downtime</span>
        </div>
      </div>
    </div>
  )
}
