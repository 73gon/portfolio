import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const resend = new Resend(process.env.RESEND_API_KEY as string);

// allow posting only from your site
const ALLOWED_ORIGINS = ['https://malik.ryqo.ai', 'http://localhost:5173', 'http://localhost:3000'];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS / preflight
  const origin = req.headers.origin || '';
  if (req.method === 'OPTIONS') {
    if (ALLOWED_ORIGINS.includes(origin)) {
      res.setHeader('Access-Control-Allow-Origin', origin);
      res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    }
    return res.status(204).end();
  }

  if (!ALLOWED_ORIGINS.includes(origin)) {
    return res.status(403).json({ success: false, error: 'Forbidden' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  const { name, email, message, company } = (req.body ?? {}) as {
    name?: string;
    email?: string;
    message?: string;
    company?: string;
  };

  // Honeypot kills simple bots
  if (company) return res.status(200).json({ success: true });

  // Minimal validation
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Missing fields' });
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return res.status(400).json({ success: false, error: 'Invalid email' });
  }

  try {
    const data = await resend.emails.send({
      from: 'Contact <portfolio@ryqo.ai>',
      to: ['malik@ryqo.ai'],
      subject: `Message from ${name}`,
      text: `From: ${name} (${email})\n\n${message}`,
    });

    // CORS header on success
    res.setHeader('Access-Control-Allow-Origin', origin);
    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: 'Send failed' });
  }
}
