'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Zap,
  ShieldCheck,
  Smartphone,
  HelpCircle,
  ExternalLink,
  Lock,
  Tag,
  Clock,
  Layers,
  ShoppingBag
} from 'lucide-react'
import { services, formatPrice } from '@/components/sections/Services'

export function PricingClient() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual')

  const WHATSAPP_CLAIM_LINK = `https://wa.me/2347035596492?text=${encodeURIComponent(
    'Hello Gran Jefe! I am an SME business owner and I would like to claim the ₦80,000 SME WhatsApp Storefront Launch Promo.'
  )}`

  return (
    <div className="bg-[#FAF0E6] dark:bg-[#140A10] text-[#2E0E1D] dark:text-[#FFF0E3] transition-colors duration-300">
      
      {/* HERO SECTION */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 border-b border-[#EAD3C4] dark:border-[#EAD3C4]/15">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="max-w-3xl">
              <SectionLabel>Transparent Studio Pricing</SectionLabel>
              <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-syne font-extrabold text-[#2E0E1D] dark:text-[#FFF0E3] tracking-tight leading-[1.08]">
                Clear, Fixed Pricing.{' '}
                <span className="text-brand-terra-ink">Zero Hidden Fees.</span>
              </h1>
              <p className="mt-5 text-base sm:text-lg font-dm text-[#6C4B59] dark:text-[#E6D0C2] leading-relaxed">
                Whether you need a high-converting automated WhatsApp storefront for your business or a custom full-stack enterprise platform, all engagements are fixed-scope with clear deliverables agreed before kickoff.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FEATURED: SME WHATSAPP STOREFRONT PROMO */}
      <section id="sme-promo" className="py-16 md:py-24 border-b border-[#EAD3C4] dark:border-[#EAD3C4]/15 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-terra/15 border border-brand-terra/30 text-brand-terra-ink text-xs font-mono font-bold uppercase tracking-wider">
                <Tag size={14} />
                <span>Active SME Growth Promo // 33% Slashed</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-syne font-extrabold text-[#2E0E1D] dark:text-[#FFF0E3] tracking-tight">
                The SME WhatsApp Storefront
              </h2>
              <p className="text-sm sm:text-base font-dm text-[#6C4B59] dark:text-[#E6D0C2]">
                Engineered specifically for Nigerian food vendors, fashion houses, bakeries, and artisan creators who sell via Instagram and WhatsApp.
              </p>
            </div>
          </AnimatedSection>

          {/* MAIN PROMO CARD */}
          <AnimatedSection delay={0.05}>
            <div className="rounded-3xl bg-gradient-to-br from-[#1F0E18] via-[#2A1322] to-[#1F0E18] border-2 border-brand-terra/60 text-[#FFF0E3] shadow-2xl p-6 sm:p-10 md:p-12 relative overflow-hidden">
              
              {/* AMBIENT BACKGROUND GLOW */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-terra/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-ember/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* LEFT DETAILS (7 COLS) */}
                <div className="lg:col-span-7 space-y-6">
                  
                  {/* PROMO BADGES */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full bg-brand-terra text-white text-xs font-mono font-bold uppercase tracking-wider shadow">
                      Limited SME Promo
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-mono font-bold flex items-center gap-1.5">
                      <Lock size={12} />
                      <span>Price Lock Guarantee</span>
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-syne font-extrabold text-[#FFF0E3] tracking-tight">
                      Zero-Computer Storefront + WhatsApp Sync Bot
                    </h3>
                    <p className="mt-2 text-sm sm:text-base font-dm text-[#EAD3C4] leading-relaxed">
                      You never have to log into WordPress, Shopify, or any confusing dashboard. Manage your menu, update prices, and mark items sold out simply by chatting with your store bot on WhatsApp.
                    </p>
                  </div>

                  {/* VALUE CHECKPOINTS */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm font-dm text-[#FFF0E3]">
                      <CheckCircle2 size={18} className="text-brand-terra-ink shrink-0 mt-0.5" />
                      <span><strong>Domain &amp; Hosting Included:</strong> Custom domain (.com.ng / .ng) + ultra-fast cloud hosting.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm font-dm text-[#FFF0E3]">
                      <CheckCircle2 size={18} className="text-brand-terra-ink shrink-0 mt-0.5" />
                      <span><strong>0% Commission Fees:</strong> Keep 100% of sales. Orders route straight to your WhatsApp.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm font-dm text-[#FFF0E3]">
                      <CheckCircle2 size={18} className="text-brand-terra-ink shrink-0 mt-0.5" />
                      <span><strong>Sub-Second Speed:</strong> Mobile-optimized pages that load instantaneously on Nigerian networks.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm font-dm text-[#FFF0E3]">
                      <CheckCircle2 size={18} className="text-brand-terra-ink shrink-0 mt-0.5" />
                      <span><strong>White-Glove Onboarding:</strong> We upload your initial product catalog and menu for you.</span>
                    </div>
                  </div>

                  {/* SAMPLES ROW */}
                  <div className="pt-4 border-t border-[#EAD3C4]/20 space-y-2">
                    <span className="text-xs font-mono text-[#E6C5B8] block">Explore Live Prototype Storefronts:</span>
                    <div className="flex flex-wrap gap-2">
                      <Link
                        href="/foodrascals/"
                        target="_blank"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#2D1625] hover:bg-[#3D1E32] text-xs font-semibold text-white border border-[#EAD3C4]/20 transition-colors"
                      >
                        <ShoppingBag size={13} className="text-brand-ember" />
                        <span>Food Rascals (Cloud Kitchen)</span>
                        <ExternalLink size={11} className="opacity-60" />
                      </Link>

                      <Link
                        href="/craftycottage/"
                        target="_blank"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#2D1625] hover:bg-[#3D1E32] text-xs font-semibold text-white border border-[#EAD3C4]/20 transition-colors"
                      >
                        <Sparkles size={13} className="text-amber-400" />
                        <span>Crafty Cottage (Beaded Bags)</span>
                        <ExternalLink size={11} className="opacity-60" />
                      </Link>

                      <Link
                        href="/hafsy-couture/"
                        target="_blank"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#2D1625] hover:bg-[#3D1E32] text-xs font-semibold text-white border border-[#EAD3C4]/20 transition-colors"
                      >
                        <Zap size={13} className="text-purple-400" />
                        <span>Hafsy Couture (Fragrances)</span>
                        <ExternalLink size={11} className="opacity-60" />
                      </Link>
                    </div>
                  </div>

                </div>

                {/* RIGHT PRICING BOX (5 COLS) */}
                <div className="lg:col-span-5 bg-[#170A12] border border-[#EAD3C4]/25 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
                  
                  {/* SETUP FEE BOX */}
                  <div className="space-y-1 pb-4 border-b border-[#EAD3C4]/20">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono uppercase tracking-wider text-[#C4A0B8]">One-Time Setup Fee</span>
                      <span className="text-xs font-mono font-bold bg-rose-500/20 text-rose-300 px-2.5 py-0.5 rounded-full border border-rose-500/30">
                        33% OFF
                      </span>
                    </div>

                    <div className="flex items-baseline gap-3 pt-1">
                      <span className="text-3xl sm:text-4xl font-syne font-black text-white">₦80,000</span>
                      <span className="text-base font-dm line-through text-[#8F6B7E]">₦120,000</span>
                    </div>
                    <p className="text-[11px] font-dm text-[#C4A0B8]">
                      Includes custom storefront build, domain registration, cloud hosting, and complete catalog setup.
                    </p>
                  </div>

                  {/* ONGOING MAINTENANCE TOGGLE */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono uppercase tracking-wider text-[#C4A0B8]">WhatsApp Bot Maintenance</span>
                      
                      {/* CYCLE SWITCH */}
                      <div className="bg-[#26101D] p-0.5 rounded-lg border border-[#EAD3C4]/20 flex text-[11px] font-mono font-semibold">
                        <button
                          onClick={() => setBillingCycle('monthly')}
                          className={`px-2.5 py-1 rounded-md transition-all ${
                            billingCycle === 'monthly' ? 'bg-brand-terra text-white' : 'text-[#C4A0B8] hover:text-white'
                          }`}
                        >
                          Monthly
                        </button>
                        <button
                          onClick={() => setBillingCycle('annual')}
                          className={`px-2.5 py-1 rounded-md transition-all ${
                            billingCycle === 'annual' ? 'bg-brand-terra text-white' : 'text-[#C4A0B8] hover:text-white'
                          }`}
                        >
                          Annual (Save ₦10k)
                        </button>
                      </div>
                    </div>

                    {/* PRICING DISPLAY */}
                    <div className="bg-[#240D1A] p-4 rounded-2xl border border-[#EAD3C4]/20 space-y-1">
                      {billingCycle === 'monthly' ? (
                        <>
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-syne font-extrabold text-brand-ember">₦5,000</span>
                            <span className="text-xs font-dm text-[#C4A0B8]">/ month</span>
                            <span className="text-xs font-dm line-through text-[#8F6B7E] ml-2">₦15,000/mo</span>
                          </div>
                          <p className="text-[11px] font-dm text-[#EAD3C4]">
                            Billed monthly. Covers active WhatsApp Bot sync, serverless infrastructure, and ongoing cloud hosting.
                          </p>
                        </>
                      ) : (
                        <>
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-syne font-extrabold text-brand-ember">₦50,000</span>
                            <span className="text-xs font-dm text-[#C4A0B8]">/ year</span>
                            <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-400/30 ml-2">
                              Save ₦10,000
                            </span>
                          </div>
                          <p className="text-[11px] font-dm text-[#EAD3C4]">
                            Equivalent to just <strong>₦4,166 / month</strong>. Covers full annual hosting, annual domain renewal, and priority support.
                          </p>
                        </>
                      )}
                    </div>
                  </div>

                  {/* PRICE LOCK NOTICE */}
                  <div className="p-3 rounded-xl bg-brand-terra/10 border border-brand-terra/30 text-[11px] font-dm text-[#EAD3C4] flex items-center gap-2">
                    <ShieldCheck size={16} className="text-brand-terra-ink shrink-0" />
                    <span><strong>Guaranteed Price Lock:</strong> This promo rate will be maintained throughout your subscription.</span>
                  </div>

                  {/* ACTION BUTTON */}
                  <a
                    href={WHATSAPP_CLAIM_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-h-[44px] py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-dm font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/40 transition-all"
                  >
                    <MessageCircle size={17} />
                    <span>Claim ₦80k SME Promo on WhatsApp</span>
                  </a>

                  <p className="text-[10px] text-center font-mono text-[#8F6B7E]">
                    Turnaround time: Live in 3 to 5 business days
                  </p>

                </div>

              </div>

            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* CUSTOM STUDIO & PLATFORM SERVICES (FULL SERVICE MENU) */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <SectionLabel>Full Engineering Services</SectionLabel>
                <h2 className="mt-3 text-3xl sm:text-4xl font-syne font-bold text-[#2E0E1D] dark:text-[#FFF0E3] tracking-tight">
                  Custom Software &amp; Platform Architecture
                </h2>
                <p className="mt-2 text-sm font-dm text-[#6C4B59] dark:text-[#E6D0C2]">
                  Starting benchmarks for custom web platforms, mobile applications, and backend systems.
                </p>
              </div>
              <p className="font-mono text-xs text-[#7A4A38] dark:text-[#B88E7D] max-w-xs">
                {"// All quotes agreed in writing with milestones prior to kick-off."}
              </p>
            </div>
          </AnimatedSection>

          {/* GRID OF SERVICES */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 0.05}>
                <div className="h-full p-6 rounded-2xl bg-[#FFF0E3] dark:bg-[#1D0E17] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 hover:border-brand-terra/60 transition-all flex flex-col justify-between shadow-xs">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[11px] font-bold text-[#7A4A38] dark:text-[#B88E7D]">
                        {service.codeTag}
                      </span>
                      <div className="p-2 rounded-xl bg-[#FAF0E6] dark:bg-[#25121E] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 text-brand-terra-ink">
                        {service.icon}
                      </div>
                    </div>

                    <h3 className="font-syne font-bold text-xl text-[#2E0E1D] dark:text-[#FFF0E3] mb-2">
                      {service.title}
                    </h3>

                    <p className="font-dm text-sm text-[#6C4B59] dark:text-[#E6D0C2] leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#EAD3C4] dark:border-[#EAD3C4]/15 space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {service.includes.map((item, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#FAF0E6] dark:bg-[#25121E] text-[#2E0E1D] dark:text-[#FFF0E3] border border-[#EAD3C4] dark:border-[#EAD3C4]/15"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-baseline justify-between gap-2 pt-1">
                      <span className="text-xs font-dm text-[#7A4A38] dark:text-[#B88E7D]">Starting benchmark</span>
                      <span className="font-syne font-bold text-sm text-[#2E0E1D] dark:text-[#FFF0E3]">
                        From {formatPrice(service.startingPrice)}
                      </span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </section>

      {/* SME PRICING FAQ */}
      <section className="py-16 md:py-24 border-t border-[#EAD3C4] dark:border-[#EAD3C4]/15 bg-[#FAF0E6] dark:bg-[#11070D]">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          
          <AnimatedSection>
            <div className="text-center space-y-2 mb-12">
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-syne font-bold text-[#2E0E1D] dark:text-[#FFF0E3]">
                Frequently Asked Questions
              </h2>
              <p className="text-sm font-dm text-[#6C4B59] dark:text-[#E6D0C2]">
                Everything you need to know about the SME promo and how your storefront runs.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            
            <div className="bg-[#FFF0E3] dark:bg-[#1D0E17] p-5 rounded-2xl border border-[#EAD3C4] dark:border-[#EAD3C4]/15 space-y-2">
              <h3 className="font-syne font-bold text-base text-[#2E0E1D] dark:text-[#FFF0E3] flex items-center gap-2">
                <HelpCircle size={18} className="text-brand-terra-ink shrink-0" />
                <span>Do I need a computer or laptop to manage my store?</span>
              </h3>
              <p className="text-xs sm:text-sm font-dm text-[#6C4B59] dark:text-[#E6D0C2] leading-relaxed pl-6">
                No. That is the core breakthrough of this storefront. You manage 100% of your products, prices, and stock status directly from WhatsApp on your phone. To add a product or mark something sold out, you simply send a text to your store's WhatsApp bot.
              </p>
            </div>

            <div className="bg-[#FFF0E3] dark:bg-[#1D0E17] p-5 rounded-2xl border border-[#EAD3C4] dark:border-[#EAD3C4]/15 space-y-2">
              <h3 className="font-syne font-bold text-base text-[#2E0E1D] dark:text-[#FFF0E3] flex items-center gap-2">
                <HelpCircle size={18} className="text-brand-terra-ink shrink-0" />
                <span>Will the monthly maintenance fee increase after a few months?</span>
              </h3>
              <p className="text-xs sm:text-sm font-dm text-[#6C4B59] dark:text-[#E6D0C2] leading-relaxed pl-6">
                No. The promo price of <strong>₦5,000 / month</strong> (or <strong>₦50,000 / year</strong>) includes our Lifetime Price-Lock Guarantee. As long as your store subscription remains active, your rate will never increase.
              </p>
            </div>

            <div className="bg-[#FFF0E3] dark:bg-[#1D0E17] p-5 rounded-2xl border border-[#EAD3C4] dark:border-[#EAD3C4]/15 space-y-2">
              <h3 className="font-syne font-bold text-base text-[#2E0E1D] dark:text-[#FFF0E3] flex items-center gap-2">
                <HelpCircle size={18} className="text-brand-terra-ink shrink-0" />
                <span>How do customers make payments?</span>
              </h3>
              <p className="text-xs sm:text-sm font-dm text-[#6C4B59] dark:text-[#E6D0C2] leading-relaxed pl-6">
                When a customer clicks "Order via WhatsApp", their entire tray or item selection, delivery area, and order total are formatted automatically and delivered straight to your WhatsApp. You send them your bank account details and confirm payment directly with 0% platform transaction fees.
              </p>
            </div>

            <div className="bg-[#FFF0E3] dark:bg-[#1D0E17] p-5 rounded-2xl border border-[#EAD3C4] dark:border-[#EAD3C4]/15 space-y-2">
              <h3 className="font-syne font-bold text-base text-[#2E0E1D] dark:text-[#FFF0E3] flex items-center gap-2">
                <HelpCircle size={18} className="text-brand-terra-ink shrink-0" />
                <span>How long does it take for my store to go live?</span>
              </h3>
              <p className="text-xs sm:text-sm font-dm text-[#6C4B59] dark:text-[#E6D0C2] leading-relaxed pl-6">
                Once you share your product photos, descriptions, and desired domain name, our studio builds, connects, and launches your live storefront within <strong>3 to 5 business days</strong>.
              </p>
            </div>

          </div>

          {/* FINAL CTA STRIP */}
          <div className="mt-12 text-center">
            <a
              href={WHATSAPP_CLAIM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-terra hover:bg-[#B82A00] text-white font-dm font-bold text-sm shadow-xl shadow-brand-terra/25 transition-all min-h-[44px]"
            >
              <MessageCircle size={18} />
              <span>Lock In Your ₦80k SME Promo Today</span>
              <ArrowRight size={16} />
            </a>
          </div>

        </div>
      </section>

    </div>
  )
}
