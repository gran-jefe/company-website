'use client'

import React, { useId, useMemo, useState } from 'react'
import { ArrowRight, Bot, KeyRound, LineChart, Lock, Wallet } from 'lucide-react'
import { DemoTracker } from '@/components/demo/DemoTracker'
import { ConceptRibbon, PitchNote, PitchPoint } from '@/components/demo/PitchNote'
import { useNumberField } from '@/components/demo/useNumberField'

// Coinrule brand tokens, taken from coinrule.com
const C = {
  ink: '#242E38',
  muted: '#5B6573',
  navy: '#1B1F30',
  indigo: '#4641FF',
  purple: '#852EF6',
  mint: '#00FFD4',
  yellow: '#FFD835',
  profit: '#0E8345',
  line: '#E4E7EC',
  canvas: '#F6F7FB',
}

type Risk = 'Low' | 'Moderate' | 'Aggressive'

interface Strategy {
  id: string
  name: string
  asset: string
  rule: string
  returnPer90d: number
  holdPer90d: number
  tradesPer90d: number
  winRate: number
  risk: Risk
}

const STRATEGIES: Strategy[] = [
  {
    id: 'rsi-dip',
    name: 'Buy the dip on RSI',
    asset: 'BTC',
    rule: 'Buy when 4h RSI drops below 30, take profit at +4.5%.',
    returnPer90d: 38.4,
    holdPer90d: 14.2,
    tradesPer90d: 22,
    winRate: 81.8,
    risk: 'Low',
  },
  {
    id: 'smart-dca',
    name: 'Smart DCA',
    asset: 'ETH',
    rule: 'Accumulate weekly, buy more on pullbacks, trail a stop in rallies.',
    returnPer90d: 44.7,
    holdPer90d: 18.6,
    tradesPer90d: 36,
    winRate: 77.8,
    risk: 'Moderate',
  },
  {
    id: 'ema-breakout',
    name: 'EMA crossover breakout',
    asset: 'SOL',
    rule: 'Enter when the 20 EMA crosses the 50 EMA on rising 24h volume.',
    returnPer90d: 62.1,
    holdPer90d: 26.5,
    tradesPer90d: 28,
    winRate: 71.4,
    risk: 'Aggressive',
  },
  {
    id: 'basket',
    name: 'Top 10 basket rebalance',
    asset: 'Top 10',
    rule: 'Rebalance weekly and move outsized gains into stablecoins.',
    returnPer90d: 29.8,
    holdPer90d: 12.0,
    tradesPer90d: 48,
    winRate: 85.4,
    risk: 'Low',
  },
]

const TIMEFRAMES = [30, 90, 180, 365]

const RISK_COLOR: Record<Risk, string> = {
  Low: 'text-[#0B6B39] bg-[#E6F6EE]',
  Moderate: 'text-[#8A4B00] bg-[#FFF4D6]',
  Aggressive: 'text-[#B4232A] bg-[#FDECEC]',
}

const PITCH: PitchPoint[] = [
  {
    title: 'Proof before the paywall',
    body: 'New visitors have to trust a rule with real money before they have seen it work. A backtest on their own capital answers "would this have made me money?" in one screen.',
  },
  {
    title: 'Rule vs. holding, side by side',
    body: 'The chart frames every template against simple buy and hold, which is the comparison a first-time trader is already making in their head.',
  },
  {
    title: 'Custody worry handled up front',
    body: 'Trade-only API keys and funds that stay on the exchange sit right under the result, at the moment someone decides whether to connect.',
  },
  {
    title: 'Drops into the existing app',
    body: 'Built in your current palette and Lato. The template data is a single typed array, so it can point at real backtest output with no layout changes.',
  },
]

const usd = (n: number) => `$${Math.round(n).toLocaleString('en-US')}`

// Deterministic equity curve that starts at 1 and ends at 1 + pct/100
function curve(pct: number, seed: number, wobble: number, points = 48) {
  return Array.from({ length: points + 1 }, (_, i) => {
    const t = i / points
    const noise = Math.sin(i * 0.9 + seed) * Math.sin(i * 0.31 + seed * 2) * Math.sin(Math.PI * t)
    return 1 + (pct / 100) * t + wobble * noise
  })
}

function EquityChart({ rule, hold }: { rule: number[]; hold: number[] }) {
  const w = 600
  const h = 180
  const all = [...rule, ...hold]
  const min = Math.min(...all)
  const max = Math.max(...all)
  const toPath = (series: number[]) =>
    series
      .map((v, i) => {
        const x = (i / (series.length - 1)) * w
        const y = h - 8 - ((v - min) / (max - min || 1)) * (h - 16)
        return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`
      })
      .join(' ')

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-44 w-full" preserveAspectRatio="none" aria-hidden="true">
      {[0.25, 0.5, 0.75].map((f) => (
        <line key={f} x1="0" x2={w} y1={h * f} y2={h * f} stroke={C.line} strokeWidth="1" />
      ))}
      <path d={toPath(hold)} fill="none" stroke="#A5ADBA" strokeWidth="2" strokeDasharray="5 5" vectorEffect="non-scaling-stroke" />
      <path d={toPath(rule)} fill="none" stroke={C.indigo} strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
    </svg>
  )
}

export default function CoinruleDemoPage() {
  const [strategyId, setStrategyId] = useState('rsi-dip')
  const [days, setDays] = useState(90)
  const capital = useNumberField(5000, { min: 100, max: 1_000_000, label: 'your capital', format: usd })
  const capitalId = useId()

  const strategy = STRATEGIES.find((s) => s.id === strategyId) ?? STRATEGIES[0]
  const factor = days / 90
  const rulePct = strategy.returnPer90d * factor
  const holdPct = strategy.holdPer90d * factor
  const ruleFinal = capital.value * (1 + rulePct / 100)
  const holdFinal = capital.value * (1 + holdPct / 100)
  const profit = ruleFinal - capital.value
  const edge = ruleFinal - holdFinal
  const trades = Math.max(1, Math.round(strategy.tradesPer90d * factor))

  const series = useMemo(
    () => ({
      rule: curve(rulePct, STRATEGIES.indexOf(strategy) + 1, 0.05),
      hold: curve(holdPct, STRATEGIES.indexOf(strategy) + 7, 0.035),
    }),
    [rulePct, holdPct, strategy],
  )

  const focus = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4641FF] focus-visible:ring-offset-2'

  return (
    <div className="min-h-screen overflow-x-hidden [color-scheme:light]" style={{ backgroundColor: C.canvas, color: C.ink }}>
      <DemoTracker target="coinrule" targetName="Coinrule (Gabriele Musella)" />
      <ConceptRibbon company="Coinrule" className="bg-[#1B1F30] text-white/85" />

      {/* Hero, in Coinrule's purple-to-mint brand gradient */}
      <section className="bg-[linear-gradient(115deg,#852EF6_0%,#4641FF_48%,#1FB8E0_80%,#00E5C3_100%)] pb-40 text-white">
        <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
          <div className="flex items-center gap-2.5">
            <Bot size={30} aria-hidden="true" />
            <span className="text-xl font-bold tracking-[0.14em]">COINRULE</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="https://coinrule.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden min-h-[44px] items-center px-2 text-[15px] hover:underline sm:inline-flex ${focus}`}
            >
              Log in
            </a>
            <a
              href="https://coinrule.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex min-h-[44px] items-center rounded-full border-2 border-white px-5 text-[15px] transition-colors duration-150 hover:bg-white hover:text-[#4641FF] ${focus}`}
            >
              Get started
            </a>
          </div>
        </header>

        <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 sm:pt-16">
          <h1 className="max-w-2xl text-4xl font-bold leading-[1.1] sm:text-[52px]">
            Test a rule on your own numbers before it trades.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl">
            Pick a template, enter your capital, and see how an automated rule would have done against simply holding.
          </p>
          <a
            href="#backtest"
            className={`mt-8 inline-flex min-h-[52px] items-center gap-2 rounded-full px-7 text-lg font-bold shadow-sm transition-transform duration-150 hover:-translate-y-px active:translate-y-0 ${focus}`}
            style={{ backgroundColor: C.yellow, color: C.navy }}
          >
            Run the backtest
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* Backtester, framed as a screen inside the Coinrule app */}
      <main id="backtest" className="mx-auto -mt-28 max-w-6xl scroll-mt-6 px-4 pb-24 sm:px-6">
        <div className="overflow-hidden rounded-[14px] border bg-white shadow-[0_24px_60px_-20px_rgba(27,31,48,0.35)]" style={{ borderColor: C.line }}>
          <div className="flex items-center gap-2 border-b px-4 py-3" style={{ borderColor: C.line }} aria-hidden="true">
            <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
            <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
            <span className="h-3 w-3 rounded-full bg-[#28C840]" />
          </div>

          <div className="grid lg:grid-cols-[200px_minmax(0,1fr)]">
            <nav aria-label="App sections (preview)" className="hidden flex-col gap-1 p-4 lg:flex" style={{ backgroundColor: C.navy }}>
              <div className="mb-4 flex items-center gap-2 px-2 pt-2 text-white">
                <Bot size={22} aria-hidden="true" />
                <span className="text-sm font-bold tracking-[0.14em]">COINRULE</span>
              </div>
              {['Rules', 'Exchanges', 'Strategies', 'Backtest', 'Settings'].map((item) => {
                const active = item === 'Backtest'
                return (
                  <span
                    key={item}
                    aria-current={active ? 'page' : undefined}
                    className={`rounded-[6px] px-3 py-2 text-sm ${active ? 'bg-white/10 font-bold text-white' : 'text-[#C3C8D4]'}`}
                    style={active ? { boxShadow: `inset 3px 0 0 ${C.mint}` } : undefined}
                  >
                    {item}
                  </span>
                )
              })}
            </nav>

            <div className="p-4 sm:p-6 lg:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="text-2xl font-bold">Backtest a template</h2>
                <p className="text-sm" style={{ color: C.muted }}>
                  Paper mode · no exchange connected
                </p>
              </div>

              <div className="mt-6 grid gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
                {/* Controls */}
                <div className="space-y-6">
                  <fieldset>
                    <legend className="text-sm font-bold">Rule template</legend>
                    <div className="mt-3 space-y-2">
                      {STRATEGIES.map((s) => {
                        const selected = s.id === strategyId
                        return (
                          <button
                            key={s.id}
                            type="button"
                            aria-pressed={selected}
                            onClick={() => setStrategyId(s.id)}
                            className={`w-full rounded-[10px] border p-3 text-left transition-colors duration-150 ${focus} ${
                              selected ? 'border-[#4641FF] bg-[#F1F0FF]' : 'border-[#E4E7EC] hover:border-[#A5ADBA]'
                            }`}
                          >
                            <span className="flex items-center justify-between gap-2">
                              <span className="font-bold">{s.name}</span>
                              <span className={`rounded-[6px] px-2 py-0.5 text-xs font-bold ${RISK_COLOR[s.risk]}`}>{s.risk} risk</span>
                            </span>
                            <span className="mt-1 block text-sm leading-relaxed" style={{ color: C.muted }}>
                              <span className="font-bold" style={{ color: C.ink }}>{s.asset}</span> · {s.rule}
                            </span>
                          </button>
                        )
                      })}
                    </div>
                  </fieldset>

                  <div>
                    <label htmlFor={capitalId} className="text-sm font-bold">
                      Starting capital
                    </label>
                    <div
                      className={`mt-2 flex min-h-[48px] items-center rounded-[10px] border bg-white px-3 focus-within:ring-2 ${
                        capital.error ? 'border-[#B4232A] focus-within:ring-[#B4232A]' : 'border-[#E4E7EC] focus-within:ring-[#4641FF]'
                      }`}
                    >
                      <span className="text-lg font-bold" style={{ color: C.muted }}>$</span>
                      <input
                        id={capitalId}
                        inputMode="numeric"
                        value={capital.raw}
                        onChange={capital.onChange}
                        aria-invalid={capital.error ? true : undefined}
                        aria-describedby={capital.error ? `${capitalId}-err` : undefined}
                        className="w-full self-stretch bg-transparent px-2 text-lg font-bold tabular-nums focus:outline-none"
                      />
                    </div>
                    {capital.error && (
                      <p id={`${capitalId}-err`} role="alert" className="mt-1.5 text-sm text-[#B4232A]">
                        {capital.error}. Showing results for {usd(capital.value)}.
                      </p>
                    )}
                    <div className="mt-2 flex flex-wrap gap-2">
                      {[1000, 5000, 10000, 25000].map((p) => (
                        <button
                          key={p}
                          type="button"
                          aria-pressed={capital.value === p && !capital.error}
                          onClick={() => capital.set(p)}
                          className={`min-h-[44px] rounded-full border px-4 text-sm font-bold tabular-nums transition-colors duration-150 ${focus} ${
                            capital.value === p && !capital.error
                              ? 'border-[#4641FF] bg-[#4641FF] text-white'
                              : 'border-[#E4E7EC] hover:border-[#A5ADBA]'
                          }`}
                        >
                          {usd(p)}
                        </button>
                      ))}
                    </div>
                  </div>

                  <fieldset>
                    <legend className="text-sm font-bold">Backtest period</legend>
                    <div className="mt-2 grid grid-cols-4 rounded-[10px] border p-1" style={{ borderColor: C.line }}>
                      {TIMEFRAMES.map((d) => (
                        <button
                          key={d}
                          type="button"
                          aria-pressed={days === d}
                          onClick={() => setDays(d)}
                          className={`min-h-[44px] rounded-[6px] text-sm font-bold transition-colors duration-150 ${focus} ${
                            days === d ? 'bg-[#1B1F30] text-white' : 'hover:bg-[#F1F2F6]'
                          }`}
                        >
                          {d === 365 ? '1 year' : `${d} days`}
                        </button>
                      ))}
                    </div>
                  </fieldset>
                </div>

                {/* Results */}
                <section aria-live="polite" aria-label="Backtest result" className="rounded-[14px] border p-4 sm:p-6" style={{ borderColor: C.line }}>
                  <p className="text-sm font-bold" style={{ color: C.muted }}>
                    P&amp;L · {strategy.name} on {strategy.asset}
                  </p>
                  <p className="mt-1 flex flex-wrap items-baseline gap-x-3 tabular-nums">
                    <span className="text-4xl font-black sm:text-5xl" style={{ color: C.profit }}>
                      +{rulePct.toFixed(1)}%
                    </span>
                    <span className="text-2xl font-bold">+{usd(profit)}</span>
                  </p>

                  <div className="mt-4">
                    <EquityChart rule={series.rule} hold={series.hold} />
                    <div className="mt-2 flex flex-wrap gap-4 text-sm" style={{ color: C.muted }}>
                      <span className="inline-flex items-center gap-2">
                        <span className="h-0.5 w-5 bg-[#4641FF]" aria-hidden="true" /> This rule
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <span className="h-0.5 w-5 border-t-2 border-dashed border-[#A5ADBA]" aria-hidden="true" /> Buy and hold
                      </span>
                    </div>
                  </div>

                  <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4 border-t pt-5 sm:grid-cols-4" style={{ borderColor: C.line }}>
                    {[
                      ['Final balance', usd(ruleFinal)],
                      ['Buy and hold', usd(holdFinal)],
                      ['Win rate', `${strategy.winRate}%`],
                      ['Trades', String(trades)],
                    ].map(([label, value]) => (
                      <div key={label}>
                        <dt className="text-xs font-bold uppercase tracking-wide" style={{ color: C.muted }}>{label}</dt>
                        <dd className="mt-1 text-lg font-bold tabular-nums">{value}</dd>
                      </div>
                    ))}
                  </dl>

                  <p className="mt-5 rounded-[10px] bg-[#F1F0FF] px-4 py-3 text-sm leading-relaxed">
                    The rule finishes <strong className="tabular-nums">{usd(edge)}</strong> ahead of holding {strategy.asset} over{' '}
                    {days === 365 ? 'a year' : `${days} days`}.
                  </p>

                  <a
                    href="https://coinrule.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-5 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-[10px] px-5 font-bold text-white transition-colors duration-150 hover:bg-[#3530E0] ${focus}`}
                    style={{ backgroundColor: C.indigo }}
                  >
                    Deploy this rule
                    <ArrowRight size={18} aria-hidden="true" />
                  </a>
                  <p className="mt-3 text-xs leading-relaxed" style={{ color: C.muted }}>
                    Illustrative backtest using template assumptions, not live market data. Past performance does not guarantee future results.
                  </p>
                </section>
              </div>
            </div>
          </div>

          <ul className="grid gap-4 border-t px-4 py-5 text-sm sm:grid-cols-3 sm:px-8" style={{ borderColor: C.line }}>
            {[
              { icon: Wallet, text: 'Your funds stay on your exchange' },
              { icon: KeyRound, text: 'Trade-only API keys, no withdrawal access' },
              { icon: Lock, text: 'Keys encrypted at rest' },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-[6px] bg-[#F1F0FF] text-[#4641FF]">
                  <Icon size={16} aria-hidden="true" />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10 flex items-center justify-center gap-2 text-sm" style={{ color: C.muted }}>
          <LineChart size={16} aria-hidden="true" />
          Templates run on Binance, Coinbase, Kraken, OKX and more.
        </p>
      </main>

      <PitchNote id="coinrule" company="Coinrule" points={PITCH} accent={C.indigo} />
    </div>
  )
}
