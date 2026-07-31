import Ascii from "./Ascii";
import { works, type Work } from "@/data/works";

// カード中身。href の有無で <a> / <div> のどちらに包まれても同じ見た目にする
function WorkCardBody({ w }: { w: Work }) {
  return (
    <>
      <div className="frame">
        <div className="badges">
          {w.kind === "sample" && <span className="badge">制作サンプル</span>}
          {w.wip && <span className="badge badge--wip">制作中</span>}
        </div>
        {w.image ? (
          <div className="img">
            <img
              src={w.image}
              alt={`${w.title} のスクリーンショット`}
              loading="lazy"
              decoding="async"
            />
          </div>
        ) : (
          // 未公開・スクリーンショット未用意の案件
          <div className="img img--empty">COMING SOON</div>
        )}
      </div>
      <div className="meta">
        <span>
          ({w.num}) {w.tagLine}
        </span>
        <span>{w.year}</span>
      </div>
      <div className="name">
        {w.title}
        {w.href ? " ↗" : ""}
      </div>
      {w.desc && <div className="desc">{w.desc}</div>}
    </>
  );
}

export default function Works() {
  return (
    <section id="works" className="works">
      <div className="works-head">
        <h2 className="display-l">
          My Recently
          <br />
          Selected Works
        </h2>
        <div className="works-head-labels">
          <span>(Client work &amp; samples)</span>
          <span>/From zero to one/</span>
        </div>
      </div>
      <div className="works-grid">
        {works.map((w) =>
          w.href ? (
            <a
              key={w.num}
              href={w.href}
              target="_blank"
              rel="noopener noreferrer"
              className="works-card"
            >
              <WorkCardBody w={w} />
            </a>
          ) : (
            <div key={w.num} className="works-card">
              <WorkCardBody w={w} />
            </div>
          )
        )}
      </div>
      <Ascii mode="logo" className="works-ascii" />
    </section>
  );
}
