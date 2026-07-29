import Ascii from "./Ascii";

export default function Cta() {
  return (
    <section id="contact" className="cta">
      <Ascii mode="cloud" className="cta-ascii" />
      <h2 className="cta-title">
        ( Have something <span className="muted">crazy</span> in your mind?{" "}
        <span className="muted">Let&apos;s</span> build it together! )
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
