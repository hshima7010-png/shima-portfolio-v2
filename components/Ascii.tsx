"use client";

// ASCII 演出のクライアントコンポーネント。
// mode に応じて <pre> に文字を描画する。prefers-reduced-motion では静止画1フレームのみ。

import { useEffect, useRef } from "react";
import {
  buildLogoMask,
  drawDonut,
  drawLogo,
  drawStatement,
  drawTerrain,
  fillNoiseCloud,
  type LogoMask,
} from "@/lib/ascii";

type Mode = "terrain" | "logo" | "statement" | "cloud";

interface AsciiProps {
  mode: Mode;
  className?: string;
}

export default function Ascii({ mode, className }: AsciiProps) {
  const ref = useRef<HTMLPreElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let t = 0;
    let angleA = 0.6;
    let angleB = 0.3;
    let mx = -10;
    let my = -10;
    let logoMask: LogoMask | null = null;
    let cancelled = false;

    // 静的モード: 一度だけ描画して終了
    if (mode === "cloud") {
      fillNoiseCloud(el);
      return;
    }

    const parent = el.parentElement;
    const onMove = (e: MouseEvent) => {
      if (!parent) return;
      const r = parent.getBoundingClientRect();
      mx = (e.clientX - r.left) / r.width;
      my = (e.clientY - r.top) / r.height;
    };
    const onLeave = () => {
      mx = -10;
      my = -10;
    };
    if (mode === "statement" && parent) {
      parent.addEventListener("mousemove", onMove);
      parent.addEventListener("mouseleave", onLeave);
    }

    const frame = () => {
      if (cancelled) return;
      if (mode === "terrain") drawTerrain(el, t);
      else if (mode === "statement") drawStatement(el, t, mx, my);
      else if (mode === "logo") {
        if (logoMask) drawLogo(el, logoMask, t);
        else drawDonut(el, angleA, angleB);
      }
      angleA += 0.02;
      angleB += 0.011;
      t += 0.045;
      if (!reduced) raf = requestAnimationFrame(frame);
    };

    if (mode === "logo") {
      const img = new Image();
      img.onload = () => {
        if (cancelled) return;
        logoMask = buildLogoMask(el, img);
      };
      img.src = "/images/logo89.png";
    }

    frame();

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      if (mode === "statement" && parent) {
        parent.removeEventListener("mousemove", onMove);
        parent.removeEventListener("mouseleave", onLeave);
      }
    };
  }, [mode]);

  return <pre ref={ref} aria-hidden="true" className={`ascii ${className ?? ""}`} />;
}
