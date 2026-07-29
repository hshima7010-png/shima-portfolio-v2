// 個人制作(層4)— すべて趣味の個人開発。業務での成果物ではない。
// 実案件(works.ts)とファイルを分けること自体が層の分離(DESIGN.md §9)。

export interface Production {
  slug: string;
  title: string;
  tags: string[];
  tagLine: string;
  desc: string;
  image: string;
  url: string;
}

export const productions: Production[] = [
  {
    slug: "atelier",
    title: "ATELIER",
    tags: ["JS"],
    tagLine: "HTML · CSS · JS",
    desc: "3ブランドを束ねるキュレーションECのデモ。デザインシステムを設計し、ブランドごとに異なる世界観を実装。",
    image: "/images/demo-ec.webp",
    url: "https://hshima7010-png.github.io/ATELIER/",
  },
  {
    slug: "fukuoka-ramen-map",
    title: "FUKUOKA-RAMEN-MAP",
    tags: ["JS", "Map"],
    tagLine: "JS · Google Maps API",
    desc: "福岡市のラーメン店を地図で探せるWebアプリ。ジャンル絞り込み・お気に入り保存機能つき。",
    image: "/images/ramen-map.webp",
    url: "https://hshima7010-png.github.io/ramen-map/",
  },
  {
    slug: "miyazaki-ramen-map",
    title: "MIYAZAKI-RAMEN-MAP",
    tags: ["JS", "Map"],
    tagLine: "JS · Google Maps API",
    desc: "宮崎県のラーメン店を地図で探せるWebアプリ。福岡版の仕組みを別地域に展開。",
    image: "/images/miyazaki-ramen.webp",
    url: "https://hshima7010-png.github.io/miyazaki-ramen/",
  },
  {
    slug: "qiita-finder",
    title: "QIITA FINDER",
    tags: ["Vue"],
    tagLine: "Vue 3 · REST API",
    desc: "Qiitaの記事を検索・ソートできるWebアプリ。検索履歴・ダークモード・ページネーション対応。",
    image: "/images/qiita.webp",
    url: "https://hshima7010-png.github.io/Qiita-Finder/",
  },
  {
    slug: "hm-recommender",
    title: "H&M Recommender EC",
    tags: ["Python", "ML"],
    tagLine: "Python · pandas · scikit-learn · Flask",
    desc: "機械学習による3種類のレコメンドエンジンを搭載したファッションECのデモ。",
    image: "/images/HM.webp",
    url: "https://github.com/hshima7010-png/hm-recommender",
  },
];

export const productionTags = ["All", "JS", "Vue", "Map", "Python", "ML"];
