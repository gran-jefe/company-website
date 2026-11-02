'use client'

import React, { useId, useState } from 'react'
import { ArrowRight, CreditCard, Globe2, PiggyBank } from 'lucide-react'
import { DemoTracker } from '@/components/demo/DemoTracker'
import { ConceptRibbon, PitchNote, PitchPoint } from '@/components/demo/PitchNote'
import { useNumberField } from '@/components/demo/useNumberField'

// Cleva brand tokens, taken from getcleva.com
const C = {
  black: '#000000',
  panel: '#0B0B0B',
  gold: '#FFBD59',
  ink: '#111111',
  muted: '#4B5563',
  line: '#E7E7E7',
}

interface Channel {
  id: string
  name: string
  detail: string
  feeLabel: string
  fee: (amount: number) => number
  capNote?: (amount: number) => string | null
}

// Fees as published on getcleva.com/pricing
const CHANNELS: Channel[] = [
  {
    id: 'upwork',
    name: 'Upwork',
    detail: 'Withdraw your Upwork earnings straight to Cleva',
    feeLabel: 'Free',
    fee: () => 0,
  },
  {
    id: 'ach',
    name: 'ACH & FedNow',
    detail: 'Payoneer, PayPal, Wise, Gusto and US clients',
    feeLabel: '0.8%, $2 min, $5 max',
    fee: (a) => Math.min(Math.max(a * 0.008, 2), 5),
    capNote: (a) => (a * 0.008 > 5 ? 'Fee capped at $5' : a * 0.008 < 2 ? 'Minimum fee of $2' : null),
  },
  {
    id: 'stablecoin',
    name: 'USDT / USDC',
    detail: 'Stablecoin deposits from clients or exchanges',
    feeLabel: '$2 flat',
    fee: () => 2,
  },
  {
    id: 'wire',
    name: 'Wire transfer',
    detail: 'US wire from an employer or investor',
    feeLabel: '$10 flat',
    fee: () => 10,
  },
]

// Comparison assumption, shown to the visitor in plain words
const SWIFT_FIXED = 25
const SWIFT_FX_SPREAD = 0.02

const PITCH: PitchPoint[] = [
  {
    title: 'Answer the first question',
    body: 'Before anyone signs up, they want to know how much of a $3,500 payment they will actually keep. This puts that number on the homepage, using your published fees.',
  },
  {
    title: 'Make the $5 cap visible',
    body: 'The ACH cap is a strong reason to switch, but it is easy to miss on a pricing table. Here it shows up the moment a payment is large enough to hit it.',
  },
  {
    title: 'An honest comparison',
    body: 'The saving is set against a typical SWIFT wire into a local bank, with the assumption spelled out, so the claim holds up if someone checks it.',
  },
  {
    title: 'Ready for your stack',
    body: 'Built in your black and gold with Montserrat. Fees live in one typed list, so a pricing change is a one-line edit.',
  },
]

const money = (n: number) =>
  `$${n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
const whole = (n: number) => `$${Math.round(n).toLocaleString('en-US')}`

export default function ClevaDemoPage() {
  const [channelId, setChannelId] = useState('ach')
  const amount = useNumberField(3500, { min: 10, max: 250_000, label: 'an amount', format: whole })
  const amountId = useId()

  const channel = CHANNELS.find((c) => c.id === channelId) ?? CHANNELS[0]
  const fee = channel.fee(amount.value)
  const lands = amount.value - fee
  const swiftCost = SWIFT_FIXED + amount.value * SWIFT_FX_SPREAD
  const keepMore = Math.max(0, swiftCost - fee)
  const capNote = channel.capNote?.(amount.value) ?? null

  const focus = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFBD59] focus-visible:ring-offset-2'

  return (
    <div className="min-h-screen overflow-x-hidden bg-white [color-scheme:light]" style={{ color: C.ink }}>
      <DemoTracker target="cleva" targetName="Cleva (Tolu Alabi)" />
      <ConceptRibbon company="Cleva" className="bg-[#1A1A1A] text-white/85" />

      <section className="bg-black pb-32 text-white">
        <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border-[3px] border-[#FFBD59]" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD59]" />
            </span>
            <span className="text-xl font-bold tracking-[0.12em]">CLEVA</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://www.getcleva.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden min-h-[44px] items-center rounded-[8px] border-2 border-white px-5 text-sm font-bold transition-colors duration-150 hover:bg-white hover:text-black sm:inline-flex ${focus} focus-visible:ring-offset-black`}
            >
              Login
            </a>
            <a
              href="https://www.getcleva.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex min-h-[44px] items-center rounded-[8px] px-5 text-sm font-bold text-black transition-colors duration-150 hover:bg-[#FFCB7D] ${focus} focus-visible:ring-offset-black`}
              style={{ backgroundColor: C.gold }}
            >
              Create an account
            </a>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-4 pt-12 text-center sm:px-6 sm:pt-16">
          <h1 className="text-4xl font-bold leading-[1.1] sm:text-6xl">
            <span style={{ color: C.gold }}>Know what lands</span>
            <br />
            before you get paid
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#E2E2E2] sm:text-xl">
            Choose how your client pays you and see exactly what reaches your Cleva USD balance, fee by fee.
          </p>
        </div>
      </section>

      <main className="mx-auto -mt-20 max-w-5xl px-4 pb-20 sm:px-6">
        <div className="grid overflow-hidden rounded-[20px] border bg-white shadow-[0_30px_60px_-30px_rgba(0,0,0,0.45)] md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]" style={{ borderColor: C.line }}>
          {/* Inputs */}
          <div className="space-y-7 p-5 sm:p-8">
            <fieldset>
              <legend className="text-lg font-bold">How is the money coming in?</legend>
              <div className="mt-4 space-y-2">
                {CHANNELS.map((c) => {
                  const selected = c.id === channelId
                  return (
                    <button
                      key={c.id}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => setChannelId(c.id)}
                      className={`flex w-full items-center justify-between gap-4 rounded-[10px] border-2 p-4 text-left transition-colors duration-150 ${focus} ${
                        selected ? 'border-black bg-[#FFF6E8]' : 'border-[#E7E7E7] hover:border-[#B6B6B6]'
                      }`}
                    >
                      <span>
                        <span className="block font-bold">{c.name}</span>
                        <span className="mt-0.5 block text-sm" style={{ color: C.muted }}>{c.detail}</span>
                      </span>
                      <span className="shrink-0 text-right text-sm font-bold">{c.feeLabel}</span>
                    </button>
                  )
                })}
              </div>
            </fieldset>

            <div>
              <label htmlFor={amountId} className="text-lg font-bold">
                How much are you being paid?
              </label>
              <div
                className={`mt-3 flex min-h-[56px] items-center rounded-[10px] border-2 px-4 focus-within:border-black ${
                  amount.error ? 'border-[#C81E1E]' : 'border-[#E7E7E7]'
                }`}
              >
                <span className="text-2xl font-bold" style={{ color: C.muted }}>$</span>
                <input
                  id={amountId}
                  inputMode="decimal"
                  value={amount.raw}
                  onChange={amount.onChange}
                  aria-invalid={amount.error ? true : undefined}
                  aria-describedby={amount.error ? `${amountId}-err` : undefined}
                  className="w-full self-stretch bg-transparent px-2 text-2xl font-bold tabular-nums focus:outline-none"
                />
                <span className="text-sm font-bold" style={{ color: C.muted }}>USD</span>
              </div>
              {amount.error && (
                <p id={`${amountId}-err`} role="alert" className="mt-2 text-sm text-[#C81E1E]">
                  {amount.error}. Showing {whole(amount.value)} until it is fixed.
                </p>
              )}
              <div className="mt-3 flex flex-wrap gap-2">
                {[500, 1500, 3500, 10000].map((p) => {
                  const active = amount.value === p && !amount.error
                  return (
                    <button
                      key={p}
                      type="button"
                      aria-pressed={active}
                      onClick={() => amount.set(p)}
                      className={`min-h-[44px] rounded-full px-4 text-sm font-bold tabular-nums transition-colors duration-150 ${focus} ${
                        active ? 'bg-black text-white' : 'bg-[#F3F3F3] hover:bg-[#E7E7E7]'
                      }`}
                    >
                      {whole(p)}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Result */}
          <section aria-live="polite" aria-label="What you receive" className="flex flex-col p-5 text-white sm:p-8" style={{ backgroundColor: C.panel }}>
            <dl className="space-y-3 text-[15px]">
              <div className="flex items-center justify-between gap-4">
                <dt className="text-[#C9C9C9]">Payment</dt>
                <dd className="font-bold tabular-nums">{money(amount.value)}</dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-[#C9C9C9]">
                  Cleva fee
                  {capNote && <span className="ml-2 rounded-full bg-white/10 px-2 py-0.5 text-xs font-bold text-white">{capNote}</span>}
                </dt>
                <dd className="font-bold tabular-nums">{fee === 0 ? 'Free' : `−${money(fee)}`}</dd>
              </div>
            </dl>

            <div className="mt-6 border-t border-white/15 pt-6">
              <p className="text-sm font-bold uppercase tracking-wide text-[#C9C9C9]">Lands in your USD balance</p>
              <p className="mt-2 text-4xl font-bold tabular-nums sm:text-5xl" style={{ color: C.gold }}>
                {money(lands)}
              </p>
              <p className="mt-2 text-sm text-[#C9C9C9]">
                You keep {((lands / amount.value) * 100).toFixed(2)}% of the payment, held in dollars until you choose to convert.
              </p>
            </div>

            <div className="mt-6 rounded-[10px] bg-white/[0.06] p-4 text-sm leading-relaxed">
              <p>
                About <strong className="tabular-nums" style={{ color: C.gold }}>{whole(keepMore)}</strong> more than a SWIFT wire into a local bank.
              </p>
              <p className="mt-1 text-[#B6B6B6]">
                Estimate assumes ${SWIFT_FIXED} in bank and intermediary charges plus a {SWIFT_FX_SPREAD * 100}% conversion spread.
              </p>
            </div>

            <div className="mt-6 md:mt-auto md:pt-8">
              <a
                href="https://www.getcleva.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-[8px] font-bold text-black transition-colors duration-150 hover:bg-[#FFCB7D] ${focus} focus-visible:ring-offset-black`}
                style={{ backgroundColor: C.gold }}
              >
                Create an account
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </section>
        </div>

        <ul className="mt-14 grid gap-8 sm:grid-cols-3">
          {[
            { icon: Globe2, title: 'Get paid in USD, GBP and EUR', body: 'Receive from clients, employers and platforms wherever you are based.' },
            { icon: PiggyBank, title: 'Earn up to 3% a year', body: 'Keep savings in Cleva Pots and earn rewards in USD.' },
            { icon: CreditCard, title: 'A USD card that works', body: 'Pay for global subscriptions and travel with a virtual USD card.' },
          ].map(({ icon: Icon, title, body }) => (
            <li key={title}>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] bg-black" style={{ color: C.gold }}>
                <Icon size={20} aria-hidden="true" />
              </span>
              <h2 className="mt-4 text-lg font-bold">{title}</h2>
              <p className="mt-1 leading-relaxed" style={{ color: C.muted }}>{body}</p>
            </li>
          ))}
        </ul>
      </main>

      <PitchNote id="cleva" company="Cleva" points={PITCH} accent={C.gold} accentText="#000000" dark />
    </div>
  )
}
