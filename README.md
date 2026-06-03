# 株式会社プロローグ 新ホームページ TOPページMVP

Indeed広告を、採用成果に変える専門会社として見せるためのTOPページMVPです。

## 実装概要

- React + TypeScript + Vite
- Tailwind CSS
- TOPページは `src/components/sections/` にセクション分割
- 文言、数値、FAQ、CTA、注釈は `src/data/siteContent.ts` に集約
- FV直下にIndeed Platinum Partnerの価値訴求セクションを配置
- Indeed Platinumロゴは正式受領素材 `public/images/indeed_partner_platinum.jpg` を使用
- プロローグロゴは現行サイトから取得した `public/images/prologue-logo.png` を使用
- SEOのtitle / descriptionは `index.html` と `src/App.tsx` のメタ更新で設定

## 編集方法

主要な文言は `src/data/siteContent.ts` を編集してください。

- メインコピー: `siteContent.home.hero.title`
- リード文: `siteContent.home.hero.lead`
- ロゴ画像: `siteContent.global.brand.logoPath`
- Indeed Platinumロゴ: `siteContent.global.brand.badgePath`
- Platinum訴求: `siteContent.home.platinumAdvantage`
- 住所: `siteContent.global.company.address`
- 実績数値: `siteContent.global.metrics`
- 数値注釈: `siteContent.global.metrics[].note`
- 課題提起: `siteContent.home.problems`
- 選ばれる理由: `siteContent.home.reasons`
- サービス内容: `siteContent.home.services`
- 解析・改善の流れ: `siteContent.home.improvementFlow`
- 導入までの流れ: `siteContent.home.onboardingFlow`
- FAQ: `siteContent.home.faq`
- CTA: `siteContent.global.ctas` と `siteContent.home.finalCta`

トンマナと配色方針は `docs/tone-and-manner.md` にまとめています。

## 開発コマンド

```bash
npm install
npm run dev
npm run build
```

## 公開前に確認する項目

- `5,000社`、`93%`、`15年以上` の根拠
- Indeed特別認定パートナー / Platinum Partner の最終表記
- 代表者、電話番号、メールアドレス
- フォーム送信先
- OGP画像
- GA4 / GTM / CV計測
