// 実案件(層3)— クライアントワーク。個人制作(productions.ts)と混在させないこと。
// 掲載は必ずクライアントの許諾を得る。公開前案件は開発用URL(myshopify.com)を載せない。

export interface Work {
  num: string;
  title: string;
  year: string;
  /**
   * 案件区分。実際のクライアントワークは "client"(省略時)、
   * 品質提示用のデモストアは "sample"。sample はカードに「制作サンプル」バッジが付く。
   * 実案件と見分けがつかない状態で並べないこと。
   */
  kind?: "client" | "sample";
  /** 制作中の案件。カードに「制作中」バッジが付く。公開後に外すこと */
  wip?: boolean;
  /** 技術・案件種別の1行表記 */
  tagLine: string;
  /** 案件の説明。用意できていないうちは省略する */
  desc?: string;
  /** public/images 配下のスクリーンショット。未用意のうちは省略する(カードは COMING SOON 表示になる) */
  image?: string;
  /** 公開後に独自ドメインURLを設定する。未公開のうちは null のまま */
  href: string | null;
}

export const works: Work[] = [
  {
    num: "01",
    title: "日昇館 — Gift EC / Shopify password:123",
    year: "2026",
    wip: true,
    tagLine: "Shopify · Gift EC",
    image: "/images/nissyokan.webp",
    href: "https://nkkbcer.myshopify.com/", // 公開後に独自ドメインURLへ差し替え
  },
  {
    num: "02",
    title: "翠園 — 日本茶ブランド EC / Shopify",
    year: "2026",
    kind: "sample",
    tagLine: "Shopify · Gift EC · LINE",
    desc: "鹿児島の日本茶ブランド「翠園」。単品販売に偏っていた売り方を、用途別ギフトページを軸に組み直しました。選び方・淹れ方のオリジナルセクションで新規の離脱を防ぎ、LINEと季節設計でリピートまでつなげています。",
    image: "/images/suien.webp",
    href: "https://growth-studio-swart.vercel.app/works/suien",
  },
  {
    num: "03",
    title: "蔵珈琲 — 自家焙煎珈琲 EC / Shopify",
    year: "2026",
    kind: "sample",
    tagLine: "Shopify · 自家焙煎珈琲 · ブランド設計",
    desc: "京都・老舗喫茶の自家焙煎珈琲を題材にした制作サンプル。ブランド設計からShopify構築まで、STARTプランの品質を実際のストアでご覧いただけます。",
    image: "/images/kura.webp",
    href: "https://growth-studio-swart.vercel.app/works/kura-coffee",
  },
  {
    num: "04",
    title: "AMANE — オーガニックスキンケア EC / Shopify",
    year: "2026",
    kind: "sample",
    tagLine: "Shopify · Brand Design",
    desc: "オーガニックスキンケアブランドを題材にした制作サンプル。肌診断・成分辞典・会員ランクまで、コスメD2Cの「売れる仕組み」をご覧いただけます。",
    image: "/images/amane.webp",
    href: "https://growth-studio-swart.vercel.app/works/amane",
  },
];
