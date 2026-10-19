// 環境変数の読み取り（Settings > Environment Variables で SHOP_NAME を設定）
export default function handler(req, res) {
  res.status(200).json({
    SHOP_NAME: process.env.SHOP_NAME || '(未設定：ダッシュボードで設定してください)',
    VERCEL_ENV: process.env.VERCEL_ENV || 'local', // production / preview / development
  });
}
