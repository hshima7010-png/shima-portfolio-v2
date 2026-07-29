import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Service from "@/components/Service";
import Works from "@/components/Works";
import Statement from "@/components/Statement";
import Productions from "@/components/Productions";
import Career from "@/components/Career";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

// セクション順序は DESIGN.md §3(CLAUDE.md の4層優先順位)に従う:
// Hero → Marquee → About(実務) → Service(事業) → Works(実案件)
// → Statement → Productions(個人制作) → Career/Skills → CTA → Footer

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Marquee items={["Hosho Shima", "EC Engineer", "Shopify"]} />
      <About />
      <Service />
      <Works />
      <Statement />
      <Productions />
      <Career />
      <Cta />
      <Marquee items={["Let's connect", "Let's connect"]} footer />
      <Footer />
    </main>
  );
}
