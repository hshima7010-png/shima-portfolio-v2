import Ascii from "./Ascii";

export default function Cta() {
  return (
    <section id="contact" className="cta">
      <Ascii mode="cloud" className="cta-ascii" />
      <h2 className="cta-title">
        ( We <span className="muted">support you in</span> taking that first step{" "}
        <span className="muted">and</span> keeping it going. )
      </h2>
      <a href="mailto:h.shima7010@gmail.com" className="pill pill--primary">
        START THE PROJECT
        <span className="pill-arrow" aria-hidden="true">
          ↗
        </span>
      </a>
    </section>
  );
}
