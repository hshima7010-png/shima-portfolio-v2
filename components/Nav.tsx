export default function Nav() {
  return (
    <nav className="nav">
      <a href="#top" className="nav-logo" aria-label="トップへ戻る">
        SH
      </a>
      <div className="nav-links">
        <a href="#top">Home</a>
        <a href="#about">About *</a>
        <a href="#works">Works #</a>
        <a href="#productions">Productions</a>
      </div>
      <a href="mailto:h.shima7010@gmail.com" className="nav-cta">
        Let&apos;s talk<span aria-hidden="true">↗</span>
      </a>
    </nav>
  );
}
