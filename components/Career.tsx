import { career, skillCols } from "@/data/skills";

export default function Career() {
  return (
    <section id="career" className="career">
      <div className="career-head">
        <h2 className="display-l">Career / Skills</h2>
        <span className="mono-label" style={{ paddingBottom: 8 }}>
          (Layer 01 — 実務)
        </span>
      </div>
      <div className="skills-grid">
        {skillCols.map((col) => (
          <div key={col.name}>
            <div className="mono-label skill-col-name">{col.name}</div>
            {col.items.map((label, i) => (
              <div className="skill-row" key={label}>
                <span className="n">({String(i + 1).padStart(2, "0")})</span>
                <span className="label">{label}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="timeline">
        <div className="mono-label" style={{ marginBottom: 16 }}>
          Career (timeline)
        </div>
        {career.map((c) => (
          <div className="timeline-row" key={c.period}>
            <span className={`period${c.now ? " now" : ""}`}>{c.period}</span>
            <span className="desc">{c.desc}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
