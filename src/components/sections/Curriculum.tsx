'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowRight, 
  BookOpen, 
  Terminal, 
  Code2, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  Smartphone, 
  CreditCard, 
  Bot,
  Compass,
  Check
} from 'lucide-react'

interface CurriculumTrack {
  id: string
  title: string
  subtitle: string
  category: 'backend' | 'frontend' | 'fullstack' | 'fintech' | 'mobile' | 'ai'
  badge: string
  badgeColor: string
  description: string
  duration: string
  highlights: string[]
  href: string
  dedicatedFor?: string
}

const tracks: CurriculumTrack[] = [
  {
    id: 'python-django',
    title: 'Python & Django Backend Engineering',
    subtitle: 'From Client-Side Concepts to Full Enterprise Systems',
    category: 'backend',
    badge: 'Curated Track',
    badgeColor: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/25',
    description:
      'The battle-tested transition path for frontend engineers moving into backend architecture with Python 3.12, Django 5.x, Django REST Framework, PostgreSQL, and Celery.',
    duration: '10 to 14 Weeks',
    highlights: [
      'Django ORM & safe migrations with zero raw SQL leaks',
      'DRF ModelSerializers, ViewSets & Swagger documentation',
      'SimpleJWT token auth with HTTP-only cookie security',
      'PostgreSQL production tuning & Celery background jobs',
    ],
    href: '/curriculum/python-django',
    dedicatedFor: 'Curated for Big Dave',
  },
  {
    id: 'node-backend',
    title: 'Node.js & TypeScript Backend Engineering',
    subtitle: 'NestJS, Prisma, PostgreSQL, Redis & BullMQ Queues',
    category: 'backend',
    badge: 'Enterprise Track',
    badgeColor: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/25',
    description:
      'Architect enterprise-grade server infrastructure using Node.js, NestJS, TypeScript, Prisma ORM, PostgreSQL, and BullMQ queues. Based on real-world sovereign payment platforms.',
    duration: '10 to 12 Weeks',
    highlights: [
      'NestJS modular architecture, Dependency Injection & Guards',
      'Prisma ORM data modeling, migrations & ACID transactions',
      'JWT authentication with Redis token revocation & rate limiting',
      'BullMQ asynchronous job queues & HMAC webhook pipelines',
    ],
    href: '/curriculum/node-backend',
  },
  {
    id: 'fintech-architecture',
    title: 'Fintech Engineering & Payment Architecture',
    subtitle: 'Ledgers, Idempotency, Webhooks & Regulatory Security',
    category: 'fintech',
    badge: 'High-Value Specialization',
    badgeColor: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/25',
    description:
      'The engineering principles behind multi-billion financial systems: immutable double-entry ledgers, idempotency keys, HMAC-SHA512 webhooks, and automated bank reconciliation.',
    duration: '8 to 10 Weeks',
    highlights: [
      'Double-entry bookkeeping math (never store float money)',
      'HMAC-SHA512 payment webhook verification pipelines',
      'Redis distributed idempotency locks against double charges',
      'Automated daily bank settlement reconciliation scripts',
    ],
    href: '/curriculum/fintech-architecture',
  },
  {
    id: 'mobile-react-native',
    title: 'Mobile Engineering with React Native & Expo',
    subtitle: 'Cross-Platform iOS & Android Apps from Web Concepts',
    category: 'mobile',
    badge: 'Native Mobile',
    badgeColor: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/25',
    description:
      'Transition your React & TypeScript instincts to native mobile apps using Expo Router, NativeWind, Biometric Keychain security, and EAS App Store deployments.',
    duration: '8 to 10 Weeks',
    highlights: [
      'Expo Router v4 file-based stacks, tabs & native modals',
      'Biometric authentication with FaceID & Hardware Keystore',
      'High-speed FlashList virtualization without frame drops',
      'Offline state sync with MMKV & App Store cloud builds',
    ],
    href: '/curriculum/mobile-react-native',
  },
  {
    id: 'ai-systems',
    title: 'AI Systems & LLM Application Engineering',
    subtitle: 'RAG Pipelines, Tool Calling & Autonomous Multi-Agents',
    category: 'ai',
    badge: 'Frontier Specialization',
    badgeColor: 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-500/25',
    description:
      'Engineer reliable AI software: structured outputs with Pydantic, hybrid vector search with pgvector, document chunking, and multi-agent coordination frameworks.',
    duration: '8 to 10 Weeks',
    highlights: [
      'Deterministic structured JSON completions with Zod/Pydantic',
      'Hybrid full-text & vector similarity search with pgvector',
      'Document chunking, embedding generation & cross-encoders',
      'Autonomous multi-agent workflows with state graphs & memory',
    ],
    href: '/curriculum/ai-systems',
  },
  {
    id: 'fullstack-web',
    title: 'Full-Stack Web Development Curriculum',
    subtitle: 'End-to-End Modern Engineering for Adult Learners',
    category: 'fullstack',
    badge: 'Comprehensive',
    badgeColor: 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/25',
    description:
      'A structured, project-based engineering roadmap tailored for adult learners. Covers terminal fluency, HTML/CSS, React, TypeScript, Node.js, Prisma, and Dockerized DevOps.',
    duration: '4 to 8 Months',
    highlights: [
      'The 70/30 engineering rule: 70% building, 30% theory',
      'TypeScript, React 19, Vite & TanStack Query client state',
      'Node.js REST API with Prisma ORM & ACID transactions',
      'DevOps pipeline with Vitest, Playwright & GitHub Actions',
    ],
    href: '/curriculum/fullstack-web',
  },
  {
    id: 'frontend-engineering',
    title: 'Modern Frontend Engineering Curriculum',
    subtitle: 'Sub-Second Speed, Component Architecture & Next.js 16',
    category: 'frontend',
    badge: 'UI / UX & Systems',
    badgeColor: 'bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/25',
    description:
      'Deep-dive into advanced frontend architecture: React 19 hooks, Next.js 16 App Router, Server Components, Core Web Vitals optimization, and design system engineering.',
    duration: '8 to 12 Weeks',
    highlights: [
      'Mastering JS event loop microtasks & TypeScript generics',
      'React 19 Server Actions, useOptimistic & Zustand UI state',
      'Next.js 16 Streaming SSR, App Router & SEO meta tags',
      'Sub-800ms LCP, 0 CLS, and Radix UI accessible components',
    ],
    href: '/curriculum/frontend-engineering',
  },
]

type FilterCategory = 'all' | 'backend' | 'frontend' | 'fullstack' | 'fintech' | 'mobile' | 'ai'

const filterTabs: { id: FilterCategory; label: string }[] = [
  { id: 'all', label: 'All Curriculums' },
  { id: 'backend', label: 'Backend & Django' },
  { id: 'frontend', label: 'Frontend & UI' },
  { id: 'fintech', label: 'Fintech Systems' },
  { id: 'mobile', label: 'Mobile & Expo' },
  { id: 'ai', label: 'AI & Multi-Agents' },
]

export function Curriculum() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all')

  const filteredTracks = activeCategory === 'all' 
    ? tracks 
    : tracks.filter((t) => t.category === activeCategory)

  return (
    <section id="curriculum" className="py-20 md:py-28 bg-brand-cream/60 dark:bg-zinc-950/60 border-t border-zinc-200/80 dark:border-zinc-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-brand-terra/10 text-brand-terra dark:text-brand-ember border border-brand-terra/20">
              <BookOpen size={14} /> Open Engineering Curriculums
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Engineering Curriculums &amp; Learning Hub
            </h2>
            <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 font-dm leading-relaxed">
              Curated, project-first learning paths developed by Gran Jefe. Bridging the gap between tutorial theory and production-grade architectures. Free for all learners.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/curriculum"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-dm font-semibold bg-brand-terra hover:bg-brand-ember text-white transition-all shadow-xs group"
            >
              <span>Explore All 7 Curriculums</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Category Filter Pills with animated layoutId */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {filterTabs.map((tab) => {
            const isSelected = activeCategory === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`relative px-4 py-2 rounded-xl text-xs font-dm font-semibold whitespace-nowrap transition-colors z-10 cursor-pointer ${
                  isSelected
                    ? 'text-white'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white bg-white/60 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeCurriculumFilter"
                    className="absolute inset-0 bg-brand-terra rounded-xl shadow-sm -z-10"
                    transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                  />
                )}
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Tracks Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredTracks.map((track) => (
              <motion.div
                layout
                key={track.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900/90 border border-zinc-200/90 dark:border-zinc-800 hover:border-brand-terra/50 dark:hover:border-brand-terra/50 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-terra/10 group card-specular"
              >
                <div className="space-y-4">
                  {/* Header Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold border ${track.badgeColor}`}>
                      {track.badge}
                    </span>
                    <span className="text-xs font-mono text-zinc-500">
                      {track.duration}
                    </span>
                  </div>

                  {track.dedicatedFor && (
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                      <Sparkles size={12} /> {track.dedicatedFor}
                    </div>
                  )}

                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-brand-terra dark:group-hover:text-brand-ember transition-colors">
                      {track.title}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono mt-1">
                      {track.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-zinc-600 dark:text-zinc-300 font-dm leading-relaxed">
                    {track.description}
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-2 pt-2 border-t border-zinc-100 dark:border-zinc-800">
                    <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-400">
                      What You Will Build &amp; Master
                    </p>
                    <ul className="space-y-1.5">
                      {track.highlights.map((h, i) => (
                        <li key={i} className="text-xs text-zinc-600 dark:text-zinc-400 flex items-start gap-2 font-dm">
                          <CheckCircle2 size={13} className="text-brand-terra shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-6 mt-6 border-t border-zinc-100 dark:border-zinc-800">
                  <Link
                    href={track.href}
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-xs font-dm font-semibold bg-zinc-100 hover:bg-brand-terra hover:text-white dark:bg-zinc-800/90 dark:hover:bg-brand-terra dark:hover:text-white text-zinc-900 dark:text-white transition-all shadow-xs group/btn"
                  >
                    <span>View Curriculum &amp; Projects</span>
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
