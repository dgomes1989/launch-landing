"use client";

import { useState } from "react";

import CTA from "../components/sections/cta/default";
import FAQ from "../components/sections/faq/default";
import Features from "../components/sections/features/default";
import Footer from "../components/sections/footer/default";
import Hero from "../components/sections/hero/default";
import Metrics from "../components/sections/metrics/default";
import Navbar from "../components/sections/navbar/default";
import Process from "../components/sections/process/default";
import Supermarket from "../components/sections/supermarket/default";
import Team from "../components/sections/team/default";
import { DiagnosticForm } from "../components/ui/diagnostic-form";
import { LayoutLines } from "../components/ui/layout-lines";

export default function Home() {
  const [formOpen, setFormOpen] = useState(false);
  const openForm = () => setFormOpen(true);

  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar onOpenForm={openForm} />
      <Hero onOpenForm={openForm} />
      <Features />
      <Metrics />
      <Supermarket onOpenForm={openForm} />
      <Process />
      <Team />
      <FAQ />
      <CTA onOpenForm={openForm} />
      <Footer />
      <DiagnosticForm open={formOpen} onClose={() => setFormOpen(false)} />
    </main>
  );
}
