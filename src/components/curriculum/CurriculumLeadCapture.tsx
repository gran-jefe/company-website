'use client'

import React, { useState, useTransition } from 'react'
import { Send, CheckCircle2, Sparkles, Lock, Gift } from 'lucide-react'

interface CurriculumLeadCaptureProps {
  trackTitle: string
}

export function CurriculumLeadCapture({ trackTitle }: CurriculumLeadCaptureProps) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isPending, startTransition] = useTransition()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) return

    startTransition(() => {
      // Store in localStorage for now (can be synced to DB or newsletter API later)
      try {
        const existing = JSON.parse(localStorage.getItem('granjefe_learning_leads') || '[]')
        existing.push({
          email,
          track: trackTitle,
          timestamp: new Date().toISOString(),
        })
        localStorage.setItem('granjefe_learning_leads', JSON.stringify(existing))
      } catch (err) {
        // ignore
      }
      setSubmitted(true)
    })
  }

  return (
    <section className="my-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-terra/10 via-zinc-900 to-zinc-950 border border-brand-terra/30 shadow-lg text-white">
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-brand-terra/20 text-brand-ember border border-brand-terra/30">
          <Gift size={13} /> Free Starter Architecture Pack
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Get the Production Boilerplate &amp; Project Files
        </h3>
        <p className="text-xs sm:text-sm text-zinc-300 font-dm leading-relaxed">
          We are currently preparing full, production-tested GitHub starter repositories and weekly checkmark guides for {trackTitle}. Join the early access circle to receive the code templates when they drop.
        </p>

        {submitted ? (
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-center justify-center gap-2 font-dm">
            <CheckCircle2 size={16} className="text-emerald-400" />
            <span>You are on the priority list! We will send project starter code and updates directly to {email}.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2.5 max-w-md mx-auto pt-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your work email address"
              required
              className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-zinc-400 focus:outline-none focus:border-brand-terra focus:ring-1 focus:ring-brand-terra transition-all"
            />
            <button
              type="submit"
              disabled={isPending}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs sm:text-sm font-dm font-semibold bg-brand-terra hover:bg-brand-ember text-white transition-colors flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-sm"
            >
              <span>Get Free Code</span>
              <Send size={13} />
            </button>
          </form>
        )}

        <p className="text-[11px] text-zinc-400 font-mono flex items-center justify-center gap-1.5 pt-1">
          <Lock size={11} /> 100% Free. No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  )
}
