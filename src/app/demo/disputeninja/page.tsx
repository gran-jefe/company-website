'use client'

import React, { useId } from 'react'
import { ArrowRight } from 'lucide-react'
import { DemoTracker } from '@/components/demo/DemoTracker'
import { ConceptRibbon, PitchNote, PitchPoint } from '@/components/demo/PitchNote'
import { useNumberField } from '@/components/demo/useNumberField'

// DisputeNinja brand tokens, taken from disputeninja.ai
const C = {
  ink: '#120A0B',
  body: '#454140',
  warm: '#F8F4F1',
  line: '#E3E2E2',
  yellow: '#FFD86F',
  violet: '#9886FE',
}

const mono = 'font-[family-name:var(--font-fragment-mono)]'

// Published on disputeninja.ai
const NINJA_WIN_RATE = 0.65
const MANUAL_MINUTES_PER_CASE = 30
const WORKLOAD_MULTIPLIER = 5

const PITCH: PitchPoint[] = [
  {
    title: 'Merchants buy on their own numbers',
    body: 'A 65% win rate is impressive, but a merchant still has to work out what it means for them. This turns it into dollars back per month before the first call.',
  },
  {
    title: 'Measured against today, not zero',
    body: 'The model only counts the uplift over their current win rate, so a seasoned chargeback lead will trust the figure instead of discounting it.',
  },
  {
    title: 'Time as well as money',
    body: 'Your 5x workload claim becomes analyst hours saved, which is the line a head of payments takes to their CFO.',
  },
  {
    title: 'Sits inside your hero',
    body: 'Same Satoshi type, warm panel, yellow pill and quiet violet accent. Assumptions are named constants and easy to tune.',
  },
]

const usd = (n: number) => `$${Math.round(n).toLocaleString('en-US')}`

export default function DisputeNinjaDemoPage() {
  const volume = useNumberField(2000000, { min: 10000, max: 50_000_000, label: 'a monthly volume', format: usd })
  const rate = useNumberField(0.7, { min: 0.05, max: 5, label: 'a dispute rate', format: (n) => `${n}%` })
  const ticket = useNumberField(85, { min: 1, max: 10000, label: 'an average dispute value', format: usd })
  const currentWin = useNumberField(20, { min: 0, max: 100, label: 'your current win rate', format: (n) => `${n}%` })
  const ids = { volume: useId(), rate: useId(), ticket: useId(), win: useId() }

  const disputedValue = volume.value * (rate.value / 100)
  const cases = disputedValue / ticket.value
  const upliftRate = Math.max(0, NINJA_WIN_RATE - currentWin.value / 100)
  const monthlyExtra = disputedValue * upliftRate
  const hoursSaved = (cases * MANUAL_MINUTES_PER_CASE * (1 - 1 / WORKLOAD_MULTIPLIER)) / 60

  const focus = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#120A0B] focus-visible:ring-offset-2'

  const field = (
    f: ReturnType<typeof useNumberField>,
    id: string,
    label: string,
    prefix: string,
    suffix: string,
  ) => (
    <div>
      <label htmlFor={id} className="text-sm font-medium" style={{ color: C.body }}>
        {label}
      </label>
      <div
        className={`mt-1.5 flex h-12 items-center rounded-[10px] border bg-white px-3 focus-within:border-[#120A0B] ${
          f.error ? 'border-[#B42318]' : 'border-[#E3E2E2]'
        }`}
      >
        {prefix && <span className={`${mono}`} style={{ color: C.body }}>{prefix}</span>}
        <input
          id={id}
          inputMode="decimal"
          value={f.raw}
          onChange={f.onChange}
          aria-invalid={f.error ? true : undefined}
          aria-describedby={f.error ? `${id}-err` : undefined}
          className={`${mono} w-full min-w-0 self-stretch bg-transparent px-1 text-base focus:outline-none`}
        />
        {suffix && <span className={`${mono}`} style={{ color: C.body }}>{suffix}</span>}
      </div>
      {f.error && (
        <p id={`${id}-err`} role="alert" className="mt-1 text-sm text-[#B42318]">
          {f.error}
        </p>
      )}
    </div>
  )

  return (
    <div className="min-h-screen overflow-x-hidden bg-white [color-scheme:light]" style={{ color: C.ink }}>
      <DemoTracker target="disputeninja" targetName="DisputeNinja (Max Wu)" />
      <ConceptRibbon company="DisputeNinja" className="bg-[#120A0B] text-white/85" />

      <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
        <span className="text-2xl font-bold tracking-tight">DisputeNinja</span>
        <a
          href="https://disputeninja.ai/"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex min-h-[44px] items-center rounded-full px-6 font-medium text-white transition-colors duration-150 hover:bg-[#3A3132] ${focus}`}
          style={{ backgroundColor: C.ink }}
        >
          Schedule a call
        </a>
      </header>

      <main className="px-2 pb-24 sm:px-6">
        <section
          className="mx-auto max-w-[1360px] rounded-[20px] px-4 pb-10 pt-12 sm:px-8 sm:pt-16"
          style={{ backgroundColor: C.warm, backgroundImage: 'radial-gradient(60% 50% at 50% 30%, rgba(255,216,111,0.28), transparent 70%)' }}
        >
          <div className="mx-auto max-w-3xl text-center">
            <a
              href="https://disputeninja.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex min-h-[44px] items-center gap-2 rounded-full bg-white/70 py-1 pl-1 pr-4 text-[15px] ${focus}`}
            >
              <span className="rounded-full px-3 py-1 text-sm text-white" style={{ backgroundColor: C.body }}>New</span>
              Try the free AI response tool
              <ArrowRight size={14} aria-hidden="true" />
            </a>
            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-[-1.5px] sm:text-[56px]">
              See what your chargebacks are really costing you
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed sm:text-xl" style={{ color: C.body }}>
              Enter your volume and current win rate. We will show the revenue DisputeNinja could win back and the analyst time it frees up.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl overflow-hidden rounded-[16px] border bg-white md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]" style={{ borderColor: C.line }}>
            <div className="grid content-start gap-4 p-5 sm:grid-cols-2 sm:p-6 md:grid-cols-1 lg:grid-cols-2">
              {field(volume, ids.volume, 'Monthly card volume', '$', '')}
              {field(rate, ids.rate, 'Dispute rate', '', '%')}
              {field(ticket, ids.ticket, 'Average dispute value', '$', '')}
              {field(currentWin, ids.win, 'Your win rate today', '', '%')}
            </div>

            <section aria-live="polite" aria-label="Recovery estimate" className="border-t p-5 sm:p-6 md:border-l md:border-t-0" style={{ borderColor: C.line }}>
              <p className="text-sm font-medium" style={{ color: C.body }}>Extra revenue won back each month</p>
              <p className="mt-2 text-4xl font-bold tracking-[-1px] tabular-nums sm:text-5xl">+{usd(monthlyExtra)}</p>
              <p className="mt-2" style={{ color: C.body }}>
                <span className="font-bold tabular-nums" style={{ color: C.ink }}>{usd(monthlyExtra * 12)}</span> a year
              </p>

              <dl className="mt-6 grid grid-cols-2 gap-4 border-t pt-5" style={{ borderColor: C.line }}>
                <div>
                  <dt className="text-sm" style={{ color: C.body }}>Disputes a month</dt>
                  <dd className="mt-1 text-xl font-bold tabular-nums">{Math.round(cases).toLocaleString('en-US')}</dd>
                </div>
                <div>
                  <dt className="text-sm" style={{ color: C.body }}>Analyst time saved a month</dt>
                  <dd className="mt-1 text-xl font-bold tabular-nums">{Math.round(hoursSaved).toLocaleString('en-US')} hrs</dd>
                </div>
              </dl>

              <a
                href="https://disputeninja.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 inline-flex min-h-[48px] w-full items-center justify-center rounded-full font-medium transition-colors duration-150 hover:bg-[#FFCF4D] ${focus}`}
                style={{ backgroundColor: C.yellow, color: C.ink }}
              >
                Schedule a call
              </a>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: C.body }}>
                Uses DisputeNinja&apos;s published {NINJA_WIN_RATE * 100}% win rate against yours today, and {MANUAL_MINUTES_PER_CASE} minutes per case done by hand. Winning a dispute returns the money; it does not lower your dispute ratio.
              </p>
            </section>
          </div>
        </section>

        <section className="mx-auto mt-20 grid max-w-5xl gap-12 px-2 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:items-center">
          <dl className="grid grid-cols-3 gap-4">
            {[
              ['65%', 'Win rate'],
              ['4x', 'Revenue recovered'],
              ['5x', 'Work per analyst'],
            ].map(([value, label]) => (
              <div key={label} className="flex flex-col-reverse">
                <dt className="mt-1 text-[15px]" style={{ color: C.body }}>{label}</dt>
                <dd className="text-4xl font-bold tracking-[-1px]">{value}</dd>
              </div>
            ))}
          </dl>
          <figure className="border-l-2 pl-6" style={{ borderColor: C.violet }}>
            <blockquote className="text-xl leading-relaxed sm:text-2xl">
              &ldquo;DisputeNinja significantly reduces manual work and the headache of maintaining templates.&rdquo;
            </blockquote>
            <figcaption className="mt-3 text-[15px]" style={{ color: C.body }}>
              <span className="font-medium" style={{ color: C.ink }}>Runbo L.</span>, CEO, Magic Hour
            </figcaption>
          </figure>
        </section>
      </main>

      <PitchNote id="disputeninja" company="DisputeNinja" points={PITCH} accent={C.yellow} accentText={C.ink} />
    </div>
  )
}
