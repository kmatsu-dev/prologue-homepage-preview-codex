# Indeed専業「プロローグ」公式サイト 実装計画

## 前提

- 現状は `tone-and-manner.html` の単一静的HTMLのみで、React/Tailwind環境は未作成。
- 既存構成との衝突がないため、Vite + React + TypeScript + Tailwind CSSで新規実装する。
- 添付/生成UIモックと `tone-and-manner.html` の世界観を参照し、ネイビー、白、ゴールド、青の抑制されたBtoBサイトにする。
- 文言、数値、CTA、画像パス、フォーム項目、SEOメタは `src/data/siteContent.ts` に集約し、仮置きには `TODO_REPLACE` を残す。

## サブエージェント結果統合

### Agent 1: Project Explorer

- 現在の構成は静的HTMLのみ。
- `package.json`、Tailwind設定、Reactルーティング、assetsディレクトリは未存在。
- 新規追加が必要な主要ファイル:
  - `package.json`
  - `index.html`
  - `vite.config.ts`
  - `tailwind.config.ts`
  - `postcss.config.js`
  - `src/`
  - `public/images/`

### Agent 2: Design System Mapper

- 基調: 濃紺の信頼感、白背景の分析資料感、金の認定感。
- Tailwindトークン:
  - navy `#061421`
  - navyDeep `#020B13`
  - blue `#004EA8`
  - teal `#075F63`
  - gold `#A9852A`
  - bg `#F7F8FA`
  - text `#0B1220`
  - muted `#5F6875`
  - border `#DDE2E8`
- 角丸は小さく、カードは薄い線と控えめな影。
- 青はCTAと重要指標に限定し、金は細線・認定・星評価程度に留める。

### Agent 3: Content & Data Architect

- `src/data/siteContent.ts` を唯一の主要コンテンツソースにする。
- ページごとに `seo`, `hero`, `sections`, `cta` を持たせる。
- 会社情報、実績数値、画像パス、フォーム送信先、認定表現は `TODO_REPLACE` を残す。
- フォーム送信先は `TODO_REPLACE_FORM_ENDPOINT` として明示する。

### Agent 4: Component Architect

- 共通コンポーネント:
  - `Layout`
  - `Header`
  - `Footer`
  - `SectionHeader`
  - `ButtonLink`
  - `CertificationBadge`
  - `KpiCard`
  - `ChartPanel`
  - `AnalysisTable`
  - `ProcessSteps`
  - `CtaBand`
  - `ContactForm`
  - `PageHero`
- Chart風UIは外部チャートライブラリを使わず、CSS/Tailwindで軽量に表現する。
- ルーティングは `react-router-dom` を使い、指定URLに合わせる。

## 実装対象ページ

- `/`
- `/services/`
- `/results/`
- `/analytics/`
- `/reasons/`
- `/contact/`
- `/company/`
- `/platinum-partner/`

## ファイル構成

```text
src/
  App.tsx
  main.tsx
  index.css
  data/
    siteContent.ts
  components/
    layout/
      Layout.tsx
      Header.tsx
      Footer.tsx
    ui/
      AnalysisTable.tsx
      ButtonLink.tsx
      CertificationBadge.tsx
      ChartPanel.tsx
      ContactForm.tsx
      CtaBand.tsx
      KpiCard.tsx
      PageHero.tsx
      ProcessSteps.tsx
      SectionHeader.tsx
  pages/
    HomePage.tsx
    ServicesPage.tsx
    ResultsPage.tsx
    AnalyticsPage.tsx
    ReasonsPage.tsx
    ContactPage.tsx
    CompanyPage.tsx
    PlatinumPartnerPage.tsx
public/
  images/
    office-hero.svg
    office-meeting.svg
    platinum-badge-placeholder.svg
```

## QA方針

- `npm run build`
- `npm run lint`
- 可能ならローカルサーバーで以下幅を目視/スクショ確認:
  - 1440px
  - 1024px
  - 768px
  - 430px
  - 390px
- 確認対象:
  - ヘッダー/スマホメニュー
  - FV
  - KPIカード
  - 表/グラフ風UI
  - フォーム
  - CTA
  - フッター

## 公開前確認項目

- Indeedロゴ・認定バッジの利用可否
- Indeed特別認定プラチナムパートナーの表現
- 実績数値の真偽
- 会社情報
- 個人情報保護方針
- フォーム送信先
- OGP / title / meta description
- GA4 / GTM / CV計測

