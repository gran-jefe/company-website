'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { 
  BookOpen, 
  Terminal, 
  Smartphone, 
  CreditCard, 
  Bot, 
  Layout, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Filter, 
  Search,
  ArrowLeft
} from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Logo } from '@/components/ui/Logo'

interface Track {
  id: string
  title: string
  subtitle: string
  category: 'backend' | 'frontend' | 'fullstack' | 'fintech' | 'ai'
  categoryLabel: string
  badge: string
  badgeColor: string
  description: string
  duration: string
  highlights: string[]
  href: string
  dedicatedFor?: string
}

const allTracks: Track[] = [
  {
    id: 'python-django',
    title: 'Python & Django Backend Engineering',
    subtitle: 'From Client-Side Concepts to Full Enterprise Systems',
    category: 'backend',
    categoryLabel: 'Backend Systems',
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
    id: 'fullstack-web',
    title: 'Full-Stack Web Development Curriculum',
    subtitle: 'End-to-End Modern Engineering for Adult Learners',
    category: 'fullstack',
    categoryLabel: 'Full-Stack Web',
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
    categoryLabel: 'Frontend Engineering',
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
  {
    id: 'mobile-react-native',
    title: 'Mobile Engineering with React Native & Expo',
    subtitle: 'Cross-Platform iOS & Android Apps from Web Concepts',
    category: 'fintech',
    categoryLabel: 'Mobile & Devices',
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
    id: 'fintech-architecture',
    title: 'Fintech Engineering & Payment Gateway Architecture',
    subtitle: 'Ledgers, Idempotency, Webhooks & Regulatory Security',
    category: 'fintech',
    categoryLabel: 'Fintech & Banking',
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
    id: 'ai-systems',
    title: 'AI Systems & LLM Application Engineering',
    subtitle: 'RAG Pipelines, Tool Calling & Autonomous Multi-Agents',
    category: 'ai',
    categoryLabel: 'AI Engineering',
    badge: 'Frontier Specialization',
    badgeColor: 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-500/25',
    description:
      'Engineer reliable AI software: structured outputs with Pydantic, hybrid vector search with pgvector, document chunking, and multi-agent coordination frameworks.',
    duration: '8 to 10 Weeks',
    highlights: [
      'Deterministic structured JSON completions with Zod/Pydantic',
      'Hybrid full-text & vector similarity search with pgvector',
      'Document chunking, embedding generation & cross-encoder re-ranking',
      'Autonomous multi-agent workflows with state graphs & memory',
    ],
    href: '/curriculum/ai-systems',
  },
]

export default function CurriculumHubPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    { id: 'all', label: 'All Curriculums' },
    { id: 'backend', label: 'Backend & Systems' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'fullstack', label: 'Full-Stack' },
    { id: 'fintech', label: 'Fintech & Mobile' },
    { id: 'ai', label: 'AI Engineering' },
  ]

  const filteredTracks = allTracks.filter((track) => {
    const matchesCategory = selectedCategory === 'all' || track.category === selectedCategory
    const matchesSearch =
      track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.highlights.some((h) => h.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-base text-brand-base dark:text-white selection:bg-brand-terra selection:text-white transition-colors duration-300 font-sans">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 sm:gap-2 text-xs font-dm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-brand-terra dark:hover:text-brand-ember transition-colors py-1.5 px-2.5 sm:px-3 rounded-lg bg-zinc-100 hover:bg-zinc-200/80 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800"
            >
              <ArrowLeft size={14} />
              <span>Back to Gran Jefe</span>
            </Link>
            <div className="hidden sm:block h-4 w-px bg-zinc-300 dark:bg-zinc-700" />
            <Link href="/" className="hidden sm:block">
              <Logo variant="auto" size="sm" />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-brand-terra/10 text-brand-terra dark:text-brand-ember border border-brand-terra/20">
              <Sparkles size={13} /> Open Learning Hub
            </span>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Hub Hero Banner */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-brand-terra/10 text-brand-terra dark:text-brand-ember border border-brand-terra/20">
            <BookOpen size={14} /> Production Engineering Curriculums
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-tight">
            Gran Jefe Engineering Learning Hub
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-dm leading-relaxed">
            Curated, project-first engineering curriculums built by senior practitioners. Each track bridges the gap between tutorial theory and production-grade architectures. Free today, built to scale your engineering career.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-zinc-200 dark:border-zinc-800">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-dm font-semibold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-brand-terra text-white shadow-xs'
                    : 'bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tracks, skills, tech..."
              className="w-full pl-9 pr-4 py-2 text-xs font-dm rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:border-brand-terra focus:ring-1 focus:ring-brand-terra transition-all"
            />
          </div>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTracks.map((track) => (
            <div
              key={track.id}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs hover:border-brand-terra/40 dark:hover:border-brand-terra/40 transition-all group"
            >
              <div className="space-y-4">
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

                {/* Highlights */}
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
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-xs font-dm font-semibold bg-zinc-100 hover:bg-brand-terra hover:text-white dark:bg-zinc-800 dark:hover:bg-brand-terra dark:hover:text-white text-zinc-900 dark:text-white transition-all shadow-xs group/btn"
                >
                  <span>View Full Curriculum &amp; Projects</span>
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Global Footer Navigation */}
        <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-dm font-semibold text-brand-terra dark:text-brand-ember hover:underline"
          >
            <ArrowLeft size={16} /> Return to Gran Jefe Homepage
          </Link>
          <span className="text-xs text-zinc-500 font-mono">
            Gran Jefe Engineering Curriculum Hub &bull; 2025
          </span>
        </div>
      </main>
    </div>
  )
}
