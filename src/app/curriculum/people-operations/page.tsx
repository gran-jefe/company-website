import type { Metadata } from 'next'
import Link from 'next/link'
import { 
  ArrowLeft, 
  BookOpen, 
  Sparkles, 
  ExternalLink, 
  Code2, 
  Users, 
  Layers, 
  CheckCircle2, 
  Zap, 
  HeartHandshake, 
  GraduationCap, 
  Award, 
  FileText, 
  Scale, 
  ShieldCheck, 
  TrendingUp, 
  Briefcase
} from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Logo } from '@/components/ui/Logo'
import { CurriculumLeadCapture } from '@/components/curriculum/CurriculumLeadCapture'
import { CurriculumChecklist, type CurriculumModuleGroup } from '@/components/curriculum/CurriculumChecklist'
import { CurriculumJourneyGuide } from '@/components/curriculum/CurriculumJourneyGuide'

export const metadata: Metadata = {
  title: 'People Operations & Tech HR Curriculum | Gran Jefe Learning Hub',
  description: 'Master strategic Human Resources and People Operations: technical talent acquisition, compensation & ESOP equity modeling, performance OKRs, people analytics, and global remote labor compliance.',
}

const hrModules: CurriculumModuleGroup[] = [
  {
    moduleNumber: 1,
    title: 'Technical Talent Acquisition & Structured Hiring',
    duration: '2 to 3 Weeks',
    milestones: [
      { id: 'hr-sourcing', title: 'Outbound Sourcing & Talent Pipeline Architecture', description: 'Source senior engineering and design talent using GitHub, LinkedIn Recruiter, and tech communities.' },
      { id: 'hr-interview-rubric', title: 'Structured Behavioral & Technical Interview Rubrics', description: 'Design standardized interview scorecards that eliminate hiring manager bias and evaluate real competencies.' },
      { id: 'hr-candidate-ux', title: 'Candidate Experience & Employer Branding', description: 'Maintain high candidate NPS through rapid feedback loops, transparent compensation disclosures, and respect.' },
      { id: 'hr-p1-project', title: 'Phase 1 Checkmark: Engineering Hiring Funnel & Scorecard', description: 'Build an end-to-end recruitment funnel for a Senior Full-Stack Engineer role with role specification, screening rubric, and take-home review guide.' },
    ],
  },
  {
    moduleNumber: 2,
    title: 'Onboarding, Engineering Leveling & Performance Systems',
    duration: '2 to 3 Weeks',
    milestones: [
      { id: 'hr-onboarding', title: 'High-Velocity 30-60-90 Day Onboarding', description: 'Design onboarding plans where engineers ship production code in their first week with dedicated buddies.' },
      { id: 'hr-leveling', title: 'Engineering Career Ladders & Leveling Matrix', description: 'Define dual career progression tracks (Individual Contributor vs Management) from Junior to Principal.' },
      { id: 'hr-performance', title: 'Continuous Feedback, OKRs & 360 Reviews', description: 'Align quarterly Objectives and Key Results (OKRs) with constructive performance evaluations.' },
      { id: 'hr-p2-project', title: 'Phase 2 Checkmark: Company-Wide Career Ladder & Review Matrix', description: 'Design an engineering and product leveling ladder spanning Junior, Mid, Senior, and Staff levels with competencies.' },
    ],
  },
  {
    moduleNumber: 3,
    title: 'Compensation, ESOPs & Global Remote Payroll',
    duration: '3 to 4 Weeks',
    milestones: [
      { id: 'hr-bands', title: 'Compensation Band Benchmarking', description: 'Calculate 25th, 50th, and 75th percentile salary bands using Pave, Radford, and local market datasets.' },
      { id: 'hr-equity', title: 'Employee Stock Ownership Plans (ESOP) & Equity', description: 'Model option pools, 4-year vesting schedules with 1-year cliffs, exercise windows, and tax implications.' },
      { id: 'hr-compliance', title: 'Cross-Border Contractor & EOR Compliance', description: 'Manage international remote work laws, contractor vs employee classification, and platforms (Deel, Remote).' },
      { id: 'hr-p3-project', title: 'Phase 3 Checkmark: Global Compensation & Equity Calculator', description: 'Build a spreadsheet and policy guide calculating base pay, cost-of-living adjustments, and ESOP equity grants.' },
    ],
  },
  {
    moduleNumber: 4,
    title: 'People Analytics, Retention & Culture Architecture',
    duration: '2 to 3 Weeks',
    milestones: [
      { id: 'hr-analytics', title: 'People Analytics & eNPS Measurement', description: 'Track employee net promoter scores, voluntary turnover rates, and time-to-hire velocity.' },
      { id: 'hr-culture', title: 'Psychological Safety & Burnout Prevention', description: 'Implement async work guidelines, documentation-first culture, and sustainable workload balancing.' },
      { id: 'hr-retention', title: 'Retention Cohort Analysis & Stay Interviews', description: 'Diagnose tenure drop-offs and conduct proactive stay interviews with mission-critical team members.' },
      { id: 'hr-p4-project', title: 'Phase 4 Checkmark: Retention Dashboard & Culture Playbook', description: 'Set up an employee engagement audit with pulse survey questions, sentiment analysis, and action plans.' },
    ],
  },
  {
    moduleNumber: 5,
    title: 'Final Capstone: 50-Person Startup People Operations Playbook',
    duration: 'Final Phase',
    milestones: [
      { id: 'hr-handbook', title: 'The Operating Employee Handbook', description: 'Author a living company culture document covering remote policy, benefits, conduct, and growth.' },
      { id: 'hr-crisis', title: 'Conflict Resolution & PIP Frameworks', description: 'Handle performance improvement plans (PIPs), dignified exits, and workplace dispute mediation.' },
      { id: 'hr-capstone-project', title: 'Final Capstone: Complete Startup People System', description: 'Deliver a full operational People Playbook including onboarding workflows, leveling guides, and compensation models.' },
    ],
  },
]

export default function PeopleOperationsCurriculumPage() {
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
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-rose-500/10 text-rose-700 dark:text-rose-400 border border-rose-500/25">
              <HeartHandshake size={13} className="text-rose-500" /> Strategic People Track
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-rose-500/10 text-rose-700 dark:text-rose-400 border border-rose-500/25">
              <Users size={14} /> People Operations &amp; HR Leadership
            </div>
            <span className="text-xs font-mono text-zinc-500">Track 09</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-tight font-syne">
            People Operations &amp; Tech HR Curriculum
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-dm">
            Move past administrative paperwork. Master modern, strategic People Operations: hiring top 1% technical talent, modeling equitable ESOP compensation bands, designing career progression ladders, and scaling high-retention engineering cultures.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold text-sm">
                <Briefcase size={18} /> Technical Talent Engine
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-dm">
                Build sourcing and evaluation pipelines that identify high-impact developers, designers, and product leaders without subjective gut bias or broken whiteboard puzzles.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-brand-terra font-bold text-sm">
                <Scale size={18} /> Global Remote Compliance &amp; ESOPs
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-dm">
                Model market compensation formulas, 4-year equity vesting schedules, and navigate Employer of Record (EOR) international labor standards across Nigeria, the UK, and the US.
              </p>
            </div>
          </div>
        </div>

        {/* Mental Model Translation */}
        <section className="mb-14">
          <div className="flex items-center gap-2.5 mb-2">
            <Layers className="text-rose-500" size={22} />
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Traditional Human Resources vs. Modern People Operations
            </h2>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 font-dm">
            How forward-thinking tech companies transform HR into a strategic business multiplier:
          </p>

          <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xs bg-white dark:bg-zinc-900">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-200 font-bold font-mono">
                  <th className="p-4">Traditional HR Function</th>
                  <th className="p-4">Strategic People Operations</th>
                  <th className="p-4">Business &amp; Team Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-700 dark:text-zinc-300 font-dm">
                <tr className="hover:bg-zinc-50/60 dark:hover:bg-zinc-800/40">
                  <td className="p-4 font-mono text-xs text-zinc-500">Resume screening &amp; phone tag</td>
                  <td className="p-4 font-mono text-xs text-rose-600 dark:text-rose-400">Structured Competency Scorecards</td>
                  <td className="p-4">Eliminates interviewer bias and triples technical offer acceptance rates.</td>
                </tr>
                <tr className="hover:bg-zinc-50/60 dark:hover:bg-zinc-800/40">
                  <td className="p-4 font-mono text-xs text-zinc-500">Annual bureaucratic review form</td>
                  <td className="p-4 font-mono text-xs text-rose-600 dark:text-rose-400">Continuous Feedback &amp; Clear Leveling</td>
                  <td className="p-4">Engineers know exactly what behaviors are required to earn promotion to Staff/Lead.</td>
                </tr>
                <tr className="hover:bg-zinc-50/60 dark:hover:bg-zinc-800/40">
                  <td className="p-4 font-mono text-xs text-zinc-500">Arbitrary salary haggling</td>
                  <td className="p-4 font-mono text-xs text-rose-600 dark:text-rose-400">Transparent Compensation Bands &amp; ESOPs</td>
                  <td className="p-4">Ensures internal pay equity, incentivizes long-term ownership, and stops key departures.</td>
                </tr>
                <tr className="hover:bg-zinc-50/60 dark:hover:bg-zinc-800/40">
                  <td className="p-4 font-mono text-xs text-zinc-500">Exit interviews after users resign</td>
                  <td className="p-4 font-mono text-xs text-rose-600 dark:text-rose-400">Proactive Stay Interviews &amp; eNPS</td>
                  <td className="p-4">Catches burnout and structural leadership friction before valued engineers quit.</td>
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
            trackId="people-operations"
            trackTitle="People Operations & Tech HR Leadership"
            modules={hrModules}
          />
        </section>

        {/* Phase 1 */}
        <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
                Phase 1
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                Technical Talent Sourcing &amp; Structured Interviewing
              </h2>
            </div>
            <span className="text-xs font-mono font-medium text-zinc-500">Timeline: 2 to 3 Weeks</span>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-dm leading-relaxed">
            <strong>Goal:</strong> Learn how to source top engineers, conduct structured interviews with objective scoring rubrics, and deliver an exceptional candidate experience.
          </p>

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono">
              Core Skills to Master
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400 list-disc pl-5 font-dm">
              <li><strong>Proactive Sourcing:</strong> Identifying passive candidates on GitHub, open-source communities, and tech conferences.</li>
              <li><strong>Competency Scorecards:</strong> Writing measurable rubrics for system architecture, coding hygiene, and collaboration.</li>
              <li><strong>Offer Closing:</strong> Framing total compensation (base salary, performance bonus, and equity upside) effectively.</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <BookOpen size={14} className="text-rose-500" /> High-Yield Reading
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5 font-dm">
                <li><em>Book:</em> <em>Who: The A Method for Hiring</em> by Geoff Smart &amp; Randy Street.</li>
                <li><em>Book:</em> <em>Work Rules!</em> by Laszlo Bock (Former Google Head of People).</li>
                <li><a href="https://lattice.com/library/structured-interviewing-guide" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Lattice: The Complete Guide to Structured Interviewing <ExternalLink size={11} /></a></li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <Code2 size={14} className="text-rose-500" /> Practical Video Resource
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5 font-dm">
                <li><a href="https://www.youtube.com/watch?v=kYvV98yLpG0" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Y Combinator: How to Hire Your First 20 Engineers <ExternalLink size={11} /></a></li>
                <li><a href="https://www.youtube.com/watch?v=0-S5a0eXPoc" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Laszlo Bock: Inside Google&apos;s People Operations <ExternalLink size={11} /></a></li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm text-emerald-900 dark:text-emerald-300">
            <strong>Checkmark Project:</strong> Create a full recruitment pack for a Senior Backend Developer role, including job description, 5-stage interview plan, scoring rubric, and offer letter template.
          </div>
        </section>

        {/* Phase 2: Onboarding & Leveling */}
        <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                Phase 2
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                Onboarding &amp; Engineering Career Ladders
              </h2>
            </div>
            <span className="text-xs font-mono font-medium text-zinc-500">Timeline: 2 to 3 Weeks</span>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-dm leading-relaxed">
            <strong>Goal:</strong> Accelerate new hire time-to-productivity with high-impact onboarding and establish transparent career growth pathways.
          </p>

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono">
              Core Skills to Master
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400 list-disc pl-5 font-dm">
              <li><strong>30-60-90 Day Milestones:</strong> Setting unambiguous first-month deliverables that set new team members up for success.</li>
              <li><strong>Dual-Track Leveling Matrix:</strong> Differentiating senior individual contributors (Staff/Principal) from engineering managers.</li>
              <li><strong>Quarterly OKRs &amp; 360 Feedback:</strong> Running constructive performance reviews tied to measurable team achievements.</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <BookOpen size={14} className="text-amber-500" /> High-Yield Reading
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5 font-dm">
                <li><a href="https://progression.fyi/" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Progression.fyi: Public Career Ladders (Monzo, Spotify, Wise) <ExternalLink size={11} /></a></li>
                <li><em>Book:</em> <em>Measure What Matters</em> by John Doerr (OKR Architecture).</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <Code2 size={14} className="text-amber-500" /> Practical Video Resource
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5 font-dm">
                <li><a href="https://www.youtube.com/watch?v=mJB83KUauGo" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Simon Sinek: Why Good Leaders Make You Feel Safe <ExternalLink size={11} /></a></li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm text-emerald-900 dark:text-emerald-300">
            <strong>Checkmark Project:</strong> Author a complete Engineering Career Progression framework with 4 explicit leveling tiers, competency definitions, and promotion criteria.
          </div>
        </section>

        {/* Phase 3: Compensation & Equity */}
        <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                Phase 3
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                Compensation, ESOPs &amp; Global Remote Payroll
              </h2>
            </div>
            <span className="text-xs font-mono font-medium text-zinc-500">Timeline: 3 to 4 Weeks</span>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-dm leading-relaxed">
            <strong>Goal:</strong> Model transparent salary bands, structure employee equity pools, and manage international compliance across distributed teams.
          </p>

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono">
              Core Skills to Master
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400 list-disc pl-5 font-dm">
              <li><strong>Compensation Benchmarking:</strong> Using data-backed percentiles to set pay bands by role, location, and seniority.</li>
              <li><strong>ESOP &amp; Stock Options:</strong> 4-year vesting schedules, 1-year cliff calculations, strike price, and option grant agreements.</li>
              <li><strong>International Compliance:</strong> Worker classification (independent contractor vs employee) and EOR platforms (Deel, Remote).</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <BookOpen size={14} className="text-blue-500" /> High-Yield Reading
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5 font-dm">
                <li><a href="https://carta.com/blog/equity-101-stock-option-basics/" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Carta: Equity 101 &amp; Startup Stock Option Basics <ExternalLink size={11} /></a></li>
                <li><a href="https://www.deel.com/glossary/employer-of-record" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Deel: Global Employer of Record (EOR) Guide <ExternalLink size={11} /></a></li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <Code2 size={14} className="text-blue-500" /> Practical Video Resource
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5 font-dm">
                <li><a href="https://www.youtube.com/watch?v=PNa9OMajw9w" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Slidebean: How Startup Stock Options Work Explained <ExternalLink size={11} /></a></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Phase 4: Capstone */}
        <section className="mb-14 p-6 sm:p-8 rounded-2xl bg-zinc-900 border border-zinc-800 text-white shadow-xl space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30">
                Capstone
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-syne">
                Final Capstone: 50-Person Startup People Playbook
              </h2>
            </div>
            <span className="text-xs font-mono text-emerald-400 font-semibold">// Executive Deliverable</span>
          </div>

          <p className="text-sm text-zinc-300 font-dm leading-relaxed">
            The capstone compiles every operational document required to scale a high-performance tech company from 10 to 50 team members:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
              <h4 className="text-xs font-mono font-bold text-rose-400">Culture &amp; Talent Engine</h4>
              <ul className="text-xs text-zinc-300 space-y-1.5 list-disc pl-4 font-dm">
                <li>Complete Employee Handbook covering async standards &amp; values</li>
                <li>Structured engineering interview rubric with question guides</li>
                <li>30-60-90 Day onboarding checklist with buddy pairing</li>
                <li>eNPS survey questionnaire &amp; psychological safety framework</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
              <h4 className="text-xs font-mono font-bold text-emerald-400">Governance &amp; Rewards</h4>
              <ul className="text-xs text-zinc-300 space-y-1.5 list-disc pl-4 font-dm">
                <li>Salary band benchmarking spreadsheet across 5 tech roles</li>
                <li>ESOP stock option pool model with vesting schedules</li>
                <li>International contractor compliance &amp; IP assignment agreements</li>
                <li>Performance Improvement Plan (PIP) &amp; dignified exit protocol</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Accredited Certifications & Coursera Specializations */}
        <section className="mb-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-rose-500/10 via-purple-500/5 to-transparent border border-rose-500/25 shadow-xs space-y-6">
          <div className="flex items-center gap-3">
            <GraduationCap className="text-rose-600 dark:text-rose-400" size={26} />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white font-syne">
                Accredited Certifications &amp; Coursera Programs
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-dm">
                Complement your practical People Operations portfolio with internationally recognized academic credentials:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2 flex flex-col justify-between">
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 font-bold uppercase">
                  Univ. of Minnesota
                </span>
                <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                  Human Resource Management: HR for People Managers
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 font-dm">
                  Covers hiring, performance management, employee motivation, and compensation strategy.
                </p>
              </div>
              <a
                href="https://www.coursera.org/specializations/human-resource-management"
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
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-bold uppercase">
                  Wharton School / UPenn
                </span>
                <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                  People Analytics Course
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 font-dm">
                  Data-driven recruitment, collaboration networks, and retention performance modeling from Wharton faculty.
                </p>
              </div>
              <a
                href="https://www.coursera.org/learn/wharton-people-analytics"
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
                  Macquarie University
                </span>
                <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                  Strategic Human Resources Leadership
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 font-dm">
                  Align organizational culture with commercial growth, talent retention, and high-performance teams.
                </p>
              </div>
              <a
                href="https://www.coursera.org/specializations/strategic-human-resources-leadership"
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
            trackTitle="People Operations & Tech HR Leadership"
          />
        </div>
      </main>
    </div>
  )
}
