import type { Metadata } from 'next'
import Link from 'next/link'
import { 
  ArrowLeft, 
  BookOpen, 
  Terminal, 
  Sparkles, 
  ExternalLink, 
  Code2, 
  Database, 
  ShieldCheck, 
  Layers, 
  CheckCircle2, 
  Zap, 
  Calendar,
  Clock,
  Compass
} from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Logo } from '@/components/ui/Logo'
import { CurriculumLeadCapture } from '@/components/curriculum/CurriculumLeadCapture'

export const metadata: Metadata = {
  title: 'Full-Stack Web Development Curriculum | Gran Jefe Learning Hub',
  description: 'A modern, project-based engineering roadmap tailored for adult learners (TypeScript, React, Node.js, PostgreSQL, and Cloud DevOps).',
}

export default function FullstackWebCurriculumPage() {
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
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/25">
              <Sparkles size={13} className="text-blue-500" /> Complete Roadmap
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/25">
              <Terminal size={14} /> Comprehensive Career Track
            </div>
            <span className="text-xs font-mono text-zinc-500">Track 02</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-tight">
            Full-Stack Web Development Curriculum
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-dm">
            A modern, project-based engineering roadmap tailored for adult learners (TypeScript, React, Node.js, PostgreSQL, and Cloud DevOps).
          </p>

          <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border-l-4 border-blue-500 border-zinc-200 dark:border-zinc-800 shadow-xs space-y-2">
            <p className="font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-2 text-sm">
              <Zap size={16} /> The 70/30 Engineering Rule
            </p>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-dm">
              Aim for <strong>30% theory</strong> (reading &amp; watching) and <strong>70% hands-on coding</strong> (breaking things, debugging terminal logs, and shipping real repositories). Consistency beats marathon cramming sessions every single time.
            </p>
          </div>
        </div>

        {/* Roadmap Overview Table */}
        <section className="mb-14">
          <div className="flex items-center gap-2.5 mb-2">
            <Layers className="text-blue-500" size={22} />
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Curriculum Roadmap Overview
            </h2>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 font-dm">
            From terminal foundations to deployed full-stack SaaS architecture:
          </p>

          <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xs bg-white dark:bg-zinc-900">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-200 font-bold font-mono">
                  <th className="p-4">Phase</th>
                  <th className="p-4">Duration</th>
                  <th className="p-4">Focus Area</th>
                  <th className="p-4">Core Technologies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-700 dark:text-zinc-300 font-dm">
                <tr className="hover:bg-zinc-50/60 dark:hover:bg-zinc-800/40">
                  <td className="p-4 font-bold text-zinc-900 dark:text-white">Phase 0</td>
                  <td className="p-4 font-mono text-xs">2–3 Weeks</td>
                  <td className="p-4 font-semibold">CS &amp; Web Fundamentals</td>
                  <td className="p-4 text-xs font-mono">Internet Architecture, Bash/Zsh, Git &amp; GitHub</td>
                </tr>
                <tr className="hover:bg-zinc-50/60 dark:hover:bg-zinc-800/40">
                  <td className="p-4 font-bold text-zinc-900 dark:text-white">Phase 1</td>
                  <td className="p-4 font-mono text-xs">6–8 Weeks</td>
                  <td className="p-4 font-semibold">Frontend Foundations</td>
                  <td className="p-4 text-xs font-mono">Semantic HTML5, Responsive CSS3, JavaScript ES6+</td>
                </tr>
                <tr className="hover:bg-zinc-50/60 dark:hover:bg-zinc-800/40">
                  <td className="p-4 font-bold text-zinc-900 dark:text-white">Phase 2</td>
                  <td className="p-4 font-mono text-xs">6–8 Weeks</td>
                  <td className="p-4 font-semibold">Frontend Engineering</td>
                  <td className="p-4 text-xs font-mono">TypeScript, React, Vite, TanStack Query, Tailwind CSS</td>
                </tr>
                <tr className="hover:bg-zinc-50/60 dark:hover:bg-zinc-800/40">
                  <td className="p-4 font-bold text-zinc-900 dark:text-white">Phase 3</td>
                  <td className="p-4 font-mono text-xs">6–8 Weeks</td>
                  <td className="p-4 font-semibold">Backend Engineering</td>
                  <td className="p-4 text-xs font-mono">Node.js, Express, PostgreSQL, Prisma ORM, REST APIs</td>
                </tr>
                <tr className="hover:bg-zinc-50/60 dark:hover:bg-zinc-800/40">
                  <td className="p-4 font-bold text-zinc-900 dark:text-white">Phase 4</td>
                  <td className="p-4 font-mono text-xs">4–6 Weeks</td>
                  <td className="p-4 font-semibold">Full-Stack Integration</td>
                  <td className="p-4 text-xs font-mono">OAuth2, JWTs &amp; Cookies, OWASP Security, WebSockets</td>
                </tr>
                <tr className="hover:bg-zinc-50/60 dark:hover:bg-zinc-800/40">
                  <td className="p-4 font-bold text-zinc-900 dark:text-white">Phase 5</td>
                  <td className="p-4 font-mono text-xs">2–3 Weeks</td>
                  <td className="p-4 font-semibold">DevOps &amp; Quality</td>
                  <td className="p-4 text-xs font-mono">Vitest, Playwright, Docker, GitHub Actions CI/CD</td>
                </tr>
                <tr className="hover:bg-zinc-50/60 dark:hover:bg-zinc-800/40 bg-blue-50/30 dark:bg-blue-950/20">
                  <td className="p-4 font-bold text-blue-600 dark:text-blue-400">Capstone</td>
                  <td className="p-4 font-mono text-xs">4 Weeks</td>
                  <td className="p-4 font-semibold">Production SaaS Project</td>
                  <td className="p-4 text-xs font-mono">Full TypeScript Stack (End-to-End deployment)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Phase 0 */}
        <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
                Phase 0
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                Foundations &amp; Mental Models
              </h2>
            </div>
            <span className="text-xs font-mono font-medium text-zinc-500">Timeline: 2 to 3 Weeks</span>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-dm leading-relaxed">
            <strong>Goal:</strong> Demystify how the internet functions, master command-line operations, and adopt industry-standard Git version control.
          </p>

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono">
              Core Topics
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400 list-disc pl-5 font-dm">
              <li>How the internet works: DNS resolution, IP routing, TCP/IP, HTTP/HTTPS client-server cycle.</li>
              <li>Terminal &amp; Shell: Directory navigation (<code>cd</code>, <code>ls</code>), file management, pipes, permissions.</li>
              <li>Version Control: Git commits, branching strategies, merge conflict resolution, GitHub pull requests.</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <BookOpen size={14} className="text-blue-500" /> Recommended Reading
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5">
                <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">MDN: How does the Internet Work? <ExternalLink size={11} /></a></li>
                <li><a href="https://git-scm.com/book/en/v2" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Pro Git Book (Ch. 1 &amp; 2) <ExternalLink size={11} /></a></li>
                <li><a href="https://linuxcommand.org/tlcl.php" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">The Linux Command Line <ExternalLink size={11} /></a></li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <Code2 size={14} className="text-blue-500" /> Video Tutorials
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5">
                <li><a href="https://www.youtube.com/watch?v=AEaKrq3SpW8" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Crash Course: How the Internet Works <ExternalLink size={11} /></a></li>
                <li><a href="https://www.youtube.com/watch?v=RGOj5yH7evk" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">freeCodeCamp: Git and GitHub for Beginners <ExternalLink size={11} /></a></li>
                <li><a href="https://www.youtube.com/watch?v=Z56Jmr9Z34Q" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">MIT Missing Semester: Shell Scripting <ExternalLink size={11} /></a></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Phase 1 */}
        <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                Phase 1
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                Modern Frontend Foundations (HTML, CSS, JavaScript)
              </h2>
            </div>
            <span className="text-xs font-mono font-medium text-zinc-500">Timeline: 6 to 8 Weeks</span>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-dm leading-relaxed">
            <strong>Goal:</strong> Build accessible, responsive web interfaces and control DOM manipulation with modern ES6+ JavaScript.
          </p>

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono">
              Core Topics
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400 list-disc pl-5 font-dm">
              <li><strong>Semantic HTML5 &amp; a11y:</strong> Semantic elements (<code>&lt;main&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;article&gt;</code>), form validation, ARIA landmarks, keyboard accessibility.</li>
              <li><strong>Modern CSS:</strong> Box model, Flexbox, CSS Grid layout, custom properties (variables), mobile-first responsive design.</li>
              <li><strong>JavaScript ES6+:</strong> Scope &amp; closures, array methods (<code>map</code>, <code>filter</code>, <code>reduce</code>), DOM events, Promises, <code>async/await</code>, and <code>fetch()</code>.</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <BookOpen size={14} className="text-amber-500" /> Recommended Reading
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5">
                <li><a href="https://developer.mozilla.org/en-US/docs/Learn" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">MDN Web Docs: Learn Web Development <ExternalLink size={11} /></a></li>
                <li><a href="https://javascript.info/" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">JavaScript.info <ExternalLink size={11} /></a></li>
                <li><a href="https://eloquentjavascript.net/" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Eloquent JavaScript (Free Book) <ExternalLink size={11} /></a></li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <Code2 size={14} className="text-amber-500" /> Video Tutorials
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5">
                <li><a href="https://www.youtube.com/watch?v=XCS4Ue45vA4" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Will Sentance: JavaScript - The Hard Parts <ExternalLink size={11} /></a></li>
                <li><a href="https://www.youtube.com/watch?v=8aGhZQkoFbQ" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Philip Roberts: What is the Event Loop? <ExternalLink size={11} /></a></li>
                <li><a href="https://www.youtube.com/@KevinPowell" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Kevin Powell: Modern CSS &amp; Flexbox <ExternalLink size={11} /></a></li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm text-emerald-900 dark:text-emerald-300">
            <strong>Checkmark Project:</strong> Build an interactive, accessible Expense Tracker &amp; Dashboard in vanilla JS and CSS that persists data to <code>localStorage</code>.
          </div>
        </section>

        {/* Phase 2 */}
        <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                Phase 2
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                Frontend Engineering (TypeScript, React &amp; Modern Tooling)
              </h2>
            </div>
            <span className="text-xs font-mono font-medium text-zinc-500">Timeline: 6 to 8 Weeks</span>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-dm leading-relaxed">
            <strong>Goal:</strong> Construct scalable, type-safe single-page web applications using component architecture.
          </p>

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono">
              Core Topics
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400 list-disc pl-5 font-dm">
              <li><strong>TypeScript:</strong> Type annotations, interfaces, union types, generics, type narrowing, strict typing.</li>
              <li><strong>React Architecture:</strong> JSX, component lifecycle, props, state, controlled inputs.</li>
              <li><strong>Hooks:</strong> <code>useState</code>, <code>useEffect</code>, <code>useRef</code>, <code>useMemo</code>, <code>useCallback</code>, custom hooks.</li>
              <li><strong>Data Fetching &amp; State:</strong> Server state vs client state (TanStack Query / React Query, Context API, Zustand).</li>
              <li><strong>Build Tools &amp; Styling:</strong> Vite bundler, Tailwind CSS utility-first styling.</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <BookOpen size={14} className="text-purple-500" /> Recommended Reading
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5">
                <li><a href="https://react.dev/learn" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Official React Docs (react.dev) <ExternalLink size={11} /></a></li>
                <li><a href="https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">TypeScript in 5 Minutes <ExternalLink size={11} /></a></li>
                <li><a href="https://tanstack.com/query/latest/docs/framework/react/overview" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">TanStack Query Overview <ExternalLink size={11} /></a></li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <Code2 size={14} className="text-purple-500" /> Video Tutorials
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5">
                <li><a href="https://www.youtube.com/watch?v=30LWjhZzg50" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">freeCodeCamp: TypeScript Full Course <ExternalLink size={11} /></a></li>
                <li><a href="https://www.youtube.com/playlist?list=PLNqp92_EXZBJYFrpEzdO2EapvU0GOJ09n" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Jack Herrington: No BS TS (TypeScript) <ExternalLink size={11} /></a></li>
                <li><a href="https://www.youtube.com/watch?v=w7ejDZ8SWv8" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">freeCodeCamp: React 18 / 19 Course <ExternalLink size={11} /></a></li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm text-emerald-900 dark:text-emerald-300">
            <strong>Checkmark Project:</strong> Kanban Task Board (Trello-style) with drag-and-drop cards, filter tags, optimistic UI mutations, and state management.
          </div>
        </section>

        {/* Phase 3 */}
        <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                Phase 3
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                Backend Engineering (Node.js, Express &amp; Databases)
              </h2>
            </div>
            <span className="text-xs font-mono font-medium text-zinc-500">Timeline: 6 to 8 Weeks</span>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-dm leading-relaxed">
            <strong>Goal:</strong> Build and secure RESTful web APIs, model relational databases, and write efficient data queries.
          </p>

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono">
              Core Topics
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400 list-disc pl-5 font-dm">
              <li><strong>Node.js:</strong> Event-driven architecture, streams, asynchronous filesystem operations, modules.</li>
              <li><strong>Express.js:</strong> Router structure, request/response lifecycle, custom middleware, error handling, input validation with Zod.</li>
              <li><strong>Relational Database (PostgreSQL):</strong> Schemas, table relationships (1:N, N:M), indexes, joins, ACID transactions, migrations.</li>
              <li><strong>Database Access:</strong> Prisma ORM or Drizzle ORM for type-safe database queries.</li>
              <li><strong>API Design:</strong> RESTful principles, HTTP status codes, pagination, rate limiting, OpenAPI/Swagger docs.</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <Database size={14} className="text-emerald-500" /> Recommended Reading
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5">
                <li><a href="https://nodejs.org/en/docs/guides" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Node.js Official Documentation <ExternalLink size={11} /></a></li>
                <li><a href="https://www.prisma.io/docs/getting-started" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Prisma ORM Getting Started <ExternalLink size={11} /></a></li>
                <li><a href="https://dataintensive.net/" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Designing Data-Intensive Applications <ExternalLink size={11} /></a></li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <Code2 size={14} className="text-emerald-500" /> Video Tutorials
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5">
                <li><a href="https://www.youtube.com/watch?v=Oe421EPjeBE" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">freeCodeCamp: Node.js &amp; Express Course <ExternalLink size={11} /></a></li>
                <li><a href="https://www.youtube.com/watch?v=qw--VYLpxG4" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">freeCodeCamp: PostgreSQL Database Course <ExternalLink size={11} /></a></li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm text-emerald-900 dark:text-emerald-300">
            <strong>Checkmark Project:</strong> Complete Store &amp; Inventory API featuring products, orders, inventory locks inside database transactions, and validation.
          </div>
        </section>

        {/* Phase 4 */}
        <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
                Phase 4
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                Full-Stack Integration, Auth &amp; Security
              </h2>
            </div>
            <span className="text-xs font-mono font-medium text-zinc-500">Timeline: 4 to 6 Weeks</span>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-dm leading-relaxed">
            <strong>Goal:</strong> Wire client to server securely, implement authentication, and protect applications against vulnerabilities.
          </p>

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono">
              Core Topics
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400 list-disc pl-5 font-dm">
              <li><strong>Authentication &amp; Authorization:</strong> Password hashing (Argon2 / bcrypt), JWT vs. Session cookies (HTTP-only, SameSite), RBAC.</li>
              <li><strong>Third-Party Auth:</strong> OAuth 2.0 &amp; OpenID Connect (Sign-in with Google, GitHub).</li>
              <li><strong>Web Application Security:</strong> OWASP Top 10 vulnerabilities (SQL injection, XSS, CSRF, insecure direct object references, CORS).</li>
              <li><strong>Real-time Communication:</strong> WebSockets or Server-Sent Events (SSE) for live two-way updates.</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-rose-500" /> Recommended Reading
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5">
                <li><a href="https://owasp.org/www-project-top-ten/" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">OWASP Top 10 Security Risks <ExternalLink size={11} /></a></li>
                <li><a href="https://www.oauth.com/" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">OAuth 2.0 Simplified by Aaron Parecki <ExternalLink size={11} /></a></li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <Code2 size={14} className="text-rose-500" /> Video Tutorials
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5">
                <li><a href="https://www.youtube.com/watch?v=996OiexHze0" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">OAuth 2.0 and OpenID Connect Explained <ExternalLink size={11} /></a></li>
                <li><a href="https://www.youtube.com/watch?v=7Q17ubqL20w" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">JWT Authentication &amp; Pitfalls <ExternalLink size={11} /></a></li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm text-emerald-900 dark:text-emerald-300">
            <strong>Checkmark Project:</strong> Real-time Team Chat &amp; Collaboration Hub with authenticated rooms, live online presence, and role permissions.
          </div>
        </section>

        {/* Phase 5 */}
        <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                Phase 5
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                DevOps, Testing &amp; Cloud Deployment
              </h2>
            </div>
            <span className="text-xs font-mono font-medium text-zinc-500">Timeline: 2 to 3 Weeks</span>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-dm leading-relaxed">
            <strong>Goal:</strong> Automate test suites, package services into containers, and configure automated deployment pipelines.
          </p>

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono">
              Core Topics
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400 list-disc pl-5 font-dm">
              <li><strong>Testing Pyramid:</strong> Unit tests (Vitest/Jest), Integration tests, End-to-End tests (Playwright).</li>
              <li><strong>Containers:</strong> Docker basics, writing multi-stage <code>Dockerfiles</code>, local multi-service orchestration with <code>docker-compose</code>.</li>
              <li><strong>CI/CD Pipelines:</strong> GitHub Actions workflows for automated linting, test runs, and image builds.</li>
              <li><strong>Cloud Hosting:</strong> Deploying frontends to Vercel, APIs to Render/Fly.io/AWS, and DBs to managed Postgres (Supabase/Neon).</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <BookOpen size={14} className="text-cyan-500" /> Recommended Reading
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5">
                <li><a href="https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">The Testing Trophy by Kent C. Dodds <ExternalLink size={11} /></a></li>
                <li><a href="https://playwright.dev/docs/intro" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Playwright Documentation <ExternalLink size={11} /></a></li>
                <li><a href="https://docker-curriculum.com/" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Docker Curriculum <ExternalLink size={11} /></a></li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <Code2 size={14} className="text-cyan-500" /> Video Tutorials
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5">
                <li><a href="https://www.youtube.com/watch?v=pg19Z8LLKh4" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">TechWorld with Nana: Docker for Beginners <ExternalLink size={11} /></a></li>
                <li><a href="https://www.youtube.com/watch?v=Xz6lhEzgI5I" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Playwright End-to-End Testing Course <ExternalLink size={11} /></a></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Study Plan & Routine */}
        <section className="mb-14 p-6 sm:p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-5">
          <div className="flex items-center gap-2">
            <Calendar className="text-brand-terra" size={22} />
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Study Plan &amp; Weekly Routine for Adult Learners
            </h2>
          </div>

          <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-200 font-bold font-mono">
                  <th className="p-4">Learning Track</th>
                  <th className="p-4">Time Commitment</th>
                  <th className="p-4">Estimated Duration</th>
                  <th className="p-4">Weekly Cadence</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-700 dark:text-zinc-300 font-dm">
                <tr className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30">
                  <td className="p-4 font-bold text-zinc-900 dark:text-white">Part-Time</td>
                  <td className="p-4 font-mono text-xs">10–15 hours / week</td>
                  <td className="p-4">8–10 months</td>
                  <td className="p-4">1–1.5 hours on weeknights (theory &amp; tutorials); 4–5 hours on Saturday (building projects).</td>
                </tr>
                <tr className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30">
                  <td className="p-4 font-bold text-zinc-900 dark:text-white">Career Transition</td>
                  <td className="p-4 font-mono text-xs">25–35 hours / week</td>
                  <td className="p-4">4–5 months</td>
                  <td className="p-4">4 hours/day: 2 hours theory &amp; study, 2 hours coding &amp; building projects.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Capstone Project */}
        <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-transparent border border-blue-500/30 shadow-xs space-y-5">
          <div className="flex items-center gap-3">
            <Sparkles className="text-blue-500" size={26} />
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">
              The Capstone: Production Full-Stack SaaS Application
            </h2>
          </div>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-dm leading-relaxed">
            Construct and deploy a production-ready application that proves you can architect solutions across the entire software stack.
          </p>

          <div className="space-y-3 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-dm">
            <div className="p-4 rounded-xl bg-white/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <p className="font-bold text-zinc-900 dark:text-white text-sm">Suggested Project: Multi-Tenant Booking &amp; Operations Platform</p>
              <ul className="list-disc pl-5 space-y-1.5 text-zinc-600 dark:text-zinc-400">
                <li><strong>Backend:</strong> Node.js / Express or NestJS with TypeScript, PostgreSQL, Prisma ORM.</li>
                <li><strong>Authentication:</strong> Secure HTTP-only cookies with JWTs, email verification, password reset, and role permissions.</li>
                <li><strong>Frontend:</strong> React 19 / Next.js with TypeScript, Tailwind CSS, TanStack Query, and optimistic updates.</li>
                <li><strong>DevOps:</strong> Multi-stage Docker container, GitHub Actions CI/CD running Vitest and Playwright tests, deployed to production.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Lead Capture */}
        <CurriculumLeadCapture trackTitle="Full-Stack Web Development Curriculum" />

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
