'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Layers, Cpu, Server, Database, Check } from 'lucide-react'

interface TechCategory {
  id: string
  title: string
  icon: React.ReactNode
  description: string
  technologies: {
    name: string
    purpose: string
    badge?: string
  }[]
}

const stackCategories: TechCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend & Web',
    icon: <Layers size={20} className="stroke-current" />,
    description: 'We build modern, accessible, and fast web user interfaces using Next.js 16 and React 19.',
    technologies: [
      { name: 'React 19', purpose: 'Component-driven UI development' },
      { name: 'TypeScript', purpose: 'End-to-end type safety & bug prevention', badge: 'Standard' },
      { name: 'Next.js 16', purpose: 'Server rendering, routing & performance optimization' },
      { name: 'Tailwind CSS', purpose: 'Maintainable, responsive design systems' },
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile Engineering',
    icon: <Cpu size={20} className="stroke-current" />,
    description: 'Cross-platform native mobile applications delivering smooth 60fps performance on both iOS and Android.',
    technologies: [
      { name: 'React Native', purpose: 'Native iOS & Android compilation from a unified codebase' },
      { name: 'Expo', purpose: 'Rapid mobile deployment & OTA updates' },
      { name: 'Reanimated', purpose: 'Fluid gesture-driven animations' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    icon: <Server size={20} className="stroke-current" />,
    description: 'Robust server architecture, authentication mechanisms, and REST/GraphQL APIs.',
    technologies: [
      { name: 'Node.js', purpose: 'High-throughput event-driven microservices' },
      { name: 'Python & FastAPI', purpose: 'Data validation, automation, and algorithmic backends' },
      { name: 'Express / Hono', purpose: 'Lightweight REST API routes' },
    ],
  },
  {
    id: 'infrastructure',
    title: 'Databases & Cloud',
    icon: <Database size={20} className="stroke-current" />,
    description: 'Relational and document storage, caching layers, and automated cloud deployments.',
    technologies: [
      { name: 'PostgreSQL', purpose: 'Relational data storage with ACID guarantees' },
      { name: 'Firebase', purpose: 'Realtime database, auth, and backend services' },
      { name: 'MongoDB & Redis', purpose: 'High-speed document storage and caching' },
      { name: 'Vercel & Docker', purpose: 'Continuous deployment & containerization' },
    ],
  },
]

export function Stack() {
  const [activeCategory, setActiveCategory] = useState<TechCategory>(stackCategories[0])

  return (
    <section id="stack" className="bg-transparent py-20 md:py-28 relative border-t border-[#EAD3C4] dark:border-[#EAD3C4]/15 text-[#2E0E1D] dark:text-[#FFF0E3]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <AnimatedSection>
          <div className="max-w-2xl">
            <SectionLabel>Our Tech Architecture</SectionLabel>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-syne font-extrabold text-[#2E0E1D] dark:text-[#FFF0E3] tracking-tight">
              Tools chosen for durability.{' '}
              <span className="font-serif italic font-normal text-brand-terra dark:text-brand-ember">Not hype.</span>
            </h2>
            <p className="mt-4 font-dm text-base text-[#6C4B59] dark:text-[#E6D0C2]">
              Every framework and library in our stack is selected for performance, maintainability, and real-world stability.
            </p>
          </div>
        </AnimatedSection>

        {/* Category Tabs & Content Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Category Selector Side Menu (4 cols) */}
          <div className="lg:col-span-4 space-y-2.5">
            {stackCategories.map((cat) => {
              const isSelected = cat.id === activeCategory.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group overflow-hidden cursor-pointer ${
                    isSelected
                      ? 'border-brand-terra/60 shadow-sm'
                      : 'bg-[#FAF0E6] dark:bg-[#1D0E17] border-[#EAD3C4] dark:border-[#EAD3C4]/15 hover:bg-[#F3E2D5] dark:hover:bg-[#25121E]'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeStackCategory"
                      className="absolute inset-0 bg-[#2E0E1D] dark:bg-[#25121E] border border-brand-terra rounded-xl -z-10 shadow-xs"
                      transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                    />
                  )}

                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2.5 rounded-lg transition-colors ${
                        isSelected
                          ? 'bg-brand-terra text-white'
                          : 'bg-[#FFF0E3] dark:bg-[#25121E] text-[#7A4A38] dark:text-[#E6D0C2] group-hover:text-brand-terra'
                      }`}
                    >
                      {cat.icon}
                    </div>
                    <span className={`font-syne font-bold text-sm ${isSelected ? 'text-[#FFF0E3]' : 'text-[#2E0E1D] dark:text-[#FFF0E3]'}`}>
                      {cat.title}
                    </span>
                  </div>

                  <Check
                    size={18}
                    className={`transition-all ${
                      isSelected ? 'opacity-100 text-brand-terra scale-100' : 'opacity-0 scale-75'
                    }`}
                  />
                </button>
              )
            })}
          </div>

          {/* Detailed Technology Overview & Code Inspector (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                {/* Tech Overview Card */}
                <div className="p-6 md:p-8 rounded-2xl bg-[#FAF0E6] dark:bg-[#1D0E17] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 shadow-sm space-y-6 card-specular">
                  <div>
                    <h3 className="font-syne font-bold text-xl text-[#2E0E1D] dark:text-[#FFF0E3]">
                      {activeCategory.title}
                    </h3>
                    <p className="mt-1 font-dm text-sm text-[#6C4B59] dark:text-[#E6D0C2]">
                      {activeCategory.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    {activeCategory.technologies.map((tech, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-[#FFF0E3] dark:bg-[#25121E] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 hover:border-brand-terra/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                      >
                        <div>
                          <div className="font-syne font-bold text-sm text-[#2E0E1D] dark:text-[#FFF0E3] flex items-center gap-2">
                            <span>{tech.name}</span>
                            {tech.badge && (
                              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-brand-terra/10 text-brand-terra border border-brand-terra/20 font-medium">
                                {tech.badge}
                              </span>
                            )}
                          </div>
                          <div className="font-dm text-xs text-[#6C4B59] dark:text-[#E6D0C2] font-medium mt-1">
                            {tech.purpose}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Business Outcome & Impact Card */}
                <div className="p-6 rounded-2xl bg-[#FAF0E6] dark:bg-[#1D0E17] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 text-[#2E0E1D] dark:text-[#FFF0E3] space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-[#0E6247] dark:text-emerald-400">
                    <span className="flex items-center gap-1.5 font-bold">
                      <Check size={14} /> WHAT THIS MEANS FOR YOUR BUSINESS
                    </span>
                    <span className="text-[#7A4A38] dark:text-[#B88E7D]">// Real-World Impact</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    <div className="p-4 rounded-xl bg-[#FFF0E3] dark:bg-[#25121E] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 space-y-1">
                      <div className="font-syne font-bold text-sm text-brand-terra">
                        Sub-Second Page Speed
                      </div>
                      <div className="font-dm text-xs text-[#5A3846] dark:text-[#E6D0C2] leading-relaxed">
                        Visitors load pages instantly without waiting, boosting visitor retention and Google Search rankings.
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#FFF0E3] dark:bg-[#25121E] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 space-y-1">
                      <div className="font-syne font-bold text-sm text-[#0E6247] dark:text-emerald-400">
                        Zero Downtime &amp; Security
                      </div>
                      <div className="font-dm text-xs text-[#5A3846] dark:text-[#E6D0C2] leading-relaxed">
                        Bank-grade encryption safeguards your business and customer data with 99.99% uptime guarantee.
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
