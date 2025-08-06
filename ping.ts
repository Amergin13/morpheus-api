import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const result = await fetch(
      'https://krqjiozttdleifbovvqf.supabase.co/functions/v1/lovable-agent-relay',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.SUPABASE_SERVICE_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ test: true }),
      }
    );

    const data = await result.json();
    res.status(result.status).json({
      message: 'Supabase relay responded successfully!',
      response: data,
    });
  } catch (err) {
    console.error('Ping error:', err);
    res.status(500).json({ error: 'Ping to Supabase failed' });
  }
}
