interface MarqueeProps {
  items: string[];
  footer?: boolean;
}

export default function Marquee({ items, footer }: MarqueeProps) {
  const chunk = (
    <>
      {items.map((item, i) => (
        <span key={i}>
          {item}
          <span className="c" aria-hidden="true">
            ©
          </span>
        </span>
      ))}
    </>
  );
  return (
    <div className={`marquee${footer ? " marquee--footer" : ""}`} aria-hidden="true">
      <div className="marquee-track" data-mq="">
        <span className="marquee-item">{chunk}</span>
        <span className="marquee-item">{chunk}</span>
      </div>
    </div>
  );
}
