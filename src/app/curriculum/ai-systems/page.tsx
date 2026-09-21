import type { Metadata } from 'next'
import Link from 'next/link'
import { 
  ArrowLeft, 
  BookOpen, 
  Terminal, 
  Sparkles, 
  ExternalLink, 
  Code2, 
  Bot, 
  CheckCircle2, 
  Zap, 
  Database, 
  Cpu, 
  Network, 
  Binary
} from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Logo } from '@/components/ui/Logo'
import { CurriculumLeadCapture } from '@/components/curriculum/CurriculumLeadCapture'

export const metadata: Metadata = {
  title: 'AI Systems & LLM Application Engineering Curriculum | Gran Jefe Learning Hub',
  description: 'Learn how to build production-grade AI applications, autonomous agents, RAG vector pipelines, and structured tool calling systems with Python and TypeScript.',
}

export default function AISystemsCurriculumPage() {
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
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/25">
              <Bot size={13} className="text-cyan-500" /> Frontier Engineering
            </span>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Hero */}
        <div className="space-y-5 border-b border-zinc-200 dark:border-zinc-800 pb-10 mb-12">
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/25">
              <Bot size={14} /> AI Engineering Track
            </div>
            <span className="text-xs font-mono text-zinc-500">Track 06</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-tight">
            AI Systems &amp; LLM Application Engineering
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-dm">
            Move beyond superficial chatbot wrappers. Learn to engineer robust Retrieval-Augmented Generation (RAG), autonomous multi-agent tool calling, and production latency optimization.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold text-sm">
                <Binary size={18} /> Deterministic Structured Output
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-dm">
                Learn how to force LLMs to output strict, schema-validated JSON with Pydantic &amp; Zod, ensuring zero broken frontend UI layouts or invalid database inserts.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-brand-terra dark:text-brand-ember font-bold text-sm">
                <Network size={18} /> Production RAG &amp; Vector Databases
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-dm">
                Master document chunking strategies, semantic embedding models, hybrid keyword-vector search with pgvector, and cross-encoder re-ranking.
              </p>
            </div>
          </div>
        </div>

        {/* Phase 1 */}
        <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                Phase 1
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                LLM APIs, Structured Output &amp; Function Calling
              </h2>
            </div>
            <span className="text-xs font-mono font-medium text-zinc-500">Timeline: 2 to 3 Weeks</span>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-dm leading-relaxed">
            <strong>Goal:</strong> Interact with leading frontier models (Gemini 2.5, Claude 3.5, OpenAI) using native SDKs, streaming responses, and function tool execution.
          </p>

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono">
              Core Skills to Master
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400 list-disc pl-5 font-dm">
              <li><strong>Token Economics &amp; Context Windows:</strong> Calculating input/output token pricing, context caching, and rate limit handling with exponential backoff.</li>
              <li><strong>Structured Outputs:</strong> Enforcing strict Pydantic / Zod models on model completions.</li>
              <li><strong>Function / Tool Calling:</strong> Teaching LLMs to trigger database lookups, weather APIs, and calculation scripts dynamically.</li>
              <li><strong>Streaming SSE:</strong> Delivering real-time token streams to Next.js frontends via Server-Sent Events (SSE).</li>
            </ul>
          </div>
        </section>

        {/* Phase 2: RAG */}
        <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                Phase 2
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                Vector Databases &amp; Advanced RAG Architectures
              </h2>
            </div>
            <span className="text-xs font-mono font-medium text-zinc-500">Timeline: 3 to 4 Weeks</span>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-dm leading-relaxed">
            <strong>Goal:</strong> Ground language models on proprietary company PDFs, databases, and codebases to eliminate hallucinations.
          </p>

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono">
              Core Skills to Master
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400 list-disc pl-5 font-dm">
              <li><strong>Chunking Strategies:</strong> Semantic chunking, recursive character splitting, and markdown header chunking.</li>
              <li><strong>Embeddings:</strong> Generating vectors with OpenAI, Voyage, or Google text-embedding models.</li>
              <li><strong>Vector Indexing with pgvector:</strong> Using PostgreSQL HNSW indexes for high-speed cosine and euclidean similarity lookups.</li>
              <li><strong>Re-ranking:</strong> Using Cohere ReRank or cross-encoders to refine retrieved documents before prompt injection.</li>
            </ul>
          </div>
        </section>

        {/* Phase 3: Autonomous Agents */}
        <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                Phase 3
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                Multi-Agent Systems &amp; Autonomous Workflows
              </h2>
            </div>
            <span className="text-xs font-mono font-medium text-zinc-500">Timeline: 3 to 4 Weeks</span>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-dm leading-relaxed">
            <strong>Goal:</strong> Build autonomous multi-agent pipelines (Planner &rarr; Researcher &rarr; Coder &rarr; Reviewer) with memory and guardrails.
          </p>

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono">
              Core Skills to Master
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400 list-disc pl-5 font-dm">
              <li><strong>Agent Architectures:</strong> ReAct loops (Reasoning + Acting), LangGraph state graphs, and CrewAI delegation.</li>
              <li><strong>Persistent Memory:</strong> Short-term session state vs. long-term memory stored in vector stores and relational DBs.</li>
              <li><strong>Safety &amp; Guardrails:</strong> Input sanitization, prompt injection defenses, and cost anomaly alerts.</li>
            </ul>
          </div>
        </section>

        {/* Capstone */}
        <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent border border-cyan-500/30 shadow-xs space-y-5">
          <div className="flex items-center gap-3">
            <Sparkles className="text-cyan-500" size={26} />
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">
              The Capstone: Autonomous Knowledge Copilot &amp; Research Agent
            </h2>
          </div>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-dm leading-relaxed">
            Architect an enterprise-ready AI copilot that ingests company documentation and performs multi-step research tasks:
          </p>

          <div className="space-y-3 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-dm">
            <div className="p-4 rounded-xl bg-white/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <p className="font-bold text-zinc-900 dark:text-white text-sm">System Specifications:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-zinc-600 dark:text-zinc-400">
                <li>Automatic ingestion pipeline converting PDF, DOCX, and web URLs into vector embeddings in pgvector.</li>
                <li>Hybrid search (PostgreSQL full-text tsvector + cosine distance embeddings) with re-ranking.</li>
                <li>Interactive agent capable of browsing documentation, summarizing findings, and generating cited output.</li>
                <li>Real-time token streaming and interactive UI artifacts rendered on Next.js 16.</li>
                <li>Observability dashboard tracking token expenditure, latency metrics, and user feedback ratings.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Lead Capture */}
        <CurriculumLeadCapture trackTitle="AI Systems & LLM Application Engineering" />

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
