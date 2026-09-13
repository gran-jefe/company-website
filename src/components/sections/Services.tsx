'use client'

import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Smartphone, Layout, Server, ShieldCheck, Cpu, Rocket, ArrowUpRight } from 'lucide-react'

interface ServiceModule {
  id: string
  moduleCode: string
  icon: React.ReactNode
  title: string
  description: string
  techStack: string[]
  benchmark: string
}

const services: ServiceModule[] = [
  {
    id: 'mobile',
    moduleCode: 'MOD_01 // MOBILE',
    icon: <Smartphone size={24} className="text-brand-terra" />,
    title: 'Cross-Platform Mobile Apps',
    description: 'Native performance iOS & Android apps built with React Native. Single codebase, native bridges, offline-first sync, and smooth 60fps animations.',
    techStack: ['React Native', 'TypeScript', 'Expo', 'Reanimated'],
    benchmark: 'Native 60fps • iOS + Android',
  },
  {
    id: 'web',
    moduleCode: 'MOD_02 // WEB',
    icon: <Layout size={24} className="text-dev-cyan" />,
    title: 'Full-Stack Web Engineering',
    description: 'Production Next.js and React web applications. Server-side rendering, streaming edge APIs, progressive loading, and zero layout shift.',
    techStack: ['Next.js 16', 'React 19', 'Tailwind CSS', 'Framer Motion'],
    benchmark: 'Core Web Vitals 95+ Score',
  },
  {
    id: 'backend',
    moduleCode: 'MOD_03 // BACKEND',
    icon: <Server size={24} className="text-dev-emerald" />,
    title: 'Distributed Backend & APIs',
    description: 'High-throughput Node.js and Python API engines. Microservices, REST & GraphQL endpoints, authentication, and battle-tested database schemas.',
    techStack: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'Docker'],
    benchmark: 'P99 Latency < 20ms',
  },
  {
    id: 'fintech',
    moduleCode: 'MOD_04 // FINTECH',
    icon: <ShieldCheck size={24} className="text-amber-500" />,
    title: 'Fintech & Payment Systems',
    description: 'Double-entry ledger engines, wallet transactions, webhook handlers, and PCI-DSS compliant UX. Engineered for zero financial loss.',
    techStack: ['Double-Entry Ledger', 'Stripe/Paystack', 'JWT Auth', 'Webhooks'],
    benchmark: 'Zero Data Loss Guarantee',
  },
  {
    id: 'integrations',
    moduleCode: 'MOD_05 // INTEGRATION',
    icon: <Cpu size={24} className="text-dev-violet" />,
    title: 'API & Microservice Mesh',
    description: 'Clean third-party service integration, webhook infrastructure, message queues, and fault-tolerant retry policies for external APIs.',
    techStack: ['REST', 'Webhooks', 'Queue Workers', 'API Gateway'],
    benchmark: '99.99% Reliability SLA',
  },
  {
    id: 'mvp',
    moduleCode: 'MOD_06 // DISCOVERY',
    icon: <Rocket size={24} className="text-brand-ember" />,
    title: 'Rapid Prototype & MVP Build',
    description: 'From technical spec to working production build in weeks. Designed for founders and teams needing battle-ready code with no bloat.',
    techStack: ['Full-Stack TS', 'Firebase', 'Next.js', 'Vercel'],
    benchmark: '0 to Production in < 4 wks',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-white dark:bg-zinc-950 py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <SectionLabel>Engineering Capabilities</SectionLabel>
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-syne font-extrabold text-zinc-900 dark:text-white tracking-tight">
                Modular technical capabilities.{' '}
                <span className="text-brand-terra">Built for scale.</span>
              </h2>
            </div>
            <p className="font-mono text-xs text-zinc-500 dark:text-zinc-400 max-w-xs">
              // Strict engineering standards, clean modular architecture, zero technical debt.
            </p>
          </div>
        </AnimatedSection>

        {/* Modules Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedSection key={service.id} delay={index * 0.08}>
              <div className="h-full group relative p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-brand-terra/60 dark:hover:border-brand-terra/60 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-brand-terra/5">
                {/* Module Code Header */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[11px] font-bold tracking-wider text-zinc-400 dark:text-zinc-500 group-hover:text-brand-terra transition-colors">
                      {service.moduleCode}
                    </span>
                    <div className="p-2 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/60 shadow-sm">
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

                  <p className="font-dm font-light text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Tech Stack & SLA Footer */}
                <div className="pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {service.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-white dark:bg-zinc-800/90 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="font-mono text-[11px] font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>{service.benchmark}</span>
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
