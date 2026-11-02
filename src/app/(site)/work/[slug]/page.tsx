import { ViewTransition } from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink, ShieldCheck } from 'lucide-react'
import { findProjectBySlug, isLaunched, orderedProjects, projectData, projectSlug } from '@/data/projects'

export function generateStaticParams() {
  return projectData.map((p) => ({ slug: projectSlug(p) }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = findProjectBySlug(slug)
  if (!project) return {}
  return {
    title: project.name,
    description: project.summary.slice(0, 155),
    openGraph: { images: [{ url: project.imagePath }] },
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = findProjectBySlug(slug)
  if (!project) notFound()

  const index = orderedProjects.findIndex((p) => p.id === project.id)
  const next = orderedProjects[(index + 1) % orderedProjects.length]
  const launched = isLaunched(project)

  return (
    <article className="py-10 md:py-16 text-[#2E0E1D] dark:text-[#FFF0E3]">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <Link
          href="/work"
          className="inline-flex min-h-[44px] items-center gap-2 font-dm text-sm font-semibold text-[#6C4B59] dark:text-[#E6D0C2] hover:text-brand-terra-ink dark:hover:text-brand-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terra rounded"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          All work
        </Link>

        <header className="mt-6">
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#7A4A38] dark:text-[#B88E7D]">
            {project.categoryLabel}
          </p>
          <h1 className="mt-2 text-3xl sm:text-5xl font-syne font-extrabold tracking-tight leading-tight">{project.name}</h1>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-brand-terra hover:bg-[#B82A00] px-5 font-dm text-sm font-semibold text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terra focus-visible:ring-offset-2"
            >
              {launched ? 'Visit the live site' : 'Open the preview'}
              <ExternalLink size={15} aria-hidden="true" />
            </a>
            <span className="font-mono text-xs text-[#7A4A38] dark:text-[#B88E7D]">{project.domain}</span>
          </div>
        </header>

        <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-[20px] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 bg-[#1D0E17]">
          <ViewTransition name={`project-${project.id}`} share="project-morph">
            <Image
              src={project.imagePath}
              alt={`${project.name} screenshot`}
              fill
              priority
              unoptimized
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover object-top"
            />
          </ViewTransition>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <p className="font-dm text-base md:text-lg leading-relaxed text-[#5A3846] dark:text-[#E6D0C2]">{project.summary}</p>

            {project.founderRole && (
              <p className="flex items-start gap-2.5 rounded-xl border border-[#EAD3C4] dark:border-[#EAD3C4]/15 bg-[#FAF0E6] dark:bg-[#1D0E17] p-4 font-dm text-sm leading-relaxed text-[#5A3846] dark:text-[#E6D0C2]">
                <ShieldCheck size={16} className="mt-0.5 shrink-0 text-brand-terra-ink" aria-hidden="true" />
                <span>
                  <strong className="text-[#2E0E1D] dark:text-[#FFF0E3]">Founder experience.</strong> Built by Adeleke Sherifdeen as {project.founderRole} at Mabilla Group. Shown to illustrate payments expertise, not as a Gran Jefe client project.
                </span>
              </p>
            )}

            {!launched && (
              <p className="font-dm text-sm text-amber-800 dark:text-amber-300">
                Built and running on a preview link, not yet launched on its own domain.
              </p>
            )}
          </div>

          <aside className="space-y-6">
            <div>
              <h2 className="font-syne text-lg font-bold">What we delivered</h2>
              <ul className="mt-3 space-y-2.5">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 font-dm text-sm">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-terra-ink" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-syne text-lg font-bold">Built with</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-lg border border-[#EAD3C4] dark:border-[#EAD3C4]/15 bg-[#FAF0E6] dark:bg-[#1D0E17] px-3 py-1 font-mono text-xs text-[#6C4B59] dark:text-[#E6D0C2]"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <nav aria-label="More work" className="mt-14 grid gap-4 border-t border-[#EAD3C4] dark:border-[#EAD3C4]/15 pt-8 sm:grid-cols-2">
          <Link
            href={`/work/${projectSlug(next)}`}
            className="group rounded-[14px] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 p-5 transition-colors hover:border-brand-terra/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terra"
          >
            <span className="font-mono text-xs text-[#7A4A38] dark:text-[#B88E7D]">Next project</span>
            <span className="mt-1 flex items-center justify-between gap-3 font-syne text-lg font-bold">
              {next.name}
              <ArrowRight size={18} className="shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </span>
          </Link>
          <Link
            href="/contact"
            className="group rounded-[14px] bg-[#2E0E1D] dark:bg-[#FFF0E3] p-5 text-[#FFF0E3] dark:text-[#2E0E1D] transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terra focus-visible:ring-offset-2"
          >
            <span className="font-mono text-xs opacity-80">Have something similar in mind?</span>
            <span className="mt-1 flex items-center justify-between gap-3 font-syne text-lg font-bold">
              Start a project
              <ArrowRight size={18} className="shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </span>
          </Link>
        </nav>
      </div>
    </article>
  )
}
