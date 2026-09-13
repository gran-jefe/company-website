'use client'

import React, { useState } from 'react'
import { Mail, Check, Copy, Terminal, Send, Sparkles } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function Contact() {
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [copiedCurl, setCopiedCurl] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [emailInput, setEmailInput] = useState('')
  const [messageInput, setMessageInput] = useState('')

  const availableServices = [
    'Cross-Platform Mobile App',
    'Full-Stack Web App',
    'Distributed Backend & API',
    'Fintech & Ledger Engineering',
    'System Architecture Review',
  ]

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service))
    } else {
      setSelectedServices([...selectedServices, service])
    }
  }

  const handleCopyCurl = () => {
    const curlCommand = `curl -X POST https://granjefe.dev/api/contact \\
  -H "Content-Type: application/json" \\
  -d '{"email": "your_email@domain.com", "scope": "${selectedServices.join(', ') || 'General Inquiry'}"}'`
    navigator.clipboard.writeText(curlCommand)
    setCopiedCurl(true)
    setTimeout(() => setCopiedCurl(false), 2000)
  }

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault()
    if (!emailInput) return

    const subject = encodeURIComponent(
      `[Project Inquiry] ${selectedServices.join(', ') || 'Gran Jefe Partnership'}`
    )
    const body = encodeURIComponent(
      `Hi Gran Jefe Studio,\n\n${messageInput}\n\nProject Scope: ${
        selectedServices.join(', ') || 'General'
      }\nFrom: ${emailInput}`
    )
    window.location.href = `mailto:granjefetech@gmail.com?subject=${subject}&body=${body}`

    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-zinc-950 py-20 md:py-28 relative overflow-hidden border-t border-zinc-800">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-terra/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 md:px-6 relative">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto">
            <SectionLabel>Initialize Contact</SectionLabel>
            <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-syne font-extrabold text-white tracking-tight">
              Let's build <span className="text-brand-terra">something exceptional.</span>
            </h2>
            <p className="mt-4 text-zinc-400 font-dm text-base">
              Ready to ship a new product, upgrade existing architecture, or partner on technical builds? Send a message or copy the direct CLI snippet below.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Scope Selector & Interactive Form (7 cols) */}
          <AnimatedSection delay={0.1} className="lg:col-span-7">
            <div className="p-6 md:p-8 rounded-2xl bg-zinc-900/80 border border-zinc-800 backdrop-blur-md shadow-2xl space-y-6">
              <div>
                <label className="block font-mono text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">
                  1. Select Project Scope
                </label>
                <div className="flex flex-wrap gap-2">
                  {availableServices.map((service) => {
                    const isSelected = selectedServices.includes(service)
                    return (
                      <button
                        key={service}
                        type="button"
                        onClick={() => toggleService(service)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                          isSelected
                            ? 'bg-brand-terra text-white border border-brand-terra font-semibold shadow-md'
                            : 'bg-zinc-800/80 hover:bg-zinc-800 text-zinc-300 border border-zinc-700/60'
                        }`}
                      >
                        {isSelected ? <Check size={13} /> : <span className="opacity-50">+</span>}
                        {service}
                      </button>
                    )
                  })}
                </div>
              </div>

              <form onSubmit={handleSubmitForm} className="space-y-4">
                <div>
                  <label className="block font-mono text-xs text-zinc-400 mb-1.5">
                    2. Your Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white font-dm text-sm outline-none focus:border-brand-terra transition-colors placeholder:text-zinc-600"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-zinc-400 mb-1.5">
                    3. Project Summary or Message
                  </label>
                  <textarea
                    rows={4}
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    placeholder="Tell us about your project goals, timelines, or tech stack requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white font-dm text-sm outline-none focus:border-brand-terra transition-colors placeholder:text-zinc-600 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-brand-terra hover:bg-brand-ember text-white font-mono font-medium text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-brand-terra/20"
                >
                  <Send size={16} />
                  <span>Send Project Inquiry</span>
                </button>

                {submitted && (
                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono text-center">
                    ✔ Opening mail client with pre-populated project spec...
                  </div>
                )}
              </form>
            </div>
          </AnimatedSection>

          {/* Right Column: Terminal Direct Contact & Social Links (5 cols) */}
          <AnimatedSection delay={0.2} className="lg:col-span-5 space-y-6">
            {/* Terminal Contact Snippet */}
            <div className="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-brand-terra font-semibold">
                  <Terminal size={16} /> DIRECT CLI INITIATE
                </div>
                <button
                  onClick={handleCopyCurl}
                  className="p-1.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-mono flex items-center gap-1 transition-colors"
                  title="Copy cURL snippet"
                >
                  {copiedCurl ? (
                    <>
                      <Check size={12} className="text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span>Copy CLI</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800/80 font-mono text-xs text-zinc-300 overflow-x-auto">
                <div className="text-zinc-500">// Or email directly:</div>
                <div className="text-emerald-400 font-bold mt-1">granjefetech@gmail.com</div>
                <div className="text-zinc-600 mt-2">$ curl -X POST https://granjefe.dev/contact</div>
              </div>
            </div>

            {/* Social & Studio Location Card */}
            <div className="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-4">
              <div className="font-mono text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                // CONNECT &amp; CHANNELS
              </div>

              <div className="flex items-center gap-4 pt-1">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-zinc-950 hover:bg-brand-terra hover:text-white border border-zinc-800 text-zinc-400 transition-colors"
                  aria-label="GitHub"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-zinc-950 hover:bg-brand-terra hover:text-white border border-zinc-800 text-zinc-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.252-.129.604-.129.957v5.41h-3.553s.047-8.767 0-9.679h3.553v1.371c.42-.648 1.36-1.573 3.322-1.573 2.429 0 4.251 1.547 4.251 4.875v5.006zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.707 0-.968.771-1.708 1.96-1.708 1.188 0 1.913.74 1.932 1.708 0 .949-.744 1.707-1.977 1.707zm1.581 11.597H3.757V9.773h3.161v10.679zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-zinc-950 hover:bg-brand-terra hover:text-white border border-zinc-800 text-zinc-400 transition-colors"
                  aria-label="Twitter / X"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.207-6.807-5.989 6.807H2.422l7.723-8.835L1.664 2.25h6.837l4.822 6.566 5.401-6.566zM17.15 18.75h1.828L5.75 3.75H3.75z" />
                  </svg>
                </a>
              </div>

              <div className="pt-4 border-t border-zinc-800/60 font-mono text-xs text-zinc-500 flex items-center justify-between">
                <span>Location: Abuja, Nigeria</span>
                <span className="text-emerald-500">Working Globally 🌐</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
