import Ascii from "./Ascii";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="section-head mono-label">
        <span>About *</span>
        <span>/ EC package dev — 4 years /</span>
      </div>
      <div className="about-grid">
        <h2 className="about-title">
          I build <span className="muted">EC that</span> sells —{" "}
          <span className="muted">from</span> architecture <span className="muted">to</span>{" "}
          operation.
        </h2>
        <Ascii mode="logo" className="about-ascii" />
      </div>
      <p className="body-text about-text">
        ECパッケージシステムの開発に4年間、フロントエンドからバックエンドまで一貫して携わってきました。画面の使いやすさと裏側の堅牢さは切り離せない——その両方を自分で設計できることが強みです。現在は福岡を拠点に、Shopify専門スタジオ
        GROWTH STUDIO
        を運営し、ECの構築から公開後の運用までを自分の手で回しています。「作って終わり」ではなく、「売れ続ける仕組み」を届けることを大切にしています。
      </p>
      <div className="about-giant" aria-hidden="true">
        about
      </div>
    </section>
  );
}
