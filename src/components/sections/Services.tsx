'use client'

import React from 'react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Smartphone, Layout, Server, ShieldCheck, Cpu, Rocket, ArrowUpRight } from 'lucide-react'

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
    codeTag: '// MOBILE_STUDIO',
    icon: <Smartphone size={24} className="text-brand-terra" />,
    title: 'Mobile App Engineering',
    description: 'Custom iOS and Android mobile applications built with React Native. Native performance, responsive design, offline capabilities, and smooth 60fps animations.',
    techStack: ['React Native', 'TypeScript', 'Expo', 'iOS & Android'],
    highlight: 'Native 60FPS • Single Codebase',
  },
  {
    id: 'web',
    codeTag: '// WEB_PLATFORMS',
    icon: <Layout size={24} className="text-dev-cyan" />,
    title: 'Full-Stack Web Engineering',
    description: 'Modern, high-performance web applications, dashboards, and portals built using Next.js 16 and React 19. Designed for speed, security, and conversion.',
    techStack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS'],
    highlight: 'Core Web Vitals 95+ Score',
  },
  {
    id: 'backend',
    codeTag: '// BACKEND_ENGINE',
    icon: <Server size={24} className="text-dev-emerald" />,
    title: 'Backend & API Architecture',
    description: 'Reliable Node.js and Python API services, auth systems, database modeling, and server architecture engineered for high availability and security.',
    techStack: ['Node.js', 'Python', 'PostgreSQL', 'REST & GraphQL'],
    highlight: 'P99 Latency < 15ms Guarantee',
  },
  {
    id: 'fintech',
    codeTag: '// FINTECH_FINANCE',
    icon: <ShieldCheck size={24} className="text-amber-500" />,
    title: 'Fintech & Payment Solutions',
    description: 'Secure digital payment integrations, double-entry wallet architectures, transaction tracking, and compliance-aware user flows built with extreme reliability.',
    techStack: ['Payment Gateways', 'Ledger Sync', 'JWT Auth'],
    highlight: 'Zero Financial Data Loss',
  },
  {
    id: 'integrations',
    codeTag: '// API_INTEGRATIONS',
    icon: <Cpu size={24} className="text-dev-violet" />,
    title: 'Third-Party Integrations',
    description: 'Seamless integration of analytics engines, authentication providers, payment processors, and external third-party APIs into your product stack.',
    techStack: ['API Gateways', 'Webhooks', 'OAuth / Auth0'],
    highlight: '99.99% Reliability SLA',
  },
  {
    id: 'mvp',
    codeTag: '// RAPID_PROTOTYPE',
    icon: <Rocket size={24} className="text-brand-ember" />,
    title: 'MVP & Product Prototyping',
    description: 'Turn your product vision into a production-ready MVP quickly. Engineered for startup founders and companies who need to launch fast.',
    techStack: ['Full-Stack TS', 'Firebase / Supabase', 'Vercel'],
    highlight: '0 to Production in < 4 wks',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-white dark:bg-zinc-950 py-20 md:py-28 relative border-t border-zinc-200/60 dark:border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <SectionLabel>What We Do</SectionLabel>
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-syne font-bold text-zinc-900 dark:text-white tracking-tight">
                Full-spectrum software engineering.{' '}
                <span className="text-brand-terra">Tailored to your needs.</span>
              </h2>
            </div>
            <p className="font-mono text-xs text-zinc-500 dark:text-zinc-400 max-w-xs">
              // Strict engineering standards, clean modular architecture, zero technical debt.
            </p>
          </div>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedSection key={service.id} delay={index * 0.06}>
              <div className="h-full group relative p-7 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700/80 hover:border-brand-terra/60 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-brand-terra/5">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[11px] font-bold text-zinc-400 dark:text-zinc-500 group-hover:text-brand-terra transition-colors">
                      {service.codeTag}
                    </span>
                    <div className="p-2.5 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-sm">
                      {service.icon}
                    </div>
                  </div>

                  <h3 className="font-syne font-bold text-xl text-zinc-900 dark:text-white mb-2 flex items-center justify-between">
                    <span>{service.title}</span>
                    <ArrowUpRight
                      size={18}
                      className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-brand-terra"
                    />
                  </h3>

                  <p className="font-dm font-normal text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {service.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded text-xs font-mono bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
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
