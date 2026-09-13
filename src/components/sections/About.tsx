'use client'

import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Logo } from '@/components/ui/Logo'

export function About() {
  return (
    <section id="about" className="bg-brand-cream dark:bg-zinc-950 py-20 md:py-28 relative border-t border-zinc-200/60 dark:border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Logo & Stat Badges (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <AnimatedSection>
              <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700/80 shadow-md inline-flex items-center justify-center">
                <Logo variant="auto" size="md" />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="mt-6 inline-flex items-center px-4 py-1.5 rounded-full font-dm font-medium text-xs bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 shadow-sm">
                Est. 2025 • Based in Abuja, Nigeria
              </div>
            </AnimatedSection>

            {/* Stat Cards Grid */}
            <div className="mt-8 grid grid-cols-3 gap-3 w-full max-w-md">
              <AnimatedSection delay={0.2}>
                <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700/80 shadow-sm text-center">
                  <div className="font-syne font-bold text-2xl text-brand-terra">2+</div>
                  <div className="font-dm text-xs text-zinc-700 dark:text-zinc-300 font-medium mt-1">Years in Fintech Eng</div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700/80 shadow-sm text-center">
                  <div className="font-syne font-bold text-2xl text-brand-terra">10+</div>
                  <div className="font-dm text-xs text-zinc-700 dark:text-zinc-300 font-medium mt-1">Shipped Projects</div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700/80 shadow-sm text-center">
                  <div className="font-syne font-bold text-2xl text-brand-terra">2</div>
                  <div className="font-dm text-xs text-zinc-700 dark:text-zinc-300 font-medium mt-1">Core Platforms</div>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Right Column: Narrative & Values (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <AnimatedSection>
              <SectionLabel>About Gran Jefe</SectionLabel>
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-syne font-bold text-zinc-900 dark:text-white tracking-tight">
                Craftsmanship first.{' '}
                <span className="text-brand-terra">No shortcuts.</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="space-y-4 font-dm text-zinc-800 dark:text-zinc-200 text-base leading-relaxed">
                <p>
                  Since 2023, Gran Jefe has engineered production financial systems in fintech — performance-critical, security-aware, real-world scale applications that people depend on every day.
                </p>
                <p>
                  Alongside production fintech engineering, we have built and launched multiple mobile applications and web platforms from zero to live deployment. Gran Jefe is the formal home for that craft.
                </p>
                <p>
                  We partner with founders, businesses, and product teams who need custom software built right the first time — with clean code, modern user experience, and long-term reliability.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="p-5 rounded-xl bg-white dark:bg-zinc-900 border-l-4 border-brand-terra border-y border-r border-zinc-200 dark:border-zinc-700/80 font-dm text-sm text-zinc-800 dark:text-zinc-200 shadow-sm">
                <span className="font-bold text-zinc-900 dark:text-white">Our Commitment:</span> Clear communication, honest timelines, zero technical bloat, and software that delivers real business value.
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
