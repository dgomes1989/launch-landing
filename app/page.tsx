import CTA from "../components/sections/cta/default";
import Features from "../components/sections/features/default";
import Footer from "../components/sections/footer/default";
import Hero from "../components/sections/hero/default";
import Testimonials from "../components/sections/testimonials/default";
import { LayoutLines } from "../components/ui/layout-lines";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Hero />
      <Features />
      <Testimonials />
      <CTA
        title="Ready to accelerate your AI initiatives?"
        buttons={[
          {
            href: "#contact",
            text: "Schedule a Consultation",
            variant: "default",
          },
        ]}
      />
      <Footer />
    </main>
  );
}
