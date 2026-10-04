'use client'

import React, { useState } from 'react'
import { Mail, Check, Send, Copy, ArrowUpRight, ShieldCheck } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function Contact() {
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [copiedCli, setCopiedCli] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [nameInput, setNameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [messageInput, setMessageInput] = useState('')

  const availableServices = [
    '⚡ 7-Day Rebuild Sprint',
    'Web Platform / Next.js',
    'Mobile App (React Native)',
    'Fintech & Payments',
    'Backend API Architecture',
    'Product Strategy',
  ]

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service))
    } else {
      setSelectedServices([...selectedServices, service])
    }
  }

  const handleCopyCli = () => {
    navigator.clipboard.writeText('granjefetech@gmail.com')
    setCopiedCli(true)
    setTimeout(() => setCopiedCli(false), 2000)
  }

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault()
    if (!emailInput) return

    const subject = encodeURIComponent(
      `[Project Inquiry] ${selectedServices.join(', ') || 'General'}`
    )
    const body = encodeURIComponent(
      `Hi Gran Jefe Studio,\n\nName: ${nameInput}\nEmail: ${emailInput}\nProject Type: ${
        selectedServices.join(', ') || 'Not specified'
      }\n\nMessage:\n${messageInput}`
    )
    window.location.href = `mailto:granjefetech@gmail.com?subject=${subject}&body=${body}`

    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-[#FCFCFA] dark:bg-zinc-950 py-20 md:py-28 relative overflow-hidden border-t border-zinc-200/80 dark:border-zinc-800 text-zinc-900 dark:text-white transition-colors duration-300">
      {/* Background Luminous Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-terra/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto">
            <SectionLabel>Get In Touch</SectionLabel>
            <h2 className="mt-4 text-4xl sm:text-5xl font-syne font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Let's talk about <span className="text-brand-terra">your project.</span>
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-300 font-dm text-base">
              Ready to rebuild an underperforming site, launch a new digital product, or discuss technical architecture? Reach out to start a conversation.
            </p>
          </div>
        </AnimatedSection>

        {/* Contact Form Card */}
        <AnimatedSection delay={0.1}>
          <div className="mt-12 p-6 md:p-10 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 shadow-xl max-w-3xl mx-auto space-y-8">
            <form onSubmit={handleSubmitForm} className="space-y-6">
              {/* Service Selection Chips */}
              <div>
                <label className="block font-dm text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase tracking-wider mb-3">
                  What type of project are you building?
                </label>
                <div className="flex flex-wrap gap-2">
                  {availableServices.map((service) => {
                    const isSelected = selectedServices.includes(service)
                    return (
                      <button
                        key={service}
                        type="button"
                        onClick={() => toggleService(service)}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-dm transition-all flex items-center gap-1.5 ${
                          isSelected
                            ? 'bg-brand-terra text-white font-medium border border-brand-terra shadow-sm'
                            : 'bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700'
                        }`}
                      >
                        {isSelected ? <Check size={13} /> : <span className="opacity-50">+</span>}
                        {service}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Form Inputs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-dm text-xs text-zinc-700 dark:text-zinc-300 font-medium mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    placeholder="Alex Morgan"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white font-dm text-sm outline-none focus:border-brand-terra transition-colors placeholder:text-zinc-400"
                  />
                </div>

                <div>
                  <label className="block font-dm text-xs text-zinc-700 dark:text-zinc-300 font-medium mb-1.5">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white font-dm text-sm outline-none focus:border-brand-terra transition-colors placeholder:text-zinc-400"
                  />
                </div>
              </div>

              <div>
                <label className="block font-dm text-xs text-zinc-700 dark:text-zinc-300 font-medium mb-1.5">
                  How can we help?
                </label>
                <textarea
                  rows={4}
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  placeholder="Share details about your goals, timelines, or requirements..."
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white font-dm text-sm outline-none focus:border-brand-terra transition-colors placeholder:text-zinc-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-brand-terra hover:bg-brand-ember text-white font-dm font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-brand-terra/20 hover:scale-[1.01]"
              >
                <Send size={16} />
                <span>Send Message</span>
              </button>

              {submitted && (
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-dm text-center">
                  ✔ Opening email client to send your message...
                </div>
              )}
            </form>

            {/* Direct Email & Response Guarantee Bar */}
            <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-dm text-zinc-600 dark:text-zinc-300">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-zinc-500">Response time:</span>
                <span className="text-zinc-900 dark:text-white font-semibold">&lt; 4 hours direct reply</span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="mailto:granjefetech@gmail.com"
                  className="px-3.5 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-white font-dm text-xs flex items-center gap-1.5 transition-colors"
                >
                  <Mail size={13} className="text-brand-terra" />
                  <span>granjefetech@gmail.com</span>
                </a>

                <button
                  onClick={handleCopyCli}
                  className="px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 font-mono text-[11px] border border-zinc-200 dark:border-zinc-700 flex items-center gap-1.5 transition-colors"
                  title="Copy email address"
                >
                  {copiedCli ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
                  <span>{copiedCli ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
