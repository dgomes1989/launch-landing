"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { cn } from "@/lib/utils";

import KauaiLogo from "../../logos/kauai";
import { Button } from "../../ui/button";
import { DiagnosticForm } from "../../ui/diagnostic-form";
import Glow from "../../ui/glow";
import { Section } from "../../ui/section";

interface HeroProps {
  className?: string;
}

const integrations = [
  "SAP",
  "Oracle",
  "TOTVS",
  "Microsoft Dynamics",
  "AWS",
  "NetSuite",
];

export default function Hero({ className }: HeroProps) {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <Section
      className={cn(
        "fade-bottom overflow-hidden pb-0 sm:pb-0 md:pb-0",
        className,
      )}
    >
      <div className="max-w-container mx-auto flex flex-col gap-12 pt-16 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <KauaiLogo className="text-brand size-10" />
            <span className="text-brand text-sm font-semibold tracking-[0.3em] uppercase">
              Kauai
            </span>
          </motion.div>

          <motion.h1
            className="from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-4xl leading-tight font-semibold text-balance text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-7xl md:leading-tight"
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.25, 0.4, 0.25, 1],
            }}
          >
            A Plataforma de{" "}
            <span className="text-brand bg-clip-text">
              Inteligência Artificial
            </span>{" "}
            para a sua Empresa
          </motion.h1>

          <motion.p
            className="text-md text-muted-foreground relative z-10 max-w-[740px] font-medium tracking-[0.15em] uppercase sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            Automatize operações. Reduza custos. Aumente margens
          </motion.p>

          <motion.div
            className="relative z-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button
              variant="default"
              size="lg"
              onClick={() => setFormOpen(true)}
            >
              Agendar Diagnóstico
            </Button>
            <Button variant="glow" size="lg" asChild>
              <a href="#o-que-e-kauai">Saiba Mais</a>
            </Button>
          </motion.div>

          <motion.div
            className="text-muted-foreground relative z-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <span className="text-muted-foreground/60">Integra com:</span>
            {integrations.map((name, i) => (
              <motion.span
                key={i}
                className="text-muted-foreground/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + i * 0.08 }}
              >
                {name}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            className="relative w-full pt-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <Glow variant="top" />
          </motion.div>
        </div>
      </div>

      <DiagnosticForm open={formOpen} onClose={() => setFormOpen(false)} />
    </Section>
  );
}
