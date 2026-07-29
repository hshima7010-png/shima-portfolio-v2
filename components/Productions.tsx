"use client";

import { useState } from "react";
import { productions, productionTags } from "@/data/productions";

export default function Productions() {
  const [filter, setFilter] = useState("All");
  const filtered =
    filter === "All" ? productions : productions.filter((p) => p.tags.includes(filter));

  return (
    <section id="productions" className="productions">
      <div className="works-head" style={{ marginBottom: 0 }}>
        <h2 className="display-l">Productions</h2>
        <div className="works-head-labels">
          <span>(Personal — 04)</span>
        </div>
      </div>
      <p className="productions-note">個人開発の制作物です。業務での成果物ではありません。</p>
      <div className="filter-row" role="group" aria-label="タグで絞り込み">
        {productionTags.map((tag) => (
          <button
            key={tag}
            type="button"
            className={`filter-btn${filter === tag ? " active" : ""}`}
            aria-pressed={filter === tag}
            onClick={() => setFilter(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="prod-grid">
        {filtered.map((p) => (
          <a
            key={p.slug}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="prod-card"
          >
            <div className="frame">
              <div className="img">
                <img src={p.image} alt={`${p.title} のスクリーンショット`} loading="lazy" decoding="async" />
              </div>
            </div>
            <div className="tags">{p.tagLine}</div>
            <div className="name">{p.title} ↗</div>
            <div className="desc">{p.desc}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
