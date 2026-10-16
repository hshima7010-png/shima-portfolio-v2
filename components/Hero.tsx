import Ascii from "./Ascii";

const LINES = [
  "I'm Hosho Shima,",
  "an EC Engineer & Shopify",
  "Studio Owner based in",
  "Miyazaki, Japan.",
];

export default function Hero() {
  return (
    <header id="top" className="hero">
      <Ascii mode="terrain" className="hero-ascii" />
      <div className="hero-grid">
        <div className="hero-photo">
          <img
            src="/images/hero-photo.webp"
            alt="GROWTH STUDIO のカバービジュアル — Design / Strategy / Growth"
            width={1000}
            height={750}
            fetchPriority="high"
          />
        </div>
        <div>
          <div className="hero-label" data-anim="">
            (About me)
          </div>
          <h1 className="hero-title">
            {LINES.map((line, i) => (
              <span className="line" key={line}>
                <span data-anim="" style={{ animationDelay: `${0.1 * (i + 1)}s` }}>
                  {line}
                </span>
              </span>
            ))}
          </h1>
          <p className="body-text hero-lead" data-anim="">
            売れるECを、設計から運用まで。ECパッケージ開発 通算約4年+Shopify専門スタジオ GROWTH
            STUDIO 運営。
          </p>
        </div>
      </div>
      <div className="hero-bottom" data-anim="">
        <span>/ 2026 /</span>
        <span>Scroll down ↓</span>
        <div className="hero-cta">
          <a
            href="https://www.growth-studio.shop/consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="pill pill--primary"
          >
            START THE PROJECT
            <span className="pill-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
          <a href="#works" className="pill pill--ghost">
            VIEW WORKS
          </a>
        </div>
      </div>
    </header>
  );
}
