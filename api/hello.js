// Serverless Function (Node.js)
export default function handler(req, res) {
  const name = req.query.name || 'ゲスト';
  res.status(200).json({
    message: `こんにちは、${name}さん`,
    runtime: 'nodejs',
    region: process.env.VERCEL_REGION || 'local',
    now: new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' }),
  });
}
