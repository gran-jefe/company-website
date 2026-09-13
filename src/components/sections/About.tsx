'use client'

import Image from 'next/image'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Terminal, Shield, Cpu, Code2, Award, Zap } from 'lucide-react'

export function About() {
  const milestones = [
    {
      year: '2023',
      label: 'FINTECH PRODUCTION',
      detail: 'Architected high-throughput ledger services, payment webhooks, and biometric mobile wallets at a fintech company.',
    },
    {
      year: '2024',
      label: 'FULL-STACK CRAFT',
      detail: 'Shipped 10+ production mobile and web applications from zero to live deployment across iOS, Android, and Web.',
    },
    {
      year: '2025',
      label: 'STUDIO EXPANSION',
      detail: 'Formally established Gran Jefe Studio as an engineering studio delivering software worldwide.',
    },
  ]

  return (
    <section id="about" className="bg-brand-cream dark:bg-zinc-900/40 py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Monogram & Developer Profile Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <AnimatedSection>
              <div className="relative group">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-brand-terra via-dev-cyan to-dev-violet opacity-30 blur-lg group-hover:opacity-60 transition-opacity" />
                <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-brand-terra shadow-2xl bg-zinc-900 flex items-center justify-center">
                  <Image
                    src="/favicon.png"
                    alt="Gran Jefe Logo"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="mt-6 flex flex-wrap gap-2 justify-center lg:justify-start">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-zinc-900 text-brand-terra border border-brand-terra/40">
                  // STUDIO_MANIFESTO
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  ABUJA &amp; GLOBAL
                </span>
              </div>
            </AnimatedSection>

            {/* Quick Stat Cards Grid */}
            <div className="mt-8 grid grid-cols-2 gap-3 w-full max-w-sm">
              <AnimatedSection delay={0.2}>
                <div className="p-4 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-sm text-center lg:text-left">
                  <div className="font-mono text-xs text-zinc-400">TRACK RECORD</div>
                  <div className="font-syne font-extrabold text-2xl text-brand-terra mt-1">2+ Yrs</div>
                  <div className="font-dm text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">Fintech &amp; Mobile</div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="p-4 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-sm text-center lg:text-left">
                  <div className="font-mono text-xs text-zinc-400">DELIVERED</div>
                  <div className="font-syne font-extrabold text-2xl text-brand-terra mt-1">10+</div>
                  <div className="font-dm text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">Shipped Apps</div>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Right Column: Narrative & Milestones (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <AnimatedSection>
              <SectionLabel>About Gran Jefe Studio</SectionLabel>
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-syne font-extrabold text-zinc-900 dark:text-white tracking-tight">
                Gran Jefe is one thing:{' '}
                <span className="text-brand-terra">exceptionally capable.</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="space-y-4 font-dm text-zinc-700 dark:text-zinc-300 text-base leading-relaxed">
                <p className="p-4 rounded-xl bg-white/70 dark:bg-zinc-950/70 border-l-4 border-brand-terra border-y border-r border-zinc-200/80 dark:border-zinc-800">
                  <span className="font-semibold text-zinc-900 dark:text-white">Engineering Philosophy:</span> Since 2023, building production financial systems at a fintech company — performance-critical, compliance-aware, and real-world scale. Every system is engineered with clear zero-trust boundaries and sub-millisecond data pipelines.
                </p>
                <p>
                  Alongside production fintech engineering, Gran Jefe has built and shipped multiple independent mobile applications and web platforms from 0 to live production.
                </p>
                <p className="font-mono text-xs text-brand-terra">
                  // Available for client projects, product engineering, backend architecture, and technical partnerships.
                </p>
              </div>
            </AnimatedSection>

            {/* Timeline Milestones */}
            <div className="space-y-4 pt-2">
              <div className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
                // Engineering Timeline &amp; Milestones
              </div>

              <div className="space-y-3">
                {milestones.map((m, idx) => (
                  <AnimatedSection key={m.year} delay={0.2 + idx * 0.08}>
                    <div className="p-4 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800/80 flex items-start gap-4 hover:border-brand-terra/50 transition-colors">
                      <div className="px-2.5 py-1 rounded bg-brand-terra/10 border border-brand-terra/30 font-mono text-xs font-bold text-brand-terra flex-shrink-0">
                        {m.year}
                      </div>
                      <div>
                        <div className="font-mono text-xs font-bold text-zinc-900 dark:text-white tracking-wide">
                          {m.label}
                        </div>
                        <div className="font-dm text-xs text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed">
                          {m.detail}
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
