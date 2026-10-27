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
  Binary,
  GraduationCap
} from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Logo } from '@/components/ui/Logo'
import { CurriculumLeadCapture } from '@/components/curriculum/CurriculumLeadCapture'
import { CurriculumChecklist, type CurriculumModuleGroup } from '@/components/curriculum/CurriculumChecklist'
import { CurriculumJourneyGuide } from '@/components/curriculum/CurriculumJourneyGuide'

export const metadata: Metadata = {
  title: 'AI Systems & LLM Application Engineering Curriculum | Gran Jefe Learning Hub',
  description: 'Learn how to build production-grade AI applications, autonomous agents, RAG vector pipelines, and structured tool calling systems with Python and TypeScript.',
}

const aiModules: CurriculumModuleGroup[] = [
  {
    moduleNumber: 1,
    title: 'LLM APIs, Structured Output & Tool Calling',
    duration: '2 to 3 Weeks',
    milestones: [
      { id: 'ai-tokenomics', title: 'Token Economics, Context Windows & Caching', description: 'Understand BPE tokenizers, compute token budgets, and implement prompt caching.' },
      { id: 'ai-structured', title: 'Deterministic JSON Output with Pydantic & Zod', description: 'Force model responses into strict, validated schemas that integrate with backend pipelines.' },
      { id: 'ai-tool-calling', title: 'Dynamic Tool / Function Calling', description: 'Equip models with custom tools for database queries, web scraping, and calculations.' },
      { id: 'ai-sse', title: 'Real-Time Streaming SSE to React Frontends', description: 'Deliver sub-second response starts using Server-Sent Events (SSE) and readable streams.' },
      { id: 'ai-p1-project', title: 'Phase 1 Checkmark: Tool-Equipped Financial Assistant API', description: 'Build an API that calls currency and stock market tools and streams schema-validated responses.' },
    ],
  },
  {
    moduleNumber: 2,
    title: 'Vector Databases & Advanced RAG Architectures',
    duration: '3 to 4 Weeks',
    milestones: [
      { id: 'ai-chunking', title: 'Document Ingestion & Chunking Strategies', description: 'Implement semantic chunking, recursive splitters, and metadata preservation.' },
      { id: 'ai-embeddings', title: 'Vector Embeddings & Semantic Search', description: 'Generate high-dimensional vectors with OpenAI and Google embedding models.' },
      { id: 'ai-pgvector', title: 'PostgreSQL Vector Search with pgvector', description: 'Build HNSW vector indexes in Postgres for rapid cosine similarity queries.' },
      { id: 'ai-rerank', title: 'Cross-Encoder Re-Ranking & Context Fusion', description: 'Refine retrieval candidates using Cohere ReRank to eliminate hallucinations.' },
      { id: 'ai-p2-project', title: 'Phase 2 Checkmark: Production RAG Knowledge Engine', description: 'Ground an LLM on uploaded company documents with hybrid vector + full-text search.' },
    ],
  },
  {
    moduleNumber: 3,
    title: 'Multi-Agent Systems & Autonomous Workflows',
    duration: '3 to 4 Weeks',
    milestones: [
      { id: 'ai-react-loop', title: 'ReAct Loops & Agent State Machines', description: 'Implement autonomous reasoning, action execution, and self-correction cycles.' },
      { id: 'ai-langgraph', title: 'Multi-Agent Orchestration with LangGraph', description: 'Coordinate specialized subagents (Researcher, Coder, Reviewer) with graph state machines.' },
      { id: 'ai-guardrails', title: 'Safety, Guardrails & Prompt Injection Defense', description: 'Implement input sanitization, output policy validators, and token spend caps.' },
      { id: 'ai-p3-project', title: 'Phase 3 Checkmark: Autonomous Multi-Agent Research Swarm', description: 'Ship a swarm of agents that collaboratively plan, research, and draft technical reports.' },
    ],
  },
  {
    moduleNumber: 4,
    title: 'Capstone: Autonomous Enterprise Knowledge Copilot',
    duration: 'Final Phase',
    milestones: [
      { id: 'ai-ingestion-pipe', title: 'Automated Document Ingestion Pipeline', description: 'Parse multi-format company files into searchable, categorized vector collections.' },
      { id: 'ai-observability', title: 'LLM Observability & Tracing', description: 'Monitor token latencies, cost per request, and evaluation metrics with Langfuse.' },
      { id: 'ai-capstone-project', title: 'Final Capstone: Enterprise Knowledge Copilot', description: 'Deploy a complete RAG-backed research copilot with citations and streaming UI.' },
    ],
  },
]

export default function AISystemsCurriculumPage() {
  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-base text-brand-base dark:text-white selection:bg-brand-terra selection:text-white transition-colors duration-300 font-sans">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/#curriculum"
              className="inline-flex items-center gap-1.5 sm:gap-2 text-xs font-dm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-brand-terra-ink dark:hover:text-brand-ember transition-colors py-1.5 px-2.5 sm:px-3 rounded-lg bg-zinc-100 hover:bg-zinc-200/80 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800"
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
              <div className="flex items-center gap-2 text-brand-terra-ink dark:text-brand-ember font-bold text-sm">
                <Network size={18} /> Production RAG &amp; Vector Databases
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-dm">
                Master document chunking strategies, semantic embedding models, hybrid keyword-vector search with pgvector, and cross-encoder re-ranking.
              </p>
            </div>
          </div>
        </div>

        {/* Learner Journey Guide */}
        <CurriculumJourneyGuide />

        {/* Interactive Milestone Progress Tracker */}
        <section className="mb-14">
          <CurriculumChecklist
            trackId="ai-systems"
            trackTitle="AI Systems & LLM Application Engineering"
            modules={aiModules}
          />
        </section>

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <BookOpen size={14} className="text-cyan-500" /> High-Yield Reading
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5 font-dm">
                <li><a href="https://docs.anthropic.com/en/docs/build-with-claude/tool-use" target="_blank" rel="noopener noreferrer" className="text-brand-terra-ink hover:underline inline-flex items-center gap-1">Anthropic Docs: Tool Use &amp; Function Calling <ExternalLink size={11} /></a></li>
                <li><a href="https://platform.openai.com/docs/guides/structured-outputs" target="_blank" rel="noopener noreferrer" className="text-brand-terra-ink hover:underline inline-flex items-center gap-1">OpenAI Guide: Structured Outputs &amp; JSON Schema <ExternalLink size={11} /></a></li>
                <li><a href="https://ai.google.dev/gemini-api/docs" target="_blank" rel="noopener noreferrer" className="text-brand-terra-ink hover:underline inline-flex items-center gap-1">Google Gemini API: Multimodal &amp; System Instructions <ExternalLink size={11} /></a></li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <Code2 size={14} className="text-cyan-500" /> Practical Video Resource
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5 font-dm">
                <li><a href="https://www.youtube.com/watch?v=zjkBMFhNj_g" target="_blank" rel="noopener noreferrer" className="text-brand-terra-ink hover:underline inline-flex items-center gap-1">Andrej Karpathy: Intro to Large Language Models <ExternalLink size={11} /></a></li>
                <li><a href="https://www.youtube.com/watch?v=wjZofJX0v4U" target="_blank" rel="noopener noreferrer" className="text-brand-terra-ink hover:underline inline-flex items-center gap-1">3Blue1Brown: Visual Intro to Transformers &amp; Attention <ExternalLink size={11} /></a></li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm text-emerald-900 dark:text-emerald-300">
            <strong>Checkmark Project:</strong> Build a tool-calling financial assistant in Python or TypeScript that can look up currency conversion rates, calculate VAT tax tables, and return structured JSON summaries streamed live over SSE.
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <BookOpen size={14} className="text-blue-500" /> High-Yield Reading
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5 font-dm">
                <li><a href="https://www.pinecone.io/learn/advanced-rag-techniques/" target="_blank" rel="noopener noreferrer" className="text-brand-terra-ink hover:underline inline-flex items-center gap-1">Pinecone: Advanced RAG Techniques &amp; Re-ranking <ExternalLink size={11} /></a></li>
                <li><a href="https://github.com/pgvector/pgvector" target="_blank" rel="noopener noreferrer" className="text-brand-terra-ink hover:underline inline-flex items-center gap-1">pgvector: Open-Source Vector Similarity Search in Postgres <ExternalLink size={11} /></a></li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <Code2 size={14} className="text-blue-500" /> Practical Video Resource
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5 font-dm">
                <li><a href="https://www.youtube.com/watch?v=aywZrzNaKjs" target="_blank" rel="noopener noreferrer" className="text-brand-terra-ink hover:underline inline-flex items-center gap-1">freeCodeCamp: Vector Databases &amp; Embeddings Masterclass <ExternalLink size={11} /></a></li>
                <li><a href="https://www.youtube.com/watch?v=1vTXp_f9JbU" target="_blank" rel="noopener noreferrer" className="text-brand-terra-ink hover:underline inline-flex items-center gap-1">ByteByteGo: Retrieval-Augmented Generation (RAG) Architecture <ExternalLink size={11} /></a></li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm text-emerald-900 dark:text-emerald-300">
            <strong>Checkmark Project:</strong> Build a PDF Knowledge Search engine that ingests financial statements, embeds paragraphs with pgvector HNSW indexing, re-ranks with Cohere, and generates accurate answers with exact page citations.
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <BookOpen size={14} className="text-purple-500" /> High-Yield Reading
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5 font-dm">
                <li><a href="https://lilianweng.github.io/posts/2023-06-23-agent/" target="_blank" rel="noopener noreferrer" className="text-brand-terra-ink hover:underline inline-flex items-center gap-1">Lilian Weng (OpenAI): LLM Powered Autonomous Agents <ExternalLink size={11} /></a></li>
                <li><a href="https://langchain-ai.github.io/langgraph/" target="_blank" rel="noopener noreferrer" className="text-brand-terra-ink hover:underline inline-flex items-center gap-1">LangGraph Documentation: Cycles, Branching &amp; State <ExternalLink size={11} /></a></li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <Code2 size={14} className="text-purple-500" /> Practical Video Resource
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5 font-dm">
                <li><a href="https://www.youtube.com/watch?v=sal78ACtGTc" target="_blank" rel="noopener noreferrer" className="text-brand-terra-ink hover:underline inline-flex items-center gap-1">Harrison Chase: Multi-Agent Architectures with LangGraph <ExternalLink size={11} /></a></li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm text-emerald-900 dark:text-emerald-300">
            <strong>Checkmark Project:</strong> Build an automated Market Research Agent swarm with LangGraph where an orchestrator breaks down a prompt, dispatches worker subagents to browse real-time APIs, and compiles a Markdown briefing with citations.
          </div>
        </section>

        {/* Capstone */}
        <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent border border-cyan-500/30 shadow-xs space-y-5">
          <div className="flex items-center gap-3">
            <Sparkles className="text-cyan-500" size={26} />
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white font-syne">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-white/80 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <BookOpen size={14} className="text-cyan-500" /> High-Yield Reading
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5 font-dm">
                <li><a href="https://langfuse.com/docs" target="_blank" rel="noopener noreferrer" className="text-brand-terra-ink hover:underline inline-flex items-center gap-1">Langfuse: Open-Source LLM Observability &amp; Tracing <ExternalLink size={11} /></a></li>
                <li><a href="https://eugeneyan.com/writing/llm-patterns/" target="_blank" rel="noopener noreferrer" className="text-brand-terra-ink hover:underline inline-flex items-center gap-1">Eugene Yan: Patterns for Building LLM-Based Systems <ExternalLink size={11} /></a></li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-white/80 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <Code2 size={14} className="text-cyan-500" /> Practical Video Resource
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5 font-dm">
                <li><a href="https://www.youtube.com/watch?v=1vTXp_f9JbU" target="_blank" rel="noopener noreferrer" className="text-brand-terra-ink hover:underline inline-flex items-center gap-1">ByteByteGo: Production LLM Evaluation &amp; Guardrails <ExternalLink size={11} /></a></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Coursera & Accredited Certifications */}
        <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 border border-cyan-500/20 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                <GraduationCap size={18} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                  Coursera &amp; Accredited AI Certifications
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 font-dm">
                  Strengthen your foundation with rigorous, industry-defining certifications from Stanford, DeepLearning.AI, and IBM.
                </p>
              </div>
            </div>
            <span className="text-[11px] font-mono font-medium text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
              Accredited Paths
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2 flex flex-col justify-between">
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-bold uppercase">
                  DeepLearning.AI &amp; AWS
                </span>
                <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                  Generative AI with Large Language Models
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 font-dm">
                  Instruction fine-tuning, PEFT/LoRA, RLHF alignment, and deploying LLMs on AWS SageMaker.
                </p>
              </div>
              <a
                href="https://www.coursera.org/learn/generative-ai-with-llms"
                target="_blank"
                rel="noopener noreferrer"
                className="pt-2 text-xs font-semibold text-brand-terra-ink hover:underline flex items-center gap-1"
              >
                <span>View on Coursera</span>
                <ExternalLink size={11} />
              </a>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2 flex flex-col justify-between">
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 font-bold uppercase">
                  Stanford &amp; DeepLearning.AI
                </span>
                <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                  Machine Learning Specialization (Andrew Ng)
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 font-dm">
                  The gold standard foundation: gradient descent, neural networks, unsupervised learning, and recommender systems.
                </p>
              </div>
              <a
                href="https://www.coursera.org/specializations/machine-learning-introduction"
                target="_blank"
                rel="noopener noreferrer"
                className="pt-2 text-xs font-semibold text-brand-terra-ink hover:underline flex items-center gap-1"
              >
                <span>View on Coursera</span>
                <ExternalLink size={11} />
              </a>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2 flex flex-col justify-between">
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-bold uppercase">
                  IBM Professional Certificate
                </span>
                <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                  IBM Applied AI Professional Certificate
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 font-dm">
                  Build AI-powered chatbots, computer vision pipelines, and intelligent assistant microservices.
                </p>
              </div>
              <a
                href="https://www.coursera.org/professional-certificates/applied-artifical-intelligence-ibm-watson-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="pt-2 text-xs font-semibold text-brand-terra-ink hover:underline flex items-center gap-1"
              >
                <span>View on Coursera</span>
                <ExternalLink size={11} />
              </a>
            </div>
          </div>
        </section>

        {/* Lead Capture */}
        <CurriculumLeadCapture trackTitle="AI Systems & LLM Application Engineering" />

        {/* Footer Navigation */}
        <div className="mt-14 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/#curriculum"
            className="inline-flex items-center gap-2 text-sm font-dm font-semibold text-brand-terra-ink dark:text-brand-ember hover:underline"
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
