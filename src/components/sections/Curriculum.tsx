import Link from 'next/link'
import { ArrowRight, BookOpen, Terminal, Code2, Sparkles, Layers, CheckCircle2, ShieldCheck } from 'lucide-react'

interface CurriculumTrack {
  id: string
  title: string
  subtitle: string
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

export function Curriculum() {
  return (
    <section id="curriculum" className="py-20 md:py-28 bg-brand-cream/60 dark:bg-zinc-950/60 border-t border-zinc-200/80 dark:border-zinc-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-brand-terra/10 text-brand-terra dark:text-brand-ember border border-brand-terra/20">
            <BookOpen size={14} /> Open Engineering Curriculums
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Engineering Curriculums &amp; Roadmaps for Learners
          </h2>
          <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 font-dm leading-relaxed">
            Curated, project-first learning paths developed by Gran Jefe. No fluff, no obsolete tutorials, just production-grade software engineering roadmaps.
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tracks.map((track) => (
            <div
              key={track.id}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs hover:border-brand-terra/40 dark:hover:border-brand-terra/40 transition-all group"
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
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-xs font-dm font-semibold bg-zinc-100 hover:bg-brand-terra hover:text-white dark:bg-zinc-800 dark:hover:bg-brand-terra dark:hover:text-white text-zinc-900 dark:text-white transition-all shadow-xs group/btn"
                >
                  <span>View Full Curriculum</span>
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
