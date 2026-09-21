import type { Metadata } from 'next'
import Link from 'next/link'
import { 
  ArrowLeft, 
  BookOpen, 
  Terminal, 
  Sparkles, 
  ExternalLink, 
  Code2, 
  Layers, 
  CheckCircle2, 
  Zap, 
  Layout, 
  Palette, 
  Smartphone, 
  Gauge, 
  Cpu
} from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Logo } from '@/components/ui/Logo'

export const metadata: Metadata = {
  title: 'Modern Frontend Engineering Curriculum | Gran Jefe Learning Hub',
  description: 'Master enterprise-level frontend development from CSS architecture and TypeScript to React 19, Next.js 16, performance tuning, and accessible web systems.',
}

export default function FrontendEngineeringCurriculumPage() {
  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-base text-brand-base dark:text-white selection:bg-brand-terra selection:text-white transition-colors duration-300 font-sans">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/#curriculum"
              className="inline-flex items-center gap-1.5 sm:gap-2 text-xs font-dm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-brand-terra dark:hover:text-brand-ember transition-colors py-1.5 px-2.5 sm:px-3 rounded-lg bg-zinc-100 hover:bg-zinc-200/80 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800"
            >
              <ArrowLeft size={14} />
              <span>Back to Curriculums</span>
            </Link>
            <div className="hidden sm:block h-4 w-px bg-zinc-300 dark:bg-zinc-700" />
            <Link href="/" className="hidden sm:block">
              <Logo variant="auto" size="sm" />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-500/25">
              <Sparkles size={13} className="text-purple-500" /> UI/UX &amp; Architecture
            </span>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Hero Section */}
        <div className="space-y-5 border-b border-zinc-200 dark:border-zinc-800 pb-10 mb-12">
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-500/25">
              <Layout size={14} /> Interface Engineering
            </div>
            <span className="text-xs font-mono text-zinc-500">Track 03</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-tight">
            Modern Frontend Engineering Curriculum
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-dm">
            Move past tutorial hell and build high-performance, accessible, enterprise web interfaces using TypeScript, React 19, Next.js, and modern state architecture.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-sm">
                <Gauge size={18} /> Performance &amp; Core Web Vitals
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-dm">
                Learn how to optimize Largest Contentful Paint (LCP), Interaction to Next Paint (INP), layout shifts, and tree-shake bundle sizes for sub-second speeds.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-brand-terra dark:text-brand-ember font-bold text-sm">
                <Palette size={18} /> Design Systems &amp; Accessibility
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-dm">
                Master Tailwind CSS, Radix UI primitives, headless component patterns, and WCAG 2.1 AA keyboard accessibility.
              </p>
            </div>
          </div>
        </div>

        {/* Phase 1 */}
        <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                Phase 1
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                Advanced JavaScript &amp; TypeScript Mastery
              </h2>
            </div>
            <span className="text-xs font-mono font-medium text-zinc-500">Timeline: 4 to 5 Weeks</span>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-dm leading-relaxed">
            <strong>Goal:</strong> Gain deep mastery over the JavaScript event loop, asynchronous execution, and write bulletproof TypeScript interfaces with strict mode.
          </p>

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono">
              Core Skills to Master
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400 list-disc pl-5 font-dm">
              <li><strong>JavaScript Internals:</strong> Call stack, Web APIs, Microtasks (Promises) vs. Macrotasks (setTimeout), closures, and garbage collection.</li>
              <li><strong>TypeScript In-Depth:</strong> Generics, utility types (<code>Pick</code>, <code>Omit</code>, <code>Record</code>, <code>Partial</code>), conditional types, discriminated unions, and Zod runtime schema parsing.</li>
              <li><strong>Modern Web APIs:</strong> Fetch API with AbortController for cancelable requests, Intersection Observer for lazy loading, and Web Storage.</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <BookOpen size={14} className="text-blue-500" /> High-Yield Reading
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5">
                <li><a href="https://javascript.info/" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">The Modern JavaScript Tutorial <ExternalLink size={11} /></a></li>
                <li><a href="https://www.totaltypescript.com/tutorials" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Total TypeScript Tutorials <ExternalLink size={11} /></a></li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <Code2 size={14} className="text-blue-500" /> Video Tutorials
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5">
                <li><a href="https://www.youtube.com/watch?v=8aGhZQkoFbQ" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Philip Roberts: What is the Event Loop? <ExternalLink size={11} /></a></li>
                <li><a href="https://www.youtube.com/playlist?list=PLNqp92_EXZBJYFrpEzdO2EapvU0GOJ09n" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Jack Herrington: No BS TS <ExternalLink size={11} /></a></li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm text-emerald-900 dark:text-emerald-300">
            <strong>Checkmark Project:</strong> Build a type-safe HTTP Client SDK with TypeScript generics, automatic token injection, request cancellation via AbortController, and runtime payload validation with Zod.
          </div>
        </section>

        {/* Phase 2 */}
        <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                Phase 2
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                React 19 &amp; State Architecture
              </h2>
            </div>
            <span className="text-xs font-mono font-medium text-zinc-500">Timeline: 5 to 6 Weeks</span>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-dm leading-relaxed">
            <strong>Goal:</strong> Construct clean component hierarchies, separate server state from UI state, and master modern React hooks and lifecycle rendering.
          </p>

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono">
              Core Skills to Master
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400 list-disc pl-5 font-dm">
              <li><strong>React 19 Innovations:</strong> Actions, <code>useActionState</code>, <code>useOptimistic</code>, transitions with <code>useTransition</code>, and the React compiler mental model.</li>
              <li><strong>Server State with TanStack Query:</strong> Caching strategies, query invalidation, background refetching, pagination, and optimistic UI mutations.</li>
              <li><strong>Client UI State:</strong> Lightweight global state with Zustand for modals, cart items, user preferences, and theme toggles.</li>
              <li><strong>Animation &amp; Micro-interactions:</strong> Framer Motion layout animations, gesture controls, and smooth layoutId transitions.</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <BookOpen size={14} className="text-amber-500" /> High-Yield Reading
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5">
                <li><a href="https://react.dev/learn" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Official React Documentation <ExternalLink size={11} /></a></li>
                <li><a href="https://tkdodo.eu/blog/practical-react-query" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">TkDodo Practical React Query Series <ExternalLink size={11} /></a></li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <Code2 size={14} className="text-amber-500" /> Video Tutorials
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5">
                <li><a href="https://www.youtube.com/watch?v=7kVEtq4U_gI" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">React 19 Full Breakdown <ExternalLink size={11} /></a></li>
                <li><a href="https://www.youtube.com/watch?v=novnyCaa7To" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">TanStack Query in 100 Seconds &amp; Practical Tutorial <ExternalLink size={11} /></a></li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm text-emerald-900 dark:text-emerald-300">
            <strong>Checkmark Project:</strong> Build a high-speed Financial Dashboard with real-time currency converters, transaction filtering, optimistic balance updates, and Framer Motion charts.
          </div>
        </section>

        {/* Phase 3 */}
        <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                Phase 3
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                Next.js 16 &amp; Full-Stack Frontend Architecture
              </h2>
            </div>
            <span className="text-xs font-mono font-medium text-zinc-500">Timeline: 5 to 6 Weeks</span>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-dm leading-relaxed">
            <strong>Goal:</strong> Master the App Router, React Server Components (RSC), Streaming SSR, Route Handlers, SEO metadata, and dynamic caching.
          </p>

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono">
              Core Skills to Master
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400 list-disc pl-5 font-dm">
              <li><strong>Server Components vs. Client Components:</strong> When to use <code>&apos;use client&apos;</code>, component boundaries, and passing server data to interactive client islands.</li>
              <li><strong>Data Fetching &amp; Caching:</strong> Static generation (SSG), Incremental Static Regeneration (ISR), dynamic rendering, and cache revalidation with <code>revalidateTag</code>.</li>
              <li><strong>Server Actions:</strong> Handling form submissions directly on the server without writing manual API routes.</li>
              <li><strong>SEO &amp; Performance:</strong> Dynamic metadata, OpenGraph cards, JSON-LD structured data, and font/image optimization.</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <BookOpen size={14} className="text-purple-500" /> High-Yield Reading
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5">
                <li><a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Official Next.js App Router Documentation <ExternalLink size={11} /></a></li>
                <li><a href="https://web.dev/explore/fast" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Google Web.dev: Fast Load Times &amp; CWV <ExternalLink size={11} /></a></li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <Code2 size={14} className="text-purple-500" /> Video Tutorials
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5">
                <li><a href="https://www.youtube.com/watch?v=wm5gMKuwSYk" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Jack Herrington: React Server Components Mental Model <ExternalLink size={11} /></a></li>
                <li><a href="https://www.youtube.com/watch?v=dpx46gK6u94" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">freeCodeCamp: Next.js Full Course <ExternalLink size={11} /></a></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Capstone Project */}
        <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-transparent border border-purple-500/30 shadow-xs space-y-5">
          <div className="flex items-center gap-3">
            <Sparkles className="text-purple-500" size={26} />
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">
              The Capstone: Design System &amp; Enterprise SaaS Frontend
            </h2>
          </div>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-dm leading-relaxed">
            Construct a production-grade multi-tenant web console that proves you are a top 1% frontend engineer:
          </p>

          <div className="space-y-3 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-dm">
            <div className="p-4 rounded-xl bg-white/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <p className="font-bold text-zinc-900 dark:text-white text-sm">Suggested Project: Cloud Analytics &amp; Operations Command Center</p>
              <ul className="list-disc pl-5 space-y-1.5 text-zinc-600 dark:text-zinc-400">
                <li><strong>Framework:</strong> Next.js 16 (App Router, Server Actions, Dynamic Streaming Suspense).</li>
                <li><strong>Design System:</strong> Custom components built on Radix UI primitives, Tailwind CSS, dark/light theme persistence.</li>
                <li><strong>Keyboard &amp; Power User Tools:</strong> Global Command Palette (<code>Cmd+K</code>), shortcut navigation, and accessible modal traps.</li>
                <li><strong>Performance:</strong> 98+ Google Lighthouse Score, 0 layout shifts, zero cumulative layout shift (CLS), sub-800ms LCP.</li>
                <li><strong>Testing &amp; CI:</strong> Vitest unit tests, Playwright visual regression tests, automated deployment on Vercel.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer Navigation */}
        <div className="mt-14 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/#curriculum"
            className="inline-flex items-center gap-2 text-sm font-dm font-semibold text-brand-terra dark:text-brand-ember hover:underline"
          >
            <ArrowLeft size={16} /> Explore All Learning Tracks
          </Link>
          <span className="text-xs text-zinc-500 font-mono">
            Gran Jefe Engineering Curriculum &bull; 2025
          </span>
        </div>
      </main>
    </div>
  )
}
