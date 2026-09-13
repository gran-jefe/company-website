'use client'

import React, { useState } from 'react'
import { Check, Copy, Terminal } from 'lucide-react'

interface CodeTab {
  id: string
  filename: string
  language: string
  code: string
}

interface CodeWindowProps {
  tabs: CodeTab[]
  activeTabId?: string
  title?: string
  className?: string
  showLineNumbers?: boolean
}

export function CodeWindow({
  tabs,
  activeTabId,
  title,
  className = '',
  showLineNumbers = true,
}: CodeWindowProps) {
  const [selectedTabId, setSelectedTabId] = useState(activeTabId || tabs[0]?.id || '')
  const [copied, setCopied] = useState(false)

  const activeTab = tabs.find((t) => t.id === selectedTabId) || tabs[0]

  const handleCopy = () => {
    if (!activeTab) return
    navigator.clipboard.writeText(activeTab.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      className={`rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/90 shadow-2xl overflow-hidden backdrop-blur-md transition-all duration-300 ${className}`}
    >
      {/* Window Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-zinc-100/80 dark:bg-zinc-900/80 border-b border-zinc-200 dark:border-zinc-800 select-none">
        {/* Left: Window Controls (dots) & Tabs */}
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>

          {title && (
            <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-zinc-500 dark:text-zinc-400 font-medium px-2 border-r border-zinc-200 dark:border-zinc-800">
              <Terminal size={12} className="text-brand-terra" />
              <span>{title}</span>
            </div>
          )}

          {/* File Tabs */}
          <div className="flex items-center gap-1">
            {tabs.map((tab) => {
              const isActive = tab.id === selectedTabId
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTabId(tab.id)}
                  className={`px-3 py-1 text-xs font-mono rounded-md transition-colors flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-white dark:bg-zinc-800 text-brand-terra dark:text-brand-ember font-semibold shadow-sm border border-zinc-200/50 dark:border-zinc-700/50'
                      : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50'
                  }`}
                >
                  <span className="opacity-60">#</span>
                  {tab.filename}
                </button>
              )
            })}
          </div>
        </div>

        {/* Right: Copy Button */}
        <button
          onClick={handleCopy}
          className="p-1.5 text-zinc-500 hover:text-brand-terra dark:text-zinc-400 dark:hover:text-brand-ember transition-colors rounded-md hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60 flex-shrink-0"
          title="Copy code"
          aria-label="Copy code"
        >
          {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
        </button>
      </div>

      {/* Code Area */}
      <div className="p-4 overflow-x-auto font-mono text-xs md:text-sm leading-relaxed text-zinc-800 dark:text-zinc-200">
        {activeTab && (
          <pre className="flex">
            {showLineNumbers && (
              <div className="flex flex-col pr-4 border-r border-zinc-200 dark:border-zinc-800 text-zinc-400 dark:text-zinc-600 select-none text-right font-mono min-w-[2.5rem]">
                {activeTab.code.split('\n').map((_, i) => (
                  <span key={i}>{i + 1}</span>
                ))}
              </div>
            )}
            <code className="pl-4 flex-1 block">
              {activeTab.code.split('\n').map((line, i) => (
                <div key={i} className="hover:bg-brand-terra/5 px-1 rounded transition-colors">
                  {renderSyntaxHighlighting(line)}
                </div>
              ))}
            </code>
          </pre>
        )}
      </div>
    </div>
  )
}

// Simple lightweight client syntax highlighter helper
function renderSyntaxHighlighting(line: string) {
  if (!line) return <span>&nbsp;</span>

  // Comments
  if (line.trim().startsWith('//') || line.trim().startsWith('#')) {
    return <span className="text-zinc-400 italic dark:text-zinc-500">{line}</span>
  }

  // Basic regex token replacements for standard code presentation
  const tokens = line.split(/(\s+|[{}(),;:<>[\]="'`.]|\b(?:import|export|from|const|let|var|function|return|async|await|type|interface|class|public|private|new|try|catch|if|else|switch|case|default|select|where|insert|delete)\b)/g)

  return (
    <>
      {tokens.map((token, idx) => {
        if (!token) return null

        // Keywords
        if (/^(import|export|from|const|let|var|function|return|async|await|type|interface|class|public|private|new|try|catch|if|else|switch|case|default|select|where|insert|delete)$/.test(token)) {
          return <span key={idx} className="text-purple-600 dark:text-purple-400 font-semibold">{token}</span>
        }

        // Strings
        if (/^(['"`]).*\1$/.test(token) || (token.startsWith('"') || token.startsWith("'"))) {
          return <span key={idx} className="text-emerald-600 dark:text-emerald-400">{token}</span>
        }

        // Functions / Types
        if (/^[A-Z][a-zA-Z0-9_]*$/.test(token)) {
          return <span key={idx} className="text-amber-600 dark:text-amber-400">{token}</span>
        }

        // Numbers / Booleans
        if (/^\d+$/.test(token) || /^(true|false|null|undefined)$/.test(token)) {
          return <span key={idx} className="text-rose-500 dark:text-rose-400">{token}</span>
        }

        // Brand accents for special calls
        if (token === 'GranJefe' || token === 'granjefe') {
          return <span key={idx} className="text-brand-terra font-bold">{token}</span>
        }

        return <span key={idx}>{token}</span>
      })}
    </>
  )
}
