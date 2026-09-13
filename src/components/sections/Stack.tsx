'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { CodeWindow } from '@/components/ui/CodeWindow'
import { CheckCircle2, Layers, Cpu, Database, Terminal } from 'lucide-react'

interface TechDetail {
  id: string
  name: string
  category: 'frontend' | 'mobile' | 'backend' | 'database'
  whyWeUseIt: string
  highlightMetric: string
  sampleFilename: string
  sampleCode: string
}

const techStackData: TechDetail[] = [
  {
    id: 'nextjs',
    name: 'Next.js 16 (App Router)',
    category: 'frontend',
    whyWeUseIt: 'Zero-waterfall server components, streaming SSR, and edge deployment for instant page loads.',
    highlightMetric: 'Sub-100ms First Contentful Paint',
    sampleFilename: 'app/api/metrics/route.ts',
    sampleCode: `import { NextResponse } from 'next/server'
import { getSystemMetrics } from '@/lib/metrics'

export const runtime = 'edge'

export async function GET() {
  const metrics = await getSystemMetrics()
  return NextResponse.json(metrics, {
    headers: { 'Cache-Control': 's-maxage=60, stale-while-revalidate' }
  })
}`,
  },
  {
    id: 'react-native',
    name: 'React Native & Expo',
    category: 'mobile',
    whyWeUseIt: '95% shared TypeScript code logic across iOS and Android without sacrificing native 60fps performance.',
    highlightMetric: '60 FPS Native Animation Engine',
    sampleFilename: 'hooks/useBiometricAuth.ts',
    sampleCode: `import * as LocalAuthentication from 'expo-local-authentication'

export async function authenticateBiometrics() {
  const hasHardware = await LocalAuthentication.hasHardwareAsync()
  if (!hasHardware) return false

  const result = await LocalAuthentication.authenticateAsync({
    promptMessage: 'Unlock Gran Jefe Secure Wallet',
    fallbackLabel: 'Use PIN',
  })
  return result.success
}`,
  },
  {
    id: 'nodejs',
    name: 'Node.js & TypeScript',
    category: 'backend',
    whyWeUseIt: 'Asynchronous event-driven I/O engine built for high concurrency and strict end-to-end type safety.',
    highlightMetric: '10,000+ Req/sec per instance',
    sampleFilename: 'server/queueWorker.ts',
    sampleCode: `import { Worker } from 'bullmq'
import { processWebhook } from './webhookEngine'

export const worker = new Worker('webhookQueue', async (job) => {
  const result = await processWebhook(job.data)
  console.log(\`[JOB_COMPLETE] ID: \${job.id} Latency: \${result.durationMs}ms\`)
}, { concurrency: 20 })`,
  },
  {
    id: 'python',
    name: 'Python & FastAPI',
    category: 'backend',
    whyWeUseIt: 'High-performance asynchronous API framework for data validation, automation, and algorithmic engines.',
    highlightMetric: 'Auto OpenAPI Spec & Validation',
    sampleFilename: 'services/analytics.py',
    sampleCode: `from fastapi import FastAPI, Depends
from pydantic import BaseModel

app = FastAPI(title="Gran Jefe Analytics API")

class TransactionPayload(BaseModel):
    account_id: str
    amount: float

@app.post("/v1/verify")
async def verify_transaction(payload: TransactionPayload):
    # Perform instant fraud anomaly check
    return {"status": "CLEARED", "risk_score": 0.02}`,
  },
  {
    id: 'postgres',
    name: 'PostgreSQL & Redis',
    category: 'database',
    whyWeUseIt: 'ACID-compliant relational database with JSONB indexing, partitioned ledgers, and in-memory Redis caching.',
    highlightMetric: 'Sub-millisecond Cache Latency',
    sampleFilename: 'db/queries.sql',
    sampleCode: `-- Atomic transaction transfer with row-level locks
BEGIN;
SELECT balance FROM accounts WHERE id = sender_id FOR UPDATE;
UPDATE accounts SET balance = balance - transfer_amount WHERE id = sender_id;
UPDATE accounts SET balance = balance + transfer_amount WHERE id = receiver_id;
COMMIT;`,
  },
]

export function Stack() {
  const [selectedTech, setSelectedTech] = useState<TechDetail>(techStackData[0])

  return (
    <section id="stack" className="bg-brand-cream dark:bg-zinc-900/60 py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <AnimatedSection>
          <SectionLabel>Technology Blueprint</SectionLabel>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-syne font-extrabold text-zinc-900 dark:text-white tracking-tight">
            The engineering stack behind every project.{' '}
            <span className="text-brand-terra">No cargo-culting.</span>
          </h2>
        </AnimatedSection>

        {/* Main Interactive Matrix Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive Tech Selection Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2">
              // Select a technology to inspect code & architecture
            </div>

            {techStackData.map((tech) => {
              const isSelected = tech.id === selectedTech.id
              return (
                <button
                  key={tech.id}
                  onClick={() => setSelectedTech(tech)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group ${
                    isSelected
                      ? 'bg-white dark:bg-zinc-950 border-brand-terra dark:border-brand-terra shadow-lg shadow-brand-terra/10'
                      : 'bg-white/60 dark:bg-zinc-900/50 border-zinc-200/80 dark:border-zinc-800/80 hover:bg-white dark:hover:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        isSelected
                          ? 'bg-brand-terra text-white'
                          : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 group-hover:text-brand-terra'
                      }`}
                    >
                      {tech.category === 'frontend' && <Layers size={18} />}
                      {tech.category === 'mobile' && <Cpu size={18} />}
                      {tech.category === 'backend' && <Terminal size={18} />}
                      {tech.category === 'database' && <Database size={18} />}
                    </div>
                    <div>
                      <div className="font-syne font-bold text-sm text-zinc-900 dark:text-white">
                        {tech.name}
                      </div>
                      <div className="font-mono text-xs text-emerald-600 dark:text-emerald-400 mt-0.5">
                        {tech.highlightMetric}
                      </div>
                    </div>
                  </div>

                  <CheckCircle2
                    size={18}
                    className={`transition-opacity ${
                      isSelected ? 'opacity-100 text-brand-terra' : 'opacity-0'
                    }`}
                  />
                </button>
              )
            })}
          </div>

          {/* Right: Code Snippet & Rationale Inspector (7 cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTech.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                {/* Rationale Card */}
                <div className="p-5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-brand-terra font-semibold">
                      ARCHITECTURE RATIONALE
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                      {selectedTech.highlightMetric}
                    </span>
                  </div>
                  <p className="font-dm text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {selectedTech.whyWeUseIt}
                  </p>
                </div>

                {/* Code Window */}
                <CodeWindow
                  tabs={[
                    {
                      id: selectedTech.id,
                      filename: selectedTech.sampleFilename,
                      language: 'typescript',
                      code: selectedTech.sampleCode,
                    },
                  ]}
                  title={`granjefe-stack ~ ${selectedTech.sampleFilename}`}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
