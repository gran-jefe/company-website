'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { CodeWindow } from '@/components/ui/CodeWindow'
import { Layers, Cpu, Server, Database, Check } from 'lucide-react'

interface TechCategory {
  id: string
  title: string
  icon: React.ReactNode
  description: string
  sampleFilename: string
  sampleCode: string
  technologies: {
    name: string
    purpose: string
    badge?: string
  }[]
}

const stackCategories: TechCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend & Web',
    icon: <Layers size={20} className="stroke-current" />,
    description: 'We build modern, accessible, and fast web user interfaces using Next.js 16 and React 19.',
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
    technologies: [
      { name: 'React 19', purpose: 'Component-driven UI development' },
      { name: 'TypeScript', purpose: 'End-to-end type safety & bug prevention', badge: 'Standard' },
      { name: 'Next.js 16', purpose: 'Server rendering, routing & performance optimization' },
      { name: 'Tailwind CSS', purpose: 'Maintainable, responsive design systems' },
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile Engineering',
    icon: <Cpu size={20} className="stroke-current" />,
    description: 'Cross-platform native mobile applications delivering smooth 60fps performance on both iOS and Android.',
    sampleFilename: 'hooks/useBiometrics.ts',
    sampleCode: `import * as LocalAuthentication from 'expo-local-authentication'

export async function authenticateBiometrics() {
  const hasHardware = await LocalAuthentication.hasHardwareAsync()
  if (!hasHardware) return false

  const result = await LocalAuthentication.authenticateAsync({
    promptMessage: 'Unlock Gran Jefe Wallet',
    fallbackLabel: 'Use PIN',
  })
  return result.success
}`,
    technologies: [
      { name: 'React Native', purpose: 'Native iOS & Android compilation from a unified codebase' },
      { name: 'Expo', purpose: 'Rapid mobile deployment & OTA updates' },
      { name: 'Reanimated', purpose: 'Fluid gesture-driven animations' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    icon: <Server size={20} className="stroke-current" />,
    description: 'Robust server architecture, authentication mechanisms, and REST/GraphQL APIs.',
    sampleFilename: 'server/queueWorker.ts',
    sampleCode: `import { Worker } from 'bullmq'
import { processWebhook } from './webhookEngine'

export const worker = new Worker('webhookQueue', async (job) => {
  const result = await processWebhook(job.data)
  console.log(\`[JOB_COMPLETE] ID: \${job.id} Latency: \${result.durationMs}ms\`)
}, { concurrency: 20 })`,
    technologies: [
      { name: 'Node.js', purpose: 'High-throughput event-driven microservices' },
      { name: 'Python & FastAPI', purpose: 'Data validation, automation, and algorithmic backends' },
      { name: 'Express / Hono', purpose: 'Lightweight REST API routes' },
    ],
  },
  {
    id: 'infrastructure',
    title: 'Databases & Cloud',
    icon: <Database size={20} className="stroke-current" />,
    description: 'Relational and document storage, caching layers, and automated cloud deployments.',
    sampleFilename: 'db/ledger.sql',
    sampleCode: `-- Atomic transaction transfer with row-level locks
BEGIN;
SELECT balance FROM accounts WHERE id = sender_id FOR UPDATE;
UPDATE accounts SET balance = balance - transfer_amount WHERE id = sender_id;
UPDATE accounts SET balance = balance + transfer_amount WHERE id = receiver_id;
COMMIT;`,
    technologies: [
      { name: 'PostgreSQL', purpose: 'Relational data storage with ACID guarantees' },
      { name: 'Firebase', purpose: 'Realtime database, auth, and backend services' },
      { name: 'MongoDB & Redis', purpose: 'High-speed document storage and caching' },
      { name: 'Vercel & Docker', purpose: 'Continuous deployment & containerization' },
    ],
  },
]

export function Stack() {
  const [activeCategory, setActiveCategory] = useState<TechCategory>(stackCategories[0])

  return (
    <section id="stack" className="bg-brand-cream dark:bg-zinc-950 py-20 md:py-28 relative border-t border-zinc-200/60 dark:border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <AnimatedSection>
          <div className="max-w-2xl">
            <SectionLabel>Our Tech Stack</SectionLabel>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-syne font-bold text-zinc-900 dark:text-white tracking-tight">
              Tools chosen for durability.{' '}
              <span className="text-brand-terra">Not hype.</span>
            </h2>
            <p className="mt-4 font-dm text-base text-zinc-700 dark:text-zinc-200">
              Every framework and library in our stack is selected for performance, maintainability, and real-world stability.
            </p>
          </div>
        </AnimatedSection>

        {/* Category Tabs & Content Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Category Selector Side Menu (4 cols) */}
          <div className="lg:col-span-4 space-y-2">
            {stackCategories.map((cat) => {
              const isSelected = cat.id === activeCategory.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group ${
                    isSelected
                      ? 'bg-white dark:bg-zinc-900 border-brand-terra dark:border-brand-terra shadow-sm'
                      : 'bg-white/70 dark:bg-zinc-900/60 border-zinc-200 dark:border-zinc-800 hover:bg-white dark:hover:bg-zinc-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2.5 rounded-lg transition-colors ${
                        isSelected
                          ? 'bg-brand-terra text-white'
                          : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 group-hover:text-brand-terra'
                      }`}
                    >
                      {cat.icon}
                    </div>
                    <span className="font-syne font-bold text-sm text-zinc-900 dark:text-white">
                      {cat.title}
                    </span>
                  </div>

                  <Check
                    size={18}
                    className={`transition-opacity ${
                      isSelected ? 'opacity-100 text-brand-terra' : 'opacity-0'
                    }`}
                  />
                </button>
              )
            })}
          </div>

          {/* Detailed Technology Overview & Code Inspector (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                {/* Tech Overview Card */}
                <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700/80 shadow-sm space-y-6">
                  <div>
                    <h3 className="font-syne font-bold text-xl text-zinc-900 dark:text-white">
                      {activeCategory.title}
                    </h3>
                    <p className="mt-1 font-dm text-sm text-zinc-700 dark:text-zinc-300">
                      {activeCategory.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    {activeCategory.technologies.map((tech, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                      >
                        <div>
                          <div className="font-syne font-bold text-sm text-zinc-900 dark:text-white flex items-center gap-2">
                            <span>{tech.name}</span>
                            {tech.badge && (
                              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-brand-terra/10 text-brand-terra border border-brand-terra/20 font-medium">
                                {tech.badge}
                              </span>
                            )}
                          </div>
                          <div className="font-dm text-xs text-zinc-700 dark:text-zinc-300 font-medium mt-1">
                            {tech.purpose}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Futuristic Code Snippet Inspector Window */}
                <CodeWindow
                  tabs={[
                    {
                      id: activeCategory.id,
                      filename: activeCategory.sampleFilename,
                      language: 'typescript',
                      code: activeCategory.sampleCode,
                    },
                  ]}
                  title={`granjefe-stack ~ ${activeCategory.sampleFilename}`}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
