import Ascii from "./Ascii";
import { works } from "@/data/works";

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
          <span>(Client work — with permission)</span>
          <span>/From zero to one/</span>
        </div>
      </div>
      <div className="works-list">
        {works.map((w) =>
          w.href ? (
            <a key={w.num} href={w.href} target="_blank" rel="noopener noreferrer" className="works-row">
              <span className="num">({w.num})</span>
              <span className="title">{w.title}</span>
              <span className="year">{w.year}</span>
            </a>
          ) : (
            <div key={w.num} className="works-row">
              <span className="num">({w.num})</span>
              <span className="title">{w.title}</span>
              <span className="year">{w.year}</span>
            </div>
          )
        )}
      </div>
      <Ascii mode="logo" className="works-ascii" />
    </section>
  );
}
