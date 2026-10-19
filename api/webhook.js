// Webhook 受け口のサンプル（LINE・決済通知などを想定）
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'POST only' });
  }
  // 本番では署名検証（例: LINEの x-line-signature）を必ず入れる
  console.log('webhook received:', JSON.stringify(req.body));
  res.status(200).json({ ok: true, received: req.body, at: new Date().toISOString() });
}
