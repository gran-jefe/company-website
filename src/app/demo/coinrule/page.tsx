'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  TrendingUp, 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Activity, 
  Zap, 
  ChevronRight, 
  Star, 
  ExternalLink, 
  Eye, 
  EyeOff, 
  Check, 
  DollarSign, 
  BarChart3, 
  Bot, 
  Layers, 
  RefreshCw 
} from 'lucide-react'

// Strategy presets
interface Strategy {
  id: string
  name: string
  asset: string
  description: string
  baseReturnPercent: number
  benchmarkReturnPercent: number
  tradesCount: number
  winRate: number
  riskLevel: 'Low' | 'Moderate' | 'Aggressive'
}

const STRATEGIES: Strategy[] = [
  {
    id: 'rsi-dip',
    name: 'RSI "Buy The Dip"',
    asset: 'Bitcoin (BTC)',
    description: 'Executes buy orders when RSI dips below 30 on 4H candles and takes 4.5% profit on bounce.',
    baseReturnPercent: 38.4,
    benchmarkReturnPercent: 14.2,
    tradesCount: 22,
    winRate: 81.8,
    riskLevel: 'Low',
  },
  {
    id: 'dca-trend',
    name: 'Dynamic Volatility DCA',
    asset: 'Ethereum (ETH)',
    description: 'Increases accumulation multiplier during market pullbacks and trails stop-loss in bull legs.',
    baseReturnPercent: 44.7,
    benchmarkReturnPercent: 18.6,
    tradesCount: 36,
    winRate: 77.8,
    riskLevel: 'Moderate',
  },
  {
    id: 'breakout-momentum',
    name: 'Moving Average Breakout',
    asset: 'Solana (SOL)',
    description: 'Catches upward breakouts when 20 EMA crosses 50 EMA with 24h volume confirmation.',
    baseReturnPercent: 62.1,
    benchmarkReturnPercent: 26.5,
    tradesCount: 28,
    winRate: 71.4,
    riskLevel: 'Aggressive',
  },
  {
    id: 'grid-rebalance',
    name: 'Multi-Asset Basket Rebalancing',
    asset: 'Top 10 Crypto Basket',
    description: 'Automates weekly rebalancing to lock in high-volatility gains into stable assets.',
    baseReturnPercent: 29.8,
    benchmarkReturnPercent: 12.0,
    tradesCount: 48,
    winRate: 85.4,
    riskLevel: 'Low',
  },
]

export default function CoinruleDemoPage() {
  // Simulator State
  const [initialCapital, setInitialCapital] = useState<number>(5000)
  const [selectedStrategyId, setSelectedStrategyId] = useState<string>('rsi-dip')
  const [timeframeDays, setTimeframeDays] = useState<number>(90)
  const [showPresenterGuide, setShowPresenterGuide] = useState<boolean>(true)
  const [presenterStep, setPresenterStep] = useState<number>(1)

  const strategy = STRATEGIES.find((s) => s.id === selectedStrategyId) || STRATEGIES[0]

  // Timeframe scaling factor
  const timeFactor = timeframeDays / 90
  const adjustedReturnPercent = (strategy.baseReturnPercent * timeFactor).toFixed(1)
  const adjustedBenchmarkPercent = (strategy.benchmarkReturnPercent * timeFactor).toFixed(1)

  const finalCapital = Math.round(initialCapital * (1 + (parseFloat(adjustedReturnPercent) / 100)))
  const netProfit = finalCapital - initialCapital
  const benchmarkFinal = Math.round(initialCapital * (1 + (parseFloat(adjustedBenchmarkPercent) / 100)))
  const benchmarkProfit = benchmarkFinal - initialCapital
  const outperformance = netProfit - benchmarkProfit

  // Presenter Guided Script Steps (for Adeleke's walkthrough)
  const presenterSteps = [
    {
      id: 1,
      tag: '01 / CONVERSION BOTTLENECK',
      headline: 'Retail Traders Want Proof Before Subscribing',
      detail: 'Visitors to coinrule.com are hesitant to pay $29–$449/mo without seeing tangible backtested results on their capital.',
    },
    {
      id: 2,
      tag: '02 / THE INTERACTIVE WEAPON',
      headline: 'Instant Live Strategy Profit Simulator',
      detail: 'Prospective traders slide their capital and immediately see how much alpha Coinrule generates over passive holding.',
    },
    {
      id: 3,
      tag: '03 / NON-CUSTODIAL TRUST CONSOLE',
      headline: 'Eliminating "Will You Steal My Funds?" Fear',
      detail: 'Highlighting that exchange funds remain on Binance/Coinbase with zero withdrawal API permissions removes signup friction.',
    },
    {
      id: 4,
      tag: '04 / HIGH-CONVERTING UPSELL CTA',
      headline: 'Frictionless Upgrade into Paid Tier',
      detail: 'Directly linking profitable backtests to "Deploy This Rule" triggers instant account activations.',
    },
  ]

  return (
    <div className="min-h-screen bg-[#0A0E1A] text-white selection:bg-[#00D4FF] selection:text-[#0A0E1A] font-sans antialiased">
      
      {/* ======================================================== */}
      {/* 1. COINRULE NATIVE TOP ANNOUNCEMENT BANNER               */}
      {/* ======================================================== */}
      <div className="w-full bg-[#111827] border-b border-white/5 py-2.5 px-4 text-center text-xs font-medium text-zinc-300 flex items-center justify-center gap-2">
        <span className="px-2 py-0.5 rounded-full bg-[#00D4FF]/20 text-[#00D4FF] text-[10px] font-bold uppercase tracking-wider">
          New
        </span>
        <span className="text-zinc-200">AI-Powered Trading Assistant is now live on Coinrule</span>
        <ArrowRight size={13} className="text-[#00D4FF]" />
      </div>

      {/* ======================================================== */}
      {/* 2. COINRULE 1:1 NATIVE NAVBAR                            */}
      {/* ======================================================== */}
      <header className="sticky top-0 z-40 bg-[#0A0E1A]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#0052FF] to-[#00D4FF] flex items-center justify-center text-white font-extrabold text-base shadow-lg shadow-[#00D4FF]/20">
              ⚡
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-extrabold text-xl tracking-tight text-white font-sans">
                Coinrule
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-[#00D4FF] border border-[#00D4FF]/20 hidden sm:inline">
                YC S21
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-300">
            <a href="#strategies" className="hover:text-white transition-colors">Strategies</a>
            <a href="#exchanges" className="hover:text-white transition-colors">Exchanges</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#learn" className="hover:text-white transition-colors">Learn</a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-4">
            <button className="text-xs font-medium text-zinc-300 hover:text-white transition-colors hidden sm:block">
              Sign In
            </button>
            <a
              href="https://wa.me/2348085448371?text=Hi%20Adeleke%2C%20saw%20the%20Coinrule%20strategy%20simulator"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-[#00D4FF] hover:bg-[#00B8DE] text-[#0A0E1A] transition-all shadow-md shadow-[#00D4FF]/25 hover:scale-102 cursor-pointer font-bold"
            >
              Get Started Free
            </a>
          </div>
        </div>
      </header>

      {/* ======================================================== */}
      {/* 3. COINRULE 1:1 NATIVE HERO                              */}
      {/* ======================================================== */}
      <section className="relative pt-16 pb-12 sm:pt-24 sm:pb-16 px-4 sm:px-6 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#0052FF]/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[250px] bg-[#00D4FF]/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-zinc-300 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span>Automated Trading Made Easy — No Code Required</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            Automate your crypto &amp; stocks.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] via-[#3B82F6] to-[#10B981]">
              Outperform the market.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-400 leading-relaxed">
            Create automated trading rules 24/7 across Binance, Coinbase, Kraken, and TradingView without writing a single line of code.
          </p>

          {/* Hero CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#simulator"
              className="w-full sm:w-auto px-7 py-3 rounded-xl text-sm font-bold bg-[#00D4FF] hover:bg-[#00B8DE] text-[#0A0E1A] shadow-lg shadow-[#00D4FF]/20 transition-all hover:scale-102 text-center"
            >
              Simulate Strategy Returns
            </a>
            <button className="w-full sm:w-auto px-6 py-3 rounded-xl text-sm font-medium bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10 transition-colors text-center">
              Explore 250+ Strategy Templates
            </button>
          </div>

          {/* Exchange Marquee Strip */}
          <div className="pt-8 text-center space-y-3">
            <p className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">
              Seamless Non-Custodial Integration With Leading Venues
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-medium text-zinc-400">
              <span className="hover:text-white transition-colors">Binance</span>
              <span className="hover:text-white transition-colors">Coinbase Advanced</span>
              <span className="hover:text-white transition-colors">Kraken</span>
              <span className="hover:text-white transition-colors">OKX</span>
              <span className="hover:text-white transition-colors">Trading 212</span>
              <span className="hover:text-white transition-colors">Alpaca</span>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. THE INTERACTIVE STRATEGY PROFIT SIMULATOR             */}
      {/* (The High-Converting Component Tailored for Coinrule)    */}
      {/* ======================================================== */}
      <section id="simulator" className="relative py-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          
          {/* Main Card Container */}
          <div className="relative rounded-3xl bg-[#111827]/80 border border-white/10 shadow-2xl shadow-black/80 p-6 sm:p-10 space-y-8 backdrop-blur-xl">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#00D4FF]">
                  <Sparkles size={13} />
                  <span>INTERACTIVE STRATEGY BACKTESTER</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  See How Much Alpha Coinrule Generates on Your Capital
                </h2>
                <p className="text-xs sm:text-sm text-zinc-400">
                  Select a pre-built automated rule, adjust your capital, and compare automated execution against passive buy &amp; hold.
                </p>
              </div>

              <div className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-400 self-start sm:self-auto shrink-0 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span>Live Alpha Engine</span>
              </div>
            </div>

            {/* Strategy Selector Tabs */}
            <div className="space-y-2.5">
              <label className="text-xs font-semibold text-zinc-300 uppercase tracking-wider font-mono">
                Select Automated Rule Template:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {STRATEGIES.map((strat) => (
                  <button
                    key={strat.id}
                    onClick={() => setSelectedStrategyId(strat.id)}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      selectedStrategyId === strat.id
                        ? 'bg-[#00D4FF]/10 border-[#00D4FF] shadow-lg shadow-[#00D4FF]/10'
                        : 'bg-[#1F2937]/50 border-white/5 hover:border-white/20 text-zinc-400'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-300">
                          {strat.asset}
                        </span>
                        <span className={`text-[10px] font-mono font-bold ${
                          strat.riskLevel === 'Low' ? 'text-[#10B981]' : strat.riskLevel === 'Moderate' ? 'text-[#F59E0B]' : 'text-[#EF4444]'
                        }`}>
                          {strat.riskLevel} Risk
                        </span>
                      </div>
                      <div className="font-bold text-sm text-white">{strat.name}</div>
                    </div>
                    <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
                      <span className="text-zinc-500">Win Rate:</span>
                      <span className="text-[#10B981] font-bold">{strat.winRate}%</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Sliders */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 pb-4">
              
              {/* Slider 1: Capital Amount */}
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-zinc-300">
                    Allocated Trading Capital
                  </span>
                  <span className="text-xl font-mono font-bold text-[#00D4FF]">
                    ${initialCapital.toLocaleString()}
                  </span>
                </div>

                <input
                  type="range"
                  min={1000}
                  max={50000}
                  step={500}
                  value={initialCapital}
                  onChange={(e) => setInitialCapital(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#00D4FF]"
                />

                {/* Quick Presets */}
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-[10px] font-mono text-zinc-500">Presets:</span>
                  {[2500, 5000, 10000, 25000].map((preset) => (
                    <button
                      key={preset}
                      onClick={() => setInitialCapital(preset)}
                      className={`px-2.5 py-0.5 rounded-md text-[10px] font-mono font-medium transition-colors cursor-pointer ${
                        initialCapital === preset
                          ? 'bg-[#00D4FF] text-[#0A0E1A] font-bold'
                          : 'bg-white/5 text-zinc-400 hover:text-white border border-white/10'
                      }`}
                    >
                      ${preset >= 1000 ? `${preset / 1000}k` : preset}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider 2: Backtest Timeframe */}
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-zinc-300">
                    Backtest Timeframe
                  </span>
                  <span className="text-xl font-mono font-bold text-[#10B981]">
                    {timeframeDays} Days
                  </span>
                </div>

                <input
                  type="range"
                  min={30}
                  max={365}
                  step={15}
                  value={timeframeDays}
                  onChange={(e) => setTimeframeDays(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#10B981]"
                />

                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span>30 Days</span>
                  <span className="text-zinc-300">90 Days (Standard Quarter)</span>
                  <span>365 Days (1 Year)</span>
                </div>
              </div>
            </div>

            {/* Results Grid (Coinrule Style) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              
              {/* Card 1: Final Simulated Balance */}
              <div className="p-5 rounded-2xl bg-[#1F2937]/60 border border-white/10 space-y-1">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#00D4FF] flex items-center gap-1.5">
                  <TrendingUp size={13} /> Final Capital with Coinrule
                </div>
                <div className="text-2xl sm:text-3xl font-mono font-extrabold text-white">
                  ${finalCapital.toLocaleString()}
                </div>
                <div className="text-[11px] text-[#10B981] font-mono font-semibold">
                  +${netProfit.toLocaleString()} (+{adjustedReturnPercent}%)
                </div>
              </div>

              {/* Card 2: Market Benchmark (Buy & Hold) */}
              <div className="p-5 rounded-2xl bg-[#1F2937]/60 border border-white/10 space-y-1">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                  <BarChart3 size={13} /> Passive Buy &amp; Hold
                </div>
                <div className="text-2xl sm:text-3xl font-mono font-extrabold text-zinc-300">
                  ${benchmarkFinal.toLocaleString()}
                </div>
                <div className="text-[11px] text-zinc-400 font-mono">
                  +${benchmarkProfit.toLocaleString()} (+{adjustedBenchmarkPercent}%)
                </div>
              </div>

              {/* Card 3: Outperformance Alpha */}
              <div className="p-5 rounded-2xl bg-[#1F2937]/60 border-2 border-[#10B981]/50 space-y-1 shadow-lg shadow-[#10B981]/5">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#10B981] flex items-center gap-1.5">
                  <Zap size={13} /> Coinrule Alpha Generated
                </div>
                <div className="text-2xl sm:text-3xl font-mono font-extrabold text-[#10B981]">
                  +${outperformance.toLocaleString()}
                </div>
                <div className="text-[11px] text-zinc-300 font-dm">
                  Excess gain above standard holding
                </div>
              </div>
            </div>

            {/* Non-Custodial Security Strip (Removes Fear of Lost Funds) */}
            <div className="pt-6 border-t border-white/10">
              <div className="text-[10px] font-mono uppercase font-bold text-zinc-400 mb-3.5 flex items-center gap-2">
                <Lock size={12} className="text-[#00D4FF]" />
                <span>Non-Custodial Architecture &amp; Exchange API Security</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2">
                  <Check size={14} className="text-[#10B981] shrink-0" />
                  <span className="text-zinc-300 text-[11px]">Zero Withdrawal Permissions</span>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2">
                  <Check size={14} className="text-[#10B981] shrink-0" />
                  <span className="text-zinc-300 text-[11px]">Funds Remain on Exchange</span>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2">
                  <Check size={14} className="text-[#10B981] shrink-0" />
                  <span className="text-zinc-300 text-[11px]">256-Bit API Key Encryption</span>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2">
                  <Check size={14} className="text-[#10B981] shrink-0" />
                  <span className="text-zinc-300 text-[11px]">Cloudflare DDoS Protected</span>
                </div>
              </div>
            </div>

            {/* Direct Call to Action */}
            <div className="pt-2 text-center">
              <a
                href="https://wa.me/2348085448371?text=Hi%20Adeleke%2C%20saw%20the%20Coinrule%20strategy%20simulator"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-[#00D4FF] hover:bg-[#00B8DE] text-[#0A0E1A] shadow-lg shadow-[#00D4FF]/25 transition-all hover:scale-102 cursor-pointer"
              >
                <span>Deploy This Strategy on Coinrule Now</span>
                <ChevronRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. COINRULE SOCIAL PROOF & PRICING PREVIEW               */}
      {/* ======================================================== */}
      <section className="py-16 px-4 sm:px-6 border-t border-white/5 bg-[#111827]/40">
        <div className="max-w-4xl mx-auto space-y-8 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-zinc-500">
            Backed by Y Combinator &bull; Over $100M+ in Automated Trading Volume
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="text-xs font-mono text-[#00D4FF]">Free Tier</div>
              <div className="text-xl font-bold text-white">$0 / month</div>
              <p className="text-xs text-zinc-400">Up to 5 live bots, basic market rules, paper trading testing.</p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border-2 border-[#00D4FF] space-y-2 relative">
              <span className="absolute -top-2.5 right-4 px-2 py-0.5 rounded-full bg-[#00D4FF] text-[#0A0E1A] text-[9px] font-bold uppercase font-mono">
                Most Popular
              </span>
              <div className="text-xs font-mono text-[#00D4FF]">Trader Plan</div>
              <div className="text-xl font-bold text-white">$44.42 / month</div>
              <p className="text-xs text-zinc-400">Unlimited backtests, multiple exchanges, trailing stop-losses.</p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="text-xs font-mono text-[#00D4FF]">Pro Plan</div>
              <div className="text-xl font-bold text-white">$499.50 / month</div>
              <p className="text-xs text-zinc-400">Unlimited concurrent bots, dedicated execution queues, custom APIs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. COINRULE 1:1 NATIVE FOOTER                            */}
      {/* ======================================================== */}
      <footer className="py-12 px-4 sm:px-8 border-t border-white/5 text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-zinc-300">Coinrule Ltd.</span>
            <span>London, UK &bull; © 2026. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Exchange Status</a>
          </div>
        </div>
      </footer>

      {/* ======================================================== */}
      {/* 7. PROTOTYPE ARCHITECTURE SUMMARY BAR                    */}
      {/* ======================================================== */}
      <aside className="fixed bottom-4 right-4 z-50 max-w-sm w-full p-4 rounded-2xl bg-[#111827]/95 border border-[#00D4FF]/40 shadow-2xl backdrop-blur-xl text-xs space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
            <span className="font-mono font-bold text-white uppercase text-[11px]">
              Component Architecture
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="text-[10px] text-zinc-400 hover:text-white flex items-center gap-1 font-mono"
            >
              <span>Gran Jefe Studio</span>
              <ExternalLink size={10} />
            </Link>
            <button
              onClick={() => setShowPresenterGuide(!showPresenterGuide)}
              className="text-zinc-400 hover:text-white"
            >
              {showPresenterGuide ? <EyeOff size={13} /> : <Eye size={13} />}
            </button>
          </div>
        </div>

        {showPresenterGuide && (
          <div className="space-y-2.5 pt-1">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-[10px] font-mono text-[#00D4FF] font-bold">
                {presenterSteps[presenterStep - 1].tag}
              </span>
              <p className="font-bold text-white text-[11px] leading-snug">
                {presenterSteps[presenterStep - 1].headline}
              </p>
              <p className="text-[10px] text-zinc-400 leading-relaxed">
                {presenterSteps[presenterStep - 1].detail}
              </p>
            </div>

            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4].map((step) => (
                  <button
                    key={step}
                    onClick={() => setPresenterStep(step)}
                    className={`w-6 h-6 rounded-md text-[10px] font-mono font-bold transition-all cursor-pointer ${
                      presenterStep === step
                        ? 'bg-[#00D4FF] text-[#0A0E1A]'
                        : 'bg-white/5 text-zinc-400 border border-white/10 hover:border-white/30'
                    }`}
                  >
                    {step}
                  </button>
                ))}
              </div>

              <span className="text-[10px] font-mono text-zinc-400">
                Key Insights 1→4
              </span>
            </div>
          </div>
        )}
      </aside>

    </div>
  )
}
