import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-base':     '#1C1119',
        'brand-deep':     '#3E1F2E',
        'brand-terra':    '#C4532B',
        'brand-ember':    '#E9764A',
        'brand-teal':     '#1D9E75',
        'brand-cream':    '#FDF4ED',
        'brand-blush':    '#F0C8B0',
        'brand-clay':     '#7A4A38',
        'brand-mint':     '#E1F5EE',
        'brand-plumtext': '#C4A0B8',
        'brand-white':    '#FFFFFF',
      },
      fontFamily: {
        syne: ['Satoshi', 'sans-serif'],
        dm:   ['Satoshi', 'sans-serif'],
      },
      animation: {
        'fade-up':   'fadeUp 0.6s ease forwards',
        'fade-in':   'fadeIn 0.5s ease forwards',
        'slide-in':  'slideIn 0.5s ease forwards',
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
      },
    },
  },
  plugins: [],
}
export default config
