'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Calendar, ChevronLeft, ChevronRight, MessageCircle, X } from 'lucide-react'

export interface PitchPoint {
  title: string
  body: string
}

interface PitchNoteProps {
  id: string
  company: string
  points: PitchPoint[]
  accent: string
  accentText?: string
  dark?: boolean
}

const STORAGE_TTL_MS = 7 * 24 * 60 * 60 * 1000

// Same booking link as the landing page Contact section; only shown once it is configured
const CAL_URL = process.env.NEXT_PUBLIC_CAL_URL

function readOpenState(key: string): boolean | null {
  try {
    const stored = localStorage.getItem(key)
    if (!stored) return null
    const { open, ts } = JSON.parse(stored) as { open: boolean; ts: number }
    if (Date.now() - ts > STORAGE_TTL_MS) {
      localStorage.removeItem(key)
      return null
    }
    return open
  } catch {
    return null
  }
}

function writeOpenState(key: string, open: boolean) {
  try {
    localStorage.setItem(key, JSON.stringify({ open, ts: Date.now() }))
  } catch {
    // Storage blocked (private mode); the note still works for this visit
  }
}

// Floating "why this concept" note shown on each demo. Collapses to a pill on
// small screens so it never covers the prototype itself.
export function PitchNote({ id, company, points, accent, accentText = '#FFFFFF', dark = false }: PitchNoteProps) {
  const storageKey = `gj-pitchnote-${id}`
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(0)

  useEffect(() => {
    const stored = readOpenState(storageKey)
    setOpen(stored ?? window.matchMedia('(min-width: 1024px)').matches)
  }, [storageKey])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') toggle(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  const toggle = (next: boolean) => {
    setOpen(next)
    writeOpenState(storageKey, next)
  }

  const surface = dark
    ? 'bg-[#16161D] text-white border-white/15'
    : 'bg-white text-[#16161D] border-black/10'
  const muted = dark ? 'text-white/75' : 'text-[#4A4A55]'
  const ghost = dark
    ? 'border-white/20 hover:bg-white/10 disabled:text-white/40'
    : 'border-black/15 hover:bg-black/5 disabled:text-black/35'
  const ring = dark ? 'focus-visible:ring-white' : 'focus-visible:ring-[#16161D]'
  const waText = encodeURIComponent(`Hi Adeleke, I saw the ${company} concept you put together.`)
  const waUrl = `https://wa.me/2348085448371?text=${waText}`
  const point = points[step]

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => toggle(true)}
        className={`fixed bottom-4 right-4 z-50 inline-flex min-h-[44px] items-center gap-2 rounded-full border px-4 text-sm font-semibold shadow-lg transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${surface} ${ring}`}
      >
        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: accent }} aria-hidden="true" />
        Why this concept
      </button>
    )
  }

  return (
    <aside
      aria-label={`Notes for the ${company} team`}
      className={`fixed bottom-4 right-4 z-50 w-[min(360px,calc(100vw-32px))] rounded-[14px] border p-4 shadow-xl ${surface}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className={`text-xs font-semibold uppercase tracking-wide ${muted}`}>
            For the {company} team · {step + 1} of {points.length}
          </p>
          <h2 className="mt-1 text-base font-bold leading-snug">{point.title}</h2>
        </div>
        <button
          type="button"
          onClick={() => toggle(false)}
          aria-label="Minimise notes"
          className={`-mr-2 -mt-2 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 ${ring} ${dark ? 'hover:bg-white/10' : 'hover:bg-black/5'}`}
        >
          <X size={18} aria-hidden="true" />
        </button>
      </div>

      <p className={`mt-2 text-sm leading-relaxed ${muted}`}>{point.body}</p>

      <div className="mt-4 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            disabled={step === 0}
            aria-label="Previous note"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-[10px] border transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed ${ghost} ${ring}`}
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => setStep((s) => s + 1)}
            disabled={step === points.length - 1}
            aria-label="Next note"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-[10px] border transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed ${ghost} ${ring}`}
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>

        <a
          href={CAL_URL ?? waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex min-h-[44px] items-center gap-2 rounded-[10px] px-4 text-sm font-semibold transition-opacity duration-150 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${ring}`}
          style={{ backgroundColor: accent, color: accentText }}
        >
          {CAL_URL ? <Calendar size={16} aria-hidden="true" /> : <MessageCircle size={16} aria-hidden="true" />}
          {CAL_URL ? 'Book a 15-min call' : 'Talk to Adeleke'}
        </a>
      </div>

      <p className={`mt-3 border-t pt-3 text-xs ${muted} ${dark ? 'border-white/10' : 'border-black/10'}`}>
        Built by{' '}
        <Link href="/" className="font-semibold underline underline-offset-2">
          Gran Jefe Studio
        </Link>
        .{' '}
        {CAL_URL && (
          <>
            Or{' '}
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2">
              message on WhatsApp
            </a>
            .{' '}
          </>
        )}
        Press Esc to minimise.
      </p>
    </aside>
  )
}

interface ConceptRibbonProps {
  company: string
  className: string
}

// Honest framing: these pages borrow the brand's look, so say plainly that
// they are an unofficial concept.
export function ConceptRibbon({ company, className }: ConceptRibbonProps) {
  return (
    <div className={`px-4 py-2 text-center text-xs leading-relaxed ${className}`}>
      Unofficial concept prepared for the {company} team by{' '}
      <Link href="/" className="font-semibold underline underline-offset-2">
        Gran Jefe Studio
      </Link>
      . Figures are illustrative.
    </div>
  )
}
