'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { 
  Compass, 
  Sparkles, 
  Cpu, 
  Rocket, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  Video, 
  FileText, 
  ArrowRight 
} from 'lucide-react'

interface ProcessStep {
  step: string
  title: string
  subtitle: string
  tagline: string
  timeline: string
  icon: React.ReactNode
  description: string
  keyDeliverables: string[]
  clientOutcome: string
}

const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery & Architecture',
    subtitle: 'ALIGNED BLUEPRINT',
    tagline: 'Scope, architecture, and fixed deliverables mapped in 48 hours.',
    timeline: 'Days 1 – 2',
    icon: <Compass size={22} className="text-brand-terra" />,
    description:
      'We unpack your target audience, conversion goals, and technical requirements. We establish a fixed-timeline scope with milestone dates—no open-ended ambiguity or surprise cost overruns.',
    keyDeliverables: [
      'Technical Architecture Blueprint',
      'Fixed-Scope Milestones & Deadlines',
      'Design System & Asset Checklist',
    ],
    clientOutcome: 'Complete clarity on what will be built, exactly when it will launch, and what it will cost.',
  },
  {
    step: '02',
    title: 'Interactive Design & UX',
    subtitle: 'EDITORIAL FINISH',
    tagline: 'High-converting user journeys built for mobile and desktop.',
    timeline: 'Days 3 – 4',
    icon: <Sparkles size={22} className="text-amber-500" />,
    description:
      'We craft typography-forward, brand-aligned visual layouts with fluid user journeys. You receive clickable prototypes and visual walkthroughs before writing production code.',
    keyDeliverables: [
      'Responsive Mobile & Desktop UX',
      'Interactive Figma & Motion Prototypes',
      'Conversion-Optimized CTA Hierarchy',
    ],
    clientOutcome: 'A visually arresting design tailored to non-technical buyers that establishes immediate authority.',
  },
  {
    step: '03',
    title: 'Sprint Engineering',
    subtitle: 'ZERO TECH DEBT',
    tagline: 'Clean Next.js 16 build with daily asynchronous Loom demos.',
    timeline: 'Days 5 – 6',
    icon: <Cpu size={22} className="text-dev-cyan" />,
    description:
      'We engineer your product with Next.js 16, TypeScript, and clean modular code. You receive daily 2-minute asynchronous Loom video walkthroughs tracking exact progress without endless meetings.',
    keyDeliverables: [
      'Next.js 16 & TypeScript Codebase',
      'Daily Asynchronous Loom Updates',
      'Sub-Second Core Web Vitals Benchmark',
    ],
    clientOutcome: 'Real visible progress every 24 hours while you focus on running your business.',
  },
  {
    step: '04',
    title: 'Launch & IP Handover',
    subtitle: 'ZERO-DOWNTIME GO-LIVE',
    tagline: 'Production deployment, domain cutover, and 100% source handover.',
    timeline: 'Day 7 / Launch Day',
    icon: <Rocket size={22} className="text-emerald-500" />,
    description:
      'We handle production DNS cutover, automated CI/CD pipelines, SSL encryption, and Google Search indexing. You receive 100% intellectual property ownership and full repository access.',
    keyDeliverables: [
      'Production Domain & SSL Setup',
      '100% Source Code & IP Handover',
      '30-Day Post-Launch Support Window',
    ],
    clientOutcome: 'Your product is live, blazing fast, secure, and ready to convert visitors into revenue.',
  },
]

export function Process() {
  const [activeStepIndex, setActiveStepIndex] = useState(0)
  const activeStep = processSteps[activeStepIndex]

  return (
    <section id="process" className="bg-[#FAF0E6] dark:bg-[#140A10] py-20 md:py-28 relative border-t border-[#EAD3C4] dark:border-[#EAD3C4]/15 text-[#2E0E1D] dark:text-[#FFF0E3] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <SectionLabel>Our Delivery Process</SectionLabel>
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-syne font-extrabold text-[#2E0E1D] dark:text-[#FFF0E3] tracking-tight">
                From concept to live launch.{' '}
                <span className="font-serif italic font-normal text-brand-terra dark:text-[#FF5528]">In 4 clear phases.</span>
              </h2>
            </div>
            <p className="font-mono text-xs text-[#7A4A38] dark:text-[#B88E7D] max-w-sm">
              // Fixed timelines, daily async video updates, zero guesswork, zero technical debt.
            </p>
          </div>
        </AnimatedSection>

        {/* 4-Step Interactive Timeline Bar (Desktop & Tablet) */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3">
          {processSteps.map((s, idx) => {
            const isActive = idx === activeStepIndex
            return (
              <button
                key={s.step}
                type="button"
                onClick={() => setActiveStepIndex(idx)}
                className={`relative text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between gap-3 group cursor-pointer ${
                  isActive
                    ? 'bg-[#FFF0E3] dark:bg-[#1D0E17] border-brand-terra shadow-lg shadow-brand-clay/10 dark:shadow-black/60'
                    : 'bg-[#FAF0E6] dark:bg-[#1A0C15] border-[#EAD3C4] dark:border-[#EAD3C4]/15 hover:border-brand-terra/40 hover:bg-[#FFF0E3]/70 dark:hover:bg-[#25121E]'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span
                    className={`font-mono text-xs font-bold px-2 py-0.5 rounded-md ${
                      isActive
                        ? 'bg-brand-terra text-white'
                        : 'bg-[#EAD3C4]/50 dark:bg-[#25121E] text-[#7A4A38] dark:text-[#B88E7D]'
                    }`}
                  >
                    PHASE {s.step}
                  </span>
                  <div className="p-2 rounded-xl bg-[#FFF0E3] dark:bg-[#25121E] border border-[#EAD3C4] dark:border-[#EAD3C4]/15">
                    {s.icon}
                  </div>
                </div>

                <div>
                  <div className="font-mono text-[10px] text-[#7A4A38] dark:text-[#B88E7D] uppercase tracking-wider font-semibold">
                    {s.timeline}
                  </div>
                  <h3 className="font-syne font-bold text-base sm:text-lg text-[#2E0E1D] dark:text-[#FFF0E3] mt-0.5 leading-snug">
                    {s.title}
                  </h3>
                </div>

                {/* Active Indicator Bar */}
                <div className="w-full h-1 rounded-full bg-[#EAD3C4]/40 dark:bg-[#25121E] overflow-hidden mt-1">
                  <div
                    className={`h-full transition-all duration-300 rounded-full ${
                      isActive ? 'bg-brand-terra w-full' : 'w-0 group-hover:w-1/3 bg-brand-terra/40'
                    }`}
                  />
                </div>
              </button>
            )
          })}
        </div>

        {/* Detailed Stage Deep-Dive Card */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.step}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="p-6 sm:p-10 rounded-3xl bg-[#FFF0E3] dark:bg-[#1D0E17] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 shadow-xl space-y-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Overview (7 cols) */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-brand-terra/10 border border-brand-terra/20 text-brand-terra font-mono text-xs font-bold uppercase tracking-wider">
                      Phase {activeStep.step} // {activeStep.subtitle}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF0E6] dark:bg-[#25121E] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 text-xs font-mono text-[#7A4A38] dark:text-[#E6D0C2]">
                      <Clock size={13} className="text-brand-terra" />
                      <span>{activeStep.timeline}</span>
                    </span>
                  </div>

                  <h3 className="font-syne font-bold text-2xl sm:text-3xl text-[#2E0E1D] dark:text-[#FFF0E3]">
                    {activeStep.title}
                  </h3>

                  <p className="font-dm text-base text-[#5A3846] dark:text-[#E6D0C2] leading-relaxed">
                    {activeStep.description}
                  </p>

                  {/* Guaranteed Business Outcome */}
                  <div className="p-4 rounded-2xl bg-[#FAF0E6] dark:bg-[#25121E] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#0E6247] dark:text-emerald-400">
                      <ShieldCheck size={14} /> CLIENT OUTCOME GUARANTEE
                    </div>
                    <div className="font-dm text-sm text-[#2E0E1D] dark:text-[#FFF0E3] font-medium leading-relaxed">
                      {activeStep.clientOutcome}
                    </div>
                  </div>
                </div>

                {/* Right Deliverables Column (5 cols) */}
                <div className="lg:col-span-5 p-6 rounded-2xl bg-[#FAF0E6] dark:bg-[#25121E] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-[#7A4A38] dark:text-[#B88E7D] uppercase tracking-wider font-semibold border-b border-[#EAD3C4] dark:border-[#EAD3C4]/15 pb-3">
                    <span className="flex items-center gap-1.5">
                      <FileText size={14} className="text-brand-terra" />
                      <span>Key Tangible Deliverables</span>
                    </span>
                    <span>3 Items</span>
                  </div>

                  <div className="space-y-3">
                    {activeStep.keyDeliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm font-dm text-[#2E0E1D] dark:text-[#FFF0E3]">
                        <CheckCircle2 size={16} className="text-brand-terra flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-[#EAD3C4] dark:border-[#EAD3C4]/15 flex items-center justify-between gap-3 text-xs font-dm text-[#6C4B59] dark:text-[#B88E7D]">
                    <div className="flex items-center gap-1.5">
                      <Video size={13} className="text-brand-terra" />
                      <span>Loom video review included</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        const contact = document.querySelector('#contact')
                        if (contact) contact.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="inline-flex items-center gap-1 text-brand-terra hover:text-brand-ember font-semibold font-mono"
                    >
                      <span>Inquire now</span>
                      <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
