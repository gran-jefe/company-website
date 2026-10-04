'use client'

import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Logo } from '@/components/ui/Logo'
import { ShieldCheck, Award, MapPin, Globe, Sparkles } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="bg-white dark:bg-zinc-950 py-20 md:py-28 relative border-t border-zinc-200/80 dark:border-zinc-800 text-zinc-900 dark:text-white transition-colors duration-300">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-brand-terra/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Studio Badges & Registry Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <AnimatedSection>
              <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md inline-flex items-center justify-center">
                <Logo variant="auto" size="md" />
              </div>
            </AnimatedSection>

            {/* Official CAC Certified Seal Card */}
            <AnimatedSection delay={0.1}>
              <div className="w-full max-w-md p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-emerald-500/40 shadow-lg text-left space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                    <ShieldCheck size={14} /> CERTIFIED CORPORATE ENTITY
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30">
                    ACTIVE
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="font-syne font-bold text-base text-zinc-900 dark:text-white">GRAN JEFE SOLUTIONS</div>
                  <div className="text-xs font-mono text-zinc-600 dark:text-zinc-400">CAC Registration No: BN 9529101</div>
                  <div className="text-xs font-dm text-zinc-700 dark:text-zinc-300">Proprietor: Adeleke Sherifdeen</div>
                </div>

                <div className="pt-2.5 border-t border-zinc-100 dark:border-zinc-800 text-[11px] font-dm text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
                  <MapPin size={12} className="text-brand-terra flex-shrink-0" />
                  <span>Ibadan &amp; Abuja, Nigeria • Serving Clients Globally</span>
                </div>
              </div>
            </AnimatedSection>

            {/* Studio Metrics */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-md">
              <AnimatedSection delay={0.2}>
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-center shadow-xs">
                  <div className="font-syne font-bold text-2xl text-brand-terra">3+</div>
                  <div className="font-dm text-xs text-zinc-600 dark:text-zinc-400 font-medium mt-1">Years Enterprise</div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-center shadow-xs">
                  <div className="font-syne font-bold text-2xl text-brand-terra">15+</div>
                  <div className="font-dm text-xs text-zinc-600 dark:text-zinc-400 font-medium mt-1">Live Deployments</div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-center shadow-xs">
                  <div className="font-syne font-bold text-2xl text-brand-terra">99/100</div>
                  <div className="font-dm text-xs text-zinc-600 dark:text-zinc-400 font-medium mt-1">Speed Benchmark</div>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Right Column: Narrative & Values (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <AnimatedSection>
              <SectionLabel>The Studio</SectionLabel>
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-syne font-bold text-zinc-900 dark:text-white tracking-tight">
                Craftsmanship first.{' '}
                <span className="text-brand-terra">No shortcuts.</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="space-y-4 font-dm text-zinc-700 dark:text-zinc-300 text-base leading-relaxed">
                <p>
                  Founded by <strong className="text-zinc-900 dark:text-white">Sherifdeen Adeleke</strong>, Gran Jefe is an independent digital product and creative engineering studio. We combine world-class visual aesthetics with high-integrity software engineering, building websites, web applications, and mobile products that convert visitors into revenue.
                </p>
                <p>
                  Our founder's background includes engineering sovereign financial infrastructure as Full-Stack Engineer at Mabilla Group—architecting digital consular payment systems for the <strong className="text-zinc-900 dark:text-white">Nigeria High Commission United Kingdom</strong>, UK Open Banking payment engines for <strong className="text-zinc-900 dark:text-white">Celergate</strong>, and cross-border remittance platforms with biometric verification.
                </p>
                <p>
                  Today, Gran Jefe operates as a registered corporate entity under Nigerian law (<strong>GRAN JEFE SOLUTIONS, BN: 9529101</strong>). We partner with ambitious founders, brands, and companies in the UK, US, Europe, and Nigeria who demand products built with obsessive speed, fluid micro-interactions, and zero technical debt.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border-l-4 border-brand-terra border-y border-r border-zinc-200 dark:border-zinc-800 font-dm text-sm text-zinc-800 dark:text-zinc-200 shadow-xs">
                <span className="font-bold text-zinc-900 dark:text-white">Our Guarantee:</span> Transparent pricing, daily asynchronous Loom updates, zero fluff, and production deployments delivered on strict milestones.
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
