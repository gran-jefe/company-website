'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Terminal, Zap, ShieldCheck, Cpu, Code2, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { CodeWindow } from '@/components/ui/CodeWindow'

export function Hero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const heroCodeTabs = [
    {
      id: 'payment',
      filename: 'services/wallet.ts',
      language: 'typescript',
      code: `import { verifySignature, executeTransaction } from '@granjefe/core'

export async function processPayment(payload: PaymentPayload) {
  // Validate zero-trust cryptographic signature
  const isValid = await verifySignature(payload.data, payload.sig)
  if (!isValid) throw new AuthError('Invalid transaction signature')

  // Atomic ledger execution with P99 < 15ms SLA
  const tx = await executeTransaction({
    amount: payload.amount,
    currency: 'USD',
    idempotencyKey: payload.idempotencyKey,
  })

  return { status: 200, txId: tx.id, latencyMs: 12 }
}`,
    },
    {
      id: 'dashboard',
      filename: 'components/Dashboard.tsx',
      language: 'tsx',
      code: `import { useLiveMetrics } from '@granjefe/hooks'
import { MetricBadge, RealtimeChart } from '@/components/ui'

export function ExecutiveDashboard() {
  const { metrics, isLive } = useLiveMetrics({ intervalMs: 1000 })

  return (
    <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-mono text-sm">SYSTEM_HEALTH</h3>
        <MetricBadge active={isLive}>{metrics.uptime}%</MetricBadge>
      </div>
      <RealtimeChart data={metrics.throughput} color="#00F0FF" />
    </div>
  )
}`,
    },
  ]

  return (
    <section className="relative min-h-[90vh] bg-brand-cream dark:bg-zinc-950 bg-cyber-grid pt-12 pb-20 md:py-24 overflow-hidden flex items-center">
      {/* Futuristic Ambient Glow Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-terra/15 dark:bg-dev-cyan/15 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-dev-violet/15 dark:bg-brand-terra/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 w-full">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column: Headline & Value Proposition (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Tech Studio Tag */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-brand-terra/10 border border-brand-terra/30 text-brand-terra dark:text-brand-ember flex items-center gap-2 shadow-sm">
                <Terminal size={13} />
                <span>STUDIO_ENGINEERING</span>
                <span className="text-zinc-400 dark:text-zinc-500">//</span>
                <span className="text-zinc-700 dark:text-zinc-300 font-bold">EST. 2025</span>
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-syne font-extrabold text-zinc-900 dark:text-white leading-[1.08] tracking-tight"
            >
              We craft custom software that{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-terra via-brand-ember to-dev-cyan">
                works beautifully.
              </span>
            </motion.h1>

            {/* Human Sub-headline */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl font-dm text-zinc-700 dark:text-zinc-200 leading-relaxed max-w-2xl"
            >
              High-performance mobile applications, Next.js web platforms, and secure backend architecture. Built for scale, security, and real-world reliability.
            </motion.p>

            {/* Futuristic Proof Badges */}
            <motion.div variants={itemVariants} className="pt-2 grid grid-cols-3 gap-3 max-w-lg">
              <div className="p-3 rounded-xl bg-white/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-700/80 backdrop-blur-md shadow-sm">
                <div className="flex items-center gap-1.5 text-brand-terra text-xs font-mono font-bold">
                  <Zap size={14} /> P99 LATENCY
                </div>
                <div className="mt-1 text-sm font-mono font-extrabold text-zinc-900 dark:text-white">&lt; 15ms</div>
              </div>
              <div className="p-3 rounded-xl bg-white/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-700/80 backdrop-blur-md shadow-sm">
                <div className="flex items-center gap-1.5 text-emerald-500 text-xs font-mono font-bold">
                  <ShieldCheck size={14} /> SECURITY
                </div>
                <div className="mt-1 text-sm font-mono font-extrabold text-zinc-900 dark:text-white">Zero-Trust</div>
              </div>
              <div className="p-3 rounded-xl bg-white/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-700/80 backdrop-blur-md shadow-sm">
                <div className="flex items-center gap-1.5 text-dev-cyan text-xs font-mono font-bold">
                  <Cpu size={14} /> MOBILE 60FPS
                </div>
                <div className="mt-1 text-sm font-mono font-extrabold text-zinc-900 dark:text-white">Native Sync</div>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="pt-3 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
            >
              <Button
                variant="filled"
                onClick={() => {
                  const contactSection = document.querySelector('#contact')
                  if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' })
                }}
                className="py-3.5 px-7 text-sm font-dm font-medium flex items-center justify-center gap-2 group shadow-lg shadow-brand-terra/20"
              >
                <span>Start a project</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outlined"
                onClick={() => {
                  const workSection = document.querySelector('#work')
                  if (workSection) workSection.scrollIntoView({ behavior: 'smooth' })
                }}
                className="py-3.5 px-7 text-sm font-dm font-medium flex items-center justify-center gap-2"
              >
                <span>Explore Shipped Work</span>
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Futuristic Interactive Code Preview Card (5 cols) */}
          <motion.div variants={itemVariants} className="lg:col-span-5 w-full">
            <div className="relative group">
              {/* Ambient Glow Aura behind Code Window */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-terra via-dev-cyan to-dev-violet rounded-2xl opacity-25 blur-xl group-hover:opacity-40 transition-opacity" />

              <div className="relative">
                <CodeWindow
                  tabs={heroCodeTabs}
                  title="granjefe-studio ~/src"
                  className="shadow-2xl border-zinc-300 dark:border-zinc-700/80"
                />

                {/* Status Bar Pill underneath */}
                <div className="mt-3 p-3 rounded-xl bg-white/90 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-700/80 backdrop-blur-md flex items-center justify-between text-xs font-mono text-zinc-700 dark:text-zinc-200">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">ENGINEERING STATUS: OPERATIONAL</span>
                  </div>
                  <span className="text-zinc-500">TypeScript 5.8</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
