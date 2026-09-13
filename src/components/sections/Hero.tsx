'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Terminal, ArrowRight, ShieldCheck, Zap, Server } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { HeroTerminal } from '@/components/sections/HeroTerminal'

export function Hero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="relative min-h-[92vh] bg-brand-cream dark:bg-zinc-950 bg-dev-grid pt-12 pb-20 md:py-20 overflow-hidden flex items-center">
      {/* Glow Orbs Backdrop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-terra/10 dark:bg-dev-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-dev-violet/10 dark:bg-brand-terra/15 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 w-full">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column: Hero Headline & Tech Highlights (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Tech Studio Tag */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-brand-terra/10 border border-brand-terra/30 text-brand-terra dark:text-brand-ember flex items-center gap-1.5">
                <Terminal size={12} />
                <span>TECHNICAL SOLUTIONS STUDIO</span>
                <span className="text-zinc-400 dark:text-zinc-500">//</span>
                <span className="text-zinc-600 dark:text-zinc-400">EST. 2023</span>
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-syne font-extrabold text-zinc-900 dark:text-white leading-[1.08] tracking-tight"
            >
              We architect & build products{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-terra via-brand-ember to-dev-cyan">
                others can't.
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl font-dm text-zinc-600 dark:text-zinc-300 max-w-2xl leading-relaxed"
            >
              High-concurrency backends, cross-platform mobile apps, and high-performance web systems. Built for scalability, zero-trust security, and real-world compliance.
            </motion.p>

            {/* Developer Proof Badges Grid */}
            <motion.div variants={itemVariants} className="pt-2 grid grid-cols-3 gap-3 max-w-lg">
              <div className="p-2.5 rounded-lg bg-white/60 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 backdrop-blur-sm">
                <div className="flex items-center gap-1.5 text-brand-terra text-xs font-mono font-semibold">
                  <Zap size={14} /> P99 LATENCY
                </div>
                <div className="mt-1 text-sm font-mono font-bold text-zinc-900 dark:text-white">&lt; 15ms</div>
              </div>
              <div className="p-2.5 rounded-lg bg-white/60 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 backdrop-blur-sm">
                <div className="flex items-center gap-1.5 text-emerald-500 text-xs font-mono font-semibold">
                  <ShieldCheck size={14} /> AVAILABILITY
                </div>
                <div className="mt-1 text-sm font-mono font-bold text-zinc-900 dark:text-white">99.99%</div>
              </div>
              <div className="p-2.5 rounded-lg bg-white/60 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 backdrop-blur-sm">
                <div className="flex items-center gap-1.5 text-dev-cyan text-xs font-mono font-semibold">
                  <Server size={14} /> ARCHITECTURE
                </div>
                <div className="mt-1 text-sm font-mono font-bold text-zinc-900 dark:text-white">Distributed</div>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="pt-4 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
            >
              <Button
                variant="filled"
                onClick={() => {
                  const contactSection = document.querySelector('#contact')
                  if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' })
                }}
                className="py-3 px-6 text-sm font-mono font-medium flex items-center justify-center gap-2 group shadow-lg shadow-brand-terra/20"
              >
                <span>Start a project</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outlined"
                onClick={() => {
                  const workSection = document.querySelector('#work')
                  if (workSection) workSection.scrollIntoView({ behavior: 'smooth' })
                }}
                className="py-3 px-6 text-sm font-mono font-medium flex items-center justify-center gap-2"
              >
                <span>Explore Shipped Work</span>
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Hero Interactive Code Terminal (5 cols) */}
          <motion.div variants={itemVariants} className="lg:col-span-5 w-full">
            <HeroTerminal />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Hint */}
      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:block"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <button
          onClick={() => {
            const servicesSection = document.querySelector('#services')
            if (servicesSection) servicesSection.scrollIntoView({ behavior: 'smooth' })
          }}
          className="p-2 text-zinc-400 hover:text-brand-terra transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={24} />
        </button>
      </motion.div>
    </section>
  )
}
