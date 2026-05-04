'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

interface ProjectCardProps {
  colorClass: string
  name: string
  type: string
  description: string
  stack: string[]
  delay?: number
}

function ProjectCard({ colorClass, name, type, description, stack, delay = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: '-80px' }}
      className="rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-200 group"
    >
      {/* Top half: Color block */}
      <div className={`h-48 ${colorClass} relative flex items-center justify-center`}>
        <div className="text-white opacity-20">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="8" width="48" height="48" rx="4" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
      </div>

      {/* Bottom half: Card body */}
      <div className="bg-white dark:bg-brand-deep p-6">
        <h3 className="font-syne font-700 text-brand-base dark:text-white">{name}</h3>

        <div className="mt-3 flex items-center gap-2">
          <span className="inline-block px-2 py-1 rounded text-xs font-dm font-medium bg-brand-blush text-brand-clay dark:bg-brand-base dark:text-brand-plumtext">
            {type}
          </span>
        </div>

        <p className="mt-3 text-sm font-dm font-light text-brand-clay dark:text-brand-plumtext line-clamp-1">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {stack.map((tech, index) => (
            <span
              key={index}
              className="inline-block text-xs font-dm font-medium px-2 py-1 rounded bg-brand-cream dark:bg-brand-base text-brand-clay dark:text-brand-plumtext"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const projects = [
  {
    colorClass: 'bg-brand-deep',
    name: 'Mobile Wallet App',
    type: 'Fintech',
    description: 'Secure financial transactions on mobile',
    stack: ['React Native', 'Node.js', 'PostgreSQL'],
  },
  {
    colorClass: 'bg-brand-terra opacity-30',
    name: 'SaaS Dashboard',
    type: 'Web App',
    description: 'Analytics and management platform',
    stack: ['Next.js', 'TypeScript', 'Firebase'],
  },
  {
    colorClass: 'bg-brand-teal opacity-20',
    name: 'E-commerce Platform',
    type: 'Web + Mobile',
    description: 'Multi-platform shopping experience',
    stack: ['React', 'React Native', 'Node.js'],
  },
]

export function Work() {
  return (
    <section id="work" className="bg-brand-cream dark:bg-brand-base py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <AnimatedSection>
          <SectionLabel>Work</SectionLabel>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="mt-6 text-3xl md:text-4xl font-syne font-700 text-brand-base dark:text-white">
            Projects that shipped.
          </h2>
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              delay={index * 0.08}
            />
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="mt-12 text-center">
            <p className="font-dm font-light text-brand-clay dark:text-brand-plumtext">
              Have a project in mind?{' '}
              <button
                onClick={() => {
                  const contactSection = document.querySelector('#contact')
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="inline-flex items-center gap-2 text-brand-terra hover:text-brand-ember transition-colors font-medium group"
              >
                Let&apos;s talk
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
