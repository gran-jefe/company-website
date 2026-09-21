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
  Coins
} from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Logo } from '@/components/ui/Logo'
import { CurriculumLeadCapture } from '@/components/curriculum/CurriculumLeadCapture'

export const metadata: Metadata = {
  title: 'Fintech Engineering & Payment Architecture Curriculum | Gran Jefe Learning Hub',
  description: 'Master double-entry ledgers, payment gateway orchestration, idempotency, webhook signature verification, and regulatory compliance for high-scale financial systems.',
}

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
        </section>

        {/* Capstone */}
        <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 via-brand-terra/5 to-transparent border border-amber-500/30 shadow-xs space-y-5">
          <div className="flex items-center gap-3">
            <Sparkles className="text-amber-500" size={26} />
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">
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
