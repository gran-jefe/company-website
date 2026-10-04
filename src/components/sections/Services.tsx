'use client'

import React from 'react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Smartphone, Layout, Server, ShieldCheck, Cpu, Rocket, ArrowUpRight, Zap, Clock, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react'

interface ServiceItem {
  id: string
  codeTag: string
  icon: React.ReactNode
  title: string
  description: string
  techStack: string[]
  highlight: string
}

const services: ServiceItem[] = [
  {
    id: 'mobile',
    codeTag: 'MOBILE APPLICATIONS',
    icon: <Smartphone size={24} className="text-brand-terra" />,
    title: 'Mobile App Engineering',
    description: 'Custom iOS and Android mobile applications built with React Native. Native performance, responsive design, offline capabilities, and smooth 60fps animations.',
    techStack: ['React Native', 'TypeScript', 'Expo', 'iOS & Android'],
    highlight: 'Native 60FPS • Single Codebase',
  },
  {
    id: 'web',
    codeTag: 'WEB PLATFORMS & E-COMMERCE',
    icon: <Layout size={24} className="text-dev-cyan" />,
    title: 'Full-Stack Web Engineering',
    description: 'Modern, high-performance web applications, storefronts, dashboards, and portals. Designed for instant loading, security, and customer conversion.',
    techStack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS'],
    highlight: 'Core Web Vitals 95+ Score',
  },
  {
    id: 'backend',
    codeTag: 'SECURE BACKEND',
    icon: <Server size={24} className="text-dev-emerald" />,
    title: 'Backend & API Architecture',
    description: 'Reliable Node.js and Python API services, auth systems, database modeling, and server architecture engineered for high availability and security.',
    techStack: ['Node.js', 'Python', 'PostgreSQL', 'REST & GraphQL'],
    highlight: 'Sub-15ms Latency Guarantee',
  },
  {
    id: 'fintech',
    codeTag: 'FINTECH & PAYMENTS',
    icon: <ShieldCheck size={24} className="text-amber-500" />,
    title: 'Fintech & Payment Solutions',
    description: 'Secure digital payment integrations, double-entry wallet architectures, transaction tracking, and compliance-aware user flows built with extreme reliability.',
    techStack: ['Payment Gateways', 'Ledger Sync', 'JWT Auth'],
    highlight: 'Zero Financial Data Loss',
  },
  {
    id: 'integrations',
    codeTag: 'SYSTEM INTEGRATIONS',
    icon: <Cpu size={24} className="text-dev-violet" />,
    title: 'Third-Party Integrations',
    description: 'Seamless integration of analytics engines, authentication providers, payment processors, and external third-party APIs into your product stack.',
    techStack: ['API Gateways', 'Webhooks', 'OAuth / Auth0'],
    highlight: '99.99% Uptime Guarantee',
  },
  {
    id: 'mvp',
    codeTag: 'RAPID PRODUCT LAUNCH',
    icon: <Rocket size={24} className="text-brand-ember" />,
    title: 'MVP & Product Prototyping',
    description: 'Turn your product vision into a production-ready MVP quickly. Engineered for startup founders and companies who need to launch fast.',
    techStack: ['Full-Stack TS', 'Firebase / Supabase', 'Vercel'],
    highlight: '0 to Production in < 4 wks',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-[#FAF0E6] dark:bg-[#140A10] py-20 md:py-28 relative border-t border-[#EAD3C4] dark:border-[#EAD3C4]/15 text-[#2E0E1D] dark:text-[#FFF0E3] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <SectionLabel>What We Do</SectionLabel>
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-syne font-bold text-[#2E0E1D] dark:text-[#FFF0E3] tracking-tight">
                Full-spectrum software engineering.{' '}
                <span className="text-brand-terra">Tailored to your needs.</span>
              </h2>
            </div>
            <p className="font-mono text-xs text-[#7A4A38] dark:text-[#B88E7D] max-w-xs">
              // Strict engineering standards, clean modular architecture, zero technical debt.
            </p>
          </div>
        </AnimatedSection>

        {/* Featured Rapid Rebuild Sprint Card */}
        <AnimatedSection delay={0.03}>
          <div className="mt-10 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-[#1D0E17] via-[#25121E] to-[#1D0E17] border-2 border-brand-terra/50 text-[#FFF0E3] shadow-2xl relative overflow-hidden group">
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-terra/20 rounded-full blur-3xl pointer-events-none group-hover:bg-brand-terra/30 transition-colors" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-terra/20 border border-brand-terra/40 text-brand-ember text-xs font-mono font-bold">
                  <Sparkles size={13} />
                  <span>FEATURED SPRINT // 7-DAY DELIVERY</span>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-syne font-extrabold text-[#FFF0E3] tracking-tight">
                  The 7-Day Performance &amp; Conversion Rebuild
                </h3>

                <p className="text-sm sm:text-base font-dm text-[#EAD3C4] dark:text-[#E6D0C2] leading-relaxed max-w-2xl">
                  Is a slow, dated, or clunky website draining your paid ad budget and losing customers? We completely rebuild your landing page or web application into an ultra-fast, interactive Next.js 16 experience in 7 business days flat.
                </p>

                {/* Value Checkpoints */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  <div className="flex items-center gap-2 text-xs font-dm text-[#FFF0E3] dark:text-[#E6D0C2]">
                    <CheckCircle2 size={15} className="text-brand-terra flex-shrink-0" />
                    <span><strong>95+ Core Web Vitals:</strong> Sub-second mobile load speeds</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-dm text-[#FFF0E3] dark:text-[#E6D0C2]">
                    <CheckCircle2 size={15} className="text-brand-terra flex-shrink-0" />
                    <span><strong>Conversion-Optimized UX:</strong> Clear hierarchy &amp; zero layout shift</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-dm text-[#FFF0E3] dark:text-[#E6D0C2]">
                    <CheckCircle2 size={15} className="text-brand-terra flex-shrink-0" />
                    <span><strong>Fluid Interactions:</strong> Smooth 60fps micro-animations</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-dm text-[#FFF0E3] dark:text-[#E6D0C2]">
                    <CheckCircle2 size={15} className="text-brand-terra flex-shrink-0" />
                    <span><strong>Fixed Timeline:</strong> Production-ready in 7 business days</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center gap-3 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-[#EAD3C4]/15 lg:pl-8">
                <div className="space-y-1 text-left lg:text-right">
                  <div className="text-xs font-mono text-[#E6C5B8] dark:text-[#B88E7D]">Fixed-Scope Engagement</div>
                  <div className="text-2xl font-syne font-bold text-[#FFF0E3] flex items-center gap-2 lg:justify-end">
                    <Clock size={20} className="text-brand-terra" />
                    <span>7 Business Days</span>
                  </div>
                  <div className="text-xs font-dm text-emerald-400 font-semibold">100% Milestone Satisfaction Guarantee</div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    const contactSection = document.querySelector('#contact')
                    if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="mt-2 w-full sm:w-auto py-3 px-6 rounded-xl bg-brand-terra hover:bg-brand-ember text-white font-dm font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-brand-terra/20 transition-all hover:scale-[1.02]"
                >
                  <span>Book a 7-Day Rebuild Sprint</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedSection key={service.id} delay={index * 0.06}>
              <div className="h-full group relative p-7 rounded-2xl bg-[#FFF0E3] dark:bg-[#1D0E17] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 hover:border-brand-terra/60 dark:hover:border-brand-terra/60 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-brand-clay/10 dark:hover:shadow-black/60 hover:-translate-y-1.5 card-specular">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[11px] font-bold text-[#7A4A38] dark:text-[#B88E7D] group-hover:text-brand-terra transition-colors">
                      {service.codeTag}
                    </span>
                    <div className="p-2.5 rounded-xl bg-[#FAF0E6] dark:bg-[#25121E] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 shadow-xs group-hover:scale-105 transition-transform text-brand-terra">
                      {service.icon}
                    </div>
                  </div>

                  <h3 className="font-syne font-bold text-xl text-[#2E0E1D] dark:text-[#FFF0E3] mb-2 flex items-center justify-between">
                    <span>{service.title}</span>
                    <ArrowUpRight
                      size={18}
                      className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-brand-terra"
                    />
                  </h3>

                  <p className="font-dm font-normal text-[#6C4B59] dark:text-[#E6D0C2] text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EAD3C4] dark:border-[#EAD3C4]/15 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {service.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded text-xs font-mono bg-[#FAF0E6] dark:bg-[#25121E] text-[#2E0E1D] dark:text-[#FFF0E3] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 hover:border-brand-terra/40 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="font-mono text-xs font-semibold text-[#0E6247] dark:text-emerald-400 flex items-center gap-1.5 pt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{service.highlight}</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
