// スキル・経歴(層1)。事実ベースで記載し、盛らない(CLAUDE.md準拠)。

export interface SkillCol {
  name: string;
  items: string[];
}

export const skillCols: SkillCol[] = [
  {
    name: "Frontend (1–6)",
    items: [
      "HTML / CSS",
      "JavaScript / TypeScript",
      "Vue 3",
      "React / Next.js",
      "jQuery",
      "Accessibility",
    ],
  },
  {
    name: "Backend (1–6)",
    items: [
      "C#",
      "PHP",
      "Python / pandas",
      "Node.js",
      "SQL Server / MySQL",
      "サーバーサイド・DB設計",
    ],
  },
  {
    name: "EC / Shopify (1–5)",
    items: [
      "Shopify ストア構築",
      "ECパッケージ開発 (通算約4年)",
      "ブランド設計 / EC戦略",
      "EC運用・分析改善",
      "LINE / メールマーケティング",
    ],
  },
];

export interface CareerItem {
  period: string;
  now: boolean;
  desc: string;
}

export const career: CareerItem[] = [
  {
    period: "2026.06 — NOW",
    now: true,
    desc: "GROWTH STUDIO / 個人事業 — Shopify専門のEC制作スタジオを運営(企画・デザイン・実装・運用まで一人で担当)",
  },
  {
    period: "2022 — 2025",
    now: false,
    desc: "自社サービス企業 / ECパッケージシステム開発 — フロントエンドとバックエンドの双方を担当(C# / SQL Server / JavaScript) (在学中インターン1年3ヶ月を含む)",
  },
];
