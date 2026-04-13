# Gran Jefe — Company Website

> We build the products others can't.

A modern, production-grade website for Gran Jefe, a technical solutions company specializing in mobile apps, web apps, backend systems, and fintech products.

## 🌟 Features

- **🎨 Dual-Mode Design**: Seamless dark/light mode with system preference detection
- **📱 Fully Responsive**: Mobile-first design works on all devices (mobile, tablet, desktop)
- **⚡ High Performance**: Optimized with Next.js 16, Tailwind CSS v4, and modern best practices
- **🎭 Smooth Animations**: Scroll-triggered fade-in animations using Framer Motion
- **♿ Accessible**: WCAG AA compliant with focus rings and semantic HTML
- **🎯 SEO Optimized**: Full metadata, Open Graph tags, and structured semantics
- **📦 SVG-Native**: All graphics are SVG (no raster images)
- **🚀 Deployment Ready**: Production-grade build with zero errors/warnings

## 🛠 Tech Stack

### Frontend
- **[Next.js 16](https://nextjs.org/)** — React framework with server-side rendering
- **[TypeScript](https://www.typescriptlang.org/)** — Type-safe JavaScript
- **[Tailwind CSS v4](https://tailwindcss.com/)** — Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** — Smooth animations and transitions
- **[next-themes](https://github.com/pacocoursey/next-themes)** — Dark mode management
- **[lucide-react](https://lucide.dev/)** — Beautiful SVG icon library

### Design System
- **Custom Brand Colors**: Terra, Ember, Base, Deep, Cream, Clay, Teal, and more
- **Typography**: Syne (headings) + DM Sans (body)
- **Grid System**: Responsive layouts with Tailwind CSS
- **Theme Variables**: CSS custom properties for dynamic theming

### Tools & Build
- **Turbopack** — Fast Next.js compilation
- **PostCSS** — CSS processing
- **ESLint** — Code quality

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with fonts, metadata, Providers
│   ├── page.tsx                # Home page (assembles sections)
│   ├── providers.tsx           # next-themes ThemeProvider
│   ├── globals.css             # Global styles, CSS variables, scrollbar
│   └── favicon.ico             # App favicon
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky navigation with mobile menu
│   │   └── Footer.tsx          # Footer with links and copyright
│   │
│   ├── sections/
│   │   ├── Hero.tsx            # Hero section with geometric patterns
│   │   ├── Services.tsx        # 6 service offerings (2×3 grid)
│   │   ├── Stack.tsx           # Tech stack with categorized pills
│   │   ├── About.tsx           # Company story with stat cards
│   │   ├── Work.tsx            # Portfolio placeholder
│   │   └── Contact.tsx         # CTA section with mailto & socials
│   │
│   └── ui/
│       ├── Logo.tsx            # SVG logo (dark/light/auto variants)
│       ├── Button.tsx          # CTA button (filled/outlined)
│       ├── ThemeToggle.tsx     # Sun/Moon theme switcher
│       ├── SectionLabel.tsx    # Reusable section pill label
│       └── AnimatedSection.tsx # Scroll-triggered fade wrapper
│
└── lib/
    └── utils.ts                # Utility helpers (cn() classname function)

public/
├── favicon.svg                 # SVG favicon
└── favicon-400x400.png        # 400×400 PNG version

tailwind.config.ts             # Tailwind configuration with brand colors
postcss.config.mjs             # PostCSS config
next.config.ts                 # Next.js config
tsconfig.json                  # TypeScript config
package.json                   # Dependencies & scripts
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ (recommended: 20 LTS)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd company-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Development

### Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

### Key Features & Usage

#### Dark Mode Toggle
The theme toggle button (☀️/🌙) in the navbar:
- Automatically detects system preference on first load
- Saves user preference to localStorage
- Applies smooth transitions between themes
- Works with Tailwind's `dark:` prefix classes

#### Scroll Navigation
All navigation links use smooth scroll to sections:
- Navbar links scroll to: `#services`, `#stack`, `#about`, `#work`, `#contact`
- Active section highlighting in navbar
- Mobile hamburger menu with same links

#### Animations
Sections animate in on scroll using Framer Motion:
- Fade-up with staggered children
- Once-per-page (no repeated animations)
- Configurable delays for sequenced effects

#### Responsive Design
Built mobile-first:
- **Mobile**: Single column, full-width (375px+)
- **Tablet**: 2-column layouts (768px+)
- **Desktop**: 3-column grids and multi-column (1280px+)

### Color Palette

| Color | Light | Dark | Usage |
|-------|-------|------|-------|
| **Base** | — | #1C1118 | Dark backgrounds |
| **Cream** | #FDF4EE | — | Light backgrounds |
| **Terra** | #C4522A | #C4522A | Primary buttons, accents |
| **Ember** | #E8764A | #E8764A | Hover states |
| **Clay** | #7A4A38 | — | Secondary text (light) |
| **Plumtext** | — | #C4A0B8 | Secondary text (dark) |
| **Teal** | #1D9E75 | #1D9E75 | Accent highlights |

### Customizing Content

#### Update Company Info
Edit `src/app/layout.tsx`:
```tsx
export const metadata: Metadata = {
  title: 'Your Company — Your tagline',
  description: 'Your company description...',
  // ... more metadata
};
```

#### Add Navigation Links
Edit `src/components/layout/Navbar.tsx`:
```tsx
const navItems = [
  { label: 'Your Link', href: '#your-section' },
  // ... more items
];
```

#### Customize Services
Edit `src/components/sections/Services.tsx` — update the `services` array with your offerings.

#### Update Contact Links
Edit `src/components/sections/Contact.tsx` — change email and social URLs.

## 🔨 Build & Deployment

### Production Build

```bash
npm run build
```

This creates an optimized production build in `.next/` with:
- ✅ Zero TypeScript errors
- ✅ Zero build warnings
- ✅ Minified CSS and JavaScript
- ✅ Static page pre-rendering

### Deployment Options

The site is **fully static** and can be deployed to:
- **[Vercel](https://vercel.com/)** (recommended — Next.js creators)
  ```bash
  npm i -g vercel
  vercel
  ```
- **[Netlify](https://netlify.com/)**
- **[GitHub Pages](https://pages.github.com/)**
- **Any static hosting** (AWS S3, Cloudflare Pages, etc.)

## 📊 Performance

### Core Web Vitals
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Optimizations
- Next.js 16 with Turbopack compilation
- Image optimization (SVG only, no raster images)
- Font optimization with `next/font`
- CSS-in-JS with Tailwind (no unused styles)
- Lazy-loaded sections below the fold

## ♿ Accessibility

- **WCAG AA Compliant**: Color contrast ratios meet AA standards
- **Semantic HTML**: Proper use of `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- **Focus Indicators**: Blue ring on keyboard navigation
- **ARIA Labels**: Buttons and interactive elements labeled
- **Theme Support**: Respects `prefers-color-scheme` system setting

## 🐛 Troubleshooting

### Dark Mode Not Working
- Hard refresh browser (Cmd+Shift+R / Ctrl+Shift+R)
- Clear `localStorage` and try again
- Check if JavaScript is enabled

### Fonts Not Loading
- Clear browser cache
- Check network tab in DevTools
- Ensure `next/font` is imported correctly in `layout.tsx`

### Build Errors
- Delete `node_modules/` and `.next/` folders
- Run `npm install` again
- Try `npm run build`

## 📄 License

This project is proprietary. All rights reserved by Gran Jefe.

## 📧 Contact

**Gran Jefe**
- Email: [hello@granjefe.com](mailto:hello@granjefe.com)
- Location: Abuja, Nigeria 🇳🇬
- Working: Globally 🌍

## 🤝 Contributing

This is a company website. For feature requests or bug reports, please contact the team directly.

---

**Built with ❤️ by Gran Jefe**  
*We build the products others can't.*
