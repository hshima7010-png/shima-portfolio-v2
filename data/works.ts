// 実案件(層3)— クライアントワーク。個人制作(productions.ts)と混在させないこと。
// 掲載は必ずクライアントの許諾を得る。公開前案件は開発用URL(myshopify.com)を載せない。

export interface Work {
  num: string;
  title: string;
  year: string;
  /** 公開後に独自ドメインURLを設定する。未公開のうちは null のまま */
  href: string | null;
}

export const works: Work[] = [
  {
    num: "01",
    title: "日昇館 — Gift EC / Shopify",
    year: "2026",
    href: null, // 公開後に独自ドメインURLへ差し替え
  },
];
