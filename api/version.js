// 今表示されているデプロイの情報（スマホでの確認用）
export default function handler(req, res) {
  res.status(200).json({
    env: process.env.VERCEL_ENV || 'local', // production / preview
    branch: process.env.VERCEL_GIT_COMMIT_REF || '-',
    commit: (process.env.VERCEL_GIT_COMMIT_SHA || '-').slice(0, 7),
    message: process.env.VERCEL_GIT_COMMIT_MESSAGE || '-',
  });
}
