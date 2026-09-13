'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, CheckCircle2, Terminal as TerminalIcon, Sparkles, RefreshCw } from 'lucide-react'
import { CodeWindow } from '@/components/ui/CodeWindow'

export function HeroTerminal() {
  const [isRunning, setIsRunning] = useState(false)
  const [testOutput, setTestOutput] = useState<string[] | null>(null)

  const codeTabs = [
    {
      id: 'api',
      filename: 'services/wallet.ts',
      language: 'typescript',
      code: `import { createTransaction, verifySignature } from '@granjefe/core'

export async function processPayment(req: PaymentRequest) {
  // Enforce zero-trust cryptographic signature validation
  const isValid = await verifySignature(req.payload, req.signature)
  if (!isValid) throw new AuthError('Invalid transaction signature')

  // Atomic ledger execution with P99 < 15ms guarantee
  const tx = await createTransaction({
    amount: req.amount,
    currency: 'USD',
    idempotencyKey: req.idempotencyKey,
  })

  return { status: 200, txId: tx.id, latencyMs: 12 }
}`,
    },
    {
      id: 'app',
      filename: 'components/Dashboard.tsx',
      language: 'tsx',
      code: `import { useLiveMetrics } from '@granjefe/hooks'
import { GlassCard, MetricBadge } from '@/components/ui'

export function ExecutiveDashboard() {
  const { metrics, isLive } = useLiveMetrics({ intervalMs: 1000 })

  return (
    <GlassCard className="p-6 glow-cyan">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-mono text-sm">SYSTEM_HEALTH</h3>
        <MetricBadge active={isLive}>{metrics.uptime}%</MetricBadge>
      </div>
      <LineChart data={metrics.throughput} color="#00F0FF" />
    </GlassCard>
  )
}`,
    },
    {
      id: 'sql',
      filename: 'db/schema.sql',
      language: 'sql',
      code: `-- High-scale partitioned ledger table
CREATE TABLE ledger_entries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  account_id UUID NOT NULL,
  amount NUMERIC(18, 4) NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT clock_timestamp()
) PARTITION BY RANGE (created_at);

-- Multi-column index for instant sub-millisecond query execution
CREATE INDEX idx_ledger_account_time ON ledger_entries (account_id, created_at DESC);`,
    },
  ]

  const handleRunTests = () => {
    setIsRunning(true)
    setTestOutput(null)

    setTimeout(() => {
      setTestOutput([
        '⚡ Initializing Gran Jefe Production Test Suite v2.4...',
        '✔ Validating zero-trust cryptographic signatures... [PASSED]',
        '✔ Executing atomic ledger balance verification... [PASSED]',
        '✔ Benchmark: P99 Response Time = 11.4ms (Target < 45ms)',
        '🚀 48/48 unit & integration tests passed with 100% coverage.',
      ])
      setIsRunning(false)
    }, 1200)
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Glow aura backdrop */}
      <div className="absolute -inset-1 bg-gradient-to-r from-brand-terra via-dev-cyan to-dev-violet rounded-2xl opacity-20 blur-xl animate-pulse-subtle" />

      {/* Main Code Window Container */}
      <div className="relative">
        <CodeWindow
          tabs={codeTabs}
          title="granjefe-studio ~/production"
          className="shadow-2xl border-zinc-300 dark:border-zinc-800"
        />

        {/* Floating Interactive Action Bar below terminal */}
        <div className="mt-3 flex flex-wrap items-center justify-between gap-3 px-3 py-2 rounded-xl bg-zinc-900/90 border border-zinc-800 backdrop-blur-md text-xs font-mono text-zinc-300">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Node.js v22.14.0
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">TypeScript 5.8</span>
          </div>

          <button
            onClick={handleRunTests}
            disabled={isRunning}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-brand-terra hover:bg-brand-ember text-white font-mono font-medium transition-all shadow-md active:scale-95 disabled:opacity-50"
          >
            {isRunning ? (
              <>
                <RefreshCw size={13} className="animate-spin text-white" />
                <span>Running Suite...</span>
              </>
            ) : (
              <>
                <Play size={13} className="fill-white" />
                <span>$ npm test</span>
              </>
            )}
          </button>
        </div>

        {/* Live Test Run Output Drawer */}
        <AnimatePresence>
          {testOutput && (
            <motion.div
              initial={{ opacity: 0, y: 10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: 10, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-3 p-3.5 rounded-xl bg-zinc-950 border border-emerald-500/30 text-xs font-mono text-emerald-400 space-y-1 shadow-lg"
            >
              <div className="flex items-center justify-between pb-1 mb-1 border-b border-emerald-500/20 text-zinc-400">
                <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                  <CheckCircle2 size={13} /> TEST RESULTS
                </span>
                <span className="text-[10px]">TIME: 142ms</span>
              </div>
              {testOutput.map((line, idx) => (
                <div key={idx} className="leading-relaxed">
                  {line}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
