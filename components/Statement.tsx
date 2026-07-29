import Ascii from "./Ascii";

export default function Statement() {
  return (
    <section className="statement">
      <Ascii mode="statement" className="statement-ascii" />
      <h2 className="statement-title">
        Sell Real <sup>*</sup>
        <br />
        Build Solid <sup>#</sup>
        <br />
        Run It Yourself <sup>™</sup>
      </h2>
    </section>
  );
}
