# SHIMA PORTFOLIO v2

Claude Design のプロトタイプ(`SHIMA Portfolio.dc.html`)を Next.js + TypeScript で実装した新ポートフォリオです。
仕様は `../DESIGN.md`、コンテンツ方針は `../CLAUDE.md` に従っています。

## 動かし方

```bash
cd v2
npm install
npm run dev      # 開発サーバー → http://localhost:3000
npm run build    # 静的書き出し → out/ フォルダ
```

`next.config.ts` で `output: "export"` を設定しているため、`npm run build` すると `out/` に静的サイトが生成されます。

## 公開方法

- **Vercel(推奨)**: リポジトリを Vercel に接続するだけ。設定不要
- **GitHub Pages**: `out/` の中身を公開する。リポジトリ名のサブパス(`/repo/`)で公開する場合は `next.config.ts` に `basePath` の設定が必要

## 公開前の TODO

- [ ] `app/layout.tsx` の `robots: noindex` を外す(現在は非公開設定)
- [ ] 本人写真を `public/images/hero-photo.webp` に置き、`components/Hero.tsx` のプレースホルダーを差し替える
- [ ] 日昇館の公開後、`data/works.ts` の `href` に独自ドメインURLを設定(myshopify.com は載せない)
- [ ] OGP画像(ダーク×ブルーのタイポ組み)を用意して `metadata` に追加
- [ ] Lighthouse でモバイル90+を確認

## 構成

- `app/` … レイアウト・ページ・グローバルCSS(デザイントークンは `globals.css` の `:root`)
- `components/` … セクション別コンポーネント。`Ascii.tsx` が ASCII 演出(地形 / ロゴ / プラズマ / ノイズ)を担当
- `data/works.ts` … 実案件(層3)/ `data/productions.ts` … 個人制作(層4)。**この2ファイルは統合しないこと**(CLAUDE.md の層分離ルール)
- `lib/ascii.ts` … ASCII 描画ロジック(Claude Design プロトタイプから移植)

`prefers-reduced-motion` 設定時は全アニメーション(マーキー・リビール・ASCII)が停止します。
