'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Terminal, Shield, Zap, Activity, Smartphone, Layout, ShoppingBag } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

interface Project {
  id: string
  name: string
  category: string
  metricBadge: string
  description: string
  architectureNote: string
  stack: string[]
  icon: React.ReactNode
  accentColor: string
  borderColor: string
}

const projects: Project[] = [
  {
    id: 'wallet',
    name: 'Fintech Mobile Wallet Engine',
    category: 'FINTECH & MOBILE',
    metricBadge: 'P99 < 14ms • 100k+ Users',
    description: 'Cross-platform mobile payment wallet featuring biometrics, real-time transaction streams, double-entry ledger verification, and instant bank payouts.',
    architectureNote: 'Architected with zero-trust token auth, SQL row locking, and encrypted local state.',
    stack: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis'],
    icon: <Smartphone size={24} className="text-brand-terra" />,
    accentColor: 'from-brand-terra/20 to-brand-ember/5',
    borderColor: 'hover:border-brand-terra/60',
  },
  {
    id: 'saas',
    name: 'High-Concurrency SaaS Analytics',
    category: 'WEB APP & DASHBOARD',
    metricBadge: 'Sub-100ms FCP • Live WS',
    description: 'Real-time operations & telemetry dashboard rendering thousands of telemetry events per second with zero browser layout lag.',
    architectureNote: 'Next.js App Router streaming server components paired with WebSockets fallback.',
    stack: ['Next.js 16', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Recharts'],
    icon: <Layout size={24} className="text-dev-cyan" />,
    accentColor: 'from-dev-cyan/20 to-dev-violet/5',
    borderColor: 'hover:border-dev-cyan/60',
  },
  {
    id: 'ecommerce',
    name: 'Multi-Platform Commerce System',
    category: 'WEB + MOBILE PLATFORM',
    metricBadge: 'PCI-DSS Compliant • 99.99%',
    description: 'Unified cross-platform commerce engine with inventory sync, automated payment Webhook processing, and instant checkout flow.',
    architectureNote: 'Modular API gateway architecture connecting web storefronts and mobile apps.',
    stack: ['React', 'React Native', 'Node.js', 'Stripe', 'Express'],
    icon: <ShoppingBag size={24} className="text-dev-emerald" />,
    accentColor: 'from-dev-emerald/20 to-brand-teal/5',
    borderColor: 'hover:border-dev-emerald/60',
  },
]

export function Work() {
  return (
    <section id="work" className="bg-white dark:bg-zinc-950 py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <SectionLabel>Engineering Portfolio</SectionLabel>
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-syne font-extrabold text-zinc-900 dark:text-white tracking-tight">
                Shipped production systems.{' '}
                <span className="text-brand-terra">Tested at scale.</span>
              </h2>
            </div>
            <div className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
              // 10+ projects delivered from 0 to live production
            </div>
          </div>
        </AnimatedSection>

        {/* Project Cards Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.1}>
              <div
                className={`h-full group rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80 ${project.borderColor} transition-all duration-300 overflow-hidden flex flex-col justify-between hover:shadow-2xl`}
              >
                {/* Visual Header Block with Terminal Badge */}
                <div
                  className={`p-6 bg-gradient-to-br ${project.accentColor} border-b border-zinc-200/60 dark:border-zinc-800/60 relative`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded text-[10px] font-mono font-bold tracking-wider uppercase bg-white/80 dark:bg-zinc-900/80 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 backdrop-blur-sm">
                      {project.category}
                    </span>
                    <div className="p-2 rounded-xl bg-white dark:bg-zinc-900 shadow-md">
                      {project.icon}
                    </div>
                  </div>

                  <h3 className="font-syne font-extrabold text-xl text-zinc-900 dark:text-white group-hover:text-brand-terra transition-colors">
                    {project.name}
                  </h3>

                  <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-medium">
                    <Zap size={12} />
                    <span>{project.metricBadge}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <p className="font-dm text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="p-3 rounded-lg bg-white dark:bg-zinc-950 border border-zinc-200/60 dark:border-zinc-800 text-xs font-mono text-zinc-500 dark:text-zinc-400 flex items-start gap-2">
                      <Terminal size={14} className="text-brand-terra flex-shrink-0 mt-0.5" />
                      <span>{project.architectureNote}</span>
                    </div>
                  </div>

                  {/* Stack Footer Tags */}
                  <div className="pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60">
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded text-xs font-mono bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Footer CTA */}
        <AnimatedSection delay={0.4}>
          <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-brand-terra/10 via-zinc-900/5 to-dev-cyan/10 border border-brand-terra/20 text-center">
            <p className="font-dm text-base text-zinc-700 dark:text-zinc-200 font-medium">
              Need custom software, an MVP, or backend infrastructure for your product?{' '}
              <button
                onClick={() => {
                  const contactSection = document.querySelector('#contact')
                  if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center gap-1.5 text-brand-terra font-mono font-bold hover:text-brand-ember transition-colors underline underline-offset-4 ml-1 group"
              >
                <span>Initialize project discussion</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
