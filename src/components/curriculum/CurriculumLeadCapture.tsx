'use client'

import React, { useState, useTransition } from 'react'
import { Send, CheckCircle2, Lock, Gift, Loader2, AlertCircle } from 'lucide-react'

interface CurriculumLeadCaptureProps {
  trackTitle: string
}

export function CurriculumLeadCapture({ trackTitle }: CurriculumLeadCaptureProps) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [isPending, startTransition] = useTransition()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid email address (e.g. name@company.com).')
      return
    }

    setError('')
    startTransition(async () => {
      try {
        const res = await fetch('/api/leads', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: email.trim(), track: trackTitle, company: honeypot }),
        })
        if (!res.ok) throw new Error(`Signup failed with ${res.status}`)
        setSubmitted(true)
      } catch {
        // Keep the typed email so the visitor can retry
        setError('We couldn’t save your email. Please try again in a moment.')
      }
    })
  }

  return (
    <section className="my-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-terra/10 via-[#1D0E17] to-[#11070D] border border-brand-terra/30 shadow-lg text-[#FFF0E3]">
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-brand-terra/20 text-[#FF5528] border border-brand-terra/30">
          <Gift size={13} /> Free Starter Architecture Pack
        </div>
        <h3 className="text-2xl sm:text-3xl font-syne font-bold tracking-tight text-[#FFF0E3]">
          Get the Production Boilerplate &amp; Project Files
        </h3>
        <p className="text-xs sm:text-sm text-[#E6D0C2] font-dm leading-relaxed">
          We are currently preparing full, production-tested GitHub starter repositories and weekly checkmark guides for {trackTitle}. Join the early access circle to receive the code templates when they drop.
        </p>

        {submitted ? (
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-center justify-center gap-2 font-dm">
            <CheckCircle2 size={16} className="text-emerald-400" />
            <span>You&rsquo;re on the list. We&rsquo;ll email the {trackTitle} starter code to {email} as soon as it&rsquo;s ready.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="relative flex flex-col sm:flex-row items-center gap-2.5 max-w-md mx-auto pt-2">
            {/* Honeypot: hidden from people and assistive tech, catches form-filling bots */}
            <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
              <input type="text" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your work email address"
              aria-label="Email address"
              aria-invalid={Boolean(error)}
              aria-describedby={error ? 'lead-capture-error' : undefined}
              required
              className="w-full min-h-[44px] px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-[#25121E] border border-[#EAD3C4]/20 text-[#FFF0E3] placeholder:text-[#B88E7D] focus:outline-none focus:border-brand-terra focus:ring-1 focus:ring-brand-terra transition-all"
            />
            <button
              type="submit"
              disabled={isPending}
              className="w-full sm:w-auto min-h-[44px] px-5 py-2.5 rounded-xl text-xs sm:text-sm font-dm font-semibold bg-brand-terra hover:bg-[#B82A00] disabled:opacity-75 text-white transition-colors flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terra"
            >
              {isPending ? (
                <>
                  <Loader2 size={14} className="animate-spin" />
                  <span>Saving...</span>
                </>
              ) : (
                <>
                  <span>Get Free Code</span>
                  <Send size={13} />
                </>
              )}
            </button>
          </form>
        )}

        {error && !submitted && (
          <p id="lead-capture-error" role="alert" className="text-xs sm:text-sm text-rose-300 font-dm flex items-center justify-center gap-1.5">
            <AlertCircle size={14} className="shrink-0" /> {error}
          </p>
        )}

        <p className="text-[11px] text-[#B88E7D] font-mono flex items-center justify-center gap-1.5 pt-1">
          <Lock size={11} /> 100% Free. No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  )
}
