import type { Metadata } from 'next'
import Link from 'next/link'
import { 
  ArrowLeft, 
  BookOpen, 
  Terminal, 
  Sparkles, 
  ExternalLink, 
  Code2, 
  ShieldCheck, 
  Layers, 
  CheckCircle2, 
  Zap, 
  Server, 
  Database, 
  Cpu, 
  RefreshCw,
  Boxes
} from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Logo } from '@/components/ui/Logo'
import { CurriculumLeadCapture } from '@/components/curriculum/CurriculumLeadCapture'
import { CurriculumChecklist, type CurriculumModuleGroup } from '@/components/curriculum/CurriculumChecklist'

export const metadata: Metadata = {
  title: 'Node.js & TypeScript Backend Engineering Curriculum | Gran Jefe Learning Hub',
  description: 'Master enterprise backend architecture with Node.js, NestJS, TypeScript, Prisma ORM, PostgreSQL, Redis, and BullMQ queues. The battle-tested server-side roadmap for modern engineers.',
}

const nodeBackendModules: CurriculumModuleGroup[] = [
  {
    moduleNumber: 1,
    title: 'Node.js Runtime Internals & Modern TypeScript',
    duration: '2 to 3 Weeks',
    milestones: [
      { id: 'node-loop', title: 'Event Loop, Microtasks & libuv', description: 'Deep-dive into timers, poll phase, setImmediate, and process.nextTick priority.' },
      { id: 'node-streams', title: 'Buffers, Streams & Memory Management', description: 'Handle multi-gigabyte file uploads and data pipes without memory leaks.' },
      { id: 'node-ts', title: 'Strict TypeScript & Generics for Backend', description: 'Advanced generic repository patterns, utility types, and strict tsconfig setups.' },
      { id: 'node-p1-project', title: 'Phase 1 Checkmark: Streaming Log Processor CLI', description: 'Build a zero-dependency CLI stream pipe that transforms massive server access logs into structured JSON analytics.' },
    ],
  },
  {
    moduleNumber: 2,
    title: 'RESTful API Engineering with Express & Fastify',
    duration: '2 to 3 Weeks',
    milestones: [
      { id: 'node-routing', title: 'High-Throughput HTTP Routing & Middleware', description: 'Construct reusable middleware pipelines, error handlers, and request context trackers.' },
      { id: 'node-zod', title: 'Payload Validation with Zod', description: 'Sanitize incoming HTTP requests and fail fast with structured 400 Bad Request error envelopes.' },
      { id: 'node-rate-limit', title: 'Redis Rate Limiting & Security Headers', description: 'Implement sliding window rate limits with Redis and enforce Helmet security headers.' },
      { id: 'node-p2-project', title: 'Phase 2 Checkmark: Production Rate-Limited REST Gateway', description: 'Deploy an Express / Fastify API with Redis sliding window throttles and health checks.' },
    ],
  },
  {
    moduleNumber: 3,
    title: 'Enterprise Architecture with NestJS',
    duration: '3 to 4 Weeks',
    milestones: [
      { id: 'node-nest-di', title: 'Dependency Injection & Inversion of Control', description: 'Organize code into feature modules, injectable providers, and decoupled service layers.' },
      { id: 'node-nest-pipes', title: 'Pipes, Guards & Custom Decorators', description: 'Enforce authentication guards, role-based access control, and class-validator DTOs.' },
      { id: 'node-nest-intercept', title: 'Interceptors & Exception Filters', description: 'Standardize API response formats, execution timing logs, and global error normalization.' },
      { id: 'node-swagger', title: 'Automated OpenAPI 3 / Swagger Documentation', description: 'Auto-generate interactive Swagger explorer docs directly from TypeScript DTO decorators.' },
      { id: 'node-p3-project', title: 'Phase 3 Checkmark: Modular Enterprise NestJS Service', description: 'Ship a full CRUD platform with authentication guards, DTO validation, and Swagger docs.' },
    ],
  },
  {
    moduleNumber: 4,
    title: 'Database Modeling, Prisma ORM & PostgreSQL',
    duration: '3 to 4 Weeks',
    milestones: [
      { id: 'node-prisma-schema', title: 'Relational Schema Design & Relations', description: 'Model one-to-many, many-to-many, and polymorphic relations with Prisma schema.' },
      { id: 'node-prisma-mig', title: 'Safe Database Migrations & Seeders', description: 'Execute zero-downtime schema migrations and automated database seeding scripts.' },
      { id: 'node-prisma-acid', title: 'ACID Transactions & Row-Level Locking', description: 'Prevent balance overdrafts and race conditions using Prisma interactive transactions ($transaction).' },
      { id: 'node-pg-pool', title: 'Connection Pooling with PgBouncer', description: 'Configure connection pool limits, query indexing, and query performance analysis with EXPLAIN ANALYZE.' },
      { id: 'node-p4-project', title: 'Phase 4 Checkmark: High-Concurreny Financial Ledger API', description: 'Build an account wallet API with balance transfers backed by ACID row transactions.' },
    ],
  },
  {
    moduleNumber: 5,
    title: 'Auth, Background Queues & Microservices',
    duration: '2 to 3 Weeks',
    milestones: [
      { id: 'node-jwt', title: 'JWT Access & Refresh Token Rotation', description: 'Secure token transport in HTTP-only cookies with Redis token revocation blacklists.' },
      { id: 'node-bullmq', title: 'Asynchronous Job Queues with BullMQ & Redis', description: 'Offload long-running tasks, email notifications, and webhook dispatches to worker processes.' },
      { id: 'node-webhooks', title: 'HMAC Webhook Ingestion & Idempotency', description: 'Verify incoming payment webhook signatures with HMAC-SHA256 and store idempotency keys.' },
      { id: 'node-p5-project', title: 'Phase 5 Checkmark: Automated Webhook & Queue Worker Engine', description: 'Build a webhook receiver that enqueues jobs into BullMQ with automatic retries and dead-letter queues.' },
    ],
  },
  {
    moduleNumber: 6,
    title: 'Final Capstone: Production High-Throughput API Gateway',
    duration: 'Final Phase',
    milestones: [
      { id: 'node-testing', title: 'Automated Vitest & Supertest Test Suite', description: 'Write unit tests for services and end-to-end integration tests for HTTP controllers.' },
      { id: 'node-docker', title: 'Multi-Stage Production Dockerization', description: 'Build minimal Alpine Docker containers with non-root security and health check probes.' },
      { id: 'node-cicd', title: 'GitHub Actions CI/CD Pipeline', description: 'Automate linting, type checks, test execution, and deployment to AWS / Railway / DigitalOcean.' },
    ],
  },
]

export default function NodeBackendCurriculumPage() {
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
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25">
              <Server size={13} className="text-emerald-500" /> Enterprise Track
            </span>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Path Switcher Banner */}
        <div className="mb-8 p-3 sm:p-4 rounded-xl bg-blue-50 dark:bg-zinc-900/80 border border-blue-200 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-dm">
          <div className="flex items-center gap-2 text-blue-900 dark:text-blue-300">
            <Boxes size={16} className="text-brand-terra shrink-0" />
            <span>Comparing Backend Routes? We offer both the <strong>Node.js / TypeScript track</strong> and the <strong>Python / Django track</strong>.</span>
          </div>
          <Link
            href="/curriculum/python-django"
            className="text-brand-terra dark:text-brand-ember font-semibold hover:underline flex items-center gap-1 shrink-0"
          >
            <span>View Python &amp; Django Route</span>
            <ExternalLink size={12} />
          </Link>
        </div>

        {/* Hero Section */}
        <div className="space-y-5 border-b border-zinc-200 dark:border-zinc-800 pb-10 mb-12">
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25">
              <Terminal size={14} /> Full-Stack TypeScript Specialization
            </div>
            <span className="text-xs font-mono text-zinc-500">Track 07</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-tight">
            Node.js &amp; TypeScript Enterprise Backend Curriculum
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-dm">
            The comprehensive roadmap for building scalable, high-throughput server infrastructure using Node.js, NestJS, TypeScript, Prisma ORM, PostgreSQL, Redis, and BullMQ worker queues.
          </p>

          {/* Quick Callout Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-brand-terra dark:text-brand-ember font-bold text-sm">
                <Zap size={18} /> End-to-End Type Safety
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-dm">
                Share data transfer objects (DTOs), types, and validation schemas directly between your Next.js frontend and NestJS backend with zero translation loss.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                <ShieldCheck size={18} /> High-Throughput I/O
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-dm">
                Leverage the Node.js event loop and asynchronous worker threads to serve thousands of concurrent payment requests, websocket streams, and background jobs.
              </p>
            </div>
          </div>
        </div>

        {/* Mental Model Translation */}
        <section className="mb-14">
          <div className="flex items-center gap-2.5 mb-2">
            <Layers className="text-brand-terra" size={22} />
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Frontend vs. Enterprise Node.js / NestJS Mental Model
            </h2>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 font-dm">
            How your existing React &amp; TypeScript client knowledge translates directly into server architecture:
          </p>

          <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xs bg-white dark:bg-zinc-900">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-200 font-bold font-mono">
                  <th className="p-4">Frontend Concept (React / Next.js)</th>
                  <th className="p-4">Node.js &amp; NestJS Counterpart</th>
                  <th className="p-4">What it Does on the Server</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-700 dark:text-zinc-300 font-dm">
                <tr className="hover:bg-zinc-50/60 dark:hover:bg-zinc-800/40">
                  <td className="p-4 font-mono text-xs">React Component Tree &amp; Context</td>
                  <td className="p-4 font-mono text-xs text-brand-terra dark:text-brand-ember">NestJS Modules &amp; Dependency Injection</td>
                  <td className="p-4">Provides clean inversion of control, singleton services, and testable modular boundaries.</td>
                </tr>
                <tr className="hover:bg-zinc-50/60 dark:hover:bg-zinc-800/40">
                  <td className="p-4 font-mono text-xs">TypeScript Interfaces &amp; Zod</td>
                  <td className="p-4 font-mono text-xs text-brand-terra dark:text-brand-ember">DTOs with <code>class-validator</code></td>
                  <td className="p-4">Validates incoming HTTP bodies and auto-populates OpenAPI / Swagger documentation.</td>
                </tr>
                <tr className="hover:bg-zinc-50/60 dark:hover:bg-zinc-800/40">
                  <td className="p-4 font-mono text-xs">Next.js Route Handlers (<code>route.ts</code>)</td>
                  <td className="p-4 font-mono text-xs text-brand-terra dark:text-brand-ember">Controllers (<code>@Controller</code>, <code>@Get</code>, <code>@Post</code>)</td>
                  <td className="p-4">Handles HTTP requests, binds route parameters, and delegates business logic to services.</td>
                </tr>
                <tr className="hover:bg-zinc-50/60 dark:hover:bg-zinc-800/40">
                  <td className="p-4 font-mono text-xs">Supabase Client</td>
                  <td className="p-4 font-mono text-xs text-brand-terra dark:text-brand-ember">Prisma Client (<code>prisma.user.findMany</code>)</td>
                  <td className="p-4">Provides type-safe database queries, schema migrations, and ACID relational transactions.</td>
                </tr>
                <tr className="hover:bg-zinc-50/60 dark:hover:bg-zinc-800/40">
                  <td className="p-4 font-mono text-xs">Local State &amp; Cache</td>
                  <td className="p-4 font-mono text-xs text-brand-terra dark:text-brand-ember">Redis In-Memory Store &amp; Locks</td>
                  <td className="p-4">Provides sub-millisecond query caching, rate limit counters, and distributed idempotency locks.</td>
                </tr>
                <tr className="hover:bg-zinc-50/60 dark:hover:bg-zinc-800/40">
                  <td className="p-4 font-mono text-xs">Web Workers &amp; Async Tasks</td>
                  <td className="p-4 font-mono text-xs text-brand-terra dark:text-brand-ember">BullMQ Background Workers</td>
                  <td className="p-4">Executes asynchronous background queues, webhook retries, and scheduled cron jobs.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Interactive Milestone Progress Tracker */}
        <section className="mb-14">
          <CurriculumChecklist
            trackId="node-backend"
            trackTitle="Node.js & TypeScript Backend Engineering"
            modules={nodeBackendModules}
          />
        </section>

        {/* Phase 1 */}
        <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                Phase 1
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                Node.js Runtime Internals &amp; Advanced TypeScript
              </h2>
            </div>
            <span className="text-xs font-mono font-medium text-zinc-500">Timeline: 2 to 3 Weeks</span>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-dm leading-relaxed">
            <strong>Goal:</strong> Gain deep mastery of the Node.js V8 runtime, the libuv event loop phases, buffer allocation, and memory-safe stream pipelines using strict TypeScript.
          </p>

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono">
              Core Skills to Master
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400 list-disc pl-5 font-dm">
              <li><strong>The Event Loop:</strong> Microtasks (Promises, process.nextTick) vs. Macrotasks (timers, I/O polling, check phase).</li>
              <li><strong>Node.js Streams:</strong> Readable, Writable, Transform streams and pipeline error handling.</li>
              <li><strong>Memory &amp; Buffers:</strong> Allocating binary buffers, understanding garbage collection, and avoiding memory leaks in long-running services.</li>
              <li><strong>Strict TypeScript Configuration:</strong> Configuring <code>ts-node</code>, <code>tsx</code>, ES Modules (ESM) in Node.js, and path aliases.</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <BookOpen size={14} className="text-blue-500" /> High-Yield Reading
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5">
                <li><a href="https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Node.js Official: The Event Loop &amp; Process.nextTick <ExternalLink size={11} /></a></li>
                <li><em>Book:</em> <em>Node.js Design Patterns (3rd Edition)</em> by Mario Casciaro &amp; Luciano Mammino.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <Code2 size={14} className="text-blue-500" /> Practical Video Resource
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5">
                <li><a href="https://www.youtube.com/watch?v=PNa9OMajw9w" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Node.js Event Loop Visualized (Deep Dive) <ExternalLink size={11} /></a></li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm text-emerald-900 dark:text-emerald-300">
            <strong>Checkmark Project:</strong> Write a high-performance log-parsing CLI in Node.js using streams and pipeline that streams 100,000 log lines from disk, extracts error occurrences, and outputs a formatted summary with less than 30MB memory consumption.
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
                Enterprise Architecture with NestJS
              </h2>
            </div>
            <span className="text-xs font-mono font-medium text-zinc-500">Timeline: 3 to 4 Weeks</span>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-dm leading-relaxed">
            <strong>Goal:</strong> Master NestJS, the industry-standard TypeScript framework for building scalable enterprise server applications, featuring Dependency Injection, Guards, and Swagger.
          </p>

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono">
              Core Skills to Master
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400 list-disc pl-5 font-dm">
              <li><strong>Controllers &amp; Services:</strong> Separation of HTTP handling from business logic with <code>@Controller()</code> and <code>@Injectable()</code>.</li>
              <li><strong>Validation Pipes:</strong> Using <code>class-validator</code> and <code>class-transformer</code> for declarative DTO validation.</li>
              <li><strong>Guards &amp; Decorators:</strong> Building custom authentication guards (<code>AuthGuard</code>) and param decorators (<code>@CurrentUser()</code>).</li>
              <li><strong>Swagger / OpenAPI 3:</strong> Auto-generating API schemas for frontend developer self-service.</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm text-emerald-900 dark:text-emerald-300">
            <strong>Checkmark Project:</strong> Build a multi-tenant Product &amp; Inventory REST API with NestJS, containing role-based guards (Admin vs Member), validated DTOs, and auto-generated Swagger explorer at <code>/docs</code>.
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
                Prisma ORM, PostgreSQL &amp; ACID Transactions
              </h2>
            </div>
            <span className="text-xs font-mono font-medium text-zinc-500">Timeline: 3 to 4 Weeks</span>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-dm leading-relaxed">
            <strong>Goal:</strong> Model robust relational data with PostgreSQL, execute safe Prisma schema migrations, and master ACID transactional isolation against race conditions.
          </p>

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono">
              Core Skills to Master
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400 list-disc pl-5 font-dm">
              <li><strong>Prisma Schema Modeling:</strong> 1:1, 1:N, N:M relations, indexes, compound unique constraints, and enums.</li>
              <li><strong>Safe Schema Migrations:</strong> Running <code>prisma migrate dev</code>, resolving migration drift, and seed pipelines.</li>
              <li><strong>Interactive Transactions ($transaction):</strong> Atomic double-entry balance updates that never allow partial debit/credit failures.</li>
              <li><strong>Performance Tuning:</strong> Connection pool limits, eliminating N+1 queries using Prisma <code>include</code>, and indexing strategy.</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm text-emerald-900 dark:text-emerald-300">
            <strong>Checkmark Project:</strong> Build a multi-currency Wallet Ledger API using Prisma and PostgreSQL where fund transfers run inside an interactive atomic transaction with row locking to ensure zero balance discrepancies under concurrent requests.
          </div>
        </section>

        {/* Phase 4 */}
        <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                Phase 4
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                Auth, Asynchronous BullMQ Queues &amp; Webhooks
              </h2>
            </div>
            <span className="text-xs font-mono font-medium text-zinc-500">Timeline: 2 to 3 Weeks</span>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-dm leading-relaxed">
            <strong>Goal:</strong> Protect your API with stateless JWT auth and HTTP-only cookies, offload heavy tasks to BullMQ Redis queues, and build idempotent webhook listeners.
          </p>

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono">
              Core Skills to Master
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400 list-disc pl-5 font-dm">
              <li><strong>Token Auth Architecture:</strong> Short-lived Access Tokens (15 min) + Refresh Tokens stored in Redis with revocation blacklist.</li>
              <li><strong>BullMQ Worker Queues:</strong> Job queues, worker concurrency, automated backoff retries, and failed job dead-letter processing.</li>
              <li><strong>HMAC Webhook Ingestion:</strong> Verify digital signatures (HMAC-SHA256) on incoming webhooks and guarantee idempotency.</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm text-emerald-900 dark:text-emerald-300">
            <strong>Checkmark Project:</strong> Build a payment webhook receiver that verifies cryptographic signatures, writes an idempotency lock to Redis, and delegates PDF receipt generation and email dispatch to an asynchronous BullMQ worker process.
          </div>
        </section>

        {/* Phase 5 */}
        <section className="mb-14 p-6 sm:p-8 rounded-2xl bg-zinc-900 border border-zinc-800 text-white shadow-xl space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-brand-terra/20 text-brand-terra border border-brand-terra/30">
                Capstone
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-syne">
                Final Capstone: High-Throughput Fintech / SaaS Gateway
              </h2>
            </div>
            <span className="text-xs font-mono text-emerald-400 font-semibold">// Production Capstone</span>
          </div>

          <p className="text-sm text-zinc-300 font-dm leading-relaxed">
            The capstone integrates every skill into an enterprise-grade backend service mirroring the real-world architectures used on sovereign diplomatic payment portals and high-scale SaaS products:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
              <h4 className="text-xs font-mono font-bold text-brand-terra">Core Platform Features</h4>
              <ul className="text-xs text-zinc-300 space-y-1.5 list-disc pl-4 font-dm">
                <li>NestJS modular architecture with Prisma ORM</li>
                <li>PostgreSQL with connection pooling &amp; row-level transactions</li>
                <li>JWT authentication with refresh token cookie rotation</li>
                <li>Redis sliding window rate limiting &amp; distributed caching</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
              <h4 className="text-xs font-mono font-bold text-emerald-400">DevOps &amp; Quality</h4>
              <ul className="text-xs text-zinc-300 space-y-1.5 list-disc pl-4 font-dm">
                <li>Automated integration testing with Vitest &amp; Supertest</li>
                <li>Multi-stage Alpine Dockerfile with non-root security</li>
                <li>GitHub Actions CI/CD with automated test &amp; lint gates</li>
                <li>Interactive Swagger UI at <code>/docs</code></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Lead Capture */}
        <div className="mb-14">
          <CurriculumLeadCapture
            trackTitle="Node.js & TypeScript Enterprise Backend Engineering"
          />
        </div>
      </main>
    </div>
  )
}
