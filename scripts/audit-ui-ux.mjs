#!/usr/bin/env node

/**
 * Universal Product Quality Gate Scanner (Web & React Native / Expo)
 * Gran Jefe Studio Quality Standards
 *
 * Pillar 1: Functional UX Non-Negotiables (Playbook 01)
 * Pillar 2: The Premium UI Design Standard (Playbook 02)
 * Mobile Pillar: React Native & Touch Ergonomics
 *
 * Usage: npm run quality-gate [-- target-dir]   (defaults to this repository)
 *
 * This is a static scanner. It reports only what it can detect from source text;
 * the summary lists the standards that still need a human review.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Target the directory passed as an argument, or this repository's root
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TARGET_DIR = process.argv[2] ? path.resolve(process.argv[2]) : path.resolve(__dirname, '..');

const COLORS = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
  magenta: '\x1b[35m',
  dim: '\x1b[2m',
};

const IGNORED_DIRS = ['node_modules', '.next', '.git', 'dist', 'build', '.cache', 'coverage', '.expo', 'ios', 'android', 'out', '.vercel'];

// Rule names double as the summary's check list, so every check that runs is reported
const RULES = {
  doubleSubmit: 'Loading & Double-Click Protection (Rule 3)',
  iconLabel: 'Touch Targets & Ergonomics (Rule 1)',
  vagueLabel: 'Action Hierarchy & Specific Labels (Sec 04)',
  simulatedSuccess: 'Honest Feedback: No Simulated Success (Rule 10)',
  dialog: 'Dialog Semantics & Escape Dismissal (Rule 7)',
  focus: 'Keyboard Accessibility (Rule 7)',
  contrast: 'Contrast & Readability, same-element pairs (Rule 6)',
  reducedMotion: 'Reduced Motion (Rule 8)',
  emDash: 'Typographic Polish (Rule 5)',
  smallText: 'Typography Scale: 12px Minimum (Sec 02)',
  uppercase: 'Typography: Sentence Case Standard (Sec 02)',
  radius: 'Compact Radius Scale (Sec 03)',
  persistence: 'Safe Client Persistence (Rule 11)',
  nativeDoubleTap: 'Double-Tap & Race Condition Guard',
  nativeA11y: 'Mobile Accessibility & Screen Readers',
  nativeEmpty: 'High-Intent Empty States (Rule 4)',
  nativeSafeArea: 'Safe Area & Edge-to-Edge Ergonomics',
  nativeDimensions: 'Orientation & Dynamic Screen Geometry',
  nativeInput: 'Mobile Input Ergonomics',
  nativePersistence: 'Safe Native Persistence',
  buzzwords: 'Generic AI Buzzword Ban',
  emoji: 'Emoji Crutch Ban',
  placeholder: 'Template Placeholder Bleed',
  seriousArchetype: 'Serious Archetype Mismatch',
  playfulArchetype: 'Playful Archetype Mismatch',
  surfaceEffects: 'Premium Traps: Gradient & Glass Restraint',
};

const MANUAL_REVIEW = [
  'One-Screen Test: purpose, key info and primary action clear in 3-5s',
  'Exactly one primary action per decision area',
  'Mandatory 9-state matrix on every interactive control',
  'Contrast of text on inherited, gradient or translucent backgrounds',
  'Empty states on web lists and tables',
  'Zero horizontal overflow from 320px upwards',
  'Archetype cohesion and copy tone across the whole product',
];

function getCandidateDirs(baseDir) {
  // Check for common web and mobile source folders
  const candidates = ['src', 'app', 'screens', 'components', 'navigation', 'views', 'pages']
    .map(d => path.join(baseDir, d))
    .filter(p => fs.existsSync(p));
  return candidates.length > 0 ? candidates : [baseDir];
}

function getAllFiles(dirs, extensions = ['.tsx', '.jsx', '.ts', '.js']) {
  let files = [];
  function scan(dir) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (!IGNORED_DIRS.includes(entry.name)) {
          scan(fullPath);
        }
      } else if (extensions.includes(path.extname(entry.name))) {
        files.push(fullPath);
      }
    }
  }

  for (const d of dirs) {
    scan(d);
  }

  return [...new Set(files)];
}

const findings = [];

function addFinding({ severity, pillar, rule, message, file, line }) {
  findings.push({ severity, pillar, rule, message, file: path.relative(TARGET_DIR, file) || '.', line });
}

function lineAt(content, index) {
  return content.substring(0, index).split('\n').length;
}

function isCommentLine(lineText) {
  const t = lineText.trim();
  return t.startsWith('//') || t.startsWith('*') || t.startsWith('/*') || t.startsWith('{/*');
}

// Walks back from `index` through unmatched braces looking for an enclosing `try {`
function isInsideTry(content, index) {
  let depth = 0;
  for (let i = index - 1; i >= 0; i--) {
    const ch = content[i];
    if (ch === '}') depth++;
    else if (ch === '{') {
      if (depth > 0) depth--;
      else if (/\btry\s*$/.test(content.slice(Math.max(0, i - 12), i))) return true;
    }
  }
  return false;
}

// ==========================================
// COLOUR HELPERS (WCAG 2.1 relative luminance)
// ==========================================
const NAMED_COLORS = { white: '#ffffff', black: '#000000' };
const UNKNOWN = { unknown: true };
const UNRESOLVED_COLOR = /^(?:(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-\d+|transparent|current|inherit)(?:\/.+)?$|^\[(?!#)/;

// Theme tokens: hex values resolve; any other value (var(), oklch) is a known colour we cannot compute
function loadThemeColors(cssFiles) {
  const tokens = {};
  for (const file of cssFiles) {
    const css = fs.readFileSync(file, 'utf-8');
    for (const m of css.matchAll(/--color-([\w-]+):\s*([^;]+);/g)) {
      const value = m[2].trim();
      tokens[m[1]] = /^#[0-9a-fA-F]{3,6}$/.test(value) ? value : null;
    }
  }
  return tokens;
}

function hexToRgb(hex) {
  let h = hex.replace('#', '');
  if (h.length === 3) h = h.split('').map(c => c + c).join('');
  if (h.length !== 6) return null;
  return [0, 2, 4].map(i => parseInt(h.slice(i, i + 2), 16));
}

function luminance([r, g, b]) {
  const c = [r, g, b].map(v => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
}

function contrastRatio(fg, bg) {
  const a = luminance(fg);
  const b = luminance(bg);
  return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
}

function blend(fg, bg, alpha) {
  return fg.map((v, i) => Math.round(v * alpha + bg[i] * (1 - alpha)));
}

// Parses `text-[#abc]/60`, `bg-brand-terra`, `text-white` into { rgb, alpha }
function resolveColor(value, themeColors) {
  const m = value.match(/^(?:\[(#[0-9a-fA-F]{3,6})\]|([a-z][\w-]*))(?:\/(\d+|\[[\d.]+\]))?$/);
  if (!m) return null;
  const hex = m[1] || NAMED_COLORS[m[2]] || themeColors[m[2]];
  const rgb = hex && hexToRgb(hex);
  if (!rgb) return null;
  let alpha = 1;
  if (m[3]) alpha = m[3].startsWith('[') ? parseFloat(m[3].slice(1, -1)) : parseInt(m[3], 10) / 100;
  return { rgb, alpha };
}

// Groups `dark:hover:text-x` style classes by variant so each visual state can be paired
function parseColorClasses(classString, themeColors) {
  const colors = { text: {}, bg: {} };
  for (const cls of classString.split(/\s+/)) {
    const m = cls.match(/^((?:[\w-]+:)*)(text|bg)-(.+)$/);
    if (!m) continue;
    const variant = m[1].replace(/:$/, '');
    const color = resolveColor(m[3], themeColors);
    if (color) {
      colors[m[2]][variant] = color;
    } else if (UNRESOLVED_COLOR.test(m[3]) || themeColors[m[3].split('/')[0]] === null) {
      // A colour is set but cannot be computed; never fall back to the base colour for this state
      colors[m[2]][variant] = UNKNOWN;
    }
  }
  return colors;
}

function isLargeText(classString) {
  if (/(?:^|\s)text-(?:[2-9]xl)\b/.test(classString)) return true;
  const px = classString.match(/(?:^|\s)text-\[(\d+)px\]/);
  if (px && Number(px[1]) >= 24) return true;
  const bold = /(?:^|\s)font-(?:bold|extrabold|black|semibold)\b/.test(classString);
  return bold && (/(?:^|\s)text-xl\b/.test(classString) || (px && Number(px[1]) >= 19));
}

function checkContrast(classString, filePath, lineNum, themeColors) {
  if (/gradient|bg-linear|bg-radial/.test(classString)) return;
  const { text, bg } = parseColorClasses(classString, themeColors);
  const minimum = isLargeText(classString) ? 3 : 4.5;
  const states = [
    { label: 'default', fg: text[''], bg: bg[''] },
    { label: 'hover', fg: text['hover'] ?? text[''], bg: bg['hover'] ?? bg[''] },
    { label: 'dark mode', fg: text['dark'] ?? text[''], bg: bg['dark'] ?? bg[''] },
    { label: 'placeholder', fg: text['placeholder'], bg: bg[''], placeholder: true },
    { label: 'dark placeholder', fg: text['dark:placeholder'] ?? text['placeholder'], bg: bg['dark'] ?? bg[''], placeholder: true },
  ];
  const reported = new Set();
  for (const s of states) {
    // Translucent backgrounds depend on what sits underneath, so they are left to manual review
    if (!s.fg || !s.bg || s.fg.unknown || s.bg.unknown || s.bg.alpha < 1) continue;
    const fg = s.fg.alpha < 1 ? blend(s.fg.rgb, s.bg.rgb, s.fg.alpha) : s.fg.rgb;
    const ratio = contrastRatio(fg, s.bg.rgb);
    const needed = s.placeholder ? 4.5 : minimum;
    const key = `${s.fg.rgb}|${s.bg.rgb}`;
    if (ratio < needed && !reported.has(key)) {
      reported.add(key);
      addFinding({
        severity: 'critical',
        pillar: 'Pillar 1 (Functional UX)',
        rule: RULES.contrast,
        message: `${s.label} text contrast is ${ratio.toFixed(2)}:1, below the ${needed}:1 WCAG AA minimum.`,
        file: filePath,
        line: lineNum,
      });
    }
  }
}

// Yields className-like string literals with their offsets; template `${}` parts are blanked
function* classStrings(content) {
  const re = /"([^"\n]*)"|'([^'\n]*)'|`([^`]*)`/g;
  let m;
  while ((m = re.exec(content)) !== null) {
    let value = m[1] ?? m[2] ?? m[3];
    if (m[3] !== undefined) value = value.replace(/\$\{[^}]*\}/g, ' ');
    if (/(?:^|\s)(?:[\w-]+:)*(?:text|bg)-/.test(value)) yield { value, index: m.index };
  }
}

function auditFile(filePath, themeColors) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const isReactNative = /from\s+['"](react-native|expo|@react-navigation)/.test(content);

  // ==========================================
  // 1. WEB BUTTON AUDIT (<button>)
  // ==========================================
  const webButtonRegex = /<button[\s\S]*?>([\s\S]*?)<\/button>/g;
  let match;
  while ((match = webButtonRegex.exec(content)) !== null) {
    const buttonFull = match[0];
    const buttonTag = buttonFull.split('>')[0] + '>';
    const buttonInner = match[1].trim();
    const lineNum = lineAt(content, match.index);

    // Submit buttons without disabled state (Playbook 01, Rule 3)
    if (buttonTag.includes('type="submit"') || buttonTag.includes("type='submit'")) {
      if (!buttonTag.includes('disabled')) {
        addFinding({
          severity: 'critical',
          pillar: 'Pillar 1 (Functional UX)',
          rule: RULES.doubleSubmit,
          message: 'Submit button lacks `disabled` state to prevent duplicate submissions.',
          file: filePath,
          line: lineNum,
        });
      }
    }

    // Icon-only buttons without aria-label (Playbook 01, Rule 1)
    if (!/aria-label/i.test(buttonTag)) {
      // Visible text can be a JSX text node, a string literal in an expression, or an interpolated value
      const hasText =
        />[^<>{}]*[A-Za-z][^<>{}]*</.test(`>${buttonInner}<`) ||
        /\{[^}]*['"`][^'"`]*[A-Za-z]/.test(buttonInner) ||
        /\{\s*[\w.]+\s*\}/.test(buttonInner);
      if (/<[A-Z]\w*[^>]*\/>/.test(buttonInner) && !hasText) {
        addFinding({
          severity: 'warning',
          pillar: 'Pillar 1 (Functional UX)',
          rule: RULES.iconLabel,
          message: 'Icon-only button without an explicit `aria-label`.',
          file: filePath,
          line: lineNum,
        });
      }
    }

    // Vague action labels (Playbook 02, Sec 04: Action Hierarchy)
    const rawText = buttonInner.replace(/<[^>]*>?/gm, '').trim().toLowerCase();
    if (rawText === 'continue' || rawText === 'click here' || rawText === 'next') {
      addFinding({
        severity: 'warning',
        pillar: 'Pillar 2 (Premium UI)',
        rule: RULES.vagueLabel,
        message: `Vague button label "${rawText}". Prefer specific outcomes like "Save changes", "Send inquiry", or "Invite member".`,
        file: filePath,
        line: lineNum,
      });
    }
  }

  // ==========================================
  // 2. SIMULATED SUCCESS (form claims success without sending anything)
  // ==========================================
  const successSetter = /set(?:Is)?(?:Submitted|Success|Sent|Subscribed|Done|Completed?)\(\s*true\s*\)/.exec(content);
  const hasSubmitHandler = /onSubmit=|handleSubmit|onPress=/.test(content);
  const sendsToServer = /\bfetch\(|axios|\.(?:post|put|patch)\(|\bmutate|useMutation|supabase|trpc|from\s+['"][^'"]*actions['"]|action=\{|['"]use server['"]/.test(content);
  if (successSetter && hasSubmitHandler && !sendsToServer) {
    const usesMailto = /mailto:/.test(content);
    addFinding({
      severity: 'critical',
      pillar: 'Pillar 1 (Functional UX)',
      rule: RULES.simulatedSuccess,
      message: usesMailto
        ? 'Success state shown after a `mailto:` hand-off. The app cannot know the email was sent; submit to a server or word the state as "your email app should open".'
        : 'Form shows a success state but no request reaches a server (no fetch, mutation or server action found). Submissions are silently lost.',
      file: filePath,
      line: lineAt(content, successSetter.index),
    });
  }

  // ==========================================
  // 3. OVERLAY / DIALOG SEMANTICS (Web)
  // ==========================================
  const overlay = !isReactNative && /fixed\s+inset-0[^"'`]*(?:bg-black\/|backdrop-blur)/.exec(content);
  if (overlay) {
    const overlayLine = lineAt(content, overlay.index);
    if (!/role=["']dialog|<dialog|aria-modal|@radix-ui\/react-dialog|from\s+['"][^'"]*\/dialog['"]/.test(content)) {
      addFinding({
        severity: 'warning',
        pillar: 'Pillar 1 (Functional UX)',
        rule: RULES.dialog,
        message: 'Overlay without `role="dialog"` and `aria-modal="true"`. Screen readers do not announce it as a modal.',
        file: filePath,
        line: overlayLine,
      });
    }
    if (!/['"]Escape['"]|@radix-ui\/react-dialog|<dialog/.test(content)) {
      addFinding({
        severity: 'critical',
        pillar: 'Pillar 1 (Functional UX)',
        rule: RULES.dialog,
        message: 'Overlay does not close on Escape.',
        file: filePath,
        line: overlayLine,
      });
    }
  }

  // ==========================================
  // 4. SAME-ELEMENT CONTRAST (Web)
  // ==========================================
  if (!isReactNative) {
    for (const { value, index } of classStrings(content)) {
      checkContrast(value, filePath, lineAt(content, index), themeColors);
    }
  }

  // ==========================================
  // 5. REACT NATIVE AUDIT
  // ==========================================
  if (isReactNative) {
    // A. Native Touchables Double-Tap Guard (<TouchableOpacity, <Pressable, <TouchableHighlight)
    const nativeTouchableRegex = /<(TouchableOpacity|Pressable|TouchableHighlight)[\s\S]*?>/g;
    let touchMatch;
    while ((touchMatch = nativeTouchableRegex.exec(content)) !== null) {
      const touchTag = touchMatch[0];
      const lineNum = lineAt(content, touchMatch.index);

      // Check if this touchable is an action trigger (submit, pay, save, send, checkout, login)
      const isAction = /onPress=.*(?:submit|save|pay|send|checkout|login|register|transfer|create|update|delete|handlePress|action)/i.test(touchTag);
      if (isAction && !touchTag.includes('disabled')) {
        addFinding({
          severity: 'critical',
          pillar: 'Mobile UX (React Native)',
          rule: RULES.nativeDoubleTap,
          message: 'Action touchable lacks `disabled={loading}`. Native users can trigger duplicate API charges or submissions on rapid double-tap.',
          file: filePath,
          line: lineNum,
        });
      }

      // Check for accessibilityLabel on icon-like touchables
      if (/Icon|Chevron|Arrow|Close|Back|Menu|Search|Filter/.test(touchTag) && !/accessibilityLabel/i.test(touchTag)) {
        addFinding({
          severity: 'info',
          pillar: 'Mobile UX (React Native)',
          rule: RULES.nativeA11y,
          message: 'Touch target appears to be an icon button without `accessibilityLabel` or `accessibilityRole="button"`.',
          file: filePath,
          line: lineNum,
        });
      }
    }

    // B. FlatList / SectionList Empty State Check
    const listRegex = /<(?:FlatList|SectionList)[\s\S]*?\/?>/g;
    let listMatch;
    while ((listMatch = listRegex.exec(content)) !== null) {
      if (!listMatch[0].includes('ListEmptyComponent')) {
        addFinding({
          severity: 'warning',
          pillar: 'Mobile UX (React Native)',
          rule: RULES.nativeEmpty,
          message: 'List lacks `ListEmptyComponent`. When data is empty, users are left with a blank viewport and no feedback.',
          file: filePath,
          line: lineAt(content, listMatch.index),
        });
      }
    }

    // C. Deprecated SafeAreaView from 'react-native'
    if (/import\s*\{[^}]*\bSafeAreaView\b[^}]*\}\s*from\s+['"]react-native['"]/.test(content)) {
      addFinding({
        severity: 'warning',
        pillar: 'Mobile UX (React Native)',
        rule: RULES.nativeSafeArea,
        message: 'SafeAreaView imported from "react-native" is deprecated and clips on modern Android edge-to-edge. Use `react-native-safe-area-context`.',
        file: filePath,
        line: 1,
      });
    }

    // D. Static Dimensions.get('window') at module scope
    if (/const\s+.*=\s*Dimensions\.get\(/.test(content) && !content.includes('useWindowDimensions')) {
      addFinding({
        severity: 'info',
        pillar: 'Mobile UX (React Native)',
        rule: RULES.nativeDimensions,
        message: 'Static `Dimensions.get("window")` does not adapt to screen rotation or foldable screens. Prefer `useWindowDimensions()` hook.',
        file: filePath,
        line: 1,
      });
    }
  }

  // ==========================================
  // 6. LINE BY LINE COMMON CHECKS
  // ==========================================
  let offset = 0;
  let smallTextCount = 0;
  let firstSmallTextLine = 0;
  lines.forEach((lineText, idx) => {
    const lineNum = idx + 1;
    const lineOffset = offset;
    offset += lineText.length + 1;
    const isComment = isCommentLine(lineText);

    // A. Raw em-dash in UI copy, metadata included
    if (!isComment && (lineText.includes('—') || lineText.includes('&mdash;'))) {
      addFinding({
        severity: 'warning',
        pillar: 'Pillar 1 (Functional UX)',
        rule: RULES.emDash,
        message: 'Raw em-dash (—) found in copy or metadata. Use a comma, colon, or "|" in titles.',
        file: filePath,
        line: lineNum,
      });
    }

    // B. Suppressed outline without visible focus styles (Web)
    if (!isReactNative && lineText.includes('outline-none') && !lineText.includes('focus') && !lineText.includes('focus-visible')) {
      addFinding({
        severity: 'warning',
        pillar: 'Pillar 1 (Functional UX)',
        rule: RULES.focus,
        message: 'Detected `outline-none` without explicit `focus-visible:` or `focus:` ring styling.',
        file: filePath,
        line: lineNum,
      });
    }

    // C. localStorage: crashes React Native; must sit inside try/catch on the web
    const storageCall = /\blocalStorage\.(?:getItem|setItem|removeItem|clear)\(/.exec(lineText);
    if (storageCall && !isComment && (isReactNative || !isInsideTry(content, lineOffset + storageCall.index))) {
      addFinding({
        severity: 'critical',
        pillar: isReactNative ? 'Mobile UX (React Native)' : 'Pillar 1 (Functional UX)',
        rule: RULES.persistence,
        message: isReactNative
          ? '`localStorage` is a web-only API and will crash in React Native. Use @react-native-async-storage/async-storage or MMKV.'
          : 'localStorage call outside a try/catch block. Throws in private browsing, with blocked storage, or during SSR.',
        file: filePath,
        line: lineNum,
      });
    }

    // D. AsyncStorage without try/catch (React Native)
    const asyncStorageCall = /\bAsyncStorage\.\w+\(/.exec(lineText);
    if (isReactNative && asyncStorageCall && !isComment && !isInsideTry(content, lineOffset + asyncStorageCall.index) && !/\.catch\(/.test(lineText)) {
      addFinding({
        severity: 'critical',
        pillar: 'Mobile UX (React Native)',
        rule: RULES.nativePersistence,
        message: 'AsyncStorage call outside a try/catch block. Native mobile I/O failures can crash the app.',
        file: filePath,
        line: lineNum,
      });
    }

    // E. Email TextInput missing autoCapitalize="none" (React Native)
    if (isReactNative && lineText.includes('keyboardType="email-address"') && !lineText.includes('autoCapitalize')) {
      addFinding({
        severity: 'info',
        pillar: 'Mobile UX (React Native)',
        rule: RULES.nativeInput,
        message: 'Email TextInput should specify `autoCapitalize="none"` and `autoCorrect={false}` to prevent accidental casing errors.',
        file: filePath,
        line: lineNum,
      });
    }

    // F. Playbook 02 Trap: All-caps large headings
    if (/<(h[1-3]|Text)/.test(lineText) && lineText.includes('uppercase') && !lineText.includes('text-xs') && !lineText.includes('text-[1')) {
      addFinding({
        severity: 'warning',
        pillar: 'Pillar 2 (Premium UI)',
        rule: RULES.uppercase,
        message: 'Large heading uses `uppercase`. Playbook 02 reserves all-caps for compact metadata/status tags.',
        file: filePath,
        line: lineNum,
      });
    }

    // G. Playbook 02 Trap: Arbitrary non-tokenized radius
    if (/rounded-\[(?:1[7-9]|2[1-9]|3[0-9]|4[0-9])px\]/.test(lineText)) {
      addFinding({
        severity: 'info',
        pillar: 'Pillar 2 (Premium UI)',
        rule: RULES.radius,
        message: 'Non-tokenized arbitrary corner radius detected. Prefer standard scale: 6, 10, 14, 20px (+ pill).',
        file: filePath,
        line: lineNum,
      });
    }

    // H. Text below the 12px helper minimum, reported once per file
    const tiny = lineText.match(/text-\[(?:[0-9]|1[01])(?:\.\d+)?px\]|fontSize:\s*(?:[0-9]|1[01])\b/g);
    if (tiny) {
      if (!smallTextCount) firstSmallTextLine = lineNum;
      smallTextCount += tiny.length;
    }

    // ==========================================
    // 7. PILLAR 4: INTENT ALIGNMENT & ANTI-GENERIC
    // ==========================================

    // A. Generic AI / Marketing Cliché Buzzwords
    const genericBuzzwords = [
      /\btransform your (?:business|workflow|life|future|experience)\b/i,
      /\bempower(?:ing)? your (?:team|business|growth)\b/i,
      /\bnext-gen(?:eration)? (?:platform|solution|tool|ai)\b/i,
      /\ball-in-one (?:platform|solution|workspace|hub)\b/i,
      /\bunleash the power of\b/i,
      /\brevolutionize the way you\b/i,
      /\bsupercharge your\b/i,
      /\bseamless(?:ly)? integrat(?:e|ion)\b/i,
      /\bcutting-edge (?:technology|solution|platform)\b/i,
      /\bgame-changing\b/i,
    ];
    for (const pattern of genericBuzzwords) {
      if (pattern.test(lineText) && !isComment) {
        const matchText = lineText.match(pattern)[0];
        addFinding({
          severity: 'warning',
          pillar: 'Pillar 4 (Intent & Anti-Generic)',
          rule: RULES.buzzwords,
          message: `Detected generic marketing cliché "${matchText}". Ground copy in concrete business outcomes and domain-specific verbs.`,
          file: filePath,
          line: lineNum,
        });
        break;
      }
    }

    // B. Emoji used as icons or decoration anywhere in UI copy, data and labels
    const emoji = !isComment && lineText.match(/\p{Emoji_Presentation}/u);
    if (emoji) {
      addFinding({
        severity: 'warning',
        pillar: 'Pillar 4 (Intent & Anti-Generic)',
        rule: RULES.emoji,
        message: `Emoji "${emoji[0]}" used in UI. Replace with an icon from the project's icon family (e.g. Lucide) or plain copy.`,
        file: filePath,
        line: lineNum,
      });
    }

    // C. Generic Placeholder / Template Text Bleed
    if (/\b(lorem ipsum|feature 1|benefit 1|card title|description goes here|sample text)\b/i.test(lineText) && !isComment) {
      addFinding({
        severity: 'warning',
        pillar: 'Pillar 4 (Intent & Anti-Generic)',
        rule: RULES.placeholder,
        message: 'Generic template placeholder text detected. Use realistic domain data, real units, and contextual terminology.',
        file: filePath,
        line: lineNum,
      });
    }

    // D. Archetype Mismatch Checks
    const isSeriousDomain = /fintech|bank|dispute|checkout|pay|billing|legal|security|compliance/i.test(filePath);
    if (isSeriousDomain && /animate-bounce|wiggle|confetti/i.test(lineText)) {
      addFinding({
        severity: 'warning',
        pillar: 'Pillar 4 (Intent & Anti-Generic)',
        rule: RULES.seriousArchetype,
        message: 'Serious/high-trust flows (fintech, billing, compliance) require calm, dignified interactions. Frivolous bouncy animations undermine security trust.',
        file: filePath,
        line: lineNum,
      });
    }

    const isPlayfulDomain = /baby|toddler|kids?|toys?|nursery|child/i.test(filePath);
    if (isPlayfulDomain && /rounded-none|border-black\s+border-2/i.test(lineText)) {
      addFinding({
        severity: 'info',
        pillar: 'Pillar 4 (Intent & Anti-Generic)',
        rule: RULES.playfulArchetype,
        message: 'Playful/child-oriented domains benefit from soft tactile radii (rounded-2xl/3xl), warm palettes, and approachable typography rather than sharp harsh borders.',
        file: filePath,
        line: lineNum,
      });
    }
  });

  if (smallTextCount > 0) {
    addFinding({
      severity: 'info',
      pillar: 'Pillar 2 (Premium UI)',
      rule: RULES.smallText,
      message: `${smallTextCount} text size(s) below 12px in this file. Reserve sub-12px only for tiny non-essential labels.`,
      file: filePath,
      line: firstSmallTextLine,
    });
  }
}

// ==========================================
// PROJECT-WIDE CHECKS
// ==========================================
function auditProject(sourceFiles, cssFiles) {
  const sources = sourceFiles.map(f => ({ file: f, content: fs.readFileSync(f, 'utf-8') }));
  const styles = cssFiles.map(f => ({ file: f, content: fs.readFileSync(f, 'utf-8') }));
  const all = [...sources, ...styles];

  // Reduced motion: any animation in the project needs at least one reduced-motion guard
  const animated = all.find(({ content }) =>
    /from\s+['"](?:framer-motion|motion\/react|react-native-reanimated|gsap)['"]|\banimate-(?!none)[\w-]+|@keyframes|repeat:\s*Infinity|Animated\.timing/.test(content)
  );
  const guarded = all.some(({ content }) =>
    /prefers-reduced-motion|useReducedMotion|reducedMotion=|motion-reduce:|motion-safe:|AccessibilityInfo\.isReduceMotionEnabled|useReducedMotion/.test(content)
  );
  if (animated && !guarded) {
    addFinding({
      severity: 'critical',
      pillar: 'Pillar 1 (Functional UX)',
      rule: RULES.reducedMotion,
      message: 'The project animates but never honours `prefers-reduced-motion`. Add a global CSS guard and/or `<MotionConfig reducedMotion="user">`.',
      file: animated.file,
      line: 1,
    });
  }

  // Gradients and glass effects: flag projects where they stop being a brand moment
  const count = (re) => all.reduce((n, { content }) => n + (content.match(re) || []).length, 0);
  const gradients = count(/bg-gradient-to-\w+|bg-linear-[\w-]+|linear-gradient\(|radial-gradient\(/g);
  const blurs = count(/backdrop-blur(?:-\w+)?/g);
  if (gradients > 12 || blurs > 12) {
    addFinding({
      severity: 'info',
      pillar: 'Pillar 2 (Premium UI)',
      rule: RULES.surfaceEffects,
      message: `${gradients} gradient and ${blurs} backdrop-blur usages. Premium Traps 1-2: reserve gradients and glass for specific brand moments.`,
      file: TARGET_DIR,
      line: 0,
    });
  }
}

function runAudit() {
  console.log(`\n${COLORS.bold}${COLORS.cyan}================================================================${COLORS.reset}`);
  console.log(`${COLORS.bold}${COLORS.cyan} 🛡️  UNIVERSAL PRODUCT QUALITY GATE: WEB & REACT NATIVE ${COLORS.reset}`);
  console.log(`${COLORS.dim}    Target: ${TARGET_DIR}${COLORS.reset}`);
  console.log(`${COLORS.dim}    Standards: Playbook 01 (UX) + Playbook 02 (UI) + Mobile Native${COLORS.reset}`);
  console.log(`${COLORS.bold}${COLORS.cyan}================================================================${COLORS.reset}\n`);

  const scanDirs = getCandidateDirs(TARGET_DIR);
  const files = getAllFiles(scanDirs);
  const cssFiles = getAllFiles(scanDirs, ['.css', '.scss']);
  console.log(`${COLORS.dim}Scanning ${files.length} UI files and ${cssFiles.length} stylesheets across: ${scanDirs.map(d => path.relative(TARGET_DIR, d) || '.').join(', ')}...${COLORS.reset}\n`);

  if (files.length === 0) {
    console.log(`${COLORS.yellow}No UI component files (.tsx, .jsx, etc.) found in target directory.${COLORS.reset}\n`);
    process.exit(0);
  }

  const themeColors = loadThemeColors(cssFiles);
  for (const file of files) {
    auditFile(file, themeColors);
  }
  auditProject(files, cssFiles);

  const criticals = findings.filter(f => f.severity === 'critical');
  const warnings = findings.filter(f => f.severity === 'warning');
  const infos = findings.filter(f => f.severity === 'info');

  findings.forEach((f) => {
    const color = f.severity === 'critical' ? COLORS.red : f.severity === 'warning' ? COLORS.yellow : COLORS.cyan;
    const tag = f.severity.toUpperCase().padEnd(8);
    console.log(`${color}${COLORS.bold}[${tag}]${COLORS.reset} ${COLORS.bold}${f.file}:${f.line}${COLORS.reset}`);
    console.log(`  ${COLORS.dim}Pillar:${COLORS.reset}   ${f.pillar}`);
    console.log(`  ${COLORS.dim}Standard:${COLORS.reset} ${f.rule}`);
    console.log(`  ${COLORS.dim}Details:${COLORS.reset}  ${f.message}\n`);
  });

  // Report only what was actually checked, then what still needs a human
  console.log(`${COLORS.bold}${COLORS.cyan}── AUTOMATED CHECKS ──${COLORS.reset}`);
  for (const rule of Object.values(RULES)) {
    const hits = findings.filter(f => f.rule === rule);
    if (hits.length === 0) {
      console.log(`${COLORS.green}  ✓ ${rule}${COLORS.reset}`);
    } else {
      const worst = hits.some(f => f.severity === 'critical') ? COLORS.red : hits.some(f => f.severity === 'warning') ? COLORS.yellow : COLORS.cyan;
      console.log(`${worst}  ✗ ${rule} (${hits.length})${COLORS.reset}`);
    }
  }
  console.log(`\n${COLORS.bold}${COLORS.cyan}── NOT AUTOMATABLE: REVIEW MANUALLY ──${COLORS.reset}`);
  MANUAL_REVIEW.forEach(item => console.log(`${COLORS.dim}  • ${item}${COLORS.reset}`));

  console.log(`\n${COLORS.bold}Audit Results:${COLORS.reset}`);
  console.log(`  Critical: ${criticals.length ? COLORS.red : COLORS.green}${criticals.length}${COLORS.reset}`);
  console.log(`  Warnings: ${warnings.length ? COLORS.yellow : COLORS.green}${warnings.length}${COLORS.reset}`);
  console.log(`  Notices:  ${COLORS.cyan}${infos.length}${COLORS.reset}\n`);

  if (criticals.length > 0) {
    console.error(`${COLORS.red}${COLORS.bold}❌ Quality Gate FAILED with ${criticals.length} critical violation(s).${COLORS.reset}\n`);
    process.exit(1);
  } else {
    console.log(`${COLORS.green}${COLORS.bold}✅ Automated checks PASSED with ${warnings.length} warning(s). Complete the manual review above before release.${COLORS.reset}\n`);
    process.exit(0);
  }
}

runAudit();
