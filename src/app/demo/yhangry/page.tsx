'use client'

import React, { useId, useState } from 'react'
import { ArrowRight, CircleCheck, Minus, Plus, ShieldCheck } from 'lucide-react'
import { DemoTracker } from '@/components/demo/DemoTracker'
import { ConceptRibbon, PitchNote, PitchPoint } from '@/components/demo/PitchNote'
import { useNumberField } from '@/components/demo/useNumberField'

// yhangry brand tokens, taken from yhangry.com and its booking flow
const C = {
  navy: '#1D1D35',
  coral: '#F95738',
  purple: '#432790',
  lilac: '#F4F1FB',
  warm: '#F8F5F2',
  muted: '#55556A',
  line: '#E3E3EA',
}

interface Occasion {
  id: string
  name: string
  detail: string
  guests: number
  menu: string
}

const OCCASIONS: Occasion[] = [
  { id: 'dinner', name: 'Dinner party or birthday', detail: 'Friends round, someone else in the kitchen', guests: 8, menu: 'plated' },
  { id: 'date', name: 'Date night', detail: 'A restaurant evening at home', guests: 2, menu: 'tasting' },
  { id: 'weekend', name: 'Hen do or weekend away', detail: 'Airbnb, cottage or holiday rental', guests: 12, menu: 'sharing' },
  { id: 'work', name: 'Team or client dinner', detail: 'Reward the team or host a client', guests: 14, menu: 'plated' },
]

interface Menu {
  id: string
  name: string
  courses: number
  perHead: number
  dishes: string
}

const MENUS: Menu[] = [
  { id: 'sharing', name: 'Sharing feast', courses: 2, perHead: 38, dishes: 'Crispy pork belly, burrata and heirloom tomatoes, tiramisu' },
  { id: 'plated', name: 'Three-course plated', courses: 3, perHead: 55, dishes: 'Seared scallops, dry-aged beef fillet, chocolate fondant' },
  { id: 'tasting', name: 'Tasting menu', courses: 5, perHead: 85, dishes: 'Truffle arancini, Dover sole, blackberry tart and more' },
]

// Comparison assumption, shown in the summary
const RESTAURANT_PER_HEAD = 120

const PITCH: PitchPoint[] = [
  {
    title: 'Price is the first question',
    body: 'First-time hosts often assume a private chef is out of reach. Showing a real total for their guest count, before they leave the homepage, turns "maybe one day" into a booking.',
  },
  {
    title: 'Set against the night out',
    body: 'A restaurant bill is the number people already have in mind. Putting the two side by side makes the decision feel sensible, not indulgent.',
  },
  {
    title: 'Reassurance where it counts',
    body: 'What the chef handles, and your booking protection, sit right next to the button, so the last worry is answered at the moment of choosing.',
  },
  {
    title: 'Feels like your booking flow',
    body: 'Same DM Sans, navy, coral and purple selection as the current funnel. Prices and menus live in one list, ready to read from your live pricing.',
  },
]

const gbp = (n: number) => `£${Math.round(n).toLocaleString('en-GB')}`

export default function YhangryDemoPage() {
  const [occasionId, setOccasionId] = useState('dinner')
  const [menuId, setMenuId] = useState('plated')
  const guests = useNumberField(8, { min: 2, max: 40, label: 'a guest count' })
  const guestsId = useId()

  const menu = MENUS.find((m) => m.id === menuId) ?? MENUS[1]
  const total = guests.value * menu.perHead
  const restaurant = guests.value * RESTAURANT_PER_HEAD
  const saving = Math.max(0, restaurant - total)

  const chooseOccasion = (o: Occasion) => {
    setOccasionId(o.id)
    guests.set(o.guests)
    setMenuId(o.menu)
  }

  const focus = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#432790] focus-visible:ring-offset-2'
  const option = (selected: boolean) =>
    `w-full rounded-[8px] border p-4 text-left transition-colors duration-150 ${focus} ${
      selected ? 'border-[#432790] bg-[#F4F1FB] shadow-[inset_0_0_0_1px_#432790]' : 'border-[#E3E3EA] bg-white hover:border-[#B9B9C6]'
    }`

  return (
    <div className="min-h-screen overflow-x-hidden bg-white [color-scheme:light]" style={{ color: C.navy }}>
      <DemoTracker target="yhangry" targetName="yhangry (Siddhi Mittal)" />
      <ConceptRibbon company="yhangry" className="bg-[#1D1D35] text-white/85" />

      <header className="border-b" style={{ borderColor: C.line }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <span className="text-[28px] font-bold tracking-tight">yhangry</span>
          <a
            href="https://yhangry.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex min-h-[44px] items-center rounded-[8px] px-5 text-[19px] font-bold text-white transition-colors duration-150 hover:bg-[#E84A2C] ${focus}`}
            style={{ backgroundColor: C.coral }}
          >
            Find local chef
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-4 pb-10 pt-12 text-center sm:px-6 sm:pt-16">
        <h1 className="text-4xl font-bold leading-tight sm:text-[52px]">What will a private chef cost for your event?</h1>
        <p className="mx-auto mt-4 max-w-xl text-balance text-lg leading-relaxed" style={{ color: C.muted }}>
          Tell us the occasion and how many are coming. You will see a full price, what the chef takes care of, and how it compares with eating out.
        </p>
      </section>

      <main className="mx-auto grid max-w-6xl gap-10 px-4 pb-28 sm:px-6 lg:grid-cols-[minmax(0,1fr)_380px]">
        <div className="space-y-10">
          <fieldset>
            <legend className="text-2xl font-bold">
              <span style={{ color: C.purple }}>1.</span> What is the occasion?
            </legend>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {OCCASIONS.map((o) => (
                <button key={o.id} type="button" aria-pressed={occasionId === o.id} onClick={() => chooseOccasion(o)} className={option(occasionId === o.id)}>
                  <span className="block font-bold">{o.name}</span>
                  <span className="mt-1 block text-[15px]" style={{ color: C.muted }}>{o.detail}</span>
                </button>
              ))}
            </div>
          </fieldset>

          <div>
            <label htmlFor={guestsId} className="text-2xl font-bold">
              <span style={{ color: C.purple }}>2.</span> How many guests?
            </label>
            <div className="mt-4 flex items-center gap-3">
              <button
                type="button"
                aria-label="Remove a guest"
                onClick={() => guests.set(Math.max(2, guests.value - 1))}
                disabled={guests.value <= 2}
                className={`inline-flex h-12 w-12 items-center justify-center rounded-[8px] border transition-colors duration-150 hover:bg-[#F8F5F2] disabled:cursor-not-allowed disabled:opacity-40 ${focus}`}
                style={{ borderColor: C.line }}
              >
                <Minus size={20} aria-hidden="true" />
              </button>
              <input
                id={guestsId}
                inputMode="numeric"
                value={guests.raw}
                onChange={guests.onChange}
                aria-invalid={guests.error ? true : undefined}
                aria-describedby={`${guestsId}-hint`}
                className={`h-12 w-24 rounded-[8px] border text-center text-xl font-bold tabular-nums outline-none focus:border-[#432790] focus:shadow-[inset_0_0_0_1px_#432790] ${
                  guests.error ? 'border-[#C42B1C]' : 'border-[#E3E3EA]'
                }`}
              />
              <button
                type="button"
                aria-label="Add a guest"
                onClick={() => guests.set(Math.min(40, guests.value + 1))}
                disabled={guests.value >= 40}
                className={`inline-flex h-12 w-12 items-center justify-center rounded-[8px] border transition-colors duration-150 hover:bg-[#F8F5F2] disabled:cursor-not-allowed disabled:opacity-40 ${focus}`}
                style={{ borderColor: C.line }}
              >
                <Plus size={20} aria-hidden="true" />
              </button>
            </div>
            <p
              id={`${guestsId}-hint`}
              role={guests.error ? 'alert' : undefined}
              className={`mt-2 text-[15px] ${guests.error ? 'text-[#C42B1C]' : ''}`}
              style={guests.error ? undefined : { color: C.muted }}
            >
              {guests.error ? `${guests.error}. Pricing shows ${guests.value} guests for now.` : 'Between 2 and 40 guests.'}
            </p>
          </div>

          <fieldset>
            <legend className="text-2xl font-bold">
              <span style={{ color: C.purple }}>3.</span> Pick a menu style
            </legend>
            <div className="mt-4 space-y-3">
              {MENUS.map((m) => (
                <button key={m.id} type="button" aria-pressed={menuId === m.id} onClick={() => setMenuId(m.id)} className={option(menuId === m.id)}>
                  <span className="flex items-baseline justify-between gap-4">
                    <span className="font-bold">
                      {m.name} <span className="font-normal" style={{ color: C.muted }}>· {m.courses} courses</span>
                    </span>
                    <span className="shrink-0 font-bold tabular-nums">
                      {gbp(m.perHead)} <span className="text-[15px] font-normal" style={{ color: C.muted }}>pp</span>
                    </span>
                  </span>
                  <span className="mt-1 block text-[15px]" style={{ color: C.muted }}>{m.dishes}</span>
                </button>
              ))}
            </div>
          </fieldset>
        </div>

        <aside aria-label="Your estimate" className="lg:sticky lg:top-6 lg:self-start">
          <div className="overflow-hidden rounded-[16px] border" style={{ borderColor: C.line }}>
            <section aria-live="polite" className="p-6">
              <p className="text-[15px] font-bold" style={{ color: C.muted }}>Your estimate</p>
              <p className="mt-1 text-5xl font-bold tabular-nums">{gbp(total)}</p>
              <p className="mt-2 text-[15px]" style={{ color: C.muted }}>
                {gbp(menu.perHead)} per person · {guests.value} guests · {menu.courses} courses
              </p>

              <ul className="mt-5 space-y-2.5 border-t pt-5 text-[15px]" style={{ borderColor: C.line }}>
                {['Your chef shops for every ingredient', 'Cooks fresh in your kitchen', `Serves all ${menu.courses} courses`, 'Leaves the kitchen clean'].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CircleCheck size={18} className="mt-0.5 shrink-0" style={{ color: C.purple }} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-5 rounded-[8px] p-4 text-[15px] leading-relaxed" style={{ backgroundColor: C.lilac }}>
                {saving > 0 ? (
                  <>
                    About <strong className="tabular-nums">{gbp(saving)} less</strong> than a London restaurant for the same group.
                  </>
                ) : (
                  <>A restaurant-level menu, cooked and served at home for the same group.</>
                )}
                <span className="mt-1 block text-sm" style={{ color: C.muted }}>
                  Based on roughly {gbp(RESTAURANT_PER_HEAD)} a head with drinks and service ({gbp(restaurant)} in total).
                </span>
              </div>

              <a
                href="https://yhangry.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-5 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-[8px] text-[19px] font-bold text-white transition-colors duration-150 hover:bg-[#E84A2C] ${focus}`}
                style={{ backgroundColor: C.coral }}
              >
                Find chefs for this event
                <ArrowRight size={20} aria-hidden="true" />
              </a>
              <p className="mt-3 text-center text-sm" style={{ color: C.muted }}>Prices are illustrative and vary by chef.</p>
            </section>

            <div className="border-t px-6 py-4" style={{ backgroundColor: C.warm, borderColor: C.line }}>
              <p className="flex items-center gap-2 font-bold">
                <ShieldCheck size={18} aria-hidden="true" /> Booking protection
              </p>
              <ul className="mt-2 grid gap-1.5 text-[15px]">
                {['Fraud protection', 'Free 7 day cancellation', 'Insurance cover'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CircleCheck size={16} aria-hidden="true" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </main>

      <PitchNote id="yhangry" company="yhangry" points={PITCH} accent={C.purple} />
    </div>
  )
}
