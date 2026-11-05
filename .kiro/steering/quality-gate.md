---
inclusion: always
---
# Product Quality Gate: Functional UX & Premium UI Design Standard

Every frontend application, component, page, or feature built or modified in this workspace must adhere to the four integrated pillars of product quality:
- **Pillar 1: Functional UX Non-Negotiables** (Does the product work reliably and effortlessly for people?)
- **Pillar 2: The Premium UI Design Standard** (Does the visual experience feel considered, restrained, and high quality?)
- **Pillar 3: Mobile Native Standards (React Native & Expo)** (Mobile touch ergonomics, double-tap protection, safe areas, AsyncStorage)
- **Pillar 4: Intent Alignment & The Anti-Generic Standard** (Archetype fidelity: Playful, Tech, Serious, Creative; Zero AI buzzwords, zero cliché emojis, zero filler)

---

## Pillar 1: Functional UX Non-Negotiables

### 1. Touch Targets & Mobile Ergonomics
- All interactive elements (buttons, links, form toggles, close buttons) must have a minimum interactive tap target of **44x44px** (`min-h-[44px] min-w-[44px]` in Tailwind) on touch devices.
- Icon-only buttons must provide explicit `aria-label` attributes and an expanded hit-box (`p-2.5` to `p-3`).

### 2. Form Validation & Error States
- Never submit forms blindly. Every input must have live validation on blur or change.
- Error states must be visually distinct (red border, alert icon, descriptive error message) and linked via accessible labeling (`aria-invalid="true"`, `aria-describedby`).
- Forms must never clear previously entered user data when an error occurs. Keep validation close: show field-level guidance beside the problem.

### 3. Loading, Pending, & Double-Click Protection
- Every asynchronous action (form submission, data fetching, checkout, modal trigger) must display an immediate inline spinner, skeleton, or progress state.
- Buttons must be immediately disabled (`disabled={loading}`) while async actions are in flight to prevent duplicate submissions or race conditions.

### 4. High-Intent Empty States
- Never leave a user with a blank viewport, empty table, or dead-end list.
- Empty states must contain:
  1. A meaningful icon or visual illustration.
  2. A clear explanation of why nothing is shown.
  3. A direct call-to-action (CTA) to create, filter reset, or learn more.

### 5. Typographic Polish & Hierarchy
- User-facing copy must avoid unintended raw em-dashes (`—`) or awkward punctuation unless intentionally stylized.
- Maintain consistent headline casing, proper paragraph line-heights (`leading-relaxed`), and legible hierarchy (`h1` > `h2` > `h3`). Use sentence case standard; reserve all-caps for compact metadata/status tokens.

### 6. Contrast & Readability (WCAG 2.1 AA)
- Text contrast must meet or exceed WCAG 2.1 AA requirements:
  - Minimum 4.5:1 contrast ratio for normal text.
  - Minimum 3:1 contrast ratio for large text (18pt / 24px or 14pt / 18.7px bold).
- Avoid low-contrast text on muted backgrounds. Check contrast on actual pairings (badges, disabled states, gradients, text over images).

### 7. Keyboard Navigation & Focus Rings
- All interactive components must be reachable and operable using `Tab` and `Shift+Tab`.
- Do not suppress browser focus rings without providing custom accessible focus styles (`focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500 outline-none`).
- Overlays, popups, and dialogs must trap focus when open and close cleanly on `Escape`.

### 8. Reduced Motion & Performance
- Animations must be tasteful, purposeful, and respect `prefers-reduced-motion: reduce`.
- Optimize Largest Contentful Paint (LCP) and avoid Cumulative Layout Shift (CLS) by specifying dimensions on images, videos, and dynamic containers.

### 9. Viewport & Zero Horizontal Overflow
- Ensure 100% responsiveness from 320px mobile screens to 4K ultra-wide monitors.
- Never allow uncontrolled horizontal body scroll (`overflow-x: hidden` safety where needed, with fluid flex and grid containers).

### 10. Clear Feedback Loops & State Changes
- Every state change or user submission must produce clear visual feedback (toast notification, confirmation banner, or updated state).
- Feedback messages must be understandable, non-blocking, and dismissible.

### 11. Safe Client Persistence
- For non-sensitive client preferences (e.g. dismissed banners, closed popups, selected theme), use `localStorage` safely with fallback handling (`try/catch`) and timestamps or expiry logic.

### 12. Human & Business Outcome First
- Avoid intimidating, developer-centric jargon or raw code dumps on consumer/client-facing interfaces.
- Focus copy and metrics on business outcomes: speed, reliability, conversion, security, and delightful usability.

---

## Pillar 2: The Premium UI Design Standard (Visual Craft & Restraint)

### The Guiding Rule
> **Premium does not mean more gradients, more shadows, more animation, or more cards.** It means better judgement: fewer competing elements, stronger hierarchy, thoughtful spacing, refined details, and consistent execution.

### 1. The Premium Visual Mindset (3 Pillars: Clarity, Restraint, Consistency)
- **Clarity before decoration**: The visual hierarchy must make page purpose, key info, and primary action obvious in 3-5 seconds (The One-Screen Test).
- **Restraint creates emphasis**: When every element is loud, nothing is important. Use colour, weight, scale, borders, and motion selectively.
- **Consistency creates confidence**: A repeated, reliable visual language feels deliberate. Ban unexplained exceptions (one-off colours, radii, or shadows).
- **Alignment signals craft**: Edges, baselines, columns, icons, labels, and controls must line up with intention.
- **Real content is the design**: Design for long names, empty data, large numbers, errors, and dense tables—never just ideal placeholder copy.
- **Useful details beat visual tricks**: A purposeful status badge, clear focus state, or well-written empty state is worth more than ornamental effects.

### 2. Tokenized Scale & Hierarchy Standards
- **Typography Tokens**:
  - `Display / Hero`: 40–56px desktop (scale down responsively).
  - `Page title`: 28–36px desktop; 24–30px compact. (One clear page title; do not compete with primary action).
  - `Section heading`: 18–24px.
  - `Body text`: 14–16px. Comfortable reading size.
  - `Labels / Helper`: 12–14px. Never rely on tiny text for key facts.
  - *Rule*: Legibility over thinness. Sentence case standard. Controlled line length (narrow reading columns).
- **Spacing (4px Base Scale)**:
  - Scale: `4, 8, 12, 16, 24, 32, 40, 48px`.
  - Inside components: 8–16px.
  - Between sections: 24–40px.
  - Page gutters: 16–24px mobile; 24–40px desktop.
  - Content never collides with viewport edges.
- **Surfaces & Radii Scale**:
  - Compact radius scale: `6, 10, 14, 20px` (+ pill only when appropriate for small badges or toggles). Avoid mixing sharp, pill, and highly rounded containers casually.
  - Separation by layout first: Whitespace, alignment, and background tone before adding shadows. Small elevation scale (flat, subtly raised, overlay/modal).
  - Borders as structure: Thin, low-contrast borders make controls and data tables crisp.

### 3. Component Architecture & Action Hierarchy
- **Buttons**:
  - Exactly **one primary action per decision area**. Several equally prominent primary buttons create uncertainty. Lower-priority options must be secondary, tertiary, or text actions.
  - Specific labels: Prefer "Save changes", "Send inquiry", "Invite member" to vague labels like "Continue".
- **Cards, Tables, & Dialogs**:
  - *Cards*: Use only when a group needs a container. Avoid card-on-card nesting and shadows on every surface.
  - *Tables*: Align numeric data to the right, keep row rhythm consistent, use clear sort/filter states.
  - *Dialogs*: Clear title, concise consequence, obvious safe exit (ESC key + close icon), single distinct primary action.
  - *Badges*: Compact and semantic; labels must make sense without colour alone.
- **Icons**: Single coherent icon family (matching stroke, optical weight, size, alignment). Never mix emoji, filled glyphs, and thin line icons casually.

### 4. Mandatory State Matrix
Every interactive component must intentionally design all 9 states:
1. `Default`: The control or section is ready.
2. `Hover`: Unmistakable interaction target.
3. `Focus`: Visible keyboard focus ring (never dependent on hover).
4. `Pressed`: Tactile feedback on click/press.
5. `Loading / Pending`: Progress indicator, disabled duplicate action, stable layout.
6. `Success / Complete`: Specific confirmation and updated content/status.
7. `Empty / First Use`: Explain why, show helpful next step, avoid blank dead end.
8. `Error / Offline`: Plain-language explanation, recovery option, preserve user work.
9. `Disabled / Unavailable`: Clear appearance with explanation when reason is not obvious.

### 5. Motion Rules
- Animate with purpose: Explain a state change, preserve spatial continuity, or confirm an interaction.
- Duration: Quick and calm (120–220ms).
- Restrained easing: Avoid bouncy, springy, or dramatic physics in serious workflows.
- Never delay work for decoration. Motion must not make common tasks slower.
- Motion quality test: If animation is disabled, the product must still make complete sense.

---

## 8 Premium Traps to Actively Avoid

| Trap | Why it weakens the product | Better standard |
|---|---|---|
| **Gradient everywhere** | Destroys hierarchy and dates the visual language | Reserve gradients for a specific brand moment or meaningful emphasis |
| **Glassmorphism by default** | Impairs contrast and makes content feel fragile | Use translucent materials only when depth or context genuinely benefits |
| **Cards for every element** | Creates visual noise and unnecessary nested surfaces | Use layout, spacing, and typography before adding a container |
| **Excessive rounding** | Makes every component feel soft and indistinguishable | Define a small radius scale (6, 10, 14, 20px) and use roles consistently |
| **Oversized hero layouts in tools** | Pushes useful information below the fold | Give task-based products compact, clear working headers |
| **Muted text everywhere** | Looks subtle but destroys readability and hierarchy | Use muted tones only for genuinely secondary info and verify contrast |
| **Decorative animation** | Slows tasks and competes for user attention | Use motion to explain a change or acknowledge an action (120–220ms) |
| **Generic template appearance** | Lacks recognisable product identity | Create a restrained brand language from typography, colour, imagery, and detail |

---

## Pillar 3: Mobile Native Standards (React Native & Expo)

### 1. Touch Ergonomics & Hit Slop
- All interactive controls (`TouchableOpacity`, `Pressable`, `TouchableHighlight`) must maintain a minimum hit target of 44x44 points.
- For compact icons (<44pt), use `hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}` or wrap in a container with `minWidth: 44, minHeight: 44`.
- All icon-only touchables must provide explicit `accessibilityLabel` and `accessibilityRole="button"`.

### 2. Double-Tap Protection & Loading States
- Action triggers that invoke mutations, network requests, or checkouts must bind `disabled={loading}`.
- Native `ActivityIndicator` must be displayed during in-flight operations with consistent color and scale.

### 3. High-Intent Empty Lists
- Every `FlatList` and `SectionList` must implement `ListEmptyComponent`.
- Never show an uncommunicative blank screen when a list or feed has zero records. Always display an icon, explanation, and an actionable retry or add CTA.

### 4. Platform-Safe Persistence
- NEVER access `localStorage` in React Native files (which causes unhandled exceptions in native JavaScript engines).
- Use `@react-native-async-storage/async-storage` or `react-native-mmkv` with mandatory `try/catch` wrappers and error fallback handling.

### 5. Keyboard & Input Handling
- Screens with text fields must handle soft keyboard dismissal and offsets via `KeyboardAvoidingView` or `ScrollView` with `keyboardShouldPersistTaps="handled"`.
- Email, username, and code `TextInput` components must configure `autoCapitalize="none"`, `autoCorrect={false}`, and semantic `keyboardType`.

### 6. Edge-to-Edge & Safe Area Insets
- Do NOT import deprecated `SafeAreaView` from `'react-native'` (breaks on modern Android 15 edge-to-edge).
- Use `react-native-safe-area-context` (`useSafeAreaInsets`, `SafeAreaProvider`, `SafeAreaView`).

### 7. Responsive Layout & Screen Rotation
- Never store `Dimensions.get('window')` at file module scope.
- Use the `useWindowDimensions()` hook or responsive flex layouts so screens adapt seamlessly to orientation changes and foldable displays.

---

## Pillar 4: Intent Alignment & The Anti-Generic Standard

Design must reflect the application's domain covenant and emotional purpose. Eliminate any sign of "generic AI template syndrome":

### 1. The 4 Intent Archetypes
- **Playful & Friendly** (Babies, Toddlers, Kids, Pets, Casual Games, Community):
  - *Visual Language*: Soft tactile radii (`14px - 24px`, pill buttons), warm or uplifting color palettes (soft corals, ambers, mints, sky), rounded friendly typography.
  - *Tone & Copy*: Encouraging, warm, plain-language, conversational, delightful without being condescending.
  - *Interactions*: Gentle spring or bounce micro-interactions, cheerful confirmation feedback, expressive celebrations for accomplishments.
  - *Anti-Pattern*: Sterile enterprise tables, harsh sharp monochrome borders, overly dense technical data sheets, intimidating jargon.
- **Technical & Engineering** (Developer Tools, Cloud, Infrastructure, Telemetry, Diagnostics):
  - *Visual Language*: Crisp precise borders (`1px` subtle lines), compact radius scale (`4px - 8px`), high data density, monospace or technical sans typography for metrics/code/logs, dark/graphite or instrument-light palettes with functional status hues (emerald for healthy, amber for warning, cyan/sky for streaming).
  - *Tone & Copy*: Objective, factual, concise, telemetry-focused, metric-driven (latencies, bytes, timestamps, error codes).
  - *Interactions*: Instantaneous transitions (<120ms), keyboard shortcuts, rich filtering, inspectable logs, dense tables with monospace numbers.
  - *Anti-Pattern*: Fluffy marketing fluff, cartoony mascots where diagnostic telemetry is needed, oversized empty hero sections pushing working consoles below the fold.
- **Serious & High-Trust** (Fintech, Banking, Legal, Medical, Enterprise Security):
  - *Visual Language*: Restrained, disciplined palette (slate, navy, deep forest, warm neutrals), crisp structure, refined typography (authoritative serif accents or rigorous editorial sans), dignified whitespace, clear audit trails, SSL/SOC2/compliance badges.
  - *Tone & Copy*: Calm, precise, reassuring, unambiguous. Explicit consequences on actions ("Transfer $5,000", "Irreversible action"), zero colloquial sarcasm or trendy hype.
  - *Interactions*: Deliberate confirmations for irreversible actions, secure biometric/2FA indicators, zero whimsical bouncy animations.
  - *Anti-Pattern*: Casual conversational quirks during checkout/financial transfer, frivolous bouncy animations (`animate-bounce`) or confetti during serious financial decisions, playful neon pastels that erode trust.
- **Creative, Editorial & Lifestyle** (Design Studios, Architecture, Luxury, Media, Fashion):
  - *Visual Language*: Bold expressive typography with intentional scale contrasts, deliberate asymmetry or grid rigor, bespoke photography/media art direction, refined micro-typography, generous whitespace.
  - *Tone & Copy*: Evocative, curated, perspective-driven, narrative craft.
  - *Interactions*: Smooth cinematic transitions, tactile hover states, contextual pagination.
  - *Anti-Pattern*: Cookie-cutter SaaS 3-box feature cards, generic stock vectors, SaaS pricing tables where bespoke portfolios belong.

### 2. The Anti-Generic AI/Template Rules
1. **Ban Generic AI Buzzwords**: Never use "Transform your workflow", "Empower your team", "Next-gen all-in-one platform", "Unleash the power of AI", "Revolutionize the way you...", "Supercharge your productivity". Ground copy in concrete business outcomes and domain verbs.
2. **Ban Emoji Crutches in Serious Interfaces**: Never use `🚀`, `✨`, `💡`, `🔥`, `🧠`, `⚡` in titles or as substitutes for professional icon systems.
3. **Ban Template Placeholder Bleed**: Never ship "Lorem ipsum", "Feature 1", "Benefit 1", or generic card titles. Use domain-accurate data and authentic units.
4. **Zero Synthetic Filler**: Eliminate floating 3D spheres, random purple-indigo gradient blobs, and unmotivated decorative elements.

---

## Automated Verification
Run the universal quality-gate scanner at any time:
```bash
node ~/.claude/scripts/quality-gate.mjs
```
Or in projects with package.json scripts:
```bash
npm run quality-gate
```
