'use client'

import React, { useId, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { DemoTracker } from '@/components/demo/DemoTracker'
import { ConceptRibbon, PitchNote, PitchPoint } from '@/components/demo/PitchNote'
import { useNumberField } from '@/components/demo/useNumberField'

// Humaans brand tokens, taken from humaans.io
const C = {
  canvas: '#FFFAFA',
  ink: '#171313',
  heading: '#290000',
  coral: '#FE5555',
  muted: '#6B6565',
  line: '#EDE5E5',
  blush: '#FFE9E2',
}

const serif = 'font-[family-name:var(--font-newsreader)]'

interface Setup {
  id: string
  name: string
  detail: string
  hoursPerPersonMonth: number
}

const SETUPS: Setup[] = [
  { id: 'sheets', name: 'Spreadsheets and Slack', detail: 'Trackers, checklists and shared folders', hoursPerPersonMonth: 1.8 },
  { id: 'legacy', name: 'An older HRIS', detail: 'Slow self-service, lots of manual follow-up', hoursPerPersonMonth: 1.2 },
  { id: 'tools', name: 'A tool for each job', detail: 'Separate apps for leave, documents and onboarding', hoursPerPersonMonth: 1.5 },
]

// Model assumptions, all disclosed to the visitor below the result
const A = {
  onboardingHoursNow: 6,
  onboardingHoursHumaans: 1.5,
  routineShareAutomated: 0.65,
  hourlyCost: 40,
}

const PITCH: PitchPoint[] = [
  {
    title: 'Agentic AI, in hours',
    body: '"An AI workforce that executes admin end to end" is a big promise. A buyer believes it faster when they see the hours it gives back for their own headcount.',
  },
  {
    title: 'A number for the business case',
    body: 'People leaders still have to sell a switch to finance. The yearly value, with every assumption shown, is something they can paste straight into that conversation.',
  },
  {
    title: 'Quiet, in your voice',
    body: 'Set in an editorial serif on your warm white, with black buttons and one coral accent. No dashboards, no hype, just the answer.',
  },
  {
    title: 'Easy to tune',
    body: 'Every assumption is a named constant, so your team can calibrate it against real customer data before it goes live.',
  },
]

const gbp = (n: number) => `£${Math.round(n).toLocaleString('en-GB')}`

export default function HumaansDemoPage() {
  const [setupId, setSetupId] = useState('legacy')
  const headcount = useNumberField(120, { min: 10, max: 5000, label: 'your headcount' })
  const hires = useNumberField(4, { min: 0, max: 500, label: 'monthly hires' })
  const headcountId = useId()
  const hiresId = useId()

  const setup = SETUPS.find((s) => s.id === setupId) ?? SETUPS[1]
  const routineNow = headcount.value * setup.hoursPerPersonMonth
  const monthlyNow = routineNow + hires.value * A.onboardingHoursNow
  const monthlyHumaans = routineNow * (1 - A.routineShareAutomated) + hires.value * A.onboardingHoursHumaans
  const monthlySaved = monthlyNow - monthlyHumaans
  const weeklySaved = (monthlySaved * 12) / 52
  const yearlyValue = monthlySaved * 12 * A.hourlyCost
  const humaansShare = monthlyNow > 0 ? (monthlyHumaans / monthlyNow) * 100 : 0

  const focus = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171313] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFFAFA]'

  const numberInput = (field: ReturnType<typeof useNumberField>, id: string, label: string, hint: string) => (
    <div>
      <label htmlFor={id} className="text-[15px] font-medium">
        {label}
      </label>
      <input
        id={id}
        inputMode="numeric"
        value={field.raw}
        onChange={field.onChange}
        aria-invalid={field.error ? true : undefined}
        aria-describedby={`${id}-hint`}
        className={`mt-2 h-12 w-full rounded-[8px] border bg-white px-3 text-lg tabular-nums outline-none focus:border-[#171313] ${
          field.error ? 'border-[#B42318]' : 'border-[#E3D9D9]'
        }`}
      />
      <p id={`${id}-hint`} role={field.error ? 'alert' : undefined} className={`mt-1.5 text-sm ${field.error ? 'text-[#B42318]' : ''}`} style={field.error ? undefined : { color: C.muted }}>
        {field.error ? `${field.error}. Using ${field.value} for now.` : hint}
      </p>
    </div>
  )

  return (
    <div className="min-h-screen overflow-x-hidden [color-scheme:light]" style={{ backgroundColor: C.canvas, color: C.ink }}>
      <DemoTracker target="humaans" targetName="Humaans (Giovanni Luperti)" />
      <ConceptRibbon company="Humaans" className="bg-[#171313] text-white/85" />

      <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
        <span className="text-2xl font-extrabold tracking-tight" style={{ color: C.coral }}>
          Humaans
        </span>
        <a
          href="https://humaans.io/"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex min-h-[44px] items-center rounded-[10px] px-4 text-[15px] font-medium text-white transition-colors duration-150 hover:bg-[#3A3333] ${focus}`}
          style={{ backgroundColor: C.ink }}
        >
          Book a demo
        </a>
      </header>

      <main className="mx-auto grid max-w-6xl gap-12 px-4 pb-24 pt-10 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 lg:pt-20">
        <div>
          <h1 className={`${serif} text-5xl leading-[1.05] tracking-[-1px] sm:text-[64px]`} style={{ color: C.heading }}>
            Give your people team back their week.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed" style={{ color: C.muted }}>
            See how much admin moves off your plate when Humaans and its AI workforce handle the routine work end to end.
          </p>

          <fieldset className="mt-10">
            <legend className="text-[15px] font-medium">How do you run people ops today?</legend>
            <div className="mt-3 space-y-2">
              {SETUPS.map((s) => {
                const selected = s.id === setupId
                return (
                  <button
                    key={s.id}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setSetupId(s.id)}
                    className={`w-full rounded-[8px] border p-4 text-left transition-colors duration-150 ${focus} ${
                      selected ? 'border-[#171313] bg-white shadow-[inset_0_0_0_1px_#171313]' : 'border-[#E3D9D9] hover:border-[#B8ABAB]'
                    }`}
                  >
                    <span className="block font-medium">{s.name}</span>
                    <span className="mt-0.5 block text-[15px]" style={{ color: C.muted }}>{s.detail}</span>
                  </button>
                )
              })}
            </div>
          </fieldset>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {numberInput(headcount, headcountId, 'Employees', '10 to 5,000 people')}
            {numberInput(hires, hiresId, 'New hires per month', 'Used for onboarding time')}
          </div>
        </div>

        <section aria-live="polite" aria-label="Time back with Humaans" className="self-start rounded-[16px] border bg-white p-6 sm:p-10 lg:sticky lg:top-6" style={{ borderColor: C.line }}>
          <p className="text-[15px] font-medium" style={{ color: C.muted }}>Time back every week</p>
          <p className={`${serif} mt-2 text-7xl leading-none tracking-[-2px] tabular-nums sm:text-8xl`} style={{ color: C.heading }}>
            {Math.round(weeklySaved)}
            <span className="ml-3 align-baseline text-2xl tracking-normal sm:text-3xl">hours</span>
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Worth about <strong className="font-semibold tabular-nums">{gbp(yearlyValue)}</strong> a year in people team time, for {headcount.value.toLocaleString('en-GB')} employees.
          </p>

          <div className="mt-8 space-y-4">
            <div>
              <div className="flex justify-between text-[15px]">
                <span>Admin hours a month today</span>
                <span className="font-medium tabular-nums">{Math.round(monthlyNow)}</span>
              </div>
              <div className="mt-2 h-3 rounded-full" style={{ backgroundColor: C.ink }} />
            </div>
            <div>
              <div className="flex justify-between text-[15px]">
                <span>With Humaans</span>
                <span className="font-medium tabular-nums">{Math.round(monthlyHumaans)}</span>
              </div>
              <div className="mt-2 h-3 rounded-full" style={{ backgroundColor: C.blush }}>
                <div className="h-3 rounded-full transition-[width] duration-200 motion-reduce:transition-none" style={{ width: `${humaansShare}%`, backgroundColor: C.coral }} />
              </div>
            </div>
          </div>

          <a
            href="https://humaans.io/"
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-10 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-[10px] text-[15px] font-medium text-white transition-colors duration-150 hover:bg-[#3A3333] ${focus}`}
            style={{ backgroundColor: C.ink }}
          >
            Book a demo
            <ArrowRight size={16} aria-hidden="true" />
          </a>

          <details className="mt-6 border-t pt-4 text-sm" style={{ borderColor: C.line, color: C.muted }}>
            <summary className={`min-h-[44px] cursor-pointer content-center font-medium ${focus}`} style={{ color: C.ink }}>
              How this is worked out
            </summary>
            <ul className="mt-2 list-disc space-y-1 pl-5 leading-relaxed">
              <li>{setup.hoursPerPersonMonth} admin hours per employee a month with {setup.name.toLowerCase()}.</li>
              <li>{Math.round(A.routineShareAutomated * 100)}% of routine admin handled by Humaans and its AI agents.</li>
              <li>Onboarding drops from {A.onboardingHoursNow} to {A.onboardingHoursHumaans} hours per hire.</li>
              <li>People team time valued at {gbp(A.hourlyCost)} an hour.</li>
            </ul>
          </details>
        </section>
      </main>

      <PitchNote id="humaans" company="Humaans" points={PITCH} accent={C.ink} />
    </div>
  )
}
