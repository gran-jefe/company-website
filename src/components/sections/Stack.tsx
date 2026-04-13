'use client'

import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const stackGroups = [
  {
    label: 'Frontend',
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    className: 'bg-blue-50 text-blue-800 dark:bg-blue-950 dark:text-blue-200',
  },
  {
    label: 'Mobile',
    technologies: ['React Native', 'Expo'],
    className: 'bg-purple-50 text-purple-800 dark:bg-purple-950 dark:text-purple-200',
  },
  {
    label: 'Backend',
    technologies: ['Node.js', 'Python', 'Express', 'REST APIs'],
    className: 'bg-brand-mint text-brand-teal dark:bg-teal-950 dark:text-teal-200',
  },
  {
    label: 'Tools',
    technologies: ['Git & GitHub', 'CI/CD', 'Firebase', 'PostgreSQL', 'MongoDB'],
    className: 'bg-brand-blush text-brand-clay dark:bg-orange-950 dark:text-orange-200',
  },
]

export function Stack() {
  return (
    <section id="stack" className="bg-brand-cream dark:bg-brand-base py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <AnimatedSection>
          <SectionLabel>How we build</SectionLabel>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="mt-6 text-3xl md:text-4xl font-syne font-700 text-brand-base dark:text-white">
            The stack behind every project.
          </h2>
        </AnimatedSection>

        <div className="mt-12 space-y-8">
          {stackGroups.map((group, index) => (
            <AnimatedSection key={index} delay={0.1 + index * 0.08}>
              <div>
                <h3 className="font-syne font-600 text-brand-base dark:text-white mb-3">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`rounded-full px-4 py-1.5 text-sm font-dm font-medium ${group.className}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5}>
          <p className="mt-12 font-dm font-light italic text-brand-clay dark:text-brand-plumtext text-sm">
            Every tool chosen deliberately. No cargo-culting.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
