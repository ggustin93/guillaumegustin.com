// Cloudflare Pages Function — POST /api/contact
// Same-origin endpoint: receives the contact form, validates, sends via Mailjet.
// No CORS needed (served from the same origin as the site).

// Best-effort in-memory rate limiter. On Pages each isolate has its own Map and
// they recycle, so this is a courtesy throttle only. Add Cloudflare Turnstile if
// spam appears (see plan).
const hits = new Map();

function rateLimit(ip, max = 5, windowMs = 60_000) {
  const now = Date.now();
  const log = (hits.get(ip) || []).filter((t) => now - t < windowMs);
  if (log.length >= max) return false;
  log.push(now);
  hits.set(ip, log);
  return true;
}

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildHtml(name, email, message) {
  return `
    <div style="font-family:sans-serif;max-width:600px;color:#222;padding:24px">
      <h2 style="color:#e05d44;margin-top:0">New contact form submission</h2>
      <table cellpadding="10" style="border-collapse:collapse;width:100%;border:1px solid #eee">
        <tr>
          <td style="font-weight:600;width:90px;border:1px solid #eee">From</td>
          <td style="border:1px solid #eee">${esc(name)}</td>
        </tr>
        <tr style="background:#fafafa">
          <td style="font-weight:600;border:1px solid #eee">Reply-to</td>
          <td style="border:1px solid #eee">
            <a href="mailto:${esc(email)}" style="color:#e05d44">${esc(email)}</a>
          </td>
        </tr>
        <tr>
          <td style="font-weight:600;vertical-align:top;border:1px solid #eee">Message</td>
          <td style="white-space:pre-wrap;border:1px solid #eee">${esc(message)}</td>
        </tr>
      </table>
    </div>`;
}

export async function onRequestPost(context) {
  const { request, env } = context;

  const json = (obj, status = 200) =>
    new Response(JSON.stringify(obj), {
      status,
      headers: { 'Content-Type': 'application/json' },
    });

  try {
    const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
    if (!rateLimit(ip)) return json({ error: 'Too many requests' }, 429);

    let fd;
    try {
      fd = await request.formData();
    } catch {
      return json({ error: 'Invalid body' }, 400);
    }

    const name = (fd.get('name') || '').toString().trim();
    const email = (fd.get('_replyto') || '').toString().trim();
    const message = (fd.get('message') || '').toString().trim();

    if (name.length < 2) return json({ error: 'Invalid name', field: 'name' }, 422);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return json({ error: 'Invalid email', field: 'email' }, 422);
    if (message.length < 10 || message.length > 2000)
      return json({ error: 'Invalid message', field: 'message' }, 422);

    const creds = btoa(`${env.MAILJET_API_KEY}:${env.MAILJET_SECRET_KEY}`);
    const mjResp = await fetch('https://api.mailjet.com/v3.1/send', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${creds}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Messages: [
          {
            From: { Email: env.FROM_EMAIL, Name: env.FROM_NAME },
            To: [{ Email: env.TO_EMAIL, Name: env.TO_NAME }],
            ReplyTo: { Email: email, Name: name },
            Subject: `[Contact] Message from ${name}`,
            TextPart: `From: ${name}\nReply-to: ${email}\n\n${message}`,
            HTMLPart: buildHtml(name, email, message),
          },
        ],
      }),
    });

    if (!mjResp.ok) {
      console.error('Mailjet error', mjResp.status, await mjResp.text());
      return json({ error: 'Delivery failed' }, 502);
    }

    return json({ ok: true });
  } catch (err) {
    console.error('contact function error:', err);
    return json({ error: 'Server error' }, 500);
  }
}
