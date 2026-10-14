import type { Metadata } from 'next'
import Link from 'next/link'
import { 
  ArrowLeft, 
  BookOpen, 
  Sparkles, 
  ExternalLink, 
  Code2, 
  Target, 
  Layers, 
  CheckCircle2, 
  Zap, 
  Compass, 
  BarChart3, 
  Users, 
  Award, 
  GraduationCap, 
  FileText,
  ShieldCheck,
  CheckSquare
} from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Logo } from '@/components/ui/Logo'
import { CurriculumLeadCapture } from '@/components/curriculum/CurriculumLeadCapture'
import { CurriculumChecklist, type CurriculumModuleGroup } from '@/components/curriculum/CurriculumChecklist'
import { CurriculumJourneyGuide } from '@/components/curriculum/CurriculumJourneyGuide'

export const metadata: Metadata = {
  title: 'Product Management & Strategy Curriculum | Gran Jefe Learning Hub',
  description: 'Master modern product management: user discovery, PRDs, the 12 UI/UX Non-Negotiables quality gate, product analytics, and agile engineering execution.',
}

const pmModules: CurriculumModuleGroup[] = [
  {
    moduleNumber: 1,
    title: 'Customer Discovery, Problem Framing & Opportunity Trees',
    duration: '2 to 3 Weeks',
    milestones: [
      { id: 'pm-discovery', title: 'The Mom Test Interview Framework', description: 'Conduct unbiased customer interviews that extract authentic user pain points instead of polite validation.' },
      { id: 'pm-ost', title: 'Opportunity Solution Trees (Teresa Torres)', description: 'Map desired business outcomes to unmet customer opportunities and testable feature hypotheses.' },
      { id: 'pm-jtbd', title: 'Jobs-to-be-Done (JTBD) Theory', description: 'Analyze why customers hire and fire products, uncovering hidden functional and emotional catalysts.' },
      { id: 'pm-p1-project', title: 'Phase 1 Checkmark: Customer Discovery Synthesis Brief', description: 'Complete 5 user interviews, synthesize findings into an Opportunity Solution Tree, and write a problem validation memo.' },
    ],
  },
  {
    moduleNumber: 2,
    title: 'The 12 UI/UX Non-Negotiables & Usability Testing',
    duration: '2 to 3 Weeks',
    milestones: [
      { id: 'pm-standards', title: 'Enforcing the Gran Jefe UI/UX Playbook', description: 'Review wireframes against the 12 Non-Negotiables (WCAG 2.2 AA, Core Web Vitals, and system states).' },
      { id: 'pm-wireframing', title: 'Low-Fidelity Wireframing in Figma', description: 'Create clickable flow prototypes that communicate user journeys without distracting visual decoration.' },
      { id: 'pm-testing', title: 'Moderated & Unmoderated Usability Testing', description: 'Test realistic tasks with representative users, tracking task success rate, hesitation, and abandonment.' },
      { id: 'pm-p2-project', title: 'Phase 2 Checkmark: Usability Audit & Prototype Test', description: 'Conduct a 5-user usability test on a prototype, document failure paths, and issue prioritized UX tickets.' },
    ],
  },
  {
    moduleNumber: 3,
    title: 'PRDs, User Stories & Engineering Collaboration',
    duration: '3 to 4 Weeks',
    milestones: [
      { id: 'pm-prd', title: 'Writing Executive & Engineering PRDs', description: 'Draft concise Product Requirement Documents with scope boundaries, acceptance criteria, and edge cases.' },
      { id: 'pm-prioritization', title: 'Roadmap Prioritization Frameworks (RICE & MoSCoW)', description: 'Score feature requests objectively using Reach, Impact, Confidence, and Effort.' },
      { id: 'pm-sprint', title: 'Agile Sprint Planning & JIRA Execution', description: 'Break down complex epics into vertical, testable user stories with Definition of Done (DoD).' },
      { id: 'pm-p3-project', title: 'Phase 3 Checkmark: Production PRD & JIRA Backlog', description: 'Author an end-to-end PRD for a fintech or SaaS feature with API contracts, state diagrams, and prioritized user stories.' },
    ],
  },
  {
    moduleNumber: 4,
    title: 'Product Analytics, Metrics & PostHog / Mixpanel',
    duration: '2 to 3 Weeks',
    milestones: [
      { id: 'pm-northstar', title: 'North Star Metric & Metric Trees', description: 'Dismantle top-level company revenue into actionable leading input metrics.' },
      { id: 'pm-telemetry', title: 'Event Tracking Taxonomy (PostHog & Mixpanel)', description: 'Design event dictionaries (noun-verb syntax) to measure funnel conversion and drop-offs.' },
      { id: 'pm-abtest', title: 'A/B Testing & Statistical Significance', description: 'Formulate hypotheses, calculate required sample sizes, and evaluate variant confidence intervals.' },
      { id: 'pm-p4-project', title: 'Phase 4 Checkmark: Retention & Funnel Dashboard', description: 'Set up an event tracking schema for a web app and construct user cohort retention curves in PostHog.' },
    ],
  },
  {
    moduleNumber: 5,
    title: 'Final Capstone: Production SaaS Product Blueprint',
    duration: 'Final Phase',
    milestones: [
      { id: 'pm-gtm', title: 'Go-to-Market (GTM) & Launch Strategy', description: 'Design rollout phases (internal alpha, private beta, GA) with feature flags and training collateral.' },
      { id: 'pm-release-gate', title: 'Executing the Release Quality Gate', description: 'Run the complete 5-pillar product quality checklist before approving production deployment.' },
      { id: 'pm-capstone-project', title: 'Final Capstone: Full Product Portfolio Delivery', description: 'Deliver a comprehensive product dossier containing customer research, PRD, interactive prototype, and GTM launch plan.' },
    ],
  },
]

export default function ProductManagementCurriculumPage() {
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
            <Link
              href="/standards/ui-ux-playbook"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25 hover:bg-emerald-500/15 transition-colors"
            >
              <ShieldCheck size={13} className="text-emerald-500" /> UI/UX Playbook
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Playbook Banner */}
        <div className="mb-8 p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-zinc-900 dark:to-zinc-900 border border-emerald-200 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-dm">
          <div className="flex items-center gap-2.5 text-emerald-950 dark:text-emerald-300">
            <ShieldCheck size={18} className="text-emerald-600 shrink-0" />
            <span>Built directly on the <strong>Gran Jefe UI/UX Non-Negotiables for Web Applications</strong> quality standard.</span>
          </div>
          <Link
            href="/standards/ui-ux-playbook"
            className="text-brand-terra dark:text-brand-ember font-semibold hover:underline flex items-center gap-1 shrink-0"
          >
            <span>Read UI/UX Playbook</span>
            <ExternalLink size={12} />
          </Link>
        </div>

        {/* Hero Section */}
        <div className="space-y-5 border-b border-zinc-200 dark:border-zinc-800 pb-10 mb-12">
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-brand-terra/10 text-brand-terra dark:text-brand-ember border border-brand-terra/20">
              <Target size={14} /> Product Strategy &amp; Execution
            </div>
            <span className="text-xs font-mono text-zinc-500">Track 08</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-tight font-syne">
            Product Management &amp; Strategy Curriculum
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-dm">
            Move beyond superficial feature factories. Learn how top tech companies discover validated customer problems, draft bulletproof PRDs, enforce the 12 UI/UX Non-Negotiables, and orchestrate engineering teams to ship high-impact business outcomes.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-brand-terra font-bold text-sm">
                <Compass size={18} /> Outcome-Driven Discovery
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-dm">
                Never build on gut feeling alone. Master customer interview techniques, Opportunity Solution Trees, and rapid unmoderated prototype testing to validate demand before writing code.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                <CheckSquare size={18} /> Release Quality Gatekeeper
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-dm">
                Enforce the 5-pillar product release checklist (Core functionality, Usability, WCAG accessibility, Performance, and Error recovery) so broken software never hits production.
              </p>
            </div>
          </div>
        </div>

        {/* Mental Model Translation */}
        <section className="mb-14">
          <div className="flex items-center gap-2.5 mb-2">
            <Layers className="text-brand-terra" size={22} />
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Feature Factory vs. High-Leverage Product Management
            </h2>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 font-dm">
            How modern product management shifts focus from shipping raw tickets to driving verifiable commercial outcomes:
          </p>

          <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xs bg-white dark:bg-zinc-900">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-200 font-bold font-mono">
                  <th className="p-4">Amateur &quot;Feature Factory&quot; Habit</th>
                  <th className="p-4">High-Leverage Product Standard</th>
                  <th className="p-4">Business &amp; Engineering Outcome</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-700 dark:text-zinc-300 font-dm">
                <tr className="hover:bg-zinc-50/60 dark:hover:bg-zinc-800/40">
                  <td className="p-4 font-mono text-xs text-red-500">&quot;Stakeholder requested this button&quot;</td>
                  <td className="p-4 font-mono text-xs text-brand-terra dark:text-brand-ember">Root Cause Problem Discovery</td>
                  <td className="p-4">Discovers the underlying friction and avoids building bloated features nobody uses.</td>
                </tr>
                <tr className="hover:bg-zinc-50/60 dark:hover:bg-zinc-800/40">
                  <td className="p-4 font-mono text-xs text-red-500">50-page bloated requirements doc</td>
                  <td className="p-4 font-mono text-xs text-brand-terra dark:text-brand-ember">Concise PRD with Acceptance Criteria</td>
                  <td className="p-4">Engineers understand edge cases, API contracts, and non-functional requirements instantly.</td>
                </tr>
                <tr className="hover:bg-zinc-50/60 dark:hover:bg-zinc-800/40">
                  <td className="p-4 font-mono text-xs text-red-500">Measuring velocity (story points shipped)</td>
                  <td className="p-4 font-mono text-xs text-brand-terra dark:text-brand-ember">Measuring North Star Metric &amp; Retention</td>
                  <td className="p-4">Directly ties engineering effort to monthly recurring revenue (MRR) and active retention.</td>
                </tr>
                <tr className="hover:bg-zinc-50/60 dark:hover:bg-zinc-800/40">
                  <td className="p-4 font-mono text-xs text-red-500">Shipping immediately when code compiles</td>
                  <td className="p-4 font-mono text-xs text-brand-terra dark:text-brand-ember">Enforcing the Release Quality Gate</td>
                  <td className="p-4">Blocks releases with missing error states, WCAG contrast defects, or misleading balances.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Learner Journey Guide */}
        <CurriculumJourneyGuide />

        {/* Interactive Milestone Progress Tracker */}
        <section className="mb-14">
          <CurriculumChecklist
            trackId="product-management"
            trackTitle="Product Management & Strategy"
            modules={pmModules}
          />
        </section>

        {/* Phase 1 */}
        <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-brand-terra/10 text-brand-terra dark:text-brand-ember border border-brand-terra/20">
                Phase 1
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                Customer Discovery &amp; Problem Framing
              </h2>
            </div>
            <span className="text-xs font-mono font-medium text-zinc-500">Timeline: 2 to 3 Weeks</span>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-dm leading-relaxed">
            <strong>Goal:</strong> Learn how to uncover authentic user frustrations without asking biased questions, map opportunities, and frame problems engineers can solve.
          </p>

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono">
              Core Skills to Master
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400 list-disc pl-5 font-dm">
              <li><strong>The Mom Test:</strong> Interviewing customers about past actions and actual spending rather than speculative opinions (&quot;Would you buy this?&quot;).</li>
              <li><strong>Opportunity Solution Trees:</strong> Breaking broad strategic goals into actionable user opportunities.</li>
              <li><strong>Jobs-To-Be-Done (JTBD):</strong> Identifying functional, emotional, and social dimensions of user problems.</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <BookOpen size={14} className="text-brand-terra" /> High-Yield Reading
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5 font-dm">
                <li><em>Book:</em> <em>The Mom Test</em> by Rob Fitzpatrick (Mandatory reading on customer interviews).</li>
                <li><em>Book:</em> <em>Continuous Discovery Habits</em> by Teresa Torres (Opportunity Solution Trees).</li>
                <li><a href="https://www.producttalk.org/opportunity-solution-tree/" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Product Talk: Opportunity Solution Tree Guide <ExternalLink size={11} /></a></li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <Code2 size={14} className="text-brand-terra" /> Practical Video Resource
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5 font-dm">
                <li><a href="https://www.youtube.com/watch?v=Hla10npYp8Q" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Rob Fitzpatrick: The Mom Test (Google Tech Talk) <ExternalLink size={11} /></a></li>
                <li><a href="https://www.youtube.com/watch?v=kYvV98yLpG0" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Y Combinator: How to Talk to Users <ExternalLink size={11} /></a></li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm text-emerald-900 dark:text-emerald-300">
            <strong>Checkmark Project:</strong> Conduct 5 customer discovery interviews for a new fintech or SaaS workflow, map the findings into an Opportunity Solution Tree, and write a 2-page problem validation brief.
          </div>
        </section>

        {/* Phase 2: The 12 UI/UX Non-Negotiables */}
        <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                Phase 2
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                The 12 UI/UX Non-Negotiables &amp; Usability Auditing
              </h2>
            </div>
            <span className="text-xs font-mono font-medium text-zinc-500">Timeline: 2 to 3 Weeks</span>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-dm leading-relaxed">
            <strong>Goal:</strong> Master the product quality standards that separate amateur software from market-leading apps, and run empirical usability tests.
          </p>

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono">
              Core Skills to Master
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400 list-disc pl-5 font-dm">
              <li><strong>The 4 Questions:</strong> Evaluating screens against Clarity, Efficiency, Confidence, and Reliability.</li>
              <li><strong>The 12 Standards:</strong> Clear purpose, effortless workflows, meaningful system feedback (idle, loading, error, empty, disabled, offline), error recovery, and WCAG 2.2 AA accessibility.</li>
              <li><strong>Usability Testing:</strong> Writing task scripts, observing hesitation and drop-offs, and calculating Task Success Rate and Time on Task.</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <BookOpen size={14} className="text-emerald-500" /> High-Yield Reading
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5 font-dm">
                <li><Link href="/standards/ui-ux-playbook" className="text-brand-terra hover:underline inline-flex items-center gap-1 font-semibold">Gran Jefe: UI/UX Non-Negotiables Playbook <ExternalLink size={11} /></Link></li>
                <li><em>Book:</em> <em>Don&apos;t Make Me Think (Revisited)</em> by Steve Krug.</li>
                <li><a href="https://www.nngroup.com/articles/usability-testing-101/" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">NN/g: Usability Testing 101 <ExternalLink size={11} /></a></li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <Code2 size={14} className="text-emerald-500" /> Practical Video Resource
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5 font-dm">
                <li><a href="https://www.youtube.com/watch?v=AEaKrq3SpW8" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Steve Krug: Demo Usability Test (Live Session) <ExternalLink size={11} /></a></li>
                <li><a href="https://www.youtube.com/watch?v=0-S5a0eXPoc" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">NN/g: How to Conduct Heuristic Evaluations <ExternalLink size={11} /></a></li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm text-emerald-900 dark:text-emerald-300">
            <strong>Checkmark Project:</strong> Audit an existing web application against the 12 UI/UX Non-Negotiables, record a 5-person usability study, and create an issue backlog categorized by Severity and Frequency.
          </div>
        </section>

        {/* Phase 3: PRDs & Engineering Hand-off */}
        <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                Phase 3
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                PRDs, User Stories &amp; Agile Engineering Alignment
              </h2>
            </div>
            <span className="text-xs font-mono font-medium text-zinc-500">Timeline: 3 to 4 Weeks</span>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-dm leading-relaxed">
            <strong>Goal:</strong> Write concise, engineer-friendly specifications with crisp acceptance criteria, edge-case coverage, and clear prioritization.
          </p>

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono">
              Core Skills to Master
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400 list-disc pl-5 font-dm">
              <li><strong>PRD Architecture:</strong> Problem statement, target personas, user stories, out-of-scope boundaries, and release criteria.</li>
              <li><strong>Prioritization Frameworks:</strong> Applying RICE (Reach, Impact, Confidence, Effort) to eliminate subjective roadmap disputes.</li>
              <li><strong>Engineering Handshake:</strong> Technical scoping with tech leads, defining data contracts, and breaking stories into 1-2 day sprint increments.</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <BookOpen size={14} className="text-blue-500" /> High-Yield Reading
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5 font-dm">
                <li><a href="https://www.lennysnewsletter.com/p/how-to-write-a-good-prd" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Lenny&apos;s Newsletter: How to Write a Great PRD <ExternalLink size={11} /></a></li>
                <li><em>Book:</em> <em>Inspired: How to Create Tech Products Customers Love</em> by Marty Cagan.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <Code2 size={14} className="text-blue-500" /> Practical Video Resource
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5 font-dm">
                <li><a href="https://www.youtube.com/watch?v=0-S5a0eXPoc" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Marty Cagan: Product Management Masterclass <ExternalLink size={11} /></a></li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm text-emerald-900 dark:text-emerald-300">
            <strong>Checkmark Project:</strong> Write a production PRD for a multi-tenant subscription or checkout feature, complete with data schemas, acceptance tests, and a prioritized JIRA story backlog.
          </div>
        </section>

        {/* Phase 4: Product Analytics & Experimentation */}
        <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                Phase 4
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                Product Analytics, Retention &amp; PostHog / Mixpanel
              </h2>
            </div>
            <span className="text-xs font-mono font-medium text-zinc-500">Timeline: 2 to 3 Weeks</span>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-dm leading-relaxed">
            <strong>Goal:</strong> Establish telemetry, define North Star metric hierarchies, and construct conversion funnels to measure real customer retention.
          </p>

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono">
              Core Skills to Master
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400 list-disc pl-5 font-dm">
              <li><strong>Telemetry Tracking Plans:</strong> Event naming taxonomies (<code>user_signed_up</code>, <code>payment_completed</code>).</li>
              <li><strong>Funnel &amp; Cohort Analysis:</strong> Locating the exact step where users churn and measuring Day 7 / Day 30 retention.</li>
              <li><strong>A/B Testing Discipline:</strong> Formulating minimum detectable effect (MDE) and preventing false-positive variant decisions.</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <BookOpen size={14} className="text-purple-500" /> High-Yield Reading
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5 font-dm">
                <li><a href="https://posthog.com/docs/product-analytics" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">PostHog: Product Analytics &amp; Funnel Guide <ExternalLink size={11} /></a></li>
                <li><a href="https://mixpanel.com/blog/product-analytics-guide/" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Mixpanel: The Complete Guide to Product Analytics <ExternalLink size={11} /></a></li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <Code2 size={14} className="text-purple-500" /> Practical Video Resource
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5 font-dm">
                <li><a href="https://www.youtube.com/watch?v=oUJbuFMyBDk" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">PostHog: Building Retention &amp; Conversion Funnels <ExternalLink size={11} /></a></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Phase 5: Final Capstone */}
        <section className="mb-14 p-6 sm:p-8 rounded-2xl bg-zinc-900 border border-zinc-800 text-white shadow-xl space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-brand-terra/20 text-brand-terra border border-brand-terra/30">
                Capstone
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-syne">
                Final Capstone: Complete Product Portfolio Dossier
              </h2>
            </div>
            <span className="text-xs font-mono text-emerald-400 font-semibold">// Executive Portfolio</span>
          </div>

          <p className="text-sm text-zinc-300 font-dm leading-relaxed">
            The capstone synthesizes every skill into a production-grade Product Portfolio dossier matching the standard of Senior Product Managers at Stripe, Linear, or Revolut:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
              <h4 className="text-xs font-mono font-bold text-brand-terra">Discovery &amp; Strategy</h4>
              <ul className="text-xs text-zinc-300 space-y-1.5 list-disc pl-4 font-dm">
                <li>5 synthesized customer interview transcripts with pain point quotes</li>
                <li>Opportunity Solution Tree mapping user needs to revenue goals</li>
                <li>Comprehensive PRD with acceptance criteria &amp; failure states</li>
                <li>Release Quality Gate audit verifying the 12 UI/UX Non-Negotiables</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
              <h4 className="text-xs font-mono font-bold text-emerald-400">Execution &amp; Analytics</h4>
              <ul className="text-xs text-zinc-300 space-y-1.5 list-disc pl-4 font-dm">
                <li>Interactive Figma prototype tested with 5 external users</li>
                <li>JIRA sprint backlog with RICE scoring &amp; user stories</li>
                <li>PostHog / Mixpanel tracking plan with event taxonomy</li>
                <li>Go-To-Market launch strategy and rollback criteria</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Accredited Certifications & Coursera Specializations */}
        <section className="mb-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 via-brand-terra/5 to-transparent border border-blue-500/25 shadow-xs space-y-6">
          <div className="flex items-center gap-3">
            <GraduationCap className="text-blue-600 dark:text-blue-400" size={26} />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white font-syne">
                Accredited Certifications &amp; Coursera Programs
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-dm">
                Validate your expertise with recognized academic and industry certifications to complement your portfolio:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2 flex flex-col justify-between">
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-bold uppercase">
                  Univ. of Virginia / Darden
                </span>
                <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                  Digital Product Management: Modern Fundamentals
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 font-dm">
                  Taught by Alex Cowan. Focuses on discovery hypotheses, customer interviews, user story mapping, and agile delivery.
                </p>
              </div>
              <a
                href="https://www.coursera.org/learn/uva-darden-digital-product-management"
                target="_blank"
                rel="noopener noreferrer"
                className="pt-2 text-xs font-semibold text-brand-terra hover:underline flex items-center gap-1"
              >
                <span>View on Coursera</span>
                <ExternalLink size={11} />
              </a>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2 flex flex-col justify-between">
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 font-bold uppercase">
                  Google Career Certificate
                </span>
                <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                  Google Project Management Professional Certificate
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 font-dm">
                  Master agile frameworks, sprint management, risk mitigation, and cross-functional team leadership.
                </p>
              </div>
              <a
                href="https://www.coursera.org/professional-certificates/google-project-management"
                target="_blank"
                rel="noopener noreferrer"
                className="pt-2 text-xs font-semibold text-brand-terra hover:underline flex items-center gap-1"
              >
                <span>View on Coursera</span>
                <ExternalLink size={11} />
              </a>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2 flex flex-col justify-between">
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 font-bold uppercase">
                  University of Alberta
                </span>
                <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                  Software Product Management Specialization
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 font-dm">
                  6-course sequence covering client needs, software product design, agile requirements, and reviews.
                </p>
              </div>
              <a
                href="https://www.coursera.org/specializations/product-management"
                target="_blank"
                rel="noopener noreferrer"
                className="pt-2 text-xs font-semibold text-brand-terra hover:underline flex items-center gap-1"
              >
                <span>View on Coursera</span>
                <ExternalLink size={11} />
              </a>
            </div>
          </div>
        </section>

        {/* Lead Capture */}
        <div className="mb-14">
          <CurriculumLeadCapture
            trackTitle="Product Management & Strategy"
          />
        </div>
      </main>
    </div>
  )
}
