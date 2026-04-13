'use client'

import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function About() {
  return (
    <section id="about" className="bg-white dark:bg-brand-deep py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left column: Logo + Badge */}
          <AnimatedSection>
            <div className="flex flex-col items-center md:items-start">
              {/* GJ Monogram */}
              <svg
                viewBox="0 0 280 64"
                xmlns="http://www.w3.org/2000/svg"
                className="w-40 h-auto"
              >
                <rect
                  x="0"
                  y="8"
                  width="46"
                  height="46"
                  rx="23"
                  fill="currentColor"
                  className="text-brand-deep dark:text-brand-deep"
                />
                <rect
                  x="0"
                  y="8"
                  width="46"
                  height="46"
                  rx="23"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="text-brand-terra"
                />
                <text
                  x="23"
                  y="38"
                  fontFamily="Arial, Helvetica, sans-serif"
                  fontSize="17"
                  fontWeight="900"
                  fill="currentColor"
                  textAnchor="middle"
                  className="text-brand-terra"
                >
                  GJ
                </text>
              </svg>

              {/* Founding year badge */}
              <div className="mt-6 inline-flex items-center px-3 py-1.5 rounded-full font-dm font-medium text-xs bg-brand-blush text-brand-clay dark:bg-brand-deep dark:text-brand-plumtext border border-brand-terra">
                Est. 2025
              </div>
            </div>
          </AnimatedSection>

          {/* Right column: Content */}
          <div>
            <AnimatedSection>
              <SectionLabel>About</SectionLabel>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="mt-6 text-3xl md:text-4xl font-syne font-700 text-brand-base dark:text-white">
                Gran Jefe is one thing: capable.
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="mt-8 border-l-2 border-brand-teal pl-5 font-dm font-light text-base leading-relaxed text-brand-clay dark:text-brand-plumtext space-y-4">
                <p>
                  Since 2023, built production financial products at a fintech company — performance-critical, compliance-aware, real-world scale.
                </p>
                <p>
                  Alongside that: multiple independent mobile and web products shipped from zero to live. Gran Jefe is the formal home for that craft.
                </p>
                <p>
                  Available for client projects, product builds, and technical partnerships. Any industry. Any scale.
                </p>
              </div>
            </AnimatedSection>

            {/* Stat cards */}
            <div className="mt-12 grid grid-cols-3 gap-4">
              <AnimatedSection delay={0.3}>
                <div className="bg-brand-cream dark:bg-brand-base rounded-xl p-5 text-center">
                  <div className="font-syne font-800 text-3xl text-brand-terra">2+</div>
                  <div className="font-dm font-light text-sm text-brand-clay dark:text-brand-plumtext mt-2">
                    Years in production engineering
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="bg-brand-cream dark:bg-brand-base rounded-xl p-5 text-center">
                  <div className="font-syne font-800 text-3xl text-brand-terra">10+</div>
                  <div className="font-dm font-light text-sm text-brand-clay dark:text-brand-plumtext mt-2">
                    Projects shipped
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.5}>
                <div className="bg-brand-cream dark:bg-brand-base rounded-xl p-5 text-center">
                  <div className="font-syne font-800 text-3xl text-brand-terra">2</div>
                  <div className="font-dm font-light text-sm text-brand-clay dark:text-brand-plumtext mt-2">
                    Platforms mastered
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
