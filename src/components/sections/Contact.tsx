'use client'

import { Mail } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function Contact() {
  return (
    <section id="contact" className="bg-brand-base py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-syne font-800 text-white">
            Let&apos;s build{' '}
            <span className="text-brand-terra">something great.</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="mt-6 text-brand-plumtext font-dm font-light">
            Reach out to start a project, discuss an idea, or just say hello.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <a
            href="mailto:granjefetech@gmail.com"
            className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-brand-terra hover:bg-brand-ember text-white font-dm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-ember focus-visible:ring-offset-2 focus-visible:ring-offset-brand-base"
          >
            <Mail size={20} />
            Send a message
          </a>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="mt-12">
            <p className="text-brand-plumtext text-sm font-dm font-light">or find me on</p>
            <div className="mt-4 flex justify-center gap-6">
              <a
                href="https://github.com"
                className="text-brand-plumtext hover:text-brand-ember transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terra rounded-full p-2"
                aria-label="GitHub"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 0v.01M9 15c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                className="text-brand-plumtext hover:text-brand-ember transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terra rounded-full p-2"
                aria-label="LinkedIn"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.252-.129.604-.129.957v5.41h-3.553s.047-8.767 0-9.679h3.553v1.371c.42-.648 1.36-1.573 3.322-1.573 2.429 0 4.251 1.547 4.251 4.875v5.006zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.707 0-.968.771-1.708 1.96-1.708 1.188 0 1.913.74 1.932 1.708 0 .949-.744 1.707-1.977 1.707zm1.581 11.597H3.757V9.773h3.161v10.679zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                className="text-brand-plumtext hover:text-brand-ember transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terra rounded-full p-2"
                aria-label="Twitter / X"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.207-6.807-5.989 6.807H2.422l7.723-8.835L1.664 2.25h6.837l4.822 6.566 5.401-6.566zM17.15 18.75h1.828L5.75 3.75H3.75z" />
                </svg>
              </a>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <p className="mt-12 text-xs text-brand-plumtext opacity-60 font-dm font-light">
            Based in Abuja, Nigeria. Working globally.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
