# Vercel Hobby サンプル

| 機能 | ファイル | URL |
|---|---|---|
| 静的ページ | public/index.html | / |
| Serverless Function | api/hello.js | /api/hello?name=xxx |
| Edge Function | api/edge.js | /api/edge |
| 環境変数 | api/env.js | /api/env |
| Webhook(POST) | api/webhook.js | /api/webhook |
| Cron（毎日9:00 JST） | api/cron.js + vercel.json | /api/cron |
| リダイレクト | vercel.json | /shop |

## デプロイ方法（CLI）
```
npm i -g vercel
cd vercel-hobby-sample
vercel login
vercel          # プレビュー用URLが発行される
vercel --prod   # 本番(xxx.vercel.app)へ
```

## デプロイ方法（GitHub経由）
1. このフォルダをGitHubリポジトリにpush
2. vercel.com/new でリポジトリをImport → Deploy
3. 以降はpushのたびに自動デプロイ

## 環境変数
Project > Settings > Environment Variables で `SHOP_NAME` を追加し、再デプロイ。

## 注意
- Hobbyは非商用利用のみ。業務利用はPro。
- HobbyのCronは1日1回まで・実行時刻は前後することがあります。
- regions の hnd1 は東京。
