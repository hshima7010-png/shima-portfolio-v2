import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "嶋 邦将 | EC Engineer — SHIMA PORTFOLIO",
  description:
    "宮崎拠点のECエンジニア 嶋 邦将(Hosho Shima)のポートフォリオ。ECパッケージ開発 通算約4年+Shopify専門EC制作スタジオ GROWTH STUDIO 運営。売れるECを、設計から運用まで。",
  // TODO: 本番公開時に robots の noindex を外すこと(DESIGN.md §8)
  robots: { index: false, follow: false },
  openGraph: {
    title: "嶋 邦将 | EC Engineer — SHIMA PORTFOLIO",
    description: "売れるECを、設計から運用まで。EC Engineer & Shopify Studio Owner.",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700;800&family=Noto+Sans+JP:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
