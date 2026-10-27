import { NextResponse } from 'next/server'
import { EMAIL_PATTERN, EmailNotConfiguredError, field, notifyStudio } from '@/lib/resend'

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

  const name = field(body.name, 120)
  const timeline = field(body.timeline, 80)
  const message = field(body.message, 5000)
  const services = Array.isArray(body.services)
    ? body.services.slice(0, 10).map((s: unknown) => field(s, 80)).filter(Boolean)
    : []

  try {
    await notifyStudio({
      replyTo: email,
      subject: `[Studio Inquiry] ${services.join(', ') || 'New project'} - ${name || email}`,
      text: [
        `Name: ${name || 'Not given'}`,
        `Email: ${email}`,
        `Services: ${services.join(', ') || 'Not specified'}`,
        `Target timeline: ${timeline || 'Not specified'}`,
        '',
        'Project goals & context:',
        message || 'No details given.',
        '',
        '---',
        'Sent from the thegranjefe.com contact form. Reply to this email to answer the client directly.',
      ].join('\n'),
    })
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('[contact] inquiry not delivered', error)
    const status = error instanceof EmailNotConfiguredError ? 503 : 502
    return NextResponse.json({ error: 'We couldn’t send your inquiry.' }, { status })
  }
}
