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
  MessageSquare
} from 'lucide-react'

export function ProductConsole() {
  const [activeTab, setActiveTab] = useState<'performance' | 'experience' | 'security'>('performance')
  const [isAuditing, setIsAuditing] = useState(false)
  const [auditScore, setAuditScore] = useState(99)

  const handleRunAudit = () => {
    setIsAuditing(true)
    setAuditScore(80)
    let current = 80
    const interval = setInterval(() => {
      current += 4
      if (current >= 99) {
        setAuditScore(99)
        setIsAuditing(false)
        clearInterval(interval)
      } else {
        setAuditScore(current)
      }
    }, 100)
  }

  return (
    <div className="rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl overflow-hidden text-white">
      {/* Console Header Bar */}
      <div className="px-4 py-3 bg-zinc-950 border-b border-zinc-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono select-none">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500" />
          <span className="w-3 h-3 rounded-full bg-amber-500" />
          <span className="w-3 h-3 rounded-full bg-emerald-500" />
          <span className="ml-2 text-zinc-400 font-bold hidden sm:inline">PROD_ENGINEERING_CONSOLE v2.5</span>
        </div>

        {/* Tab Switchers */}
        <div className="flex items-center gap-1 bg-zinc-900 p-1 rounded-xl border border-zinc-800">
          <button
            onClick={() => setActiveTab('performance')}
            className={`px-3 py-1 rounded-lg text-xs font-dm font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === 'performance'
                ? 'bg-brand-terra text-white shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Gauge size={13} />
            <span>Speed Score</span>
          </button>

          <button
            onClick={() => setActiveTab('experience')}
            className={`px-3 py-1 rounded-lg text-xs font-dm font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === 'experience'
                ? 'bg-brand-terra text-white shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Smartphone size={13} />
            <span>Mobile Preview</span>
          </button>

          <button
            onClick={() => setActiveTab('security')}
            className={`px-3 py-1 rounded-lg text-xs font-dm font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === 'security'
                ? 'bg-brand-terra text-white shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <ShieldCheck size={13} />
            <span>Security &amp; SLA</span>
          </button>
        </div>
      </div>

      {/* Tab Content Stage */}
      <div className="p-6 md:p-8 min-h-[360px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          {/* TAB 1: PERFORMANCE SPEED SCORE */}
          {activeTab === 'performance' && (
            <motion.div
              key="performance"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                    <Sparkles size={13} />
                    <span>GOOGLE LIGHTHOUSE BENCHMARK</span>
                  </div>
                  <h3 className="mt-1 font-syne font-bold text-2xl text-white">
                    Sub-Second Page Load Speed
                  </h3>
                </div>

                <button
                  onClick={handleRunAudit}
                  disabled={isAuditing}
                  className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-mono text-zinc-200 border border-zinc-700 flex items-center gap-2 self-start sm:self-auto transition-colors disabled:opacity-50"
                >
                  <RefreshCw size={13} className={isAuditing ? 'animate-spin text-emerald-400' : ''} />
                  <span>{isAuditing ? 'Auditing Performance...' : 'Re-Run Speed Audit'}</span>
                </button>
              </div>

              {/* Gauge & Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Gauge Card */}
                <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col items-center justify-center text-center">
                  <div className="relative w-24 h-24 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-zinc-800"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-emerald-500 transition-all duration-500"
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
                  <span className="mt-2 text-xs font-mono font-bold text-zinc-300">
                    PERFORMANCE SCORE
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono">Verified 99/100</span>
                </div>

                {/* Metric 1 */}
                <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                    <span>PAGE LOAD TIMER</span>
                    <Zap size={14} className="text-amber-400" />
                  </div>
                  <div className="my-2">
                    <span className="text-3xl font-mono font-extrabold text-white">0.4s</span>
                    <span className="text-xs text-emerald-400 font-mono ml-2">Instant Load</span>
                  </div>
                  <div className="text-[11px] font-dm text-zinc-400">
                    Keeps visitors engaged with zero waiting time.
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                    <span>MOBILE ACCESSIBILITY</span>
                    <Smartphone size={14} className="text-dev-cyan" />
                  </div>
                  <div className="my-2">
                    <span className="text-3xl font-mono font-extrabold text-white">100%</span>
                    <span className="text-xs text-emerald-400 font-mono ml-2">Flawless</span>
                  </div>
                  <div className="text-[11px] font-dm text-zinc-400">
                    Optimized for every phone, tablet, and desktop screen.
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: MOBILE & USER EXPERIENCE */}
          {activeTab === 'experience' && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <div>
                <div className="text-xs font-mono text-dev-cyan flex items-center gap-1.5">
                  <Smartphone size={13} />
                  <span>HUMAN-CENTRIC INTERACTION</span>
                </div>
                <h3 className="mt-1 font-syne font-bold text-2xl text-white">
                  Designed for Effortless Conversion
                </h3>
              </div>

              {/* Feature Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3">
                  <div className="flex items-center gap-2 text-brand-terra">
                    <MessageSquare size={16} />
                    <span className="font-syne font-bold text-sm text-white">Instant Customer Connect</span>
                  </div>
                  <p className="text-xs font-dm text-zinc-300 leading-relaxed">
                    Direct 1-click WhatsApp order triggers and clear navigation pathways that turn site visitors into active paying clients.
                  </p>
                  <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-emerald-400">
                    <CheckCircle2 size={13} />
                    <span>Proven 3,000+ client conversions</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3">
                  <div className="flex items-center gap-2 text-dev-cyan">
                    <TrendingUp size={16} />
                    <span className="font-syne font-bold text-sm text-white">Fast Mobile Checkout</span>
                  </div>
                  <p className="text-xs font-dm text-zinc-300 leading-relaxed">
                    Zero-friction user experience with smooth gestures, fast form fill-outs, and rapid payment gateway integration.
                  </p>
                  <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-emerald-400">
                    <CheckCircle2 size={13} />
                    <span>0% Checkout abandonment drop-off</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: SECURITY & SLA */}
          {activeTab === 'security' && (
            <motion.div
              key="security"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <div>
                <div className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                  <ShieldCheck size={13} />
                  <span>ENTERPRISE GUARANTEE</span>
                </div>
                <h3 className="mt-1 font-syne font-bold text-2xl text-white">
                  99.99% Uptime &amp; Bank-Grade Security
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-center space-y-2">
                  <Lock size={20} className="mx-auto text-emerald-400" />
                  <div className="font-syne font-bold text-base text-white">256-bit SSL</div>
                  <div className="text-xs font-dm text-zinc-400">End-to-end encrypted customer data &amp; payments</div>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-center space-y-2">
                  <Globe size={20} className="mx-auto text-dev-cyan" />
                  <div className="font-syne font-bold text-base text-white">Global CDN</div>
                  <div className="text-xs font-dm text-zinc-400">Lightning fast response worldwide from 300+ edge nodes</div>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-center space-y-2">
                  <Award size={20} className="mx-auto text-amber-400" />
                  <div className="font-syne font-bold text-base text-white">Daily Backups</div>
                  <div className="text-xs font-dm text-zinc-400">Automatic database backups &amp; 0 data loss SLA</div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer Status Bar */}
        <div className="pt-6 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
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
