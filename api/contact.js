import { Resend } from 'resend'

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  // CORS origin check
  const allowedOrigin = process.env.ALLOWED_ORIGIN
  const requestOrigin = req.headers.origin

  if (allowedOrigin && requestOrigin !== allowedOrigin) {
    return res.status(403).json({ error: 'Forbidden' })
  }

  try {
    const { name, phone, email, interest, message, website } = req.body

    // Honeypot — silently succeed if filled
    if (website && website.trim() !== '') {
      return res.status(200).json({ success: true })
    }

    // Validate required fields
    if (!name || !phone || !interest) {
      return res.status(400).json({ error: 'Missing required fields: name, phone, interest' })
    }

    const resendApiKey = process.env.RESEND_API_KEY
    const ownerEmail = process.env.OWNER_EMAIL

    if (!resendApiKey || !ownerEmail) {
      console.error('Missing RESEND_API_KEY or OWNER_EMAIL environment variables')
      return res.status(500).json({ error: 'Server configuration error' })
    }

    const resend = new Resend(resendApiKey)

    await resend.emails.send({
      from: 'Casa Mia Real Estate <onboarding@resend.dev>',
      to: [ownerEmail],
      subject: 'New Client Inquiry — Casa Mia Real Estate',
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>New Client Inquiry</title>
          <style>
            body { font-family: 'Lato', Arial, sans-serif; background: #F5EDE6; margin: 0; padding: 20px; }
            .container { max-width: 560px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
            .header { background: #C4856A; padding: 28px 32px; text-align: center; }
            .header h1 { color: #ffffff; font-size: 22px; margin: 0; font-family: Georgia, serif; font-weight: 400; letter-spacing: 1px; }
            .header p { color: rgba(255,255,255,0.85); font-size: 13px; margin: 6px 0 0; }
            .body { padding: 28px 32px; }
            .field { margin-bottom: 18px; border-bottom: 1px solid #F5EDE6; padding-bottom: 14px; }
            .field:last-child { border-bottom: none; margin-bottom: 0; }
            .label { font-size: 10px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: #C4856A; margin-bottom: 4px; }
            .value { font-size: 15px; color: #1A1A1A; line-height: 1.5; }
            .footer { background: #1A1A1A; padding: 16px 32px; text-align: center; }
            .footer p { color: rgba(255,255,255,0.5); font-size: 11px; margin: 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🏠 New Client Inquiry</h1>
              <p>Casa Mia Real Estate — submitted via casimabroker.com</p>
            </div>
            <div class="body">
              <div class="field">
                <div class="label">Full Name</div>
                <div class="value">${escapeHtml(name)}</div>
              </div>
              <div class="field">
                <div class="label">Phone Number</div>
                <div class="value"><a href="tel:${escapeHtml(phone)}" style="color:#C4856A;">${escapeHtml(phone)}</a></div>
              </div>
              <div class="field">
                <div class="label">Email Address</div>
                <div class="value">${email ? `<a href="mailto:${escapeHtml(email)}" style="color:#C4856A;">${escapeHtml(email)}</a>` : '<span style="color:#999;">Not provided</span>'}</div>
              </div>
              <div class="field">
                <div class="label">Interested In</div>
                <div class="value">${escapeHtml(interest)}</div>
              </div>
              <div class="field">
                <div class="label">Message</div>
                <div class="value">${message ? escapeHtml(message).replace(/\n/g, '<br>') : '<span style="color:#999;">No message provided</span>'}</div>
              </div>
            </div>
            <div class="footer">
              <p>Casa Mia Real Estate LLC &bull; Jennifer Cantu, Broker® &bull; McAllen, TX</p>
            </div>
          </div>
        </body>
        </html>
      `,
    })

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return res.status(500).json({ error: 'Internal server error' })
  }
}

function escapeHtml(str) {
  if (typeof str !== 'string') return ''
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
