export default function Service() {
  return (
    <section id="service" className="service">
      <div className="service-left">
        <div className="section-head mono-label" style={{ marginBottom: 0 }}>
          <span>(Service — 02)</span>
          <span>/ Business, not a portfolio piece /</span>
        </div>
        <div className="service-status">
          <span className="dot" aria-hidden="true" />
          運営中
        </div>
        <h2 className="service-title">
          GROWTH
          <br />
          STUDIO
        </h2>
        <p className="body-text">
          Shopify専門のEC制作スタジオを個人で運営しています。ブランド設計からEC構築・運用改善まで、「売れる」に一貫して伴走するサービスです。企画・デザイン・実装・運用のすべてを自分で担当し、事業として立ち上げから運営まで行っています。制作のご相談は本サイトではなく
          GROWTH STUDIO で承ります。
        </p>
        <div>
          <div className="service-meta-row">
            <span className="k">担当範囲</span>
            <span>企画 / デザイン / 実装 / 運用</span>
          </div>
          <div className="service-meta-row">
            <span className="k">使用技術</span>
            <span>Next.js / TypeScript / Shopify / Vercel</span>
          </div>
        </div>
        <div>
          <a
            href="https://www.growth-studio.shop/"
            target="_blank"
            rel="noopener noreferrer"
            className="pill"
          >
            サービスサイトを見る
            <span className="pill-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>
      </div>
      <div className="service-right">
        <div className="service-right-giant" aria-hidden="true">
          Service
        </div>
        <div className="service-right-label">Website design → EC building</div>
        <div className="service-shot">
          <div className="img">
            <img
              src="/images/growth-studio.webp"
              alt="GROWTH STUDIO のサービスサイトのトップページ"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="cap">GROWTH STUDIO — Shopify EC Studio</div>
        </div>
      </div>
    </section>
  );
}
