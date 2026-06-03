export type Cta = {
  label: string;
  href: string;
};

export type Metric = {
  value: string;
  label: string;
  description?: string;
  note?: string;
};

export type CardItem = {
  title: string;
  body: string;
  eyebrow?: string;
  href?: string;
  linkLabel?: string;
};

export type PageSeo = {
  title: string;
  description: string;
  ogImage: string;
};

export type PageMeta = {
  path: string;
  label: string;
  seo: PageSeo;
};

export type PageHero = {
  eyebrow: string;
  title: string;
  lead: string;
};

const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

export const TODO_REPLACE_FORM_ENDPOINT = "TODO_REPLACE_FORM_ENDPOINT";

export const siteContent = {
  global: {
    brand: {
      companyName: "株式会社プロローグ",
      groupName: "株式会社プロローグ・ホールディングス",
      logoText: "PROLOGUE",
      logoPath: assetPath("images/prologue-logo.png"),
      certificationLabel: "Indeed特別認定パートナー / Platinum Partner",
      badgePath: assetPath("images/indeed_partner_platinum.jpg"),
      ogImage: assetPath("images/indeed_partner_platinum.jpg"),
    },
    navigation: [
      { label: "Platinum", href: "/#platinum" },
      { label: "課題", href: "/#problem" },
      { label: "選ばれる理由", href: "/#reasons" },
      { label: "サービス", href: "/#services" },
      { label: "改善フロー", href: "/#process" },
      { label: "FAQ", href: "/#faq" },
    ],
    ctas: {
      primary: { label: "無料相談する", href: "/contact/" },
      secondary: { label: "Indeed運用を見直す", href: "/contact/" },
    },
    metrics: [
      {
        value: "5,000",
        label: "累計支援社数",
        description: "多様な業種・職種で培った採用支援の知見をIndeed運用へ接続します。",
        note: "社内集計に基づく表記。公開前に最終確認予定。",
      },
      {
        value: "93%",
        label: "顧客満足度",
        description: "運用報告だけでなく、次の改善提案まで伴走する支援品質を重視します。",
        note: "調査条件・対象期間は公開前に追記予定。",
      },
      {
        value: "15年以上",
        label: "採用支援経験",
        description: "採用支援15年以上のコンサルタントが、求人設計から改善判断まで支援します。",
        note: "在籍者実績に基づく表記。公開前に最終確認予定。",
      },
      {
        value: "専属",
        label: "解析チーム",
        description: "表示・クリック・応募・採用単価を読み解き、改善施策へ落とし込みます。",
        note: "体制名称・人数は公開前に確定予定。",
      },
    ],
    company: {
      legalName: "株式会社プロローグ", // TODO_REPLACE
      representative: "代表取締役社長 CEO 岩崎洋介",
      address: "〒221-0835 神奈川県横浜市神奈川区鶴屋町3丁目32−14 新港ビル 407",
      tel: "045-744-7163",
      email: "contact@example.jp", // TODO_REPLACE
      privacyPolicyUrl: "/privacy/", // TODO_REPLACE
    },
  },
  pages: [
    {
      path: "/",
      label: "TOP",
      seo: {
        title: "株式会社プロローグ | Indeed Platinum Partner",
        description: "株式会社プロローグは、Indeed Platinum PartnerとしてIndeed運用を担う専業会社です。表示、クリック、応募、採用単価を求人ごとに読み、次の一手へ落とします。",
        ogImage: assetPath("images/indeed_partner_platinum.jpg"),
      },
    },
    {
      path: "/services/",
      label: "サービス",
      seo: {
        title: "サービス | プロローグ",
        description: "求人設計、原稿改善、広告運用、解析レポート、改善提案まで一気通貫で支援します。",
        ogImage: assetPath("images/indeed_partner_platinum.jpg"),
      },
    },
    {
      path: "/results/",
      label: "実績・支援事例",
      seo: {
        title: "実績・支援事例 | プロローグ",
        description: "累計5,000社の支援で培った、Indeed運用の改善実績と支援事例を紹介します。",
        ogImage: assetPath("images/indeed_partner_platinum.jpg"),
      },
    },
    {
      path: "/analytics/",
      label: "解析力",
      seo: {
        title: "解析力 | プロローグ",
        description: "応募単価、求人別CVR、採用率などを深く解析し、改善施策へ接続します。",
        ogImage: assetPath("images/indeed_partner_platinum.jpg"),
      },
    },
    {
      path: "/reasons/",
      label: "選ばれる理由",
      seo: {
        title: "選ばれる理由 | プロローグ",
        description: "認定、実績、解析力、経験豊富な運用体制。プロローグが選ばれる理由を紹介します。",
        ogImage: assetPath("images/indeed_partner_platinum.jpg"),
      },
    },
    {
      path: "/contact/",
      label: "お問い合わせ",
      seo: {
        title: "お問い合わせ | プロローグ",
        description: "Indeed運用や採用課題について、初回無料相談を受け付けています。",
        ogImage: assetPath("images/indeed_partner_platinum.jpg"),
      },
    },
    {
      path: "/company/",
      label: "会社情報",
      seo: {
        title: "会社情報 | プロローグ",
        description: "プロローグの会社概要、グループ情報、認定・実績について掲載しています。",
        ogImage: assetPath("images/indeed_partner_platinum.jpg"),
      },
    },
    {
      path: "/platinum-partner/",
      label: "プラチナパートナーについて",
      seo: {
        title: "プラチナパートナーについて | プロローグ",
        description: "Indeed特別認定プラチナムパートナーの価値と、相談するメリットを紹介します。",
        ogImage: assetPath("images/indeed_partner_platinum.jpg"),
      },
    },
  ] satisfies PageMeta[],
  home: {
    hero: {
      eyebrow: "プロローグ・ホールディングスグループ / Indeed専業",
      title: "Indeedだけを、採用の数字で動かす。",
      lead: "株式会社プロローグは、プロローグ・ホールディングス傘下でIndeed運用を担う専業会社です。表示、クリック、応募、採用単価を求人ごとに読み、原稿・予算・応募後フローまで次の一手に落とします。",
    } satisfies PageHero,
    heroLeadParagraphs: [
      "株式会社プロローグは、Indeed Platinum PartnerとしてIndeed運用を専門に支援します。",
      "求人ごとの数字を読み解き、原稿・予算・応募後フローの改善まで伴走します。",
    ],
    heroMobileLeadParagraphs: [
      "Indeed運用を専門に支援する\n採用パートナーです。",
      "Platinum Partnerの知見で、\n求人ごとの数字から改善します。",
    ],
    heroCtas: [
      { label: "無料相談する", href: "/contact/" },
      { label: "Indeed運用を見直す", href: "/contact/" },
    ],
    heroProof: {
      title: "Indeed Platinum Partner 認定",
      body: "Indeed公式の特別認定パートナー一覧に掲載される上位認定として、求人ごとの表示・クリック・応募・採用単価を読み、次の打ち手へつなげます。",
      strip: ["Indeed Platinum Partner", "公式一覧掲載の認定パートナー", "求人別に採用単価まで確認"],
      points: [
        { label: "称号", value: "Platinum Partner" },
        { label: "価値", value: "最新情報・運用知見・分析支援" },
        { label: "実装", value: "表示、クリック、応募、採用単価を改善へ" },
      ],
    },
    platinumAdvantage: {
      kicker: "Platinum Advantage",
      title: "Platinumの称号を、採用改善の優位性に変える。",
      titleLines: ["Platinumの称号を、", "採用改善の", "優位性に変える。"],
      leadParagraphs: [
        "Indeed公式では、認定パートナーへ相談するメリットとして、豊富な実績と最新情報、広告運用・分析、原稿作成、社内工数の削減が示されています。",
        "プロローグはその上位カテゴリであるPlatinumの称号を、Indeed専業の体制で採用改善の実務へ落とし込みます。",
      ],
      mobileLeadParagraphs: [
        "公式認定は、豊富な実績と\n運用知見を持つパートナーの証です。",
        "プロローグはPlatinumの称号を、\nIndeed専業の改善支援に変えます。",
      ],
      proofLabel: "Official Listing",
      proofTitle: "Indeed特別認定パートナー一覧に掲載",
      proofBody: "Platinumは、Indeed認定パートナーの中でも特に優れた実績を持つパートナーに対する特別認定です。プロローグは、公式一覧に掲載される認定グループのIndeed専業会社として、法人の採用課題に向き合います。",
      officialMerits: [
        {
          title: "豊富な実績と最新情報",
          body: "媒体仕様や採用市場の変化を踏まえ、求人ごとの運用判断を更新し続けます。",
        },
        {
          title: "広告運用・分析・原稿作成",
          body: "出稿代行ではなく、表示、クリック、応募、採用単価を見て原稿と予算を組み替えます。",
        },
        {
          title: "採用担当者の工数削減",
          body: "運用、レポート、改善提案を定例化し、社内で迷い続ける時間を減らします。",
        },
      ],
      listingAxes: [
        {
          title: "専用採用ページ・LP連携",
          body: "必要に応じてグループのWEB広告、採用ブランディング領域と接続し、応募導線まで整えます。",
        },
        {
          title: "分析・PDCA",
          body: "求人別の成果差を可視化し、改善仮説、施策、検証を短い周期で回します。",
        },
        {
          title: "Indeed PLUS時代の運用適性",
          body: "求人原稿の構造、訴求軸、応募導線を整え、複数配信時代でも採用成果を追える運用へ設計します。",
        },
      ],
    },
    dashboard: {
      title: "求人別・採用数字の診断メモ",
      subtitle: "応募数ではなく、採用に残る求人から読み直す",
      metrics: [
        { label: "表示回数", value: "128,400", trend: "+14.2%" },
        { label: "クリック率", value: "3.8%", trend: "+0.7pt" },
        { label: "応募数", value: "246", trend: "+31" },
        { label: "応募単価", value: "¥4,820", trend: "-18%" },
        { label: "採用単価", value: "¥68,000", trend: "-22%" },
        { label: "改善提案", value: "12件", trend: "優先度A: 4" },
      ],
      proposals: ["職種名の解像度を上げ、クリック前の迷いを減らす", "採用単価が重い求人の予算を週次で組み替える", "応募後の面接化率まで見て原稿を戻す"],
    },
    problems: {
      kicker: "Problem",
      title: "Indeedは、出した後から差がつく。",
      lead: "表示されない、押されない、応募されない、採用に残らない。どこで止まっているかを見ないまま原稿だけ直しても、成果は戻りません。",
      items: [
        "求人ごとの表示数に偏りがある",
        "クリックされる職種名になっていない",
        "応募前に条件で離脱している",
        "応募後の歩留まりまで見えていない",
        "予算が成果の低い求人に残っている",
        "改善判断が担当者の感覚に寄っている",
        "応募単価だけで良し悪しを決めている",
      ],
    },
    reasons: {
      kicker: "Why Prologue",
      title: "Indeed専業だから、改善の焦点がぶれない。",
      lead: "支援領域をIndeedに集中させることで、求人ごとの詰まり、応募後の歩留まり、採用単価まで深く見て改善順を決めます。",
      items: [
        { title: "Indeedに集中する運用体制", body: "リソースを分散させず、Indeedの表示・クリック・応募・採用単価を求人ごとに読み分けます。" },
        { title: "プラチナムパートナーの知見", body: "認定パートナーとして蓄積した運用知見を、日々の改善判断に集中投入します。" },
        { title: "採用現場まで見る改善", body: "応募数だけでなく、面接化・採用率・辞退要因まで確認します。" },
        { title: "求人単位の勝ち筋設計", body: "職種名、条件、訴求、予算配分を求人ごとに組み替えます。" },
        { title: "専門性を保ったグループ連携", body: "プロローグはIndeedに集中し、周辺課題は関連会社の人材支援領域と接続できます。" },
      ],
    },
    services: [
      { title: "Indeed広告運用", body: "求人ごとの成果を見ながら、配信状況・予算配分・改善優先度を調整します。", href: "/services/" },
      { title: "求人原稿改善", body: "タイトル、職種名、条件表記、訴求軸を見直し、クリックと応募につながる原稿へ改善します。", href: "/services/" },
      { title: "採用解析レポート", body: "表示、クリック、応募、応募単価、採用単価を整理し、経営判断しやすいレポートにします。", href: "/analytics/" },
      { title: "採用コンサルティング", body: "応募後歩留まりや採用要件まで踏み込み、採用成果に直結する改善方針を提案します。", href: "/contact/" },
    ],
    serviceSection: {
      kicker: "Services",
      title: "運用代行で終わらせず、改善提案まで一気通貫。",
      lead: "Indeed広告運用、求人原稿改善、採用解析レポート、採用コンサルティングを、採用成果につながる順序で提供します。",
    },
    improvementFlow: {
      kicker: "Improvement Flow",
      title: "解析から改善まで、判断を止めない運用プロセス。",
      lead: "現状の把握から改善提案、運用改善、次回施策までを定例化し、採用成果の再現性を高めます。",
      steps: ["現状ヒアリング", "Indeed掲載状況の確認", "表示・クリック・応募データの解析", "原稿・予算・ターゲットの課題整理", "改善施策の提案", "運用改善", "レポート提出・次回改善提案"],
    },
    groupRelation: {
      kicker: "Group",
      title: "Indeedに集中するから、採用周辺まで迷わずつなげられる。",
      body: "株式会社プロローグは、プロローグ・ホールディングスグループのIndeed専業会社です。Indeed広告の運用・原稿改善・解析はプロローグが深く担い、求人広告、WEB広告、採用ブランディングなど周辺課題は関連会社の知見と連携します。",
    },
    onboardingFlow: {
      kicker: "Start Flow",
      title: "導入までの流れ",
      steps: ["お問い合わせ", "採用課題のヒアリング", "現在のIndeed運用状況を確認", "改善方針のご提案", "ご契約・運用開始", "レポート・改善提案"],
    },
    faq: {
      kicker: "FAQ",
      title: "よくあるご相談",
      items: [
        { question: "Indeedをすでに運用していますが、相談できますか？", answer: "相談できます。現在の掲載状況、応募単価、求人別の成果を確認し、改善余地を整理します。" },
        { question: "求人原稿の改善だけでも依頼できますか？", answer: "可能です。タイトル、職種名、仕事内容、条件表記、訴求軸を確認し、応募につながる原稿改善を提案します。" },
        { question: "採用単価の改善も相談できますか？", answer: "相談できます。応募単価だけでなく、応募後の歩留まりや採用率も確認し、採用単価の改善につなげます。" },
        { question: "Indeed以外の媒体も相談できますか？", answer: "必要に応じて、求人広告、WEB広告、採用ブランディングなどグループ全体のソリューションとも連携します。" },
      ],
    },
    finalCta: {
      kicker: "Contact",
      title: "今のIndeed運用、どこで止まっているか見ます。",
      lead: "求人ごとの表示・クリック・応募・採用単価をもとに、最初に直すべきポイントを整理します。初回相談では、運用状況の確認から始めます。",
      ctas: [
        { label: "無料で運用状況を相談する", href: "/contact/" },
        { label: "求人別の課題を見てもらう", href: "/contact/" },
        { label: "Indeed専業会社に相談する", href: "/contact/" },
      ],
    },
  },
  services: {
    hero: {
      eyebrow: "Services",
      title: "Indeed運用を、設計から改善まで一気通貫で。",
      lead: "求人設計、原稿改善、予算配分、効果分析、改善提案まで。採用成果につながる運用へ落とし込みます。",
    },
    items: [
      { title: "求人設計", body: "採用ターゲット、勤務地、雇用条件、訴求軸を整理し、求人単位の勝ち筋を設計します。" },
      { title: "原稿改善", body: "応募に至るまでの離脱ポイントを確認し、タイトル、本文、条件表記を改善します。" },
      { title: "広告運用", body: "予算配分と配信状況を見ながら、媒体成果を最大化する運用を行います。" },
      { title: "解析レポート", body: "応募単価、求人別CVR、採用率など、改善判断に必要な指標を定例で整理します。" },
      { title: "改善提案", body: "単なる報告ではなく、次回施策と優先順位まで踏み込んで提案します。" },
      { title: "歩留まり改善", body: "応募後の採用率や辞退要因も含め、採用プロセス全体を見直します。" },
    ],
    process: ["現状分析", "運用設計", "配信・改善", "レポート", "次回施策"],
  },
  analytics: {
    hero: {
      eyebrow: "Analytics",
      title: "感覚ではなく、解析で改善する。",
      lead: "応募単価、求人別CVR、採用率、媒体別成果、改善履歴。採用成果に直結する指標を深く読み解き、次の打ち手まで設計します。",
    },
    tableRows: [
      { label: "応募単価", value: "-18.7%", note: "予算配分" },
      { label: "求人別CVR", value: "+32.4%", note: "原稿改善" },
      { label: "採用率", value: "+16.1%", note: "歩留まり改善" },
      { label: "ROI", value: "+19.6%", note: "媒体設計" },
    ],
    process: ["収集", "分析", "仮説", "改善", "検証"],
  },
  results: {
    hero: {
      eyebrow: "Results",
      title: "累計5,000社の支援で培った、採用改善の実績。",
      lead: "業種・職種・採用課題に応じて、Indeed運用を設計。応募単価、応募数、採用率の改善につながる施策を積み重ねています。",
    },
    cases: [
      { title: "地方採用 / 販売職", body: "求人別の応募単価を見直し、予算を成果の高いエリアへ再配分。", eyebrow: "応募単価 -18.7%" },
      { title: "専門職採用 / 技術職", body: "原稿訴求と条件表記を改善し、求人別CVRの改善を実現。", eyebrow: "応募数 +32.4%" },
      { title: "大量採用 / コールセンター", body: "媒体設計と応募後フローを整理し、採用率の底上げを支援。", eyebrow: "採用率 +16.1%" },
    ],
    metrics: [
      { value: "-18.7%", label: "応募単価改善", description: "求人別の応募単価を見直し、予算を成果の高いエリアへ再配分。" },
      { value: "+32.4%", label: "応募数改善", description: "原稿訴求と条件表記を改善し、求人別CVRの改善を実現。" },
      { value: "+16.1%", label: "採用率改善", description: "媒体設計と応募後フローを整理し、採用率の底上げを支援。" },
    ],
  },
  reasons: {
    hero: {
      eyebrow: "Reasons",
      title: "認定、実績、解析力。選ばれる理由には根拠がある。",
      lead: "Indeed特別認定プラチナムパートナーとして、支援実績と経験豊富な運用体制をもとに、採用成果の改善に向き合います。",
    },
    items: [
      { title: "特別認定プラチナムパートナー", body: "認定と実績に裏付けられた運用体制で、採用成果の改善に向き合います。" },
      { title: "累計5,000社の支援実績", body: "多様な業種・職種で蓄積した運用知見を活かします。" },
      { title: "深い解析と改善提案", body: "感覚的な運用に留めず、指標と仮説で改善を進めます。" },
      { title: "採用支援15年以上のプレイヤー", body: "判断できる運用者が、設計から改善まで伴走します。" },
      { title: "グループ基盤", body: "プロローグ・ホールディングス傘下のIndeed専業会社として、専門性を明確に打ち出します。" },
    ],
  },
  company: {
    hero: {
      eyebrow: "Company",
      title: "プロローグ・ホールディングス傘下のIndeed専業パートナー。",
      lead: "Indeed運用の専門性と関連会社の人材支援領域を活かし、採用成果の最大化を支援します。",
    },
    proofStrip: [
      {
        value: "Platinum",
        label: "Indeed特別認定プラチナムパートナー",
        description: "認定と実績に裏付けられた運用体制を提示します。",
      },
      {
        value: "5,000",
        label: "支援クライアント数",
        description: "多様な採用課題に向き合ってきた支援実績。",
      },
      {
        value: "15年以上",
        label: "経験豊富な運用プレイヤー",
        description: "経験豊富な担当者が設計から改善まで伴走。",
      },
      {
        value: "Group",
        label: "プロローグ・ホールディングス傘下",
        description: "Indeed専業会社として、グループ基盤を活かした継続支援体制。",
      },
    ],
    message: {
      eyebrow: "Representative Message",
      title: "採用成果に向き合う企業の、次の一歩を支える。",
      lead: "Indeed運用は、出稿して終わりではありません。表示、クリック、応募、採用単価を見ながら、事業の成長に必要な採用活動へ改善し続けることが重要です。",
      body: "私たちはIndeed専業の会社として、運用リソースを散らさず、求人ごとの数字と採用現場に向き合います。専門性を深く保ちながら、必要な周辺課題は関連会社の知見とも連携し、改善判断まで伴走します。",
      signer: "代表取締役社長 CEO 岩崎洋介",
    },
    group: {
      eyebrow: "Group Information",
      title: "グループ基盤を、継続的な採用支援体制へ。",
      lead: "プロローグ・ホールディングス傘下のIndeed専業会社として、採用課題に応じた改善提案と運用支援を提供します。",
      items: [
        { title: "グループ基盤", body: "プロローグ・ホールディングス傘下の知見と体制を活用します。" },
        { title: "運用専門性", body: "Indeed運用に精通した担当者が、求人設計から改善まで支援します。" },
        { title: "改善提案", body: "解析結果をもとに、次に打つべき施策と優先順位を整理します。" },
      ],
    },
    profile: [
      ["会社名", "株式会社プロローグ"],
      ["設立", "2026年6月1日"],
      ["資本金", "50,000,000円"],
      ["所在地", "〒221-0835 神奈川県横浜市神奈川区鶴屋町3丁目32−14 新港ビル 407"],
      ["代表者", "代表取締役社長 CEO 岩崎洋介"],
      ["事業内容", "Indeed運用支援、求人広告運用、採用解析支援"],
      ["所属グループ", "株式会社プロローグ・ホールディングス"],
      ["関連会社", "株式会社プロローグ・ホールディングス｜株式会社タグ・ホールディングス"],
      ["認定", "Indeed特別認定プラチナムパートナー"],
    ],
    relatedCompanies: [
      {
        name: "株式会社プロローグ・ホールディングス",
        logoPath: assetPath("images/prologue-holdings-logo.png"),
        note: "人材支援領域を担う関連会社",
      },
      {
        name: "株式会社タグ・ホールディングス",
        logoPath: assetPath("images/tag-holdings-logo.jpg"),
        url: "https://www.tag-group.co.jp/",
        note: "採用支援グループの関連会社",
      },
    ],
  },
  platinumPartner: {
    hero: {
      eyebrow: "Platinum Partner",
      title: "Indeed特別認定プラチナムパートナーという信頼。",
      lead: "認定は、運用実績・専門性・支援体制に裏付けられた信頼の証です。採用成果に向き合うパートナーとして、戦略から改善まで伴走します。",
    },
    certificationValue: [
      { title: "認定の信頼", body: "Indeed特別認定プラチナムパートナーとして、媒体特性を踏まえた運用支援を行います。" },
      { title: "成果への向き合い方", body: "応募数だけでなく、応募単価、求人別CVR、採用率まで確認し、改善判断につなげます。" },
      { title: "継続改善の体制", body: "求人設計から効果分析、次回施策まで、採用成果を見ながら改善を積み重ねます。" },
    ],
    comparison: {
      title: "通常代理店との違いを、相談前に把握する。",
      lead: "認定の有無だけでなく、解析、改善提案、支援体制まで含めて、依頼先を比較しやすく整理します。",
      columns: ["通常代理店", "プロローグ"],
      rows: [
        {
          label: "認定",
          standard: "媒体運用の代行が中心",
          platinum: "Indeed特別認定プラチナムパートナーとしての知見を活用",
        },
        {
          label: "改善判断",
          standard: "配信結果の報告に留まりやすい",
          platinum: "応募単価、求人別CVR、採用率をもとに次回施策まで整理",
        },
        {
          label: "支援範囲",
          standard: "広告配信や原稿調整が中心",
          platinum: "求人設計、原稿改善、広告運用、解析レポート、改善提案まで対応",
        },
        {
          label: "体制",
          standard: "担当者の経験値に品質が左右されやすい",
          platinum: "経験豊富な運用プレイヤーとグループ基盤で継続支援",
        },
      ],
    },
    benefits: [
      { title: "運用実績", body: "支援実績と媒体特性の理解をもとに、採用課題に応じた運用を行います。" },
      { title: "専門性", body: "Indeed運用に精通した担当者が改善判断を行います。" },
      { title: "改善力", body: "効果分析から次回施策まで、成果につながる提案を行います。" },
      { title: "支援体制", body: "グループ基盤を活かし、継続的な採用支援を提供します。" },
    ],
  },
  contact: {
    hero: {
      eyebrow: "Contact",
      title: "Indeed運用の課題を、まずはご相談ください。",
      lead: "現在の採用課題や運用状況をお伺いし、改善の方向性を整理します。初回相談は無料です。",
    },
    form: {
      kicker: "Contact Form",
      title: "無料相談フォーム",
      lead: "必須項目をご入力のうえ送信してください。内容確認後、担当者より折り返しご連絡します。",
      sectionTitle: "採用課題と運用状況を、フォームからお聞かせください。",
      endpointLabel: "送信先",
      submitLabel: "相談内容を送信する",
      privacyLabel: "個人情報保護方針",
      privacySuffix: "に同意します。",
    },
    contactDesk: {
      kicker: "Contact Desk",
      title: "相談前の確認先",
      lead: "フォーム送信後、担当者より折り返しご連絡します。電話・メール情報は公開前に正式情報へ差し替えてください。",
      telLabel: "電話",
      emailLabel: "メール",
    },
    certifiedPanel: {
      kicker: "Certified Partner",
      title: "認定と実績を、相談時の安心材料に。",
    },
    trustSection: {
      kicker: "Trust Points",
      title: "初回相談で、課題の輪郭と次の一手を整理します。",
    },
    flowSection: {
      kicker: "Consultation Flow",
      title: "送信後は、ヒアリングから改善方針の整理まで進めます。",
      lead: "現状分析から改善方針の提案まで、採用成果につながる順序で確認します。",
    },
    endpoint: TODO_REPLACE_FORM_ENDPOINT,
    fields: [
      { name: "company", label: "会社名", type: "text", required: true, placeholder: "例）株式会社プロローグ" },
      { name: "name", label: "お名前", type: "text", required: true, placeholder: "例）山田 太郎" },
      { name: "email", label: "メールアドレス", type: "email", required: true, placeholder: "例）contact@example.jp" },
      { name: "tel", label: "電話番号", type: "tel", required: false, placeholder: "例）03-0000-0000" },
      { name: "role", label: "採用予定職種", type: "text", required: false, placeholder: "例）営業職、販売職、技術職" },
      { name: "budget", label: "月間広告予算", type: "select", required: false, options: ["未定", "30万円未満", "30〜100万円", "100万円以上"] },
      { name: "message", label: "相談内容", type: "textarea", required: true, placeholder: "採用課題、現在の運用状況、相談したい内容をご記入ください。" },
    ],
    trustBadges: [
      { title: "初回相談無料", body: "現在の採用課題を整理し、改善の方向性を確認します。" },
      { title: "認定パートナー", body: "Indeed特別認定プラチナムパートナーとしての知見を活かします。" },
      { title: "実績にもとづく提案", body: "支援実績と解析データをもとに、優先度の高い施策からご提案します。" },
    ],
    consultationFlow: [
      { title: "フォーム送信", body: "相談内容と採用状況をお送りください。" },
      { title: "担当者より連絡", body: "内容確認後、日程や確認事項をご連絡します。" },
      { title: "無料ヒアリング", body: "求人状況、予算、応募後フローまで整理します。" },
      { title: "改善方針の提案", body: "Indeed運用の優先施策と進め方をお伝えします。" },
    ],
    thanksMessage: "お問い合わせありがとうございます。担当者より折り返しご連絡します。",
  },
  replacementChecklist: [
    "DONE: Indeed Platinumロゴは正式受領素材を使用",
    "TODO_REPLACE: Indeed特別認定パートナー / Platinum Partner の最終表記",
    "TODO_REPLACE: 支援社数・満足度・経験年数の最終根拠",
    "TODO_REPLACE: メールアドレスなど未確認の連絡先",
    "TODO_REPLACE: 個人情報保護方針URL",
    "TODO_REPLACE: OGP画像・meta description",
    "TODO_REPLACE_FORM_ENDPOINT: フォーム送信先",
  ],
} as const;

export const analysisChart = [
  { label: "12月", primary: 40, secondary: 26 },
  { label: "1月", primary: 54, secondary: 34 },
  { label: "2月", primary: 48, secondary: 31 },
  { label: "3月", primary: 68, secondary: 43 },
  { label: "4月", primary: 62, secondary: 50 },
  { label: "5月", primary: 78, secondary: 58 },
];
