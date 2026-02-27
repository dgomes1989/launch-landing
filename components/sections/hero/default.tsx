"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

import { Button } from "../../ui/button";
import Glow from "../../ui/glow";
import { Section } from "../../ui/section";

interface HeroProps {
  className?: string;
  onOpenForm?: () => void;
}

const integrations = [
  "SAP",
  "Oracle",
  "TOTVS",
  "Microsoft Dynamics",
  "AWS",
  "NetSuite",
];

export default function Hero({ className, onOpenForm }: HeroProps) {
  return (
    <Section
      className={cn(
        "fade-bottom overflow-hidden pb-0 sm:pb-0 md:pb-0 pt-28 sm:pt-36",
        className,
      )}
    >
      <div className="max-w-container mx-auto flex flex-col gap-12 sm:gap-16">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-10">
          <motion.div
            className="border-border bg-card/80 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <span className="bg-brand inline-block size-2 rounded-full" />
            <span className="text-muted-foreground">
              Aceitando novos clientes — Diagnóstico gratuito
            </span>
          </motion.div>

          <motion.h1
            className="from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-4xl leading-tight font-semibold text-balance text-transparent drop-shadow-2xl sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight"
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.25, 0.4, 0.25, 1],
            }}
          >
            Engenheiros de IA{" "}
            <span className="text-brand">dentro da sua operação.</span>
            <br />
            Resultado em semanas.
          </motion.h1>

          <motion.p
            className="text-muted-foreground relative z-10 max-w-[640px] text-base sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            A Kauai coloca engenheiros de IA diretamente na sua operação para
            construir automações que reduzem custos e aumentam margens —
            com retorno mensurável desde o primeiro mês.
          </motion.p>

          <motion.div
            className="relative z-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button variant="default" size="lg" onClick={onOpenForm}>
              Agendar Diagnóstico Gratuito
            </Button>
            <Button variant="glow" size="lg" asChild>
              <a href="#plataforma">Como Funciona</a>
            </Button>
          </motion.div>

          <motion.div
            className="text-muted-foreground relative z-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <span className="text-muted-foreground/50">Integra com:</span>
            {integrations.map((name, i) => (
              <motion.span
                key={i}
                className="border-border/50 rounded border px-2 py-0.5 text-muted-foreground/70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + i * 0.08 }}
              >
                {name}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            className="relative w-full pt-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <Glow variant="top" />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
