import { NextResponse } from 'next/server'
import { EMAIL_PATTERN, EmailNotConfiguredError, field, notifyStudio, saveContact } from '@/lib/resend'

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  // Honeypot: real visitors never see or fill this field
  if (field(body.company, 200)) {
    return NextResponse.json({ ok: true })
  }

  const email = field(body.email, 254)
  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }
  const track = field(body.track, 120) || 'Curriculum'

  // The lead is safe if either the notification or the contact list write lands
  const [notified, saved] = await Promise.allSettled([
    notifyStudio({
      replyTo: email,
      subject: `[Curriculum Lead] ${track} - ${email}`,
      text: [
        `Email: ${email}`,
        `Track: ${track}`,
        '',
        '---',
        'Signed up for starter code from a thegranjefe.com curriculum page.',
      ].join('\n'),
    }),
    saveContact(email),
  ])

  for (const result of [notified, saved]) {
    if (result.status === 'rejected') console.error('[leads] partial failure', result.reason)
  }

  if (notified.status === 'rejected' && saved.status === 'rejected') {
    const status = notified.reason instanceof EmailNotConfiguredError ? 503 : 502
    return NextResponse.json({ error: 'We couldn’t save your email.' }, { status })
  }
  return NextResponse.json({ ok: true })
}
