"use client";

import { cn } from "@/lib/utils";

import KauaiLogo from "../../logos/kauai";
import { Button } from "../../ui/button";
import Glow from "../../ui/glow";
import { FadeIn, ScaleIn } from "../../ui/motion";
import { Section } from "../../ui/section";

interface CTAProps {
  className?: string;
  onOpenForm?: () => void;
}

export default function CTA({ className, onOpenForm }: CTAProps) {
  return (
    <Section
      id="contato"
      className={cn("group relative overflow-hidden", className)}
    >
      <div className="max-w-container relative z-10 mx-auto flex flex-col items-center gap-6 text-center sm:gap-8">
        <ScaleIn>
          <KauaiLogo className="text-brand size-12" />
        </ScaleIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl leading-tight font-bold tracking-tight sm:text-5xl sm:leading-tight">
            Pronto para transformar sua operação?
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-muted-foreground max-w-[560px] text-lg">
            Diagnóstico gratuito e sem compromisso. Nossa equipe identifica as
            oportunidades de maior retorno com IA para o seu negócio.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Button variant="default" size="lg" onClick={onOpenForm}>
              Agendar Diagnóstico Gratuito
            </Button>
            <a
              href="mailto:contato@kauai.ai"
              className="text-brand hover:text-brand/80 text-sm font-medium underline underline-offset-4 transition-colors"
            >
              contato@kauai.ai
            </a>
          </div>
        </FadeIn>
      </div>
      <div className="absolute top-0 left-0 h-full w-full translate-y-[1rem] opacity-80 transition-all duration-500 ease-in-out group-hover:translate-y-[-2rem] group-hover:opacity-100">
        <Glow variant="bottom" />
      </div>
    </Section>
  );
}
