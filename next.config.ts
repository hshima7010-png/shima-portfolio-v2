import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 静的書き出し: `npm run build` で out/ に静的サイトが生成される。
  // Vercel にそのままデプロイしても、GitHub Pages 等に out/ を置いてもよい。
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
