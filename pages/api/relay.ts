import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST supported' });
  }

  try {
    const result = await fetch('https://your-supabase-project.supabase.co/functions/v1/your-function-name', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.SUPABASE_SERVICE_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    const data = await result.json();
    res.status(result.status).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Relay error' });
  }
}
