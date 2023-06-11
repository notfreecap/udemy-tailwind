import AccesAnywhere from "@/components/layout/acces-anywhere";
import BottomCTA from "@/components/layout/bottomcta";
import Features from "@/components/layout/features";
import Footer from "@/components/layout/footer";
import Hero from "@/components/layout/hero";
import References from "@/components/layout/references";
import Snippets from "@/components/layout/snippets";
import Supercharge from "@/components/layout/superchange";

export default function Home() {
  return (
    <main>
      <Hero />
      <Snippets />
      <Features />
      <AccesAnywhere />
      <Supercharge />
      <References />
      <BottomCTA />
      <Footer />
    </main>
  );
}
