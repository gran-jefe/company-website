'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Circle, Sparkles, RotateCcw, CheckCheck, Award, Zap } from 'lucide-react'

export interface MilestoneItem {
  id: string
  title: string
  description?: string
}

export interface CurriculumModuleGroup {
  moduleNumber: number | string
  title: string
  duration?: string
  milestones: MilestoneItem[]
}

interface CurriculumChecklistProps {
  trackId: string
  trackTitle: string
  modules: CurriculumModuleGroup[]
}

export function CurriculumChecklist({
  trackId,
  trackTitle,
  modules,
}: CurriculumChecklistProps) {
  const [completedIds, setCompletedIds] = useState<Record<string, boolean>>({})
  const [isLoaded, setIsLoaded] = useState(false)

  const storageKey = `gj_curriculum_progress_${trackId}`

  // Load progress from localStorage safely
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey)
      if (saved) {
        setCompletedIds(JSON.parse(saved))
      }
    } catch {
      // Ignore localStorage errors
    } finally {
      setIsLoaded(true)
    }
  }, [storageKey])

  // Save progress on update
  const toggleMilestone = (id: string) => {
    setCompletedIds((prev) => {
      const updated = { ...prev, [id]: !prev[id] }
      try {
        localStorage.setItem(storageKey, JSON.stringify(updated))
      } catch {
        // Storage quota or error
      }
      return updated
    })
  }

  const markAll = () => {
    const allCompleted: Record<string, boolean> = {}
    modules.forEach((mod) => {
      mod.milestones.forEach((m) => {
        allCompleted[m.id] = true
      })
    })
    setCompletedIds(allCompleted)
    try {
      localStorage.setItem(storageKey, JSON.stringify(allCompleted))
    } catch {}
  }

  const resetAll = () => {
    setCompletedIds({})
    try {
      localStorage.removeItem(storageKey)
    } catch {}
  }

  // Calculate totals
  const allMilestones = modules.flatMap((m) => m.milestones)
  const totalCount = allMilestones.length
  const completedCount = allMilestones.filter((m) => completedIds[m.id]).length
  const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0

  return (
    <div className="rounded-2xl bg-[#FFF0E3] dark:bg-[#1D0E17] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 shadow-sm overflow-hidden transition-all">
      {/* Tracker Header Bar */}
      <div className="p-5 sm:p-6 bg-[#FAF0E6] dark:bg-[#25121E] border-b border-[#EAD3C4] dark:border-[#EAD3C4]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-terra dark:text-[#FF5528]">
            <Zap size={14} />
            <span>INTERACTIVE LEARNING TRACKER</span>
          </div>
          <h3 className="text-lg sm:text-xl font-syne font-bold text-[#2E0E1D] dark:text-[#FFF0E3] mt-1">
            Milestone Checklist &amp; Progress
          </h3>
          <p className="text-xs text-[#5A3846] dark:text-[#E6D0C2] font-dm mt-0.5">
            Your progress is saved in your browser. Check off items as you build.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            onClick={markAll}
            className="px-3 py-1.5 rounded-lg text-xs font-dm font-semibold bg-[#FFF0E3] dark:bg-[#1D0E17] hover:bg-brand-terra hover:text-white dark:hover:bg-brand-terra text-[#2E0E1D] dark:text-[#FFF0E3] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
            title="Mark all milestones complete"
          >
            <CheckCheck size={14} />
            <span className="hidden sm:inline">Mark All Done</span>
          </button>

          <button
            onClick={resetAll}
            className="px-3 py-1.5 rounded-lg text-xs font-dm font-medium bg-[#FFF0E3] dark:bg-[#1D0E17] hover:bg-[#F3E2D5] dark:hover:bg-[#25121E] text-[#7A4A38] dark:text-[#B88E7D] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 transition-colors flex items-center gap-1.5 cursor-pointer"
            title="Reset milestone progress"
          >
            <RotateCcw size={13} />
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>
      </div>

      {/* Progress Bar Display */}
      <div className="px-5 sm:px-6 py-4 bg-[#FFF0E3] dark:bg-[#1D0E17]/60 border-b border-[#EAD3C4]/60 dark:border-[#EAD3C4]/15">
        <div className="flex items-center justify-between text-xs font-mono mb-2">
          <div className="flex items-center gap-2 text-[#5A3846] dark:text-[#E6D0C2] font-bold">
            <span>Overall Track Progress:</span>
            <span className="text-brand-terra dark:text-[#FF5528]">
              {completedCount} of {totalCount} Milestones
            </span>
          </div>
          <span className="font-extrabold text-sm text-[#2E0E1D] dark:text-[#FFF0E3]">
            {percentage}%
          </span>
        </div>

        <div className="h-2.5 w-full bg-[#FAF0E6] dark:bg-[#140A10] rounded-full overflow-hidden border border-[#EAD3C4]/40 dark:border-[#EAD3C4]/10">
          <motion.div
            className="h-full bg-gradient-to-r from-brand-terra via-[#FF5528] to-dev-cyan rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          />
        </div>

        {percentage === 100 && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/30 flex items-center gap-2 text-xs font-dm font-semibold text-emerald-800 dark:text-emerald-300"
          >
            <Sparkles size={16} className="text-emerald-500 shrink-0" />
            <span>Outstanding work! You have completed all curriculum milestones. Ready for final capstone code review!</span>
          </motion.div>
        )}
      </div>

      {/* Modules Checklist */}
      <div className="p-5 sm:p-6 divide-y divide-[#EAD3C4]/60 dark:divide-[#EAD3C4]/15">
        {modules.map((mod, modIdx) => {
          const modMilestones = mod.milestones
          const modCompleted = modMilestones.filter((m) => completedIds[m.id]).length
          const modTotal = modMilestones.length

          return (
            <div key={modIdx} className={modIdx === 0 ? 'pb-6' : 'py-6'}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-brand-terra/10 text-brand-terra border border-brand-terra/25">
                    Module {mod.moduleNumber}
                  </span>
                  <h4 className="font-syne font-bold text-base text-[#2E0E1D] dark:text-[#FFF0E3]">
                    {mod.title}
                  </h4>
                </div>

                <span className="text-xs font-mono text-[#7A4A38] dark:text-[#B88E7D]">
                  {modCompleted}/{modTotal} completed
                </span>
              </div>

              {/* Milestones in this module */}
              <div className="space-y-2 mt-3">
                {mod.milestones.map((item) => {
                  const done = Boolean(completedIds[item.id])

                  return (
                    <button
                      key={item.id}
                      onClick={() => toggleMilestone(item.id)}
                      className={`w-full text-left p-3 rounded-xl border transition-all duration-150 flex items-start gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terra cursor-pointer ${
                        done
                          ? 'bg-brand-terra/5 dark:bg-brand-terra/10 border-brand-terra/30 text-[#2E0E1D] dark:text-[#FFF0E3]'
                          : 'bg-[#FAF0E6]/60 dark:bg-[#25121E]/60 border-[#EAD3C4] dark:border-[#EAD3C4]/15 hover:bg-[#FAF0E6] dark:hover:bg-[#25121E] text-[#5A3846] dark:text-[#E6D0C2]'
                      }`}
                    >
                      <div className="shrink-0 mt-0.5">
                        {done ? (
                          <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                          >
                            <CheckCircle2 size={18} className="text-brand-terra dark:text-[#FF5528] fill-brand-terra/10" />
                          </motion.div>
                        ) : (
                          <Circle size={18} className="text-[#C4A0B8] dark:text-[#7A4A38] group-hover:text-brand-terra transition-colors" />
                        )}
                      </div>

                      <div className="flex-1">
                        <div
                          className={`text-xs sm:text-sm font-dm font-medium leading-tight ${
                            done ? 'line-through text-[#C4A0B8] dark:text-[#7A4A38]' : 'text-[#2E0E1D] dark:text-[#FFF0E3]'
                          }`}
                        >
                          {item.title}
                        </div>
                        {item.description && (
                          <p className="text-xs text-[#7A4A38] dark:text-[#B88E7D] font-dm mt-0.5 leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
