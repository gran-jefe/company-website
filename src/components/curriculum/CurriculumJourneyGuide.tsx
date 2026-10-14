import React from 'react'
import { PlayCircle, BookOpen, Code2, CheckCircle2, Compass, Sparkles, ArrowRight } from 'lucide-react'

export function CurriculumJourneyGuide() {
  const steps = [
    {
      number: '01',
      title: 'Watch the Visual Primer',
      icon: <PlayCircle size={18} className="text-brand-terra" />,
      time: '30 to 60 mins',
      description:
        'Start with our curated video tutorial to build a mental picture of how data and components flow before looking at complex code.',
    },
    {
      number: '02',
      title: 'Read the Official Reference',
      icon: <BookOpen size={18} className="text-dev-cyan" />,
      time: 'Bookmark & Skim',
      description:
        'Read the recommended official documentation sections. Focus on understanding the core APIs, standard error shapes, and patterns.',
    },
    {
      number: '03',
      title: 'Apply the 70/30 Rule',
      icon: <Code2 size={18} className="text-emerald-500" />,
      time: 'Hands-on Practice',
      description:
        'Spend 70% of your study time building with your own keyboard, and only 30% passively watching. Typing real code is how instincts are formed.',
    },
    {
      number: '04',
      title: 'Ship the Checkmark Project',
      icon: <CheckCircle2 size={18} className="text-amber-500" />,
      time: 'Milestone Goal',
      description:
        'Build the small standalone project for each phase. Once functional, tick it off in your interactive milestone tracker below to save progress.',
    },
  ]

  return (
    <div className="mb-12 rounded-2xl bg-gradient-to-br from-brand-terra/5 via-white to-dev-cyan/5 dark:from-zinc-900 dark:via-zinc-900/90 dark:to-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 sm:p-7 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-zinc-100 dark:border-zinc-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-terra dark:text-brand-ember">
            <Compass size={14} />
            <span>LEARNER ROADMAP GUIDE</span>
          </div>
          <h3 className="text-lg sm:text-xl font-syne font-bold text-zinc-900 dark:text-white mt-1">
            How to Navigate Your Learning Journey
          </h3>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">
          <Sparkles size={12} className="text-brand-terra" />
          <span>Zero Tutorial Hell Formula</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((s, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-white/80 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800 flex flex-col justify-between space-y-3 shadow-xs hover:border-brand-terra/40 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-extrabold text-zinc-400 dark:text-zinc-600">
                  STEP {s.number}
                </span>
                <span className="p-1.5 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                  {s.icon}
                </span>
              </div>
              <h4 className="font-syne font-bold text-sm text-zinc-900 dark:text-white mt-2">
                {s.title}
              </h4>
              <p className="font-dm text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mt-1">
                {s.description}
              </p>
            </div>

            <div className="pt-2 border-t border-zinc-100 dark:border-zinc-900 text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
              Target: <span className="text-zinc-800 dark:text-zinc-200 font-semibold">{s.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
