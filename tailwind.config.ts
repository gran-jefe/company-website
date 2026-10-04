import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-base':     '#2E0E1D', // Deep aubergine / plum black from logo
        'brand-deep':     '#240B16', // Deepest velvet plum
        'brand-wine':     '#361122', // Wine background from new_logo_dark.png
        'brand-terra':    '#D53000', // Vermilion / terracotta from logo
        'brand-ember':    '#E9764A', // Vibrant ember
        'brand-teal':     '#1D9E75', // Verified mint
        'brand-cream':    '#FFF0E3', // Exact background from new_logo_light.png
        'brand-warm':     '#FAF0E6', // Soft warm surface
        'brand-blush':    '#F0C8B0', // Soft blush accent
        'brand-clay':     '#7A4A38', // Warm clay
        'brand-border':   '#EAD3C4', // Soft warm border
        'brand-border-dark': '#4A2033', // Deep wine border
        'brand-muted':    '#6C4B59', // Muted plum body text
        'brand-mint':     '#E1F5EE',
        'brand-plumtext': '#C4A0B8',
        'brand-white':    '#FFFFFF',
        'dev-cyan':       '#00F0FF',
        'dev-emerald':    '#10B981',
        'dev-violet':     '#8B5CF6',
        'dev-amber':      '#F59E0B',
        'dev-dark':       '#240B16',
        'dev-card':       '#2E0E1D',
        'dev-border':     '#4A2033',
      },
      fontFamily: {
        syne: ['Satoshi', 'sans-serif'],
        dm:   ['Satoshi', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      animation: {
        'fade-up':   'fadeUp 0.6s ease forwards',
        'fade-in':   'fadeIn 0.5s ease forwards',
        'slide-in':  'slideIn 0.5s ease forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%':   { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(196, 83, 43, 0.3)' },
          '50%': { boxShadow: '0 0 25px rgba(233, 118, 74, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
