import type { Metadata } from 'next'
import Link from 'next/link'
import { 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  ExternalLink, 
  Layers, 
  Gauge, 
  Eye, 
  Zap, 
  Smartphone, 
  Sliders, 
  Compass, 
  FileText, 
  AlertTriangle, 
  HelpCircle, 
  TrendingUp, 
  Lock, 
  RefreshCw, 
  CheckSquare, 
  BarChart3, 
  Users, 
  BookOpen,
  ArrowRight,
  Palette,
  Layout,
  Contrast,
  MousePointerClick,
  SlidersHorizontal
} from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Logo } from '@/components/ui/Logo'

export const metadata: Metadata = {
  title: 'UI/UX Non-Negotiables for Web Applications | Gran Jefe Product Quality Playbook',
  description: 'The definitive engineering and product design standard for building web apps that are appealing, intuitive, reliable, accessible, and competitive. Based on the 12 non-negotiable standards and release quality gate.',
}

export default function UIUXPlaybookPage() {
  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-base text-brand-base dark:text-white selection:bg-brand-terra selection:text-white transition-colors duration-300 font-sans">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 sm:gap-2 text-xs font-dm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-brand-terra dark:hover:text-brand-ember transition-colors py-1.5 px-2.5 sm:px-3 rounded-lg bg-zinc-100 hover:bg-zinc-200/80 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800"
            >
              <ArrowLeft size={14} />
              <span>Back to Studio</span>
            </Link>
            <div className="hidden sm:block h-4 w-px bg-zinc-300 dark:bg-zinc-700" />
            <Link href="/" className="hidden sm:block">
              <Logo variant="auto" size="sm" />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/curriculum"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-brand-terra/10 text-brand-terra dark:text-brand-ember border border-brand-terra/20 hover:bg-brand-terra/15 transition-colors"
            >
              <BookOpen size={13} /> Learning Hub
            </Link>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25">
              <ShieldCheck size={13} className="text-emerald-500" /> Official Playbook
            </span>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Playbook Header */}
        <div className="space-y-6 border-b border-zinc-200 dark:border-zinc-800 pb-12 mb-14">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
              Product Design Standard
            </span>
            <span className="text-zinc-400 dark:text-zinc-600">&bull;</span>
            <span className="text-xs font-mono text-zinc-500">UI/UX Quality For Web Apps</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.1] font-syne">
            UI/UX Non-Negotiables <br className="hidden sm:inline" />
            for Web Applications
          </h1>

          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl leading-relaxed font-dm">
            A practical, battle-tested standard for building software that is appealing, intuitive, reliable, accessible, and competitive.
          </p>

          {/* Purpose Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-brand-terra dark:text-brand-ember">
              // Purpose &amp; Scope
            </h3>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-dm">
              This document defines the product experience standards that guide discovery, design, implementation, testing, and release at Gran Jefe. It is mandatory reading for product managers, designers, frontend and backend engineers, QA teams, and founders building functional web applications.
            </p>

            <div className="p-4 sm:p-5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 text-xs sm:text-sm text-amber-900 dark:text-amber-200 font-dm leading-relaxed">
              <strong>The Central Principle:</strong> A world-class app helps people accomplish their goals easily, quickly, confidently, and with as little unnecessary effort as possible. Visual beauty matters, but it cannot compensate for confusing workflows, unreliable behavior, inaccessible controls, or loss of trust.
            </div>
          </div>

          {/* The Four Questions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            <div className="p-5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-2">
              <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                01. Clarity
              </span>
              <p className="text-sm font-bold text-zinc-900 dark:text-white">Can users understand what it does?</p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 font-dm leading-relaxed">
                Do people understand what the app does immediately upon arrival and know what action to take next?
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-2">
              <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                02. Efficiency
              </span>
              <p className="text-sm font-bold text-zinc-900 dark:text-white">Can they finish without friction?</p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 font-dm leading-relaxed">
                Can users complete their primary jobs-to-be-done without repetitive clicks, confusing inputs, or pointless decisions?
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-2">
              <span className="text-xs font-mono font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                03. Confidence
              </span>
              <p className="text-sm font-bold text-zinc-900 dark:text-white">Do they trust what is happening?</p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 font-dm leading-relaxed">
                Are fees, state changes, and transaction outcomes transparent before and after commitment?
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-2">
              <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                04. Reliability
              </span>
              <p className="text-sm font-bold text-zinc-900 dark:text-white">Does it hold up under failure?</p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 font-dm leading-relaxed">
                Does the interface maintain state and provide clear recovery when network drops or backend data fails?
              </p>
            </div>
          </div>
        </div>

        {/* Part 1: The 12 Non-Negotiables */}
        <section className="mb-16 space-y-8">
          <div className="flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-800 pb-4">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-brand-terra/10 text-brand-terra dark:text-brand-ember border border-brand-terra/20">
              Part 1
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-syne text-zinc-900 dark:text-white">
              The 12 Non-Negotiable Standards
            </h2>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-dm">
            Each standard defines the user problem to prevent, the required engineering behavior, and the acceptance test for code review:
          </p>

          <div className="grid grid-cols-1 gap-6">
            {/* 1 */}
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-3">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                  <span className="text-brand-terra font-mono text-sm">01.</span> Clear Purpose &amp; Intuitive Navigation
                </h3>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">Navigation</span>
              </div>
              <p className="text-xs text-red-600 dark:text-red-400 font-dm"><strong>Pain point:</strong> Users cannot tell where to start, where they are, or where to find a feature.</p>
              <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-dm leading-relaxed"><strong>Required standard:</strong> Give every screen a clear purpose. Organise navigation around users&apos; goals, use familiar labels, show the active location, and make important destinations easy to find. Keep information architecture shallow.</p>
              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-900 dark:text-emerald-300 font-dm">
                <strong>Acceptance test:</strong> A first-time user can locate core features without a teammate explaining the interface.
              </div>
            </div>

            {/* 2 */}
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-3">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                  <span className="text-brand-terra font-mono text-sm">02.</span> Effortless Core Workflows
                </h3>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">Workflow</span>
              </div>
              <p className="text-xs text-red-600 dark:text-red-400 font-dm"><strong>Pain point:</strong> Simple tasks take too many clicks, ask for repeated information, or force irrelevant decisions.</p>
              <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-dm leading-relaxed"><strong>Required standard:</strong> Map the main tasks from start to finish. Remove redundant steps, reuse known information, set sensible defaults, and reveal advanced options only when needed. Optimise frequent journeys first.</p>
              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-900 dark:text-emerald-300 font-dm">
                <strong>Acceptance test:</strong> Representative users complete the top 3 to 5 tasks without avoidable friction.
              </div>
            </div>

            {/* 3 */}
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-3">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                  <span className="text-brand-terra font-mono text-sm">03.</span> Meaningful System Feedback
                </h3>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">Feedback</span>
              </div>
              <p className="text-xs text-red-600 dark:text-red-400 font-dm"><strong>Pain point:</strong> A click produces no visible response, or users cannot tell whether work is pending, complete, or failed.</p>
              <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-dm leading-relaxed"><strong>Required standard:</strong> Explicitly design the relevant idle, loading, success, error, empty, disabled, pending, and offline states. Use progress indicators when useful and make outcomes persistent when users navigate away.</p>
              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-900 dark:text-emerald-300 font-dm">
                <strong>Acceptance test:</strong> Users can tell what the system is doing and what happened after every important action.
              </div>
            </div>

            {/* 4 */}
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-3">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                  <span className="text-brand-terra font-mono text-sm">04.</span> Error Prevention &amp; Recovery
                </h3>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">Resilience</span>
              </div>
              <p className="text-xs text-red-600 dark:text-red-400 font-dm"><strong>Pain point:</strong> Users make avoidable mistakes, lose input, or cannot recover from failures.</p>
              <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-dm leading-relaxed"><strong>Required standard:</strong> Validate fields at useful moments, explain constraints, preserve valid input, and provide corrective guidance. Add confirmations for consequential actions; support undo or cancellation where practical. Never rely on generic error banners alone.</p>
              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-900 dark:text-emerald-300 font-dm">
                <strong>Acceptance test:</strong> A user can correct a common mistake and continue without restarting the workflow.
              </div>
            </div>

            {/* 5 */}
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-3">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                  <span className="text-brand-terra font-mono text-sm">05.</span> Strong Visual Hierarchy
                </h3>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">Design</span>
              </div>
              <p className="text-xs text-red-600 dark:text-red-400 font-dm"><strong>Pain point:</strong> Everything competes for attention, obscuring the screen&apos;s purpose and next action.</p>
              <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-dm leading-relaxed"><strong>Required standard:</strong> Use consistent typography, spacing, contrast, alignment, grouping, and restrained colour to show importance. Make the primary action distinguishable and eliminate decorative clutter that competes with task completion.</p>
              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-900 dark:text-emerald-300 font-dm">
                <strong>Acceptance test:</strong> At a glance, a user can identify the page purpose, important information, and primary action.
              </div>
            </div>

            {/* 6 */}
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-3">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                  <span className="text-brand-terra font-mono text-sm">06.</span> Consistency Across the Product
                </h3>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">Design System</span>
              </div>
              <p className="text-xs text-red-600 dark:text-red-400 font-dm"><strong>Pain point:</strong> Controls look or behave differently between screens, forcing users to relearn patterns.</p>
              <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-dm leading-relaxed"><strong>Required standard:</strong> Create a shared design system for colour and spacing tokens, typography, buttons, inputs, tables, dialogs, icons, alerts, focus states, and responsive behavior. Reuse components and document exceptions.</p>
              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-900 dark:text-emerald-300 font-dm">
                <strong>Acceptance test:</strong> Patterns behave consistently, and knowledge gained on one screen transfers seamlessly to others.
              </div>
            </div>

            {/* 7 */}
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-3">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                  <span className="text-brand-terra font-mono text-sm">07.</span> Responsive Design That Works
                </h3>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">Mobile &amp; Responsive</span>
              </div>
              <p className="text-xs text-red-600 dark:text-red-400 font-dm"><strong>Pain point:</strong> Desktop layouts are merely compressed on smaller screens, causing horizontal overflow and un-tappable controls.</p>
              <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-dm leading-relaxed"><strong>Required standard:</strong> Design for available space and input method. Reflow content, adapt navigation, keep key actions reachable, and make complex tables or dialogs usable on supported devices. Test on real viewport sizes, not just browser resize previews.</p>
              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-900 dark:text-emerald-300 font-dm">
                <strong>Acceptance test:</strong> Users can complete core tasks on supported phones, tablets, and desktop screen sizes.
              </div>
            </div>

            {/* 8 */}
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-3">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                  <span className="text-brand-terra font-mono text-sm">08.</span> Accessibility by Default (WCAG 2.2 AA)
                </h3>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">Accessibility</span>
              </div>
              <p className="text-xs text-red-600 dark:text-red-400 font-dm"><strong>Pain point:</strong> Low contrast, missing labels, keyboard traps, or inaccessible custom controls prevent users from operating the app.</p>
              <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-dm leading-relaxed"><strong>Required standard:</strong> Use WCAG 2.2 Level AA as a practical baseline. Provide semantic HTML structure, meaningful labels, visible focus rings, keyboard-operable controls, sufficient contrast (4.5:1 minimum), understandable errors, and text alternatives. Never rely on colour alone.</p>
              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-900 dark:text-emerald-300 font-dm">
                <strong>Acceptance test:</strong> Core tasks work cleanly with keyboard navigation alone, enlarged text, and assistive technology.
              </div>
            </div>

            {/* 9 */}
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-3">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                  <span className="text-brand-terra font-mono text-sm">09.</span> Speed &amp; Visual Stability (Core Web Vitals)
                </h3>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">Performance</span>
              </div>
              <p className="text-xs text-red-600 dark:text-red-400 font-dm"><strong>Pain point:</strong> The app is slow, content shifts unpredictably while loading, or becomes unresponsive during interactions.</p>
              <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-dm leading-relaxed"><strong>Required standard:</strong> Optimise images, fonts, JavaScript, API payloads, and rendering. Target LCP &le; 2.5s, INP &le; 200ms, and CLS &le; 0.1 at the 75th percentile. Use skeleton loaders or progress feedback where they help rather than disguise long waits.</p>
              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-900 dark:text-emerald-300 font-dm">
                <strong>Acceptance test:</strong> Performance is verified with real-user field data and critical interactions stay responsive under slow 3G throttles.
              </div>
            </div>

            {/* 10 */}
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-3">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                  <span className="text-brand-terra font-mono text-sm">10.</span> Clear Content, Microcopy &amp; Forms
                </h3>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">Microcopy</span>
              </div>
              <p className="text-xs text-red-600 dark:text-red-400 font-dm"><strong>Pain point:</strong> Form labels, instructions, requirements, or consequences are vague or written in internal company jargon.</p>
              <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-dm leading-relaxed"><strong>Required standard:</strong> Use plain language and descriptive action buttons (&quot;Confirm Transfer of ₦25,000&quot; instead of &quot;OK&quot;). Mark required fields clearly, ask only for essential data, associate errors with fields, and assign appropriate mobile virtual keyboard types (email, numeric, tel).</p>
              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-900 dark:text-emerald-300 font-dm">
                <strong>Acceptance test:</strong> Users understand what to enter, why it is required, and what will happen after clicking submit.
              </div>
            </div>

            {/* 11 */}
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-3">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                  <span className="text-brand-terra font-mono text-sm">11.</span> Trust, Privacy &amp; User Control
                </h3>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">Trust</span>
              </div>
              <p className="text-xs text-red-600 dark:text-red-400 font-dm"><strong>Pain point:</strong> Users cannot tell whether financial data is safe, an action is reversible, or a displayed status is actually confirmed.</p>
              <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-dm leading-relaxed"><strong>Required standard:</strong> Communicate transaction fees, terms, permissions, and status with complete honesty. Minimise sensitive data exposure (mask card PANs). For consequential actions, show the essential facts before commitment.</p>
              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-900 dark:text-emerald-300 font-dm">
                <strong>Acceptance test:</strong> Users can make informed decisions with zero surprise fees and verify the result of important actions.
              </div>
            </div>

            {/* 12 */}
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-3">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                  <span className="text-brand-terra font-mono text-sm">12.</span> Continuous Usability Testing
                </h3>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">Testing</span>
              </div>
              <p className="text-xs text-red-600 dark:text-red-400 font-dm"><strong>Pain point:</strong> The product works for the engineers who built it, but breaks down for unfamiliar end users.</p>
              <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-dm leading-relaxed"><strong>Required standard:</strong> Test realistic tasks with representative users. Observe hesitation, wrong turns, errors, and drop-off points. Combine quantitative analytics with qualitative user feedback to diagnose friction causes.</p>
              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-900 dark:text-emerald-300 font-dm">
                <strong>Acceptance test:</strong> Major usability issues are recorded, prioritised, fixed, and retested against empirical evidence before and after launch.
              </div>
            </div>
          </div>
        </section>

        {/* Part 2: Product Category UX Priorities */}
        <section className="mb-16 space-y-6">
          <div className="flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-800 pb-4">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
              Part 2
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-syne text-zinc-900 dark:text-white">
              Experience Priorities by Product Category
            </h2>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-dm">
            Different application types demand distinct UX priorities. Benchmark against the job users are hiring your product to accomplish:
          </p>

          <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xs bg-white dark:bg-zinc-900">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-200 font-bold font-mono">
                  <th className="p-4">Product Category</th>
                  <th className="p-4">Primary UX Priorities to Enforce</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-700 dark:text-zinc-300 font-dm">
                <tr className="hover:bg-zinc-50/60 dark:hover:bg-zinc-800/40">
                  <td className="p-4 font-bold text-zinc-900 dark:text-white">SaaS Platforms</td>
                  <td className="p-4">Frictionless onboarding, intuitive navigation, role permissions, search, workflow efficiency, and robust settings.</td>
                </tr>
                <tr className="hover:bg-zinc-50/60 dark:hover:bg-zinc-800/40">
                  <td className="p-4 font-bold text-zinc-900 dark:text-white">Admin Dashboards</td>
                  <td className="p-4">Data accuracy, dense data tables, rapid filtering, pagination, bulk actions, and comprehensive auditability.</td>
                </tr>
                <tr className="hover:bg-zinc-50/60 dark:hover:bg-zinc-800/40 bg-amber-50/30 dark:bg-amber-950/20">
                  <td className="p-4 font-bold text-amber-700 dark:text-amber-300">Fintech &amp; Banking</td>
                  <td className="p-4 font-semibold">Crystal-clear transaction states, transparent fees, biometric authorization, payment confirmation sheets, and instant failure recovery.</td>
                </tr>
                <tr className="hover:bg-zinc-50/60 dark:hover:bg-zinc-800/40">
                  <td className="p-4 font-bold text-zinc-900 dark:text-white">E-Commerce</td>
                  <td className="p-4">Product discovery, accurate specifications, real-time inventory status, delivery fee transparency, and 1-click checkout.</td>
                </tr>
                <tr className="hover:bg-zinc-50/60 dark:hover:bg-zinc-800/40">
                  <td className="p-4 font-bold text-zinc-900 dark:text-white">Healthcare</td>
                  <td className="p-4">HIPAA privacy, accessible high-contrast forms, clear patient instructions, understandable test results, and safe recovery.</td>
                </tr>
                <tr className="hover:bg-zinc-50/60 dark:hover:bg-zinc-800/40">
                  <td className="p-4 font-bold text-zinc-900 dark:text-white">Education &amp; LMS</td>
                  <td className="p-4">Course discovery, learning milestone tracking, self-paced progress persistence, clear feedback, and continuity across sessions.</td>
                </tr>
                <tr className="hover:bg-zinc-50/60 dark:hover:bg-zinc-800/40">
                  <td className="p-4 font-bold text-zinc-900 dark:text-white">Consumer Web Apps</td>
                  <td className="p-4">Immediate first-time success, fluid responsive interaction, helpful personalization, and zero distracting UI clutter.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Part 3: Product Release Quality Gate */}
        <section className="mb-16 space-y-6">
          <div className="flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-800 pb-4">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
              Part 3
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-syne text-zinc-900 dark:text-white">
              Product Release Quality Gate
            </h2>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-dm">
            Every product or major feature shipped by Gran Jefe must pass these 5 verification pillars before deployment. A checked item means the team has verified it empirically:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Pillar 1 */}
            <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-3">
              <h3 className="text-sm sm:text-base font-syne font-bold text-brand-terra flex items-center gap-2">
                <CheckSquare size={16} /> Core Functionality
              </h3>
              <ul className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 space-y-2 list-disc pl-4 font-dm">
                <li>Every primary action works end-to-end with real application data.</li>
                <li>Loading, empty, success, failure, disabled, and offline states are handled.</li>
                <li>Forms validate cleanly and preserve input when validation errors occur.</li>
                <li>Navigation, search, filters, sorting, and pagination work accurately.</li>
                <li>Unsuccessful or duplicate clicks do not create misleading success records.</li>
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-3">
              <h3 className="text-sm sm:text-base font-syne font-bold text-purple-600 dark:text-purple-400 flex items-center gap-2">
                <Layers size={16} /> Design &amp; Usability
              </h3>
              <ul className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 space-y-2 list-disc pl-4 font-dm">
                <li>The purpose and primary call-to-action on every screen are unmistakable.</li>
                <li>Typography, spacing, colours, icons, and components follow a shared design system.</li>
                <li>The most frequent tasks omit redundant steps or repetitive data entry.</li>
                <li>Consequential actions feature confirmation modals and clear outcome notices.</li>
                <li>Labels and microcopy use language the intended customer understands.</li>
              </ul>
            </div>

            {/* Pillar 3 */}
            <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-3">
              <h3 className="text-sm sm:text-base font-syne font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                <Smartphone size={16} /> Responsive &amp; Accessible
              </h3>
              <ul className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 space-y-2 list-disc pl-4 font-dm">
                <li>Tested on real mobile, tablet, laptop, and ultra-wide desktop viewports.</li>
                <li>Keyboard navigation and visible focus rings operate across the entire journey.</li>
                <li>Contrast ratios meet WCAG 2.2 AA (4.5:1 text, 3:1 graphical elements).</li>
                <li>Dialogs, dropdowns, tables, and modals remain usable when zoomed to 200%.</li>
                <li>Information is never communicated by colour alone.</li>
              </ul>
            </div>

            {/* Pillar 4 */}
            <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-3">
              <h3 className="text-sm sm:text-base font-syne font-bold text-blue-600 dark:text-blue-400 flex items-center gap-2">
                <Gauge size={16} /> Performance &amp; Trust
              </h3>
              <ul className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 space-y-2 list-disc pl-4 font-dm">
                <li>Core Web Vitals meet targets: LCP &le; 2.5s, INP &le; 200ms, CLS &le; 0.1.</li>
                <li>The interface remains usable when network requests are throttled or fail.</li>
                <li>Authentication and sensitive data handling have completed security review.</li>
                <li>Displayed balances, prices, and status match the backend ledger exactly.</li>
                <li>Privacy choices and pricing terms are explained before commitment.</li>
              </ul>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 text-white space-y-2">
            <h4 className="text-xs font-mono font-bold text-amber-400 flex items-center gap-2">
              <AlertTriangle size={15} /> Release Decision Rule
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 font-dm leading-relaxed">
              Do not treat the quality checklist as a substitute for judgement. <strong>Block deployment</strong> for defects that could cause data loss, unauthorised access, misleading payment outcomes, or inability to complete a core task.
            </p>
          </div>
        </section>

        {/* Part 4 & 5: Prioritization & Team Principles */}
        <section className="mb-16 space-y-8">
          <div className="flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-800 pb-4">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
              Part 4 &amp; 5
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-syne text-zinc-900 dark:text-white">
              Practical Prioritization &amp; Team Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">PRIORITY 1</span>
              <h4 className="text-sm font-bold text-zinc-900 dark:text-white">Make it Reliable</h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 font-dm">
                Fix broken flows, incorrect data, security/privacy risks, lost input, and misleading status.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">PRIORITY 2</span>
              <h4 className="text-sm font-bold text-zinc-900 dark:text-white">Make it Effortless</h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 font-dm">
                Streamline navigation, task steps, terminology, form fields, and eliminate friction points.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <span className="text-xs font-mono font-bold text-purple-600 dark:text-purple-400">PRIORITY 3</span>
              <h4 className="text-sm font-bold text-zinc-900 dark:text-white">Make it Fast &amp; Inclusive</h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 font-dm">
                Tune rendering speeds, keyboard accessibility, contrast, and assistive tech support.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <span className="text-xs font-mono font-bold text-brand-terra">PRIORITY 4</span>
              <h4 className="text-sm font-bold text-zinc-900 dark:text-white">Make it Distinctive</h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 font-dm">
                Refine brand identity, micro-interactions, motion curves, and power user shortcuts.
              </p>
            </div>
          </div>

          {/* Reference Sources */}
          <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200">
              Authoritative Reference Sources
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs font-dm">
              <a href="https://www.nngroup.com/articles/ten-usability-heuristics/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-brand-terra transition-colors flex items-center justify-between">
                <span>Nielsen Norman Group (10 Heuristics)</span>
                <ExternalLink size={12} className="text-zinc-400 shrink-0" />
              </a>
              <a href="https://www.w3.org/WAI/WCAG22/quickref/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-brand-terra transition-colors flex items-center justify-between">
                <span>W3C WCAG 2.2 Quick Reference</span>
                <ExternalLink size={12} className="text-zinc-400 shrink-0" />
              </a>
              <a href="https://web.dev/explore/fast" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-brand-terra transition-colors flex items-center justify-between">
                <span>Google Core Web Vitals Thresholds</span>
                <ExternalLink size={12} className="text-zinc-400 shrink-0" />
              </a>
              <a href="https://design-system.service.gov.uk/components/error-summary/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-brand-terra transition-colors flex items-center justify-between">
                <span>GOV.UK Error Summary &amp; Forms</span>
                <ExternalLink size={12} className="text-zinc-400 shrink-0" />
              </a>
              <a href="https://baymard.com/checkout-usability" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-brand-terra transition-colors flex items-center justify-between">
                <span>Baymard Institute Checkout UX</span>
                <ExternalLink size={12} className="text-zinc-400 shrink-0" />
              </a>
              <a href="https://www.nngroup.com/articles/visibility-system-status/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-brand-terra transition-colors flex items-center justify-between">
                <span>NN/g Visibility of System Status</span>
                <ExternalLink size={12} className="text-zinc-400 shrink-0" />
              </a>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* VOLUME 02: THE PREMIUM UI DESIGN STANDARD                      */}
        {/* ============================================================== */}
        <section id="volume-02" className="mt-20 pt-16 border-t-2 border-brand-terra/20 space-y-12">
          {/* Header Banner */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-brand-terra/10 text-brand-terra dark:text-brand-ember border border-brand-terra/20">
              <Sparkles size={14} /> PRODUCT DESIGN PLAYBOOK / 02
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-syne font-extrabold text-zinc-900 dark:text-white tracking-tight">
              The Premium UI Design Standard
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-3xl leading-relaxed font-dm">
              Visual design non-negotiables for web products that feel polished, clear, credible, and distinctive. Built on three foundations: <span className="font-semibold text-brand-terra dark:text-brand-ember">01 Clarity</span>, <span className="font-semibold text-brand-terra dark:text-brand-ember">02 Restraint</span>, and <span className="font-semibold text-brand-terra dark:text-brand-ember">03 Consistency</span>.
            </p>

            {/* The Guiding Rule Callout */}
            <div className="p-6 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 text-amber-900 dark:text-amber-200 space-y-2 font-dm">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400">
                // The Guiding Rule
              </span>
              <p className="text-sm sm:text-base leading-relaxed font-medium">
                <strong>Premium does not mean more gradients, more shadows, more animation, or more cards.</strong> It means better judgement: fewer competing elements, stronger hierarchy, thoughtful spacing, refined details, and consistent execution.
              </p>
            </div>
          </div>

          {/* Section 01: The Premium Visual Mindset */}
          <div className="space-y-6">
            <div className="border-b border-zinc-200 dark:border-zinc-800 pb-3">
              <span className="text-xs font-mono font-bold text-brand-terra dark:text-brand-ember">01 / FOUNDATIONS</span>
              <h3 className="text-xl sm:text-2xl font-syne font-bold text-zinc-900 dark:text-white mt-1">
                The Premium Visual Mindset
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-2">
                <span className="text-xs font-mono font-bold text-brand-terra">01. Clarity before decoration</span>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-dm leading-relaxed">
                  The visual hierarchy must make the purpose of a page, its key information, and its primary action obvious in 3 to 5 seconds.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-2">
                <span className="text-xs font-mono font-bold text-purple-600 dark:text-purple-400">02. Restraint creates emphasis</span>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-dm leading-relaxed">
                  When every element is loud, nothing is important. Use colour, weight, scale, borders, and motion selectively.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-2">
                <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">03. Consistency creates confidence</span>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-dm leading-relaxed">
                  A repeated, reliable visual language feels deliberate. Repeated exceptions make a product feel assembled rather than designed.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-2">
                <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">04. Alignment signals craft</span>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-dm leading-relaxed">
                  Edges, baselines, columns, icons, labels, and controls should line up with intention. Tiny misalignments are surprisingly visible.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-2">
                <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400">05. Real content is the design</span>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-dm leading-relaxed">
                  Long names, empty data, large numbers, errors, and dense tables must still look good. Never design only around ideal placeholder content.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-2">
                <span className="text-xs font-mono font-bold text-brand-terra">06. Useful details beat visual tricks</span>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-dm leading-relaxed">
                  A purposeful status badge, clear focus state, or well-written empty state is worth more than ornamental effects.
                </p>
              </div>
            </div>

            {/* Visual Hierarchy Layers Table */}
            <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-xs">
              <div className="p-4 bg-zinc-50 dark:bg-zinc-950/60 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-zinc-800 dark:text-zinc-200">Visual Hierarchy Layers</span>
                <span className="text-xs font-mono text-zinc-500">The 4 Functional Planes</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-dm">
                  <thead className="bg-zinc-100/50 dark:bg-zinc-900/50 text-zinc-600 dark:text-zinc-400 border-b border-zinc-200 dark:border-zinc-800">
                    <tr>
                      <th className="p-3.5 font-semibold">Layer</th>
                      <th className="p-3.5 font-semibold">What it communicates</th>
                      <th className="p-3.5 font-semibold">Typical treatment</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-700 dark:text-zinc-300">
                    <tr>
                      <td className="p-3.5 font-bold text-zinc-900 dark:text-white">Primary</td>
                      <td className="p-3.5">The main purpose or decision on the screen</td>
                      <td className="p-3.5 text-zinc-500">One dominant heading or focal area; one clear primary action</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-zinc-900 dark:text-white">Secondary</td>
                      <td className="p-3.5">Supporting information and useful next steps</td>
                      <td className="p-3.5 text-zinc-500">Smaller type, lower emphasis, clearly grouped sections</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-zinc-900 dark:text-white">Tertiary</td>
                      <td className="p-3.5">Metadata, helpers, timestamps, optional controls</td>
                      <td className="p-3.5 text-zinc-500">Muted text, compact scale, restrained icons</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-zinc-900 dark:text-white">State</td>
                      <td className="p-3.5">Success, warning, error, pending, disabled</td>
                      <td className="p-3.5 text-zinc-500">Semantic colour plus explicit text or icon; never colour alone</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Section 02: Typography & Spacing Tokens */}
          <div className="space-y-6">
            <div className="border-b border-zinc-200 dark:border-zinc-800 pb-3">
              <span className="text-xs font-mono font-bold text-brand-terra dark:text-brand-ember">02 / STRUCTURE &amp; SCALE</span>
              <h3 className="text-xl sm:text-2xl font-syne font-bold text-zinc-900 dark:text-white mt-1">
                Typography, Spacing, and Layout Tokens
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Typography Scale */}
              <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-4">
                <div className="flex items-center gap-2 text-sm font-syne font-bold text-zinc-900 dark:text-white">
                  <Layout size={16} className="text-brand-terra" />
                  <span>Typography Hierarchy Tokens</span>
                </div>
                <div className="space-y-2 text-xs font-dm">
                  <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-950 flex justify-between items-center">
                    <span className="font-semibold text-zinc-900 dark:text-white">Display / Hero</span>
                    <span className="font-mono text-zinc-500">40–56 px desktop; scale down responsively</span>
                  </div>
                  <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-950 flex justify-between items-center">
                    <span className="font-semibold text-zinc-900 dark:text-white">Page title</span>
                    <span className="font-mono text-zinc-500">28–36 px desktop; 24–30 px compact</span>
                  </div>
                  <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-950 flex justify-between items-center">
                    <span className="font-semibold text-zinc-900 dark:text-white">Section heading</span>
                    <span className="font-mono text-zinc-500">18–24 px (hierarchy, not boldness alone)</span>
                  </div>
                  <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-950 flex justify-between items-center">
                    <span className="font-semibold text-zinc-900 dark:text-white">Body text</span>
                    <span className="font-mono text-zinc-500">14–16 px (comfortable reading size)</span>
                  </div>
                  <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-950 flex justify-between items-center">
                    <span className="font-semibold text-zinc-900 dark:text-white">Labels &amp; Helper</span>
                    <span className="font-mono text-zinc-500">12–14 px (never rely on tiny text for key facts)</span>
                  </div>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 font-dm">
                  <strong>Rules:</strong> Legibility over thinness. Sentence case standard. Controlled line lengths (narrow reading columns).
                </p>
              </div>

              {/* Spacing Scale */}
              <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-4">
                <div className="flex items-center gap-2 text-sm font-syne font-bold text-zinc-900 dark:text-white">
                  <SlidersHorizontal size={16} className="text-brand-terra" />
                  <span>Spacing Rhythm &amp; Compact Radii</span>
                </div>
                <div className="space-y-2 text-xs font-dm">
                  <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-950 flex justify-between items-center">
                    <span className="font-semibold text-zinc-900 dark:text-white">4px Base Rhythm</span>
                    <span className="font-mono text-zinc-500">4, 8, 12, 16, 24, 32, 40, 48 px</span>
                  </div>
                  <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-950 flex justify-between items-center">
                    <span className="font-semibold text-zinc-900 dark:text-white">Inside components</span>
                    <span className="font-mono text-zinc-500">8–16 px (grouped, not cramped)</span>
                  </div>
                  <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-950 flex justify-between items-center">
                    <span className="font-semibold text-zinc-900 dark:text-white">Between sections</span>
                    <span className="font-mono text-zinc-500">24–40 px (clearly distinct)</span>
                  </div>
                  <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-950 flex justify-between items-center">
                    <span className="font-semibold text-zinc-900 dark:text-white">Page gutters</span>
                    <span className="font-mono text-zinc-500">16–24 px mobile; 24–40 px desktop</span>
                  </div>
                  <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-950 flex justify-between items-center">
                    <span className="font-semibold text-zinc-900 dark:text-white">Compact Radii Scale</span>
                    <span className="font-mono text-zinc-500">6, 10, 14, 20 px (+ pill for badges only)</span>
                  </div>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 font-dm">
                  <strong>Rules:</strong> Whitespace before drop shadows. Thin, low-contrast borders for crisp layout structure.
                </p>
              </div>
            </div>
          </div>

          {/* Section 03: The Mandatory 9-State Matrix */}
          <div className="space-y-6">
            <div className="border-b border-zinc-200 dark:border-zinc-800 pb-3">
              <span className="text-xs font-mono font-bold text-brand-terra dark:text-brand-ember">03 / STATES &amp; BEHAVIOR</span>
              <h3 className="text-xl sm:text-2xl font-syne font-bold text-zinc-900 dark:text-white mt-1">
                The Mandatory State Matrix
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-dm">
              A component is not finished when its default state looks good. It is finished when all relevant interaction states look and work correctly.
            </p>

            <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-dm">
                  <thead className="bg-zinc-100/50 dark:bg-zinc-900/50 text-zinc-600 dark:text-zinc-400 border-b border-zinc-200 dark:border-zinc-800">
                    <tr>
                      <th className="p-3.5 font-semibold">State</th>
                      <th className="p-3.5 font-semibold">What users should see</th>
                      <th className="p-3.5 font-semibold">Design direction</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-700 dark:text-zinc-300">
                    <tr>
                      <td className="p-3.5 font-bold text-zinc-900 dark:text-white">Default</td>
                      <td className="p-3.5">The control or section is ready</td>
                      <td className="p-3.5 text-zinc-500">Clear label, affordance, hierarchy</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-zinc-900 dark:text-white">Hover / Focus / Pressed</td>
                      <td className="p-3.5">The interaction target is unmistakable</td>
                      <td className="p-3.5 text-zinc-500">Visible state change; keyboard focus must never depend on hover</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-zinc-900 dark:text-white">Loading / Pending</td>
                      <td className="p-3.5">Work is happening in the background</td>
                      <td className="p-3.5 text-zinc-500">Progress spinner/skeleton, disabled duplicate action, stable layout</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-zinc-900 dark:text-white">Success / Complete</td>
                      <td className="p-3.5">The operation finished successfully</td>
                      <td className="p-3.5 text-zinc-500">Specific confirmation and updated content/status</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-zinc-900 dark:text-white">Empty / First Use</td>
                      <td className="p-3.5">There is no content yet</td>
                      <td className="p-3.5 text-zinc-500">Explain why, show a helpful next step, avoid a blank dead end</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-zinc-900 dark:text-white">Error / Offline</td>
                      <td className="p-3.5">The operation failed or cannot proceed</td>
                      <td className="p-3.5 text-zinc-500">Plain-language explanation, recovery option, preserve user work</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-zinc-900 dark:text-white">Disabled / Unavailable</td>
                      <td className="p-3.5">The action cannot currently be used</td>
                      <td className="p-3.5 text-zinc-500">Clear appearance and explain the reason when it is not self-evident</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Section 04: The 8 Premium Traps to Actively Avoid */}
          <div className="space-y-6">
            <div className="border-b border-zinc-200 dark:border-zinc-800 pb-3">
              <span className="text-xs font-mono font-bold text-brand-terra dark:text-brand-ember">04 / ANTI-PATTERNS</span>
              <h3 className="text-xl sm:text-2xl font-syne font-bold text-zinc-900 dark:text-white mt-1">
                8 Premium Traps to Actively Avoid
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-dm">
              Avoid the shortcuts that make an interface look trendy on Dribbble but feel generic, noisy, or unfinished in production.
            </p>

            <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-dm">
                  <thead className="bg-zinc-100/50 dark:bg-zinc-900/50 text-zinc-600 dark:text-zinc-400 border-b border-zinc-200 dark:border-zinc-800">
                    <tr>
                      <th className="p-3.5 font-semibold text-rose-600 dark:text-rose-400">Trap</th>
                      <th className="p-3.5 font-semibold">Why it weakens the product</th>
                      <th className="p-3.5 font-semibold text-emerald-600 dark:text-emerald-400">Better standard</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-700 dark:text-zinc-300">
                    <tr>
                      <td className="p-3.5 font-bold text-zinc-900 dark:text-white">Gradient everywhere</td>
                      <td className="p-3.5">Destroys hierarchy and dates the visual language</td>
                      <td className="p-3.5 text-emerald-700 dark:text-emerald-400">Reserve gradients for a specific brand moment or meaningful emphasis</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-zinc-900 dark:text-white">Glassmorphism by default</td>
                      <td className="p-3.5">Can impair contrast and make content feel fragile</td>
                      <td className="p-3.5 text-emerald-700 dark:text-emerald-400">Use translucent materials only when depth or context genuinely benefits</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-zinc-900 dark:text-white">Cards for every element</td>
                      <td className="p-3.5">Creates visual noise and unnecessary nested surfaces</td>
                      <td className="p-3.5 text-emerald-700 dark:text-emerald-400">Use layout, spacing, and typography before adding a container</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-zinc-900 dark:text-white">Excessive rounding</td>
                      <td className="p-3.5">Makes every component feel soft and indistinguishable</td>
                      <td className="p-3.5 text-emerald-700 dark:text-emerald-400">Define a small radius scale (6, 10, 14, 20px) and use roles consistently</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-zinc-900 dark:text-white">Oversized hero layouts in tools</td>
                      <td className="p-3.5">Pushes useful information below the fold</td>
                      <td className="p-3.5 text-emerald-700 dark:text-emerald-400">Give task-based products compact, clear working headers</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-zinc-900 dark:text-white">Muted text everywhere</td>
                      <td className="p-3.5">Looks subtle but weakens readability and hierarchy</td>
                      <td className="p-3.5 text-emerald-700 dark:text-emerald-400">Use muted tones only for genuinely secondary info and verify contrast</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-zinc-900 dark:text-white">Decorative animation</td>
                      <td className="p-3.5">Slows tasks and competes for user attention</td>
                      <td className="p-3.5 text-emerald-700 dark:text-emerald-400">Use motion to explain a change or acknowledge an action (120–220ms)</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-zinc-900 dark:text-white">Generic template appearance</td>
                      <td className="p-3.5">Lacks a recognisable product identity</td>
                      <td className="p-3.5 text-emerald-700 dark:text-emerald-400">Create a restrained brand language from typography, colour, imagery, and detail</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Section 05: The Premium Design Release Gate */}
          <div className="space-y-6">
            <div className="border-b border-zinc-200 dark:border-zinc-800 pb-3">
              <span className="text-xs font-mono font-bold text-brand-terra dark:text-brand-ember">05 / VERIFICATION</span>
              <h3 className="text-xl sm:text-2xl font-syne font-bold text-zinc-900 dark:text-white mt-1">
                The Premium Design Release Gate
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm font-dm text-zinc-700 dark:text-zinc-300">
              <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>Visual hierarchy is obvious without explanation (passes 3–5s One-Screen Test).</span>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>Typography roles, spacing, colour, radii, and elevation are tokenised and consistent.</span>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>The interface uses whitespace intentionally and aligns to a predictable grid.</span>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>Primary actions are unmistakable (one per area); lower-priority actions are restrained.</span>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>Buttons, inputs, navigation, tables, and overlays have complete relevant states.</span>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>Colour combinations and focus states pass WCAG AA accessibility checks.</span>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>Mobile, tablet, laptop, and wide layouts have been inspected with realistic content.</span>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>Loading, empty, pending, success, disabled, and error views feel intentionally designed.</span>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>Animations are purposeful (120–220ms) and reduced-motion preferences are respected.</span>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>Screen has been reviewed for clutter, unnecessary decoration, and generic patterns.</span>
              </div>
            </div>

            {/* The Release Principle */}
            <div className="p-6 rounded-2xl bg-zinc-900 text-white dark:bg-black border border-zinc-800 space-y-2 font-dm">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-terra">
                // The Release Principle
              </span>
              <p className="text-sm sm:text-base leading-relaxed text-zinc-200">
                If the interface is visually impressive but confusing, inaccessible, inconsistent, or slow, it is not premium. <strong>Fix the experience before adding more polish.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Bottom Curriculum Callout */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-brand-terra/10 via-amber-500/5 to-transparent border border-brand-terra/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-xl font-bold font-syne text-zinc-900 dark:text-white">
              Learn How to Build Against These Standards
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 font-dm max-w-xl">
              Our 9 curated curriculums in Frontend, Backend, Product Management, and Systems incorporate every rule from this quality playbook into hands-on checkmark projects.
            </p>
          </div>
          <Link
            href="/curriculum"
            className="py-3 px-6 rounded-xl bg-brand-terra hover:bg-brand-ember text-white font-dm font-semibold text-sm flex items-center gap-2 shadow-md shrink-0"
          >
            <span>Explore All Curriculums</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </main>
    </div>
  )
}
