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
  CreditCard, 
  Lock, 
  RefreshCw, 
  Scale, 
  Coins,
  GraduationCap
} from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Logo } from '@/components/ui/Logo'
import { CurriculumLeadCapture } from '@/components/curriculum/CurriculumLeadCapture'
import { CurriculumChecklist, type CurriculumModuleGroup } from '@/components/curriculum/CurriculumChecklist'
import { CurriculumJourneyGuide } from '@/components/curriculum/CurriculumJourneyGuide'

export const metadata: Metadata = {
  title: 'Fintech Engineering & Payment Architecture Curriculum | Gran Jefe Learning Hub',
  description: 'Master double-entry ledgers, payment gateway orchestration, idempotency, webhook signature verification, and regulatory compliance for high-scale financial systems.',
}

const fintechModules: CurriculumModuleGroup[] = [
  {
    moduleNumber: 1,
    title: 'Double-Entry Accounting & Ledger Architecture',
    duration: '2 to 3 Weeks',
    milestones: [
      { id: 'fintech-equation', title: 'The Fundamental Accounting Equation', description: 'Model immutable Assets, Liabilities, Equity, Revenues, and Expenses with balanced debit/credit pairs.' },
      { id: 'fintech-cents', title: 'Integer Cent Storage & BigInt Representation', description: 'Eliminate floating-point rounding errors and model fractional basis points safely.' },
      { id: 'fintech-locking', title: 'Pessimistic Row Locking (SELECT FOR UPDATE)', description: 'Prevent race conditions and balance double-spending under high concurrency.' },
      { id: 'fintech-p1-project', title: 'Phase 1 Checkmark: Immutable Double-Entry Ledger API', description: 'Build an immutable ledger where account balances are strictly computed from journal entries.' },
    ],
  },
  {
    moduleNumber: 2,
    title: 'Payment Gateways, Webhooks & Idempotency',
    duration: '3 to 4 Weeks',
    milestones: [
      { id: 'fintech-hmac', title: 'HMAC-SHA512 Cryptographic Verification', description: 'Verify raw request payload signatures from Paystack, Stripe, and Flutterwave before processing.' },
      { id: 'fintech-idempotency', title: 'Redis Idempotency Locks', description: 'Implement distributed locking with TTL to ensure duplicate network requests charge the user once.' },
      { id: 'fintech-outbox', title: 'Transactional Outbox Pattern', description: 'Atomically persist financial events with database transactions to prevent dropped notifications.' },
      { id: 'fintech-p2-project', title: 'Phase 2 Checkmark: Idempotent Payment Ingestion Gateway', description: 'Deploy a webhook engine with cryptographic verification and worker queue dispatch.' },
    ],
  },
  {
    moduleNumber: 3,
    title: 'Automated Reconciliation & Regulatory Compliance',
    duration: '2 to 3 Weeks',
    milestones: [
      { id: 'fintech-recon', title: 'End-of-Day Settlement Reconciliation', description: 'Match internal ledger state against bank MT940 / CSV statements and flag discrepancies.' },
      { id: 'fintech-pci', title: 'PCI-DSS Tokenization & Cardholder Data Isolation', description: 'Safely handle tokenized payment instruments without storing raw card PAN or CVV numbers.' },
      { id: 'fintech-kyc', title: 'KYC Verification & Sanctions Screening', description: 'Automate verification pipelines for identity databases and international watchlists.' },
      { id: 'fintech-p3-project', title: 'Phase 3 Checkmark: Automated Reconciliation Engine', description: 'Build a cron service that digests bank settlement feeds and generates audit reports.' },
    ],
  },
  {
    moduleNumber: 4,
    title: 'Capstone: Sovereign Remittance & Settlement Platform',
    duration: 'Final Phase',
    milestones: [
      { id: 'fintech-fx-quote', title: '15-Minute Guaranteed FX Spread Quotes', description: 'Lock real-time exchange rates with automated slippage and hedging windows.' },
      { id: 'fintech-dispute', title: 'Dispute & Chargeback Reversal Workflows', description: 'Handle clawbacks with compensating journal entries and audit trails.' },
      { id: 'fintech-capstone-project', title: 'Final Capstone: Production Remittance Gateway', description: 'Deliver an end-to-end multi-currency payment platform with reconciliation and compliance.' },
    ],
  },
]

export default function FintechArchitectureCurriculumPage() {
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
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/25">
              <Coins size={13} className="text-amber-500" /> High-Value Specialization
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/25">
              <CreditCard size={14} /> Systems Specialization
            </div>
            <span className="text-xs font-mono text-zinc-500">Track 05</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-tight">
            Fintech Engineering &amp; Payment Gateway Architecture
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-dm">
            Learn the exact engineering principles behind multi-billion naira financial systems: double-entry bookkeeping, idempotency keys, webhook signature cryptography, and zero-data-loss transaction pipelines.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm">
                <Scale size={18} /> Never Store Floating-Point Money
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-dm">
                A single float rounding error can corrupt balances and trigger regulatory audits. Master integer cent storage, BigInt representation, and ACID database row locks.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-brand-terra dark:text-brand-ember font-bold text-sm">
                <Lock size={18} /> Idempotent Transfers
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-dm">
                Network drops happen constantly. Learn how idempotency keys in Redis and Postgres guarantee that clicking &quot;Pay ₦50,000&quot; three times charges the user only once.
              </p>
            </div>
          </div>
        </div>

        {/* Learner Journey Guide */}
        <CurriculumJourneyGuide />

        {/* Interactive Milestone Progress Tracker */}
        <section className="mb-14">
          <CurriculumChecklist
            trackId="fintech-architecture"
            trackTitle="Fintech Engineering & Payment Architecture"
            modules={fintechModules}
          />
        </section>

        {/* Phase 1: Ledgers & Math */}
        <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                Phase 1
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                Double-Entry Accounting &amp; Ledger Architecture
              </h2>
            </div>
            <span className="text-xs font-mono font-medium text-zinc-500">Timeline: 2 to 3 Weeks</span>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-dm leading-relaxed">
            <strong>Goal:</strong> Understand why modern banks and remittance providers never use a simple <code>balance</code> column on a user row, and master immutable debits and credits.
          </p>

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono">
              Core Skills to Master
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400 list-disc pl-5 font-dm">
              <li><strong>The Ledger Equation:</strong> Assets = Liabilities + Equity. Every transaction consists of equal, balanced debits and credits.</li>
              <li><strong>Immutable Audit Trails:</strong> Financial entries are never updated or deleted (<code>UPDATE</code> and <code>DELETE</code> are forbidden); mistakes are corrected solely via reversal entries.</li>
              <li><strong>Pessimistic vs. Optimistic Locking:</strong> Using <code>SELECT ... FOR UPDATE</code> in PostgreSQL to prevent double-spending in concurrent withdrawals.</li>
              <li><strong>Multi-Currency Handling:</strong> ISO-4217 currency standards (NGN, GBP, USD, EUR) and foreign exchange (FX) spread calculations.</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <BookOpen size={14} className="text-amber-500" /> High-Yield Reading
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5 font-dm">
                <li><a href="https://martinfowler.com/eaaDev/AccountingTransaction.html" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Martin Fowler: Accounting Transaction Architecture <ExternalLink size={11} /></a></li>
                <li><a href="https://modern-treasury.ghost.io/what-is-a-ledger/" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Modern Treasury: What is a Double-Entry Ledger? <ExternalLink size={11} /></a></li>
                <li><em>Essential Chapter:</em> <em>Designing Data-Intensive Applications</em> by Martin Kleppmann (Chapter 7: Transactions &amp; Isolation).</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <Code2 size={14} className="text-amber-500" /> Practical Video Resource
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5 font-dm">
                <li><a href="https://www.youtube.com/watch?v=R9OHg9K1VHQ" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">ByteByteGo: How Banks Handle Transactions (ACID) <ExternalLink size={11} /></a></li>
                <li><a href="https://www.youtube.com/watch?v=pomxJOFLeQs" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Hussein Nasser: Row Locks &amp; SELECT FOR UPDATE <ExternalLink size={11} /></a></li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm text-emerald-900 dark:text-emerald-300">
            <strong>Checkmark Project:</strong> Build an Immutable Double-Entry Ledger API in Node.js or Python with account balances calculated strictly from the sum of validated historical debit and credit journal entries.
          </div>
        </section>

        {/* Phase 2: Gateway Integrations */}
        <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                Phase 2
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                Payment Gateways, Webhooks &amp; Idempotency
              </h2>
            </div>
            <span className="text-xs font-mono font-medium text-zinc-500">Timeline: 3 to 4 Weeks</span>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-dm leading-relaxed">
            <strong>Goal:</strong> Connect securely to payment providers (Paystack, Stripe, Flutterwave, Mono, Celergate) and engineer bulletproof webhook ingestion.
          </p>

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono">
              Core Skills to Master
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400 list-disc pl-5 font-dm">
              <li><strong>HMAC-SHA512 Webhook Cryptography:</strong> Verifying raw request payload signatures before processing inbound webhook events.</li>
              <li><strong>Idempotency Implementation:</strong> Caching unique idempotency keys in Redis with expiration locks to avoid duplicate payment execution.</li>
              <li><strong>Automated Retry Engines:</strong> Exponential backoff with jitter when sending payout or verification requests to upstream banking partner APIs.</li>
              <li><strong>Outbox Pattern:</strong> Storing webhook events in an internal database table before executing business logic, guaranteeing zero dropped transactions.</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <BookOpen size={14} className="text-blue-500" /> High-Yield Reading
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5 font-dm">
                <li><a href="https://stripe.com/blog/idempotency" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Stripe Engineering: Designing Idempotent APIs <ExternalLink size={11} /></a></li>
                <li><a href="https://brandur.org/idempotency-keys" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Brandur: Implementing Idempotency Keys <ExternalLink size={11} /></a></li>
                <li><a href="https://paystack.com/docs/api/webhook/" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Paystack: Webhook Security &amp; HMAC Verification <ExternalLink size={11} /></a></li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <Code2 size={14} className="text-blue-500" /> Practical Video Resource
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5 font-dm">
                <li><a href="https://www.youtube.com/watch?v=olfaBgJ48qY" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">ByteByteGo: Payment System Design Explained <ExternalLink size={11} /></a></li>
                <li><a href="https://www.youtube.com/watch?v=0k3vQcT1g_0" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">ByteByteGo: How Webhook Signatures Work <ExternalLink size={11} /></a></li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm text-emerald-900 dark:text-emerald-300">
            <strong>Checkmark Project:</strong> Build a payment webhook receiver that verifies cryptographic signatures, writes an idempotency lock to Redis, and stores transactions via the Transactional Outbox pattern.
          </div>
        </section>

        {/* Phase 3: Compliance & Reconciliation */}
        <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                Phase 3
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                Automated Reconciliation &amp; Security Standards
              </h2>
            </div>
            <span className="text-xs font-mono font-medium text-zinc-500">Timeline: 2 to 3 Weeks</span>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-dm leading-relaxed">
            <strong>Goal:</strong> Build daily end-of-day bank statement reconciliation engines and adhere to PCI-DSS Level 1 tokenization principles.
          </p>

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono">
              Core Skills to Master
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400 list-disc pl-5 font-dm">
              <li><strong>Automated Bank Reconciliation:</strong> Writing scheduled jobs that compare internal ledger entries against external bank settlement CSVs, flagging discrepancies.</li>
              <li><strong>Card Data Tokenization:</strong> Never handling raw 16-digit PANs or CVVs; consuming tokenized card references from secure gateway iframes.</li>
              <li><strong>Audit Logs &amp; KYC Verification:</strong> Verification pipelines for Bank Verification Numbers (BVN), National ID (NIN), and automated sanction list checks.</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <BookOpen size={14} className="text-purple-500" /> High-Yield Reading
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5 font-dm">
                <li><a href="https://www.moderntreasury.com/learn/reconciliation" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Modern Treasury: Guide to Financial Reconciliation <ExternalLink size={11} /></a></li>
                <li><a href="https://www.pcisecuritystandards.org/" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">PCI Security Standards Council: Tokenization Specs <ExternalLink size={11} /></a></li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <Code2 size={14} className="text-purple-500" /> Practical Video Resource
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5 font-dm">
                <li><a href="https://www.youtube.com/watch?v=q1Z4s1bIqN8" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">ByteByteGo: Financial Reconciliation Systems <ExternalLink size={11} /></a></li>
                <li><a href="https://www.youtube.com/watch?v=tT8lK7iP75k" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Hussein Nasser: PCI-DSS &amp; Card Data Protection <ExternalLink size={11} /></a></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Capstone */}
        <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 via-brand-terra/5 to-transparent border border-amber-500/30 shadow-xs space-y-5">
          <div className="flex items-center gap-3">
            <Sparkles className="text-amber-500" size={26} />
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white font-syne">
              The Capstone: Multi-Currency Remittance &amp; Settlement Engine
            </h2>
          </div>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-dm leading-relaxed">
            Architect an end-to-end remittance platform capable of handling GBP &rarr; NGN / USD international transfers:
          </p>

          <div className="space-y-3 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-dm">
            <div className="p-4 rounded-xl bg-white/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <p className="font-bold text-zinc-900 dark:text-white text-sm">System Deliverables:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-zinc-600 dark:text-zinc-400">
                <li>Immutable double-entry SQL ledger with customer accounts, fee revenues, and partner clearing accounts.</li>
                <li>Cryptographically verified webhook receiver for Paystack / Celergate with Redis idempotency locks.</li>
                <li>Automated FX conversion quotes locked for a 15-minute execution window.</li>
                <li>End-of-day reconciliation script comparing internal transfers with mocked bank settlement feeds.</li>
                <li>Full security audit report documenting OWASP and PCI-DSS compliance mechanisms.</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-white/80 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <BookOpen size={14} className="text-amber-500" /> High-Yield Reading
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5 font-dm">
                <li><a href="https://stripe.com/docs/treasury" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Stripe Treasury: Multi-Account Financial Flow Architecture <ExternalLink size={11} /></a></li>
                <li><a href="https://docs.celergate.com" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Celergate / Payceler: Cross-Border Settlement Specs <ExternalLink size={11} /></a></li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-white/80 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <Code2 size={14} className="text-amber-500" /> Practical Video Resource
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5 font-dm">
                <li><a href="https://www.youtube.com/watch?v=1vTXp_f9JbU" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">ByteByteGo: Distributed Transaction Orchestration (Saga Pattern) <ExternalLink size={11} /></a></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Coursera & Accredited Certifications */}
        <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-500/5 via-transparent to-blue-500/5 border border-amber-500/20 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                <GraduationCap size={18} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                  Coursera &amp; Accredited University Certifications
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 font-dm">
                  Pair this technical curriculum with globally recognized credentials from leading business and computer science institutions.
                </p>
              </div>
            </div>
            <span className="text-[11px] font-mono font-medium text-amber-600 dark:text-amber-400 uppercase tracking-wider">
              Accredited Paths
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2 flex flex-col justify-between">
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-bold uppercase">
                  Wharton School (Penn)
                </span>
                <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                  FinTech: Foundations &amp; Payments
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 font-dm">
                  Master payment systems, cryptocurrency architecture, AI in finance, and global regulatory frameworks.
                </p>
              </div>
              <a
                href="https://www.coursera.org/specializations/wharton-fintech"
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
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-bold uppercase">
                  Duke University
                </span>
                <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                  Decentralized Finance (DeFi) Specialization
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 font-dm">
                  Deep-dive into smart contracts, liquidity pools, cross-chain bridges, and decentralized settlement rails.
                </p>
              </div>
              <a
                href="https://www.coursera.org/specializations/decentralized-finance-duke"
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
                  Univ of Michigan
                </span>
                <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                  Fintech Innovations Specialization
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 font-dm">
                  Examine blockchain technologies, credit risk modeling, and modern payment orchestration.
                </p>
              </div>
              <a
                href="https://www.coursera.org/specializations/fintech-innovations"
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
        <CurriculumLeadCapture trackTitle="Fintech Engineering & Payment Architecture" />

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
