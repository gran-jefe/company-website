import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Terminal, Sparkles, ExternalLink, Code2, Database, ShieldCheck, Cpu } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Logo } from '@/components/ui/Logo'

export const metadata: Metadata = {
  title: 'Python Backend Roadmap for Frontend Developers | Gran Jefe',
  description: 'A targeted transition path from client side concepts (JS/TS, HTTP consumers) to server side architecture (Python, FastAPI, SQL & Systems Engineering) curated for Big Dave.',
}

export default function PythonRoadmapPage() {
  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-base text-brand-base dark:text-white selection:bg-brand-terra selection:text-white transition-colors duration-300">
      {/* Top sticky header */}
      <header className="sticky top-0 z-40 bg-white/85 dark:bg-zinc-950/85 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-dm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-brand-terra dark:hover:text-brand-ember transition-colors py-1.5 px-2.5 rounded-lg bg-zinc-100 hover:bg-zinc-200/80 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800"
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
            <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-brand-terra/10 text-brand-terra dark:text-brand-ember border border-brand-terra/20">
              <Sparkles size={12} /> Curated for Big Dave
            </span>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Hero Section */}
        <div className="space-y-4 border-b border-zinc-200 dark:border-zinc-800 pb-10 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <Terminal size={14} /> Systems Engineering Curriculum
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Python Backend Roadmap for Frontend Developers
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-dm">
            A targeted transition path from client side concepts (JS/TS, HTTP consumers) to server side architecture (Python, FastAPI, SQL, and Systems Engineering).
          </p>

          <div className="p-5 rounded-2xl bg-brand-terra/5 dark:bg-brand-terra/10 border-l-4 border-brand-terra text-sm text-zinc-700 dark:text-zinc-300 space-y-2">
            <p className="font-semibold text-brand-terra dark:text-brand-ember flex items-center gap-2">
              <Sparkles size={16} /> Frontend Advantage
            </p>
            <p className="leading-relaxed">
              Because you already know JSON payloads, HTTP verbs, client state, and browser fetch requests, you do not need to relearn what an API is. Your learning curve focuses purely on:
            </p>
            <p className="font-mono text-xs text-zinc-900 dark:text-zinc-100 bg-white/60 dark:bg-zinc-900/60 p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800">
              Python idioms &amp; syntax &rarr; FastAPI &amp; Pydantic &rarr; Relational Database Design (SQL &amp; SQLAlchemy) &rarr; Auth &amp; Server Architecture.
            </p>
          </div>
        </div>

        {/* Translation Table */}
        <section className="mb-14">
          <div className="flex items-center gap-2 mb-4">
            <Cpu className="text-brand-terra" size={20} />
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
              JS/TS to Python Mental Model Translation
            </h2>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 font-dm">
            Map what you already use daily in React / TypeScript to its direct server side Python counterpart.
          </p>

          <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-xs bg-white dark:bg-zinc-900">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-200 font-semibold font-mono">
                  <th className="p-3 sm:p-4">Concept in Frontend (JS / TS)</th>
                  <th className="p-3 sm:p-4">Python Backend Equivalent</th>
                  <th className="p-3 sm:p-4">Key Difference to Keep in Mind</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-700 dark:text-zinc-300 font-dm">
                <tr className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30">
                  <td className="p-3 sm:p-4 font-mono text-xs"><code>package.json</code> &amp; <code>npm install</code></td>
                  <td className="p-3 sm:p-4 font-mono text-xs"><code>pyproject.toml</code> / <code>requirements.txt</code> + <code>uv</code></td>
                  <td className="p-3 sm:p-4">Python uses virtual environments (<code>.venv</code>) so dependencies do not install globally.</td>
                </tr>
                <tr className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30">
                  <td className="p-3 sm:p-4 font-mono text-xs">TypeScript Interfaces / Zod schemas</td>
                  <td className="p-3 sm:p-4 font-mono text-xs">Pydantic models (<code>BaseModel</code>) &amp; Type Hints</td>
                  <td className="p-3 sm:p-4">Pydantic validates and parses data at runtime, exactly like Zod.</td>
                </tr>
                <tr className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30">
                  <td className="p-3 sm:p-4 font-mono text-xs">Express / Next.js Route Handlers</td>
                  <td className="p-3 sm:p-4 font-mono text-xs">FastAPI path operations (<code>@app.get()</code>, <code>@app.post()</code>)</td>
                  <td className="p-3 sm:p-4">FastAPI automatically autogenerates interactive Swagger docs from type hints.</td>
                </tr>
                <tr className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30">
                  <td className="p-3 sm:p-4 font-mono text-xs">Prisma / Drizzle ORM</td>
                  <td className="p-3 sm:p-4 font-mono text-xs">SQLAlchemy 2.0 / SQLModel + Alembic</td>
                  <td className="p-3 sm:p-4">SQLAlchemy handles connection pooling, migrations, and relationship mapping.</td>
                </tr>
                <tr className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30">
                  <td className="p-3 sm:p-4 font-mono text-xs"><code>async/await</code> + Event Loop</td>
                  <td className="p-3 sm:p-4 font-mono text-xs"><code>async/await</code> + <code>asyncio</code> / Uvicorn</td>
                  <td className="p-3 sm:p-4">Similar syntax, but Python also has synchronous blocking code that runs on threads/processes.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Phase 1 */}
        <section className="mb-14 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-100 dark:border-zinc-800 pb-4">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
              Phase 1
            </span>
            <span className="text-xs font-mono text-zinc-500">Duration: 2 to 3 Weeks</span>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-2">
              Modern Python for JS/TS Developers
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 font-dm">
              <strong>Goal:</strong> Gain fluency in Python syntax, virtual environments, modern typing, and object oriented patterns without getting bogged down by outdated Python 2 paradigms.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono">
              Core Topics
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400 list-disc pl-5 font-dm">
              <li><strong>Environment &amp; Modern Tooling:</strong> Virtual environments (<code>python3 -m venv .venv</code>), modern package managers like <code>uv</code> (super fast) or <code>poetry</code>, <code>pyproject.toml</code>.</li>
              <li><strong>Core Data Structures:</strong> Lists (arrays), Dictionaries (objects/maps), Tuples (immutable records), Sets. Comprehensions (<code>[x for x in items if x &gt; 1]</code> instead of <code>.map().filter()</code>).</li>
              <li><strong>Typing in Modern Python (3.10+):</strong> Type hints (<code>str | None</code>, <code>list[int]</code>, <code>dict[str, Any]</code>). Why types matter for backend API contracts.</li>
              <li><strong>Functions &amp; OOP:</strong> Args/kwargs, keyword-only args, decorators (<code>@decorator</code>), Classes, dataclasses, and dunder methods (<code>__init__</code>, <code>__repr__</code>).</li>
              <li><strong>Error Handling:</strong> <code>try / except / finally</code> vs JS <code>try / catch</code>. Custom exceptions.</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <BookOpen size={14} className="text-blue-500" /> Recommended Reading
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5">
                <li><a href="https://docs.python.org/3/tutorial/" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Official Python 3 Tutorial <ExternalLink size={11} /></a></li>
                <li><a href="https://diveintopython3.net/" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Dive Into Python 3 <ExternalLink size={11} /></a></li>
                <li><a href="https://github.com/astral-sh/uv" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">uv Documentation (Fastest Package Manager) <ExternalLink size={11} /></a></li>
                <li><em>Book:</em> <em>Fluent Python</em> by Luciano Ramalho (idiomatic Python).</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <Code2 size={14} className="text-blue-500" /> Recommended Videos
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5">
                <li><a href="https://www.youtube.com/watch?v=kqtD5dpn9C8" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Programming with Mosh: Python for Beginners <ExternalLink size={11} /></a></li>
                <li><a href="https://www.youtube.com/watch?v=C-gEQdGVXbk" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Corey Schafer: Python OOP Tutorials &amp; Decorators <ExternalLink size={11} /></a></li>
                <li><a href="https://www.youtube.com/watch?v=Qgevy75co8c" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">ArjanCodes: Clean Architecture in Python <ExternalLink size={11} /></a></li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm text-emerald-900 dark:text-emerald-300">
            <strong>Mini Project:</strong> Build a CLI tool (using <code>argparse</code> or <code>typer</code>) that fetches data from a public API (e.g. GitHub or Weather API via <code>httpx</code>), processes it using dataclasses/type hints, and saves summary statistics to a JSON or CSV file.
          </div>
        </section>

        {/* Phase 2 */}
        <section className="mb-14 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-100 dark:border-zinc-800 pb-4">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
              Phase 2
            </span>
            <span className="text-xs font-mono text-zinc-500">Duration: 3 to 4 Weeks</span>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-2">
              Building Web APIs with FastAPI &amp; Pydantic
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 font-dm">
              <strong>Goal:</strong> Learn FastAPI, the primary modern framework for Python backend microservices, high throughput APIs, and AI integrations.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
            <p className="font-semibold text-brand-terra dark:text-brand-ember">Why FastAPI over Django or Flask for a Frontend Dev?</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Intuitive:</strong> Works just like modern TypeScript frameworks; routes look like Express or Next.js API routes.</li>
              <li><strong>Built-in Swagger Docs:</strong> Generates interactive OpenAPI UI (<code>/docs</code>) instantly, making it ideal for someone used to consuming APIs on the frontend.</li>
              <li><strong>Native Async:</strong> Fast asynchronous request handling using <code>async def</code> and ASGI (Uvicorn).</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono">
              Core Topics
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400 list-disc pl-5 font-dm">
              <li><strong>Request/Response Cycle:</strong> Route decorators (<code>@app.get</code>, <code>@app.post</code>, <code>@app.put</code>, <code>@app.delete</code>), path parameters, query parameters, request bodies.</li>
              <li><strong>Data Validation with Pydantic:</strong> Defining request and response schemas (<code>BaseModel</code>, <code>Field</code>), custom validators, nested serialization.</li>
              <li><strong>Dependency Injection:</strong> FastAPI dependency pattern (<code>Depends()</code>) for database sessions, auth checks, and shared logic.</li>
              <li><strong>Middleware &amp; CORS:</strong> Configuring <code>CORSMiddleware</code> so your React or Vue frontend connects smoothly.</li>
              <li><strong>HTTP Status Codes &amp; Error Handling:</strong> Raising <code>HTTPException</code>, custom error handlers, consistent JSON error responses.</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <BookOpen size={14} className="text-amber-500" /> Recommended Reading
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5">
                <li><a href="https://fastapi.tiangolo.com/tutorial/" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">FastAPI Official Tutorial &amp; User Guide <ExternalLink size={11} /></a></li>
                <li><a href="https://docs.pydantic.dev/latest/" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Pydantic v2 Documentation <ExternalLink size={11} /></a></li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <Code2 size={14} className="text-amber-500" /> Recommended Videos
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5">
                <li><a href="https://www.youtube.com/watch?v=0sOvCWFmrtA" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">freeCodeCamp: FastAPI Comprehensive 19-Hour Course <ExternalLink size={11} /></a></li>
                <li><a href="https://www.youtube.com/watch?v=SORiTsvnU28" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Amigoscode: FastAPI Full Course <ExternalLink size={11} /></a></li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm text-emerald-900 dark:text-emerald-300">
            <strong>Mini Project:</strong> Build a Task &amp; Note Taking API with input validation, tag filtering, pagination, and connect it to a quick React/Vite frontend using TanStack Query.
          </div>
        </section>

        {/* Phase 3 */}
        <section className="mb-14 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-100 dark:border-zinc-800 pb-4">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
              Phase 3
            </span>
            <span className="text-xs font-mono text-zinc-500">Duration: 3 to 4 Weeks</span>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-2">
              Relational Databases, SQL &amp; ORMs
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 font-dm">
              <strong>Goal:</strong> Transition from thinking about data as temporary JSON client state to modeling robust, normalized persistent records in PostgreSQL.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono">
              Core Topics
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400 list-disc pl-5 font-dm">
              <li><strong>PostgreSQL Fundamentals:</strong> Tables, primary keys, foreign keys, unique constraints, indexes, 1 to many and many to many relationships.</li>
              <li><strong>SQL Basics:</strong> <code>SELECT</code>, <code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code>, <code>JOIN</code>, <code>GROUP BY</code>, aggregation.</li>
              <li><strong>Python ORM with SQLAlchemy 2.0 / SQLModel:</strong> Declarative models, querying, filtering, eager vs lazy loading (preventing the N+1 query trap).</li>
              <li><strong>Database Migrations with Alembic:</strong> Generating migrations, applying schema revisions, rolling back schema safely.</li>
              <li><strong>Database Sessions:</strong> Connection pools, transactional commits, and rollbacks on failure.</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <Database size={14} className="text-purple-500" /> Recommended Reading
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5">
                <li><a href="https://www.postgresqltutorial.com/" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">PostgreSQL Tutorial (postgresqltutorial.com) <ExternalLink size={11} /></a></li>
                <li><a href="https://docs.sqlalchemy.org/en/20/tutorial/" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">SQLAlchemy 2.0 Unified Tutorial <ExternalLink size={11} /></a></li>
                <li><a href="https://alembic.sqlalchemy.org/en/latest/tutorial.html" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Alembic Migrations Tutorial <ExternalLink size={11} /></a></li>
                <li><a href="https://sqlmodel.tiangolo.com/" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">SQLModel Documentation <ExternalLink size={11} /></a></li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <Code2 size={14} className="text-purple-500" /> Recommended Videos
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5">
                <li><a href="https://www.youtube.com/watch?v=qw--VYLpxG4" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">freeCodeCamp: PostgreSQL Full Course <ExternalLink size={11} /></a></li>
                <li><a href="https://www.youtube.com/watch?v=W0y_oBq_Q7I" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">SQLAlchemy 2.0 Crash Course &amp; Best Practices <ExternalLink size={11} /></a></li>
                <li><a href="https://www.youtube.com/watch?v=HusseinNasser-softeng" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Hussein Nasser: Database Performance &amp; ACID <ExternalLink size={11} /></a></li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm text-emerald-900 dark:text-emerald-300">
            <strong>Mini Project:</strong> E-Commerce Product &amp; Order System with a relational database (Users &rarr; Orders &rarr; Order Items &rarr; Products), Alembic migrations, and database transaction rollbacks if stock runs out.
          </div>
        </section>

        {/* Phase 4 */}
        <section className="mb-14 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-100 dark:border-zinc-800 pb-4">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              Phase 4
            </span>
            <span className="text-xs font-mono text-zinc-500">Duration: 2 to 3 Weeks</span>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-2">
              Authentication, Security &amp; Background Tasks
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 font-dm">
              <strong>Goal:</strong> Implement bulletproof authentication, role based authorization, and handle asynchronous background workloads.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono">
              Core Topics
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400 list-disc pl-5 font-dm">
              <li><strong>Password Security:</strong> Hashing passwords using <code>passlib</code> / <code>bcrypt</code> or <code>argon2-cffi</code> with salts.</li>
              <li><strong>JWT Authentication:</strong> Generating and decoding tokens (<code>PyJWT</code> / <code>python-jose</code>), expiration handling, refresh token rotation, and HTTP-only cookie storage.</li>
              <li><strong>Role-Based Access Control (RBAC):</strong> Protecting endpoints via dependency injection (e.g. <code>current_active_user</code>, <code>require_admin</code>).</li>
              <li><strong>Background Tasks:</strong> FastAPI native <code>BackgroundTasks</code> for lightweight async operations (sending emails, logging events).</li>
              <li><strong>Distributed Task Queues:</strong> Celery or RQ paired with Redis for long running jobs (image processing, report generation).</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-emerald-500" /> Recommended Reading
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5">
                <li><a href="https://fastapi.tiangolo.com/tutorial/security/oauth2-jwt/" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">FastAPI OAuth2 with Bearer JWT <ExternalLink size={11} /></a></li>
                <li><a href="https://owasp.org/www-project-top-ten/" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">OWASP Top 10 Security Guide <ExternalLink size={11} /></a></li>
                <li><a href="https://testdriven.io/blog/fastapi-jwt-auth/" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">TestDriven.io: FastAPI JWT Guide <ExternalLink size={11} /></a></li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <Code2 size={14} className="text-emerald-500" /> Recommended Videos
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5">
                <li><a href="https://www.youtube.com/watch?v=6hTRw_HK3Ts" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">FastAPI Auth with JWT &amp; Password Hashing <ExternalLink size={11} /></a></li>
                <li><a href="https://www.youtube.com/watch?v=7Q17ubqL20w" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">JWT Security Pitfalls &amp; Best Practices <ExternalLink size={11} /></a></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Phase 5 */}
        <section className="mb-14 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-100 dark:border-zinc-800 pb-4">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
              Phase 5
            </span>
            <span className="text-xs font-mono text-zinc-500">Duration: 2 to 3 Weeks</span>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-2">
              Automated Testing, Docker &amp; Deployment
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 font-dm">
              <strong>Goal:</strong> Test the API systematically, package the application in a production Docker container, and deploy to live infrastructure.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono">
              Core Topics
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400 list-disc pl-5 font-dm">
              <li><strong>Automated Testing with Pytest:</strong> Test fixtures, mocking external services, testing FastAPI endpoints using <code>httpx.AsyncClient</code> / <code>TestClient</code>.</li>
              <li><strong>Containerization with Docker:</strong> Multi-stage <code>Dockerfile</code> for Python, <code>docker-compose.yml</code> to run FastAPI + PostgreSQL + Redis locally.</li>
              <li><strong>CI/CD Pipelines:</strong> GitHub Actions workflow to run <code>pytest</code>, <code>ruff</code> (linter and formatter), and build container images on push.</li>
              <li><strong>Production Deployment:</strong> Hosting on Render, Railway, Fly.io, or AWS ECS / GCP Cloud Run with managed Postgres (Supabase, Neon).</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <BookOpen size={14} className="text-rose-500" /> Recommended Reading
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5">
                <li><a href="https://docs.pytest.org/en/latest/" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Pytest Documentation <ExternalLink size={11} /></a></li>
                <li><a href="https://fastapi.tiangolo.com/deployment/docker/" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">FastAPI Docker Best Practices <ExternalLink size={11} /></a></li>
                <li><a href="https://docs.astral.sh/ruff/" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Ruff: Ultra Fast Python Linter &amp; Formatter <ExternalLink size={11} /></a></li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <Code2 size={14} className="text-rose-500" /> Recommended Videos
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5">
                <li><a href="https://www.youtube.com/watch?v=cHYq14du8xQ" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Pytest Quickstart for API Testing <ExternalLink size={11} /></a></li>
                <li><a href="https://www.youtube.com/watch?v=pg19Z8LLKh4" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">TechWorld with Nana: Docker for Beginners <ExternalLink size={11} /></a></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Capstone Project */}
        <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-terra/10 via-brand-ember/5 to-transparent border border-brand-terra/30 shadow-xs space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="text-brand-terra dark:text-brand-ember" size={24} />
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Capstone Project: Full-Stack SaaS Application
            </h2>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-300 font-dm">
            Connect your existing frontend prowess to your brand new Python backend architecture.
          </p>

          <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300 pt-2 font-dm">
            <p className="font-semibold text-zinc-900 dark:text-white">Suggested Capstone: Multi-Tenant Booking or SaaS Operations Portal</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Backend:</strong> Python 3.12+, FastAPI, SQLAlchemy 2.0, PostgreSQL, Alembic, JWT auth in secure HTTP-only cookies, Pytest test suite.</li>
              <li><strong>Frontend:</strong> React/Next.js or Vue with TypeScript consuming your custom FastAPI backend.</li>
              <li><strong>Infrastructure:</strong> Dockerized, CI/CD pipeline on GitHub Actions, live production deployment.</li>
            </ul>
          </div>
        </section>

        {/* Back navigation footer */}
        <div className="mt-14 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-dm font-semibold text-brand-terra dark:text-brand-ember hover:underline"
          >
            <ArrowLeft size={16} /> Return to Gran Jefe Homepage
          </Link>
          <span className="text-xs text-zinc-500 font-mono">
            Gran Jefe Engineering Curriculum &bull; 2025
          </span>
        </div>
      </main>
    </div>
  )
}
