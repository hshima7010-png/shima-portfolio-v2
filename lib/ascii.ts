// ASCII/ディザ描画ロジック(Claude Design プロトタイプから移植)

export interface Dims {
  cols: number;
  rows: number;
}

export interface LogoMask {
  mask: Float32Array;
  cols: number;
  rows: number;
}

export function hash(x: number, y: number): number {
  let h = (x * 374761393 + y * 668265263) | 0;
  h = ((h ^ (h >>> 13)) * 1274126177) | 0;
  return ((h ^ (h >>> 16)) >>> 0) / 4294967295;
}

export function dims(el: HTMLElement | null): Dims | null {
  if (!el) return null;
  const lh = parseFloat(getComputedStyle(el).lineHeight) || 12;
  const cols = Math.floor(el.clientWidth / 7.2);
  const rows = Math.floor(el.clientHeight / lh);
  return cols > 4 && rows > 2 ? { cols, rows } : null;
}

/** Hero 背景: 地形+瞬き */
export function drawTerrain(el: HTMLElement | null, t: number): void {
  const d = dims(el);
  if (!d || !el) return;
  const { cols, rows } = d;
  const off = t * 1.6;
  const set = "·:++**%##@@";
  let s = "";
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const wx = x + off;
      const v = y / rows;
      const ridge = 0.25 * Math.sin(wx * 0.08) + 0.15 * Math.sin(wx * 0.021 + 2);
      const p = Math.max(0, v - 0.25 + ridge);
      const xi = Math.floor(wx);
      const r = hash(xi, y);
      if (r >= p * p * 1.6) {
        s += " ";
        continue;
      }
      const tw = 0.6 + 0.4 * Math.sin(t * 0.9 + r * 6.283 + y * 0.2);
      const idx = Math.min(set.length - 1, Math.floor(hash(xi + 7919, y) * p * 14 * tw));
      s += set[idx];
    }
    s += "\n";
  }
  el.textContent = s;
}

/** Statement 背景: プラズマ+マウス追従 */
export function drawStatement(
  el: HTMLElement | null,
  t: number,
  mx: number,
  my: number
): void {
  const d = dims(el);
  if (!d || !el) return;
  const { cols, rows } = d;
  const tt = t * 0.5;
  const set = " ·:;=+*%#$@";
  const mcx = mx * cols;
  const mcy = my * rows;
  let s = "";
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (hash(x, y * 31) < 0.08) {
        s += " ";
        continue;
      }
      let b =
        0.45 +
        0.25 * Math.sin(x * 0.055 + tt + Math.sin(y * 0.045 + tt * 0.7) * 1.5) +
        0.25 * Math.sin(y * 0.09 - tt * 0.8 + Math.sin(x * 0.03 + tt * 0.4));
      const dx = (x - mcx) / 14;
      const dy = (y - mcy) / 8;
      b += 0.55 * Math.exp(-(dx * dx + dy * dy));
      const idx = Math.max(1, Math.min(set.length - 1, Math.round(b * (set.length - 1))));
      s += set[idx];
    }
    s += "\n";
  }
  el.textContent = s;
}

/** 回転ドーナツ(ロゴ画像が使えないときのフォールバック) */
export function drawDonut(el: HTMLElement | null, A: number, B: number): void {
  const d = dims(el);
  if (!d || !el) return;
  const { cols, rows } = d;
  const out: string[] = new Array(cols * rows).fill(" ");
  const zb: number[] = new Array(cols * rows).fill(0);
  const lum = ".,-~:;=!*#$@";
  for (let j = 0; j < 6.28; j += 0.07) {
    for (let i = 0; i < 6.28; i += 0.02) {
      const c = Math.sin(i);
      const dd = Math.cos(j);
      const e = Math.sin(A);
      const f = Math.sin(j);
      const g = Math.cos(A);
      const h = dd + 2;
      const D = 1 / (c * h * e + f * g + 5);
      const l = Math.cos(i);
      const m = Math.cos(B);
      const n = Math.sin(B);
      const t = c * h * g - f * e;
      const x = Math.floor(cols / 2 + cols * 0.38 * D * (l * h * m - t * n));
      const y = Math.floor(rows / 2 + rows * 0.46 * D * (l * h * n + t * m));
      const o = x + cols * y;
      const N = Math.floor(
        8 * ((f * e - c * dd * g) * m - c * dd * e - f * g - l * dd * n)
      );
      if (y >= 0 && y < rows && x >= 0 && x < cols && D > zb[o]) {
        zb[o] = D;
        out[o] = lum[N > 0 ? N : 0];
      }
    }
  }
  let s = "";
  for (let k = 0; k < rows; k++) s += out.slice(k * cols, (k + 1) * cols).join("") + "\n";
  el.textContent = s;
}

/** ロゴ画像 → ASCII マスク生成 */
export function buildLogoMask(el: HTMLElement | null, img: HTMLImageElement): LogoMask | null {
  const d = dims(el);
  if (!d || !img) return null;
  const { cols, rows } = d;
  const cellAspect = 12 / 7.2;
  const sc = document.createElement("canvas");
  sc.width = img.width;
  sc.height = img.height;
  const sctx = sc.getContext("2d");
  if (!sctx) return null;
  sctx.drawImage(img, 0, 0);
  const sp = sctx.getImageData(0, 0, sc.width, sc.height).data;
  let x0 = sc.width, y0 = sc.height, x1 = 0, y1 = 0;
  for (let y = 0; y < sc.height; y++) {
    for (let x = 0; x < sc.width; x++) {
      const i = (y * sc.width + x) * 4;
      const dark = (sp[i + 3] / 255) * (1 - (sp[i] + sp[i + 1] + sp[i + 2]) / 765);
      if (dark > 0.35) {
        if (x < x0) x0 = x;
        if (x > x1) x1 = x;
        if (y < y0) y0 = y;
        if (y > y1) y1 = y;
      }
    }
  }
  if (x1 <= x0 || y1 <= y0) {
    x0 = 0;
    y0 = 0;
    x1 = img.width;
    y1 = img.height;
  }
  const bw = x1 - x0 + 1;
  const bh = y1 - y0 + 1;
  const bAspect = bw / bh;
  let gh = rows;
  let gw = Math.floor(gh * bAspect * cellAspect);
  if (gw > cols) {
    gw = cols;
    gh = Math.floor(gw / (bAspect * cellAspect));
  }
  const cv = document.createElement("canvas");
  cv.width = gw;
  cv.height = gh;
  const cx = cv.getContext("2d");
  if (!cx) return null;
  cx.drawImage(img, x0, y0, bw, bh, 0, 0, gw, gh);
  const px = cx.getImageData(0, 0, gw, gh).data;
  const mask = new Float32Array(cols * rows);
  const ox = Math.floor((cols - gw) / 2);
  const oy = Math.floor((rows - gh) / 2);
  for (let y = 0; y < gh; y++) {
    for (let x = 0; x < gw; x++) {
      const i = (y * gw + x) * 4;
      const a = px[i + 3] / 255;
      const lum = (px[i] + px[i + 1] + px[i + 2]) / 765;
      const dark = a * (1 - lum);
      const yy = y + oy;
      const xx = x + ox;
      if (yy >= 0 && yy < rows && xx >= 0 && xx < cols) mask[yy * cols + xx] = dark;
    }
  }
  return { mask, cols, rows };
}

/** ロゴマスクをスイープ光付きで描画 */
export function drawLogo(el: HTMLElement | null, lm: LogoMask | null, t: number): void {
  if (!el || !lm) return;
  const { mask, cols, rows } = lm;
  const lum = " ·:;=+*#%$@";
  const sweep = ((t * 0.35) % 2.4) - 0.7;
  let s = "";
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const v = mask[y * cols + x];
      if (v < 0.35) {
        s += " ";
        continue;
      }
      const u = (x / cols + y / rows) / 2;
      const dist = u - sweep;
      const band = Math.exp(-dist * dist * 60);
      const base = 0.45 + 0.15 * Math.sin(t * 0.8 + x * 0.18 + y * 0.31);
      let b = Math.min(1, base + band);
      if (dist > 0 && dist < 0.12 && Math.random() < 0.18) b = 0.15;
      const idx = Math.max(1, Math.min(lum.length - 1, Math.round(v * b * (lum.length - 1) + 0.5)));
      s += lum[idx];
    }
    s += "\n";
  }
  el.textContent = s;
}

/** CTA 背景: 中央に集まる静的ノイズ雲 */
export function fillNoiseCloud(el: HTMLElement | null): void {
  const d = dims(el);
  if (!d || !el) return;
  const { cols, rows } = d;
  let s = "";
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const dx = (x - cols / 2) / (cols / 2);
      const dy = (y - rows / 2) / (rows / 2);
      const p = Math.exp(-(dx * dx + dy * dy * 1.6) * 3.2);
      s += Math.random() < p * 0.8 ? "#@%$*+·:"[Math.floor(Math.random() * 8)] : " ";
    }
    s += "\n";
  }
  el.textContent = s;
}
