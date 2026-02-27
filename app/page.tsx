import CTA from "../components/sections/cta/default";
import FAQ from "../components/sections/faq/default";
import Features from "../components/sections/features/default";
import Footer from "../components/sections/footer/default";
import Hero from "../components/sections/hero/default";
import Items from "../components/sections/items/default";
import Process from "../components/sections/process/default";
import Supermarket from "../components/sections/supermarket/default";
import Team from "../components/sections/team/default";
import { LayoutLines } from "../components/ui/layout-lines";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Hero />
      <Features />
      <Items />
      <Supermarket />
      <Process />
      <Team />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
