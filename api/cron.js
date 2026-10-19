// Cron Job から呼ばれる処理（vercel.json の crons で定義）
export default function handler(req, res) {
  const now = new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' });
  // ここに「昨日の売上集計」「ランキング取得」などの日次処理を書く
  console.log(`cron executed at ${now}`);
  res.status(200).json({ ok: true, executedAt: now, by: req.headers['user-agent'] });
}
