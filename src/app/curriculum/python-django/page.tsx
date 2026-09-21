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
  Compass
} from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Logo } from '@/components/ui/Logo'

export const metadata: Metadata = {
  title: 'Python & Django Backend Curriculum | Gran Jefe Learning Hub',
  description: 'A targeted transition curriculum from frontend engineering (React/TypeScript) to batteries-included server-side architecture with Python, Django, and Django REST Framework. Curated for Big Dave.',
}

export default function PythonDjangoCurriculumPage() {
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
              <Sparkles size={13} className="text-emerald-500" /> Curated for Big Dave
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25">
              <Terminal size={14} /> Full-Stack Systems Transition
            </div>
            <span className="text-xs font-mono text-zinc-500">Track 01</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-tight">
            Python &amp; Django Backend Curriculum
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-dm">
            The fastest, most battle-tested path to becoming a production-grade backend engineer by moving from frontend state and JSON consumers into Django&apos;s batteries-included web architecture.
          </p>

          {/* Quick Callout Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-brand-terra dark:text-brand-ember font-bold text-sm">
                <Zap size={18} /> Why Django is Perfect for You
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-dm">
                Unlike minimal frameworks where you assemble 20 separate third-party libraries yourself, Django provides authentication, database ORM, schema migrations, and a production admin panel right out of the box.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                <CheckCircle2 size={18} /> Your Frontend Superpower
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-dm">
                You already master HTTP status codes, JSON shapes, authentication tokens, and browser state. Your only job now is mastering how data is modeled, stored, protected, and served on the server.
              </p>
            </div>
          </div>
        </div>

        {/* Mental Model Translation */}
        <section className="mb-14">
          <div className="flex items-center gap-2.5 mb-2">
            <Layers className="text-brand-terra" size={22} />
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Frontend vs. Django Mental Model
            </h2>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 font-dm">
            Here is how your existing React / TypeScript skillset maps directly into Django concepts:
          </p>

          <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xs bg-white dark:bg-zinc-900">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-200 font-bold font-mono">
                  <th className="p-4">Frontend Concept (JS / TS)</th>
                  <th className="p-4">Django / Python Counterpart</th>
                  <th className="p-4">What it Does on the Server</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-700 dark:text-zinc-300 font-dm">
                <tr className="hover:bg-zinc-50/60 dark:hover:bg-zinc-800/40">
                  <td className="p-4 font-mono text-xs"><code>package.json</code> &amp; <code>npm install</code></td>
                  <td className="p-4 font-mono text-xs text-brand-terra dark:text-brand-ember"><code>pyproject.toml</code> + <code>uv</code></td>
                  <td className="p-4">Manages Python dependencies cleanly inside isolated virtual environments (<code>.venv</code>).</td>
                </tr>
                <tr className="hover:bg-zinc-50/60 dark:hover:bg-zinc-800/40">
                  <td className="p-4 font-mono text-xs">TypeScript Interfaces &amp; Zod</td>
                  <td className="p-4 font-mono text-xs text-brand-terra dark:text-brand-ember">DRF Serializers &amp; Django Models</td>
                  <td className="p-4">Validates incoming payload bodies and automatically translates database records into JSON.</td>
                </tr>
                <tr className="hover:bg-zinc-50/60 dark:hover:bg-zinc-800/40">
                  <td className="p-4 font-mono text-xs">Next.js App Router (<code>page.tsx</code>)</td>
                  <td className="p-4 font-mono text-xs text-brand-terra dark:text-brand-ember"><code>urls.py</code> + Class-Based Views</td>
                  <td className="p-4">Matches the HTTP URL and delegates the request to the right logic handler or DRF ViewSet.</td>
                </tr>
                <tr className="hover:bg-zinc-50/60 dark:hover:bg-zinc-800/40">
                  <td className="p-4 font-mono text-xs">Prisma / Supabase Client</td>
                  <td className="p-4 font-mono text-xs text-brand-terra dark:text-brand-ember">Django ORM (<code>models.Model</code>)</td>
                  <td className="p-4">Generates SQL queries, manages relations, foreign keys, and handles migrations out of the box.</td>
                </tr>
                <tr className="hover:bg-zinc-50/60 dark:hover:bg-zinc-800/40">
                  <td className="p-4 font-mono text-xs">NextAuth / Clerk Dashboard</td>
                  <td className="p-4 font-mono text-xs text-brand-terra dark:text-brand-ember"><code>django.contrib.auth</code> + Admin</td>
                  <td className="p-4">Built-in user password hashing, permission groups, sessions, and an instant management GUI.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Phase 1: Python Essentials */}
        <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                Phase 1
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                Python Fluency for JS/TS Developers
              </h2>
            </div>
            <span className="text-xs font-mono font-medium text-zinc-500">Timeline: 2 to 3 Weeks</span>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-dm leading-relaxed">
            <strong>Goal:</strong> Transition your syntax muscle memory from JavaScript/TypeScript to Python 3.12 without wasting time on beginner basics like what a loop is. Focus purely on Python idioms, object orientation, and tooling.
          </p>

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono">
              Core Skills to Master
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400 list-disc pl-5 font-dm">
              <li><strong>Modern Tooling:</strong> Use <code>uv</code> (the fastest Python manager) to install packages and create virtual environments (<code>uv venv</code>).</li>
              <li><strong>Idiomatic Data Structures:</strong> Lists (arrays), Dictionaries (objects/hash maps), Tuples, and List Comprehensions (<code>[x for x in items]</code> instead of <code>.map()</code>).</li>
              <li><strong>Python Object-Oriented Programming:</strong> Classes, methods, inheritance (<code>super()</code>), dunder methods (<code>__init__</code>, <code>__str__</code>), and decorators (<code>@property</code>).</li>
              <li><strong>Type Annotations:</strong> Type hints in Python (<code>str | None</code>, <code>list[int]</code>, <code>dict[str, Any]</code>).</li>
              <li><strong>Error Handling:</strong> <code>try / except / finally</code> and raising custom exceptions.</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <BookOpen size={14} className="text-blue-500" /> High-Yield Reading
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5">
                <li><a href="https://docs.python.org/3/tutorial/" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Official Python 3 Tutorial <ExternalLink size={11} /></a></li>
                <li><a href="https://github.com/astral-sh/uv" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">uv Package Manager Documentation <ExternalLink size={11} /></a></li>
                <li><em>Book:</em> <em>Fluent Python</em> by Luciano Ramalho (for writing idiomatic Python).</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <Code2 size={14} className="text-blue-500" /> Video Tutorials
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5">
                <li><a href="https://www.youtube.com/watch?v=kqtD5dpn9C8" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Programming with Mosh: Python for Beginners <ExternalLink size={11} /></a></li>
                <li><a href="https://www.youtube.com/watch?v=C-gEQdGVXbk" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Corey Schafer: Python OOP Series (The Gold Standard) <ExternalLink size={11} /></a></li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm text-emerald-900 dark:text-emerald-300">
            <strong>Checkmark Project:</strong> Write a CLI script using <code>httpx</code> that fetches a user list from a public API (like GitHub or JSONPlaceholder), transforms the data with a Python class, and writes a clean formatted report to a JSON file.
          </div>
        </section>

        {/* Phase 2: Django Core & ORM */}
        <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                Phase 2
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                Django Fundamentals &amp; The Database ORM
              </h2>
            </div>
            <span className="text-xs font-mono font-medium text-zinc-500">Timeline: 3 to 4 Weeks</span>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-dm leading-relaxed">
            <strong>Goal:</strong> Understand Django&apos;s project architecture, apps ecosystem, the powerful Django ORM, and how database migrations work.
          </p>

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono">
              Core Skills to Master
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400 list-disc pl-5 font-dm">
              <li><strong>Project vs. Apps:</strong> Understanding <code>manage.py</code>, <code>settings.py</code>, and modular Django apps (<code>python manage.py startapp</code>).</li>
              <li><strong>Django Models &amp; Fields:</strong> <code>CharField</code>, <code>IntegerField</code>, <code>DateTimeField</code>, <code>ForeignKey</code> (one-to-many), and <code>ManyToManyField</code>.</li>
              <li><strong>Migrations Mastery:</strong> <code>makemigrations</code>, <code>migrate</code>, inspecting SQL via <code>sqlmigrate</code>, and handling schema modifications safely.</li>
              <li><strong>Django QuerySets:</strong> <code>Model.objects.filter()</code>, <code>exclude()</code>, <code>select_related()</code> (SQL JOIN to eliminate N+1 queries), and <code>prefetch_related()</code>.</li>
              <li><strong>The Django Admin:</strong> Registering models, configuring custom columns, search fields, and filters for an instant operations dashboard.</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <BookOpen size={14} className="text-amber-500" /> High-Yield Reading
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5">
                <li><a href="https://docs.djangoproject.com/en/stable/intro/tutorial01/" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Official Django Tutorial (Polls App) <ExternalLink size={11} /></a></li>
                <li><em>Book:</em> <em>Django for Beginners</em> by William S. Vincent (clear, step-by-step).</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <Code2 size={14} className="text-amber-500" /> Video Tutorials
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5">
                <li><a href="https://www.youtube.com/watch?v=UmljXZIypDc" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Corey Schafer: Django Full Course from Scratch <ExternalLink size={11} /></a></li>
                <li><a href="https://www.youtube.com/watch?v=rHux0gMZ3Eg" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Dennis Ivy: Django Course for Beginners <ExternalLink size={11} /></a></li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm text-emerald-900 dark:text-emerald-300">
            <strong>Checkmark Project:</strong> Build a multi-table Blog / Content Management System with Categories, Authors, Posts, and Comments. Manage all records through a fully customized Django Admin dashboard with search and filters.
          </div>
        </section>

        {/* Phase 3: Django REST Framework (DRF) */}
        <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                Phase 3
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                Django REST Framework (DRF) &amp; APIs
              </h2>
            </div>
            <span className="text-xs font-mono font-medium text-zinc-500">Timeline: 3 to 4 Weeks</span>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-dm leading-relaxed">
            <strong>Goal:</strong> Build enterprise-grade JSON REST APIs that connect directly to modern Next.js or React frontends, with validation, pagination, and filtering.
          </p>

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono">
              Core Skills to Master
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400 list-disc pl-5 font-dm">
              <li><strong>Serializers:</strong> <code>ModelSerializer</code>, field-level validation, nested relationships, and read-only vs. write-only fields.</li>
              <li><strong>Views &amp; ViewSets:</strong> <code>APIView</code> vs <code>GenericAPIView</code> vs <code>ModelViewSet</code> with DefaultRouter (providing full CRUD endpoints automatically).</li>
              <li><strong>CORS Configuration:</strong> Setting up <code>django-cors-headers</code> so your local Next.js client can consume your Django backend without browser blocks.</li>
              <li><strong>Pagination &amp; Search:</strong> Page number pagination, ordering filters, and search filters using <code>django-filter</code>.</li>
              <li><strong>API Documentation:</strong> Auto-generating interactive Swagger UI with <code>drf-spectacular</code> (OpenAPI 3).</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <BookOpen size={14} className="text-purple-500" /> High-Yield Reading
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5">
                <li><a href="https://www.django-rest-framework.org/tutorial/1-serialization/" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">DRF Official Tutorial <ExternalLink size={11} /></a></li>
                <li><em>Book:</em> <em>Django for APIs</em> by William S. Vincent (ideal for frontend developers).</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <Code2 size={14} className="text-purple-500" /> Video Tutorials
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5">
                <li><a href="https://www.youtube.com/watch?v=c708Nf0cHrs" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Dennis Ivy: Django REST Framework Tutorial <ExternalLink size={11} /></a></li>
                <li><a href="https://www.youtube.com/watch?v=Ej_02ICOIgs" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">freeCodeCamp: Django REST Framework Crash Course <ExternalLink size={11} /></a></li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm text-emerald-900 dark:text-emerald-300">
            <strong>Checkmark Project:</strong> Build a Project Management API (Workspaces &rarr; Boards &rarr; Tasks) with DRF ViewSets, nested serializers, status filtering, and connect it to a quick React/Next.js frontend using TanStack Query.
          </div>
        </section>

        {/* Phase 4: Auth, Security & PostgreSQL */}
        <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                Phase 4
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                Authentication, PostgreSQL &amp; Permissions
              </h2>
            </div>
            <span className="text-xs font-mono font-medium text-zinc-500">Timeline: 2 to 3 Weeks</span>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-dm leading-relaxed">
            <strong>Goal:</strong> Replace development SQLite with production PostgreSQL and secure your endpoints using JWT authentication and custom object-level permissions.
          </p>

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono">
              Core Skills to Master
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400 list-disc pl-5 font-dm">
              <li><strong>Custom User Model:</strong> Always extend <code>AbstractUser</code> from day one (email-based login instead of username).</li>
              <li><strong>JWT Authentication:</strong> Implementing <code>djangorestframework-simplejwt</code> (access tokens, refresh tokens, and cookie storage).</li>
              <li><strong>Object-Level Permissions:</strong> Writing custom DRF permissions (e.g. <code>IsOwnerOrReadOnly</code>, <code>IsWorkspaceAdmin</code>).</li>
              <li><strong>PostgreSQL in Production:</strong> Switching from SQLite to PostgreSQL with <code>psycopg</code> and environment variables (via <code>django-environ</code>).</li>
              <li><strong>Background Tasks with Celery &amp; Redis:</strong> Offloading slow processes (sending emails, processing exports) without hanging the HTTP response.</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-emerald-500" /> High-Yield Reading
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5">
                <li><a href="https://django-rest-framework-simplejwt.readthedocs.io/" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">SimpleJWT Documentation <ExternalLink size={11} /></a></li>
                <li><a href="https://testdriven.io/blog/django-custom-user-model/" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">TestDriven.io: Django Custom User Model Guide <ExternalLink size={11} /></a></li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <Code2 size={14} className="text-emerald-500" /> Video Tutorials
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5">
                <li><a href="https://www.youtube.com/watch?v=xjMP0hspNLE" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Django SimpleJWT Authentication Tutorial <ExternalLink size={11} /></a></li>
                <li><a href="https://www.youtube.com/watch?v=TH93mBhlFk0" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Celery + Redis with Django Walkthrough <ExternalLink size={11} /></a></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Phase 5: Testing, Docker & Deployment */}
        <section className="mb-14 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
                Phase 5
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                Automated Testing, Docker &amp; Cloud Deployment
              </h2>
            </div>
            <span className="text-xs font-mono font-medium text-zinc-500">Timeline: 2 to 3 Weeks</span>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-dm leading-relaxed">
            <strong>Goal:</strong> Write reliable backend tests using Pytest, package your application into a production Docker container, and deploy it to a live cloud host with Gunicorn/Uvicorn.
          </p>

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono">
              Core Skills to Master
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400 list-disc pl-5 font-dm">
              <li><strong>Testing with Pytest:</strong> Using <code>pytest-django</code>, writing test fixtures, and testing API status codes and payloads via <code>APIClient</code>.</li>
              <li><strong>Production Server:</strong> WSGI/ASGI servers (<code>gunicorn</code>, <code>uvicorn</code>), serving static files via WhiteNoise or S3/Cloud Storage.</li>
              <li><strong>Containerization:</strong> Crafting a lightweight multi-stage <code>Dockerfile</code> and <code>docker-compose.yml</code> for Django + PostgreSQL + Redis.</li>
              <li><strong>Live Deployment:</strong> Deploying to platforms like Render, Railway, Fly.io, or AWS / GCP with automated database migrations on deploy.</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <BookOpen size={14} className="text-rose-500" /> High-Yield Reading
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5">
                <li><a href="https://pytest-django.readthedocs.io/" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">pytest-django Official Documentation <ExternalLink size={11} /></a></li>
                <li><a href="https://whitenoise.readthedocs.io/" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">WhiteNoise Static Files Guide <ExternalLink size={11} /></a></li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <Code2 size={14} className="text-rose-500" /> Video Tutorials
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5">
                <li><a href="https://www.youtube.com/watch?v=mCSy9B8Kx04" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Deploying Django with Docker &amp; Gunicorn <ExternalLink size={11} /></a></li>
                <li><a href="https://www.youtube.com/watch?v=pg19Z8LLKh4" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">TechWorld with Nana: Docker for Beginners <ExternalLink size={11} /></a></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Capstone Project */}
        <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-terra/10 via-brand-ember/5 to-transparent border border-brand-terra/30 shadow-xs space-y-5">
          <div className="flex items-center gap-3">
            <Sparkles className="text-brand-terra dark:text-brand-ember" size={26} />
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">
              The Capstone: Multi-Tenant SaaS Backend
            </h2>
          </div>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-dm leading-relaxed">
            This project combines everything Big Dave needs to stand out as a legitimate, senior-level full-stack engineer:
          </p>

          <div className="space-y-3 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-dm">
            <div className="p-4 rounded-xl bg-white/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <p className="font-bold text-zinc-900 dark:text-white text-sm">Suggested Project: Team Collaboration &amp; Invoicing Platform</p>
              <ul className="list-disc pl-5 space-y-1.5 text-zinc-600 dark:text-zinc-400">
                <li><strong>Backend:</strong> Python 3.12, Django 5.x, Django REST Framework, PostgreSQL, SimpleJWT.</li>
                <li><strong>Architecture:</strong> Organizations &rarr; Memberships (Owner, Admin, Member) &rarr; Invoices &rarr; Payment Logs.</li>
                <li><strong>Operations:</strong> Custom Django Admin portal with filters, search, and CSV export actions.</li>
                <li><strong>Background Jobs:</strong> Celery + Redis worker sending invoice email notifications.</li>
                <li><strong>Client Frontend:</strong> Next.js 16 (React 19, TypeScript, Tailwind) consuming the Django API.</li>
                <li><strong>DevOps:</strong> Dockerized, GitHub Actions CI running Pytest on push, deployed to Render or AWS.</li>
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
