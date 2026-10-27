// Server-only helpers for Resend's REST API. Import from route handlers only.

const RESEND_API = 'https://api.resend.com'

// Until a domain is verified in Resend, onboarding@resend.dev can only deliver to the account owner
const FROM = process.env.RESEND_FROM || 'Gran Jefe Studio <onboarding@resend.dev>'
const LEADS_TO = process.env.LEADS_TO || 'granjefetech@gmail.com'

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export class EmailNotConfiguredError extends Error {}

function apiKey() {
  const key = process.env.RESEND_API_KEY
  if (!key) throw new EmailNotConfiguredError('RESEND_API_KEY is not set')
  return key
}

async function post(path: string, body: unknown) {
  const res = await fetch(`${RESEND_API}${path}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey()}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  if (!res.ok) {
    throw new Error(`Resend ${path} failed with ${res.status}: ${await res.text()}`)
  }
}

// Plain-text email to the studio inbox; replying goes straight to the visitor
export function notifyStudio({ subject, text, replyTo }: { subject: string; text: string; replyTo: string }) {
  return post('/emails', {
    from: FROM,
    to: [LEADS_TO],
    reply_to: replyTo,
    subject: subject.replace(/[\r\n]+/g, ' ').slice(0, 200),
    text,
  })
}

// Adds the address to the Resend contact list used for broadcasts
export function saveContact(email: string) {
  return post('/contacts', { email, unsubscribed: false })
}

// Trims a form value to a string of at most `max` characters
export function field(value: unknown, max: number) {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}
