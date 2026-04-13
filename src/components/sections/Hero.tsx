'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SectionLabel } from '@/components/ui/SectionLabel'

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
      transition: { duration: 0.6 }
    },
  }

  return (
    <section className="min-h-screen bg-brand-cream dark:bg-brand-base relative overflow-hidden">
      {/* Geometric background patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large faint circle outline top-right */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full border-2 border-brand-terra opacity-5" />

        {/* Small solid circle bottom-left */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-brand-terra opacity-15" />

        {/* Grid pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-3"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Content */}
      <motion.div
        className="relative max-w-5xl mx-auto px-4 md:px-6 h-screen flex flex-col items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Tag */}
        <motion.div variants={itemVariants}>
          <SectionLabel>Technical Solutions Studio</SectionLabel>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="mt-6 text-5xl md:text-6xl lg:text-7xl font-syne font-800 text-brand-base dark:text-white text-center leading-tight"
        >
          We build the products{' '}
          <span className="text-brand-terra">others can't.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          variants={itemVariants}
          className="mt-6 text-lg md:text-xl font-dm font-light text-brand-clay dark:text-brand-plumtext text-center max-w-2xl"
        >
          Mobile. Web. Backend. End-to-end.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-col md:flex-row gap-4 justify-center"
        >
          <Button
            variant="filled"
            onClick={() => {
              const contactSection = document.querySelector('#contact')
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            Start a project
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              const workSection = document.querySelector('#work')
              if (workSection) {
                workSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            See our work
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-brand-terra opacity-50" size={28} />
        </motion.div>
      </motion.div>
    </section>
  )
}
