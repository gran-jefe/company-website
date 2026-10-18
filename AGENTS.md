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

4. **The Premium UI Design Standard (Playbook 02: Clarity, Restraint, Consistency)**:
   - **The Guiding Rule**: Premium does not mean more gradients, more shadows, or more cards. It means fewer competing elements, stronger hierarchy, thoughtful spacing, refined details, and consistent execution.
   - **One-Screen Test**: Page purpose, key info, and primary action must be obvious in 3-5 seconds.
   - **Action Hierarchy**: Exactly **one primary action per decision area**. Lower-priority actions must be secondary/text. Use specific labels ("Save changes", "Send inquiry" vs "Continue").
   - **Tokens & Scales**:
     - Spacing: 4px base (`4, 8, 12, 16, 24, 32, 40, 48px`).
     - Radii: Compact scale (`6, 10, 14, 20px` + pill only for small badges/toggles).
     - Typography: Defined roles (Display 40-56px, Page title 28-36px, Section heading 18-24px, Body 14-16px, Helper 12-14px). Sentence case standard.
   - **Mandatory State Matrix**: Every interactive control must intentionally design all 9 states: Default, Hover, Focus, Pressed, Loading/Pending (with disabled duplicate action), Success, Empty, Error, Disabled.
   - **8 Premium Traps to Actively Avoid**:
     1. *No gradient everywhere*: Reserve gradients for meaningful emphasis.
     2. *No glassmorphism by default*: Translucent materials only when depth genuinely benefits.
     3. *No cards for every element*: Avoid card-on-card nesting. Use layout & whitespace first.
     4. *No excessive rounding*: Consistent, small radius scale.
     5. *No oversized hero layouts in tools*: Keep headers compact so working data sits above the fold.
     6. *No muted text everywhere*: Muted tones only for secondary facts; verify contrast.
     7. *No decorative animation*: Quick and calm 120–220ms transitions.
     8. *No synthetic filler*: Avoid random floating shapes or generic stock elements.
<!-- END:developer-portfolio-ux-rules -->

