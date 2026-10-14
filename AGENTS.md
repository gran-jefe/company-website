<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:developer-portfolio-ux-rules -->
# Developer Portfolio & Client UX Standards

1. **Human & Business Outcome First**:
   - Do NOT display intimidating raw code snippets (TypeScript functions, configuration dumps, raw SQL queries) on agency or studio marketing pages.
   - Replace raw code editor blocks with **Interactive Visual Performance Consoles** (Google Lighthouse speed scores, mobile UX simulators, 256-bit SSL security badges).
   - Communicate in terms of business impact: *Sub-Second Page Speed, Top Google Search Rankings, Zero Downtime, and High Conversion*.

2. **Next.js 16 Build Stability**:
   - Ensure `package.json` uses `"build": "next build --webpack"` to prevent Turbopack PostCSS worker process panics during static prerendering.

3. **12 UI/UX Non-Negotiables & Product Quality Gate**:
   - **Touch Targets**: Minimum 44x44px interactive tap targets (`min-h-[44px] min-w-[44px]`), aria-labels on icon-only buttons.
   - **Form Validation**: Live inline errors with high contrast, never wipe user inputs on failure.
   - **Loading Protection**: Disable submit buttons during pending state, display inline spinners/skeletons.
   - **Empty States**: High-intent guidance with icons, clear copy, and direct actionable CTAs.
   - **Typographic Polish**: Avoid unescaped em-dashes (`—`) in copy; maintain clean visual hierarchy.
   - **WCAG AA Contrast**: Minimum 4.5:1 text-to-background contrast ratio.
   - **Focus & Keyboard Navigation**: Clear focus rings (`focus-visible:ring-2`), ESC key dismisses overlays.
   - **Reduced Motion**: Respect `prefers-reduced-motion: reduce`, avoid layout shifts.
   - **Mobile Responsiveness**: Zero horizontal overflow scrollbars across all screen widths.
   - **Feedback Loops**: Instant toast or banner confirmation on state changes and submissions.
   - **Safe Client Persistence**: `localStorage` preference management safely wrapped with error handling and expiry.
   - **Automated CLI Gate**: Run `npm run quality-gate` to audit components against these rules.
<!-- END:developer-portfolio-ux-rules -->

