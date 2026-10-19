# このリポジトリについて
Vercel（Hobby）にデプロイしているサンプルサイト。GitHubと連携しており、pushすると自動でデプロイされる。
オーナーはスマートフォンのClaudeアプリから指示を出し、ブラウザで結果を確認する。

## 構成
- public/index.html … トップページ（静的）
- api/*.js … Serverless / Edge Functions
- vercel.json … リージョン(hnd1)・Cron・リダイレクト・ヘッダー

## 作業ルール
- 修正は `main` に直接pushせず、作業ブランチを切ってpushし、PRを作成する。
  → Vercelがプレビュー用URLを発行するので、オーナーがスマホで確認できる。
- オーナーが「本番に反映して」「マージして」と言ったときだけ main にマージする。
- 作業が終わったら、スマホで読みやすいように短く報告する：
  1. 何を変えたか（1〜3行）
  2. 確認方法（PRのリンク。プレビューURLはPR上にVercelボットが投稿する）
- push前に `node --check api/*.js` と vercel.json のJSON構文チェックを行う。
- APIキーやトークンはコードに書かず、Vercelの環境変数を使う。
- 日本語で応答する。
