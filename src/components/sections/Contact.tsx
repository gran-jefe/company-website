'use client'

import React, { useState } from 'react'
import { Mail, Check, Send, Copy, ArrowUpRight, ShieldCheck, MessageCircle, Clock, Sparkles, RotateCcw, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function Contact() {
  const [selectedServices, setSelectedServices] = useState<string[]>(['7-Day Rebuild Sprint'])
  const [selectedTimeline, setSelectedTimeline] = useState<string>('7-Day Sprint')
  const [copiedCli, setCopiedCli] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [nameInput, setNameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [emailTouched, setEmailTouched] = useState(false)
  const [messageInput, setMessageInput] = useState('')

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.trim())
  const showEmailError = emailTouched && emailInput.length > 0 && !isValidEmail

  const availableServices = [
    '7-Day Rebuild Sprint',
    'Web Platform / Next.js',
    'Mobile App (React Native)',
    'Fintech & Payments',
    'Backend API Architecture',
    'Product Strategy',
  ]

  const timelineOptions = [
    '7-Day Sprint',
    '2 – 3 Weeks MVP',
    '1 – 2 Months Full Scale',
    'Flexible / Discuss',
  ]

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== service))
      }
    } else {
      setSelectedServices([...selectedServices, service])
    }
  }

  const handleCopyCli = () => {
    navigator.clipboard.writeText('granjefetech@gmail.com')
    setCopiedCli(true)
    setTimeout(() => setCopiedCli(false), 2000)
  }

  // Pre-formatted WhatsApp message URL with user selections
  const generateWhatsAppUrl = () => {
    const text = `Hi Gran Jefe Studio,

Name: ${nameInput || 'Prospective Client'}
Email: ${emailInput || 'N/A'}
Selected Service: ${selectedServices.join(', ')}
Target Timeline: ${selectedTimeline}

Notes:
${messageInput || 'I would like to discuss a project.'}

---
Sent via thegranjefe.com`
    return `https://wa.me/2349061770885?text=${encodeURIComponent(text)}`
  }

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault()
    setEmailTouched(true)
    if (!isValidEmail || isSubmitting) return

    setIsSubmitting(true)
    setSubmitError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: nameInput,
          email: emailInput.trim(),
          services: selectedServices,
          timeline: selectedTimeline,
          message: messageInput,
          company: honeypot,
        }),
      })
      if (!res.ok) throw new Error(`Inquiry failed with ${res.status}`)
      setIsSubmitted(true)
    } catch {
      // Keep everything the visitor typed so they can retry or switch to WhatsApp
      setSubmitError('We couldn’t send your inquiry. Please try again, or message us on WhatsApp below.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="bg-[#FFF0E3] dark:bg-[#11070D] py-20 md:py-28 relative overflow-hidden border-t border-[#EAD3C4] dark:border-[#EAD3C4]/15 text-[#2E0E1D] dark:text-[#FFF0E3] transition-colors duration-300">
      {/* Background Luminous Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-terra/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto">
            <SectionLabel>Get In Touch</SectionLabel>
            <h2 className="mt-4 text-4xl sm:text-5xl font-syne font-extrabold text-[#2E0E1D] dark:text-[#FFF0E3] tracking-tight">
              Let&rsquo;s talk about <span className="text-brand-terra-ink">your project.</span>
            </h2>
            <p className="mt-4 text-[#6C4B59] dark:text-[#E6D0C2] font-dm text-base">
              Ready to rebuild an underperforming site, launch a new digital product, or discuss technical architecture? Reach out to start a conversation.
            </p>
          </div>
        </AnimatedSection>

        {/* Contact Form Card */}
        <AnimatedSection delay={0.1}>
          <div className="mt-12 p-6 md:p-10 rounded-3xl bg-[#FAF0E6] dark:bg-[#1D0E17] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 shadow-xl max-w-3xl mx-auto space-y-8">
            {!isSubmitted ? (
              <form onSubmit={handleSubmitForm} className="space-y-6">
                {/* Service Selection Chips */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="block font-dm text-xs font-semibold text-[#7A4A38] dark:text-[#E6D0C2] uppercase tracking-wider">
                      1. What type of project are you building?
                    </label>
                    <span className="text-[11px] font-mono text-[#7A4A38] dark:text-[#B88E7D]">Multi-select enabled</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {availableServices.map((service) => {
                      const isSelected = selectedServices.includes(service)
                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleService(service)}
                          className={`px-3.5 py-1.5 rounded-lg text-xs font-dm transition-all flex items-center gap-1.5 cursor-pointer ${
                            isSelected
                              ? 'bg-brand-terra text-white font-medium border border-brand-terra shadow-sm'
                              : 'bg-[#FFF0E3] hover:bg-[#F3E2D5] dark:bg-[#25121E] dark:hover:bg-[#2C1625] text-[#6C4B59] dark:text-[#E6D0C2] border border-[#EAD3C4] dark:border-[#EAD3C4]/15'
                          }`}
                        >
                          {isSelected ? <Check size={13} /> : <span className="opacity-50">+</span>}
                          {service}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Timeline Selector */}
                <div>
                  <label className="block font-dm text-xs font-semibold text-[#7A4A38] dark:text-[#E6D0C2] uppercase tracking-wider mb-3">
                    2. Target Launch Timeline
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {timelineOptions.map((opt) => {
                      const isSelected = selectedTimeline === opt
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setSelectedTimeline(opt)}
                          className={`p-2.5 rounded-xl text-xs font-mono font-medium text-center transition-all border cursor-pointer ${
                            isSelected
                              ? 'bg-[#2E0E1D] text-[#FFF0E3] dark:bg-[#FFF0E3] dark:text-[#2E0E1D] border-brand-terra font-bold shadow-xs'
                              : 'bg-[#FFF0E3] dark:bg-[#25121E] text-[#6C4B59] dark:text-[#E6D0C2] border-[#EAD3C4] dark:border-[#EAD3C4]/15 hover:border-brand-terra/40'
                          }`}
                        >
                          {opt}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Form Inputs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-dm text-xs text-[#7A4A38] dark:text-[#E6D0C2] font-medium mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={nameInput}
                      onChange={(e) => setNameInput(e.target.value)}
                      placeholder="Alex Morgan"
                      className="w-full px-4 py-3 rounded-xl bg-[#FFF0E3] dark:bg-[#25121E] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 text-[#2E0E1D] dark:text-[#FFF0E3] font-dm text-sm outline-none focus:border-brand-terra transition-colors placeholder:text-[#7A4A38] dark:placeholder:text-[#B88E7D]"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="block font-dm text-xs text-[#7A4A38] dark:text-[#E6D0C2] font-medium">
                        Your Email Address *
                      </label>
                      {isValidEmail && emailInput.length > 0 && (
                        <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-semibold">
                          <CheckCircle2 size={12} /> Valid Email
                        </span>
                      )}
                    </div>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        aria-invalid={showEmailError}
                        aria-describedby={showEmailError ? 'contact-email-error' : undefined}
                        value={emailInput}
                        onBlur={() => setEmailTouched(true)}
                        onChange={(e) => {
                          setEmailInput(e.target.value)
                          if (!emailTouched) setEmailTouched(true)
                        }}
                        placeholder="alex@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-[#FFF0E3] dark:bg-[#25121E] border ${
                          showEmailError
                            ? 'border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                            : 'border-[#EAD3C4] dark:border-[#EAD3C4]/15 focus:border-brand-terra focus:ring-1 focus:ring-brand-terra'
                        } text-[#2E0E1D] dark:text-[#FFF0E3] font-dm text-sm focus:outline-none transition-colors placeholder:text-[#7A4A38] dark:placeholder:text-[#B88E7D]`}
                      />
                    </div>
                    {showEmailError && (
                      <p id="contact-email-error" className="mt-1.5 text-xs text-rose-600 dark:text-rose-400 font-dm flex items-center gap-1">
                        <AlertCircle size={12} /> Please enter a valid email address (e.g. name@company.com)
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block font-dm text-xs text-[#7A4A38] dark:text-[#E6D0C2] font-medium mb-1.5">
                    Project Goals &amp; Context
                  </label>
                  <textarea
                    rows={4}
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    placeholder="Share brief details about your website, conversion goals, or technical stack..."
                    className="w-full px-4 py-3 rounded-xl bg-[#FFF0E3] dark:bg-[#25121E] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 text-[#2E0E1D] dark:text-[#FFF0E3] font-dm text-sm outline-none focus:border-brand-terra transition-colors placeholder:text-[#7A4A38] dark:placeholder:text-[#B88E7D] resize-none"
                  />
                </div>

                {/* Honeypot: hidden from people and assistive tech, catches form-filling bots */}
                <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
                  <label>
                    Company
                    <input type="text" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
                  </label>
                </div>

                {submitError && (
                  <div role="alert" className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-700 dark:text-rose-300 text-sm font-dm flex items-start gap-2">
                    <AlertCircle size={16} className="mt-0.5 shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                {/* Dual Submit Buttons (Email Dispatch + 1-Click WhatsApp) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="py-3.5 px-6 rounded-xl bg-brand-terra hover:bg-[#B82A00] disabled:opacity-75 text-white font-dm font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-brand-terra/20 hover:scale-[1.01] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terra cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Sending inquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Send Project Inquiry</span>
                      </>
                    )}
                  </button>

                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3.5 px-6 rounded-xl bg-[#0E6247] hover:bg-[#127A59] text-white font-dm font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-950/20 hover:scale-[1.01] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  >
                    <MessageCircle size={16} />
                    <span>Chat on WhatsApp Direct</span>
                  </a>
                </div>
              </form>
            ) : (
              /* Success Confirmation Card */
              <div className="p-8 rounded-2xl bg-[#FFF0E3] dark:bg-[#25121E] border border-emerald-500/40 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-500">
                  <Check size={28} />
                </div>

                <div className="space-y-1">
                  <h3 className="font-syne font-bold text-2xl text-[#2E0E1D] dark:text-[#FFF0E3]">
                    Inquiry sent
                  </h3>
                  <p className="font-dm text-sm text-[#5A3846] dark:text-[#E6D0C2] max-w-md mx-auto">
                    We&rsquo;ve received your project details. Adeleke Sherifdeen will personally review them and reply to <strong>{emailInput}</strong> in <strong>under 4 hours</strong>.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF0E6] dark:bg-[#1D0E17] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 max-w-md mx-auto text-xs font-mono text-left space-y-1.5 text-[#7A4A38] dark:text-[#E6D0C2]">
                  <div><strong>Services:</strong> {selectedServices.join(', ')}</div>
                  <div><strong>Target Timeline:</strong> {selectedTimeline}</div>
                  <div><strong>Email:</strong> {emailInput}</div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto py-2.5 px-5 rounded-xl bg-[#0E6247] hover:bg-[#127A59] text-white text-xs font-semibold font-dm flex items-center justify-center gap-2 shadow-sm"
                  >
                    <MessageCircle size={14} />
                    <span>Fast-Track on WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="w-full sm:w-auto py-2.5 px-5 rounded-xl bg-[#FAF0E6] dark:bg-[#1D0E17] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 text-xs font-mono text-[#6C4B59] dark:text-[#E6D0C2] hover:text-brand-terra-ink flex items-center justify-center gap-1.5"
                  >
                    <RotateCcw size={13} />
                    <span>Send Another Inquiry</span>
                  </button>
                </div>
              </div>
            )}

            {/* Direct Email & Response Guarantee Bar */}
            <div className="pt-6 border-t border-[#EAD3C4] dark:border-[#EAD3C4]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-dm text-[#6C4B59] dark:text-[#E6D0C2]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-[#7A4A38] dark:text-[#B88E7D]">Response time:</span>
                <span className="text-[#2E0E1D] dark:text-[#FFF0E3] font-semibold">&lt; 4 hours direct reply</span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="mailto:granjefetech@gmail.com"
                  className="px-3.5 py-1.5 rounded-lg bg-[#FFF0E3] hover:bg-[#F3E2D5] dark:bg-[#25121E] dark:hover:bg-[#2C1625] text-[#2E0E1D] dark:text-[#FFF0E3] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 font-dm text-xs flex items-center gap-1.5 transition-colors"
                >
                  <Mail size={13} className="text-brand-terra-ink" />
                  <span>granjefetech@gmail.com</span>
                </a>

                <button
                  onClick={handleCopyCli}
                  className="px-3 py-1.5 rounded-lg bg-[#FFF0E3] hover:bg-[#F3E2D5] dark:bg-[#25121E] dark:hover:bg-[#2C1625] text-[#6C4B59] dark:text-[#E6D0C2] font-mono text-[11px] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 flex items-center gap-1.5 transition-colors cursor-pointer"
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
