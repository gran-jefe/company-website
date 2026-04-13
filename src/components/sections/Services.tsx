'use client'

import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import React from 'react'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay?: number
}

function ServiceCard({ icon, title, description, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: '-80px' }}
      className="bg-brand-cream dark:bg-brand-base border border-brand-blush dark:border-brand-deep rounded-xl p-6 hover:border-l-4 hover:border-l-brand-terra transition-all duration-200"
    >
      <div className="mb-4 text-brand-terra">{icon}</div>
      <h3 className="font-syne font-600 text-brand-base dark:text-white mb-3">{title}</h3>
      <p className="font-dm font-light text-brand-clay dark:text-brand-plumtext text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  )
}

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="8" width="10" height="16" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="18" y="4" width="10" height="20" rx="1" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Mobile App Development',
    description: 'React Native, cross-platform iOS & Android. Native performance, single codebase.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 12h24" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Web App Development',
    description: 'React and Next.js. SPAs, dashboards, portals, and everything in between.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 10v6l4 2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Backend & API Development',
    description: 'Node.js and Python. REST APIs, auth systems, database design, server architecture.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 16h16M16 8v16" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Fintech Product Engineering',
    description: 'Payments, wallets, compliance-aware UX. Built for financial products that have to work.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 8l12 8 12-8M4 24h24" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Third-party Integrations',
    description: 'Payment gateways, analytics, auth providers, and any external API connected cleanly.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 16l6 6 14-14" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: 'MVP & Rapid Prototyping',
    description: 'Idea to working product, fast. Built for founders who need to move.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-white dark:bg-brand-deep py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <AnimatedSection>
          <SectionLabel>What we do</SectionLabel>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="mt-6 text-3xl md:text-4xl font-syne font-700 text-brand-base dark:text-white">
            Everything you need, nothing you don't.
          </h2>
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
