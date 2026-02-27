import { cn } from "@/lib/utils";

import KauaiLogo from "../../logos/kauai";
import Glow from "../../ui/glow";
import { Section } from "../../ui/section";

interface CTAProps {
  className?: string;
}

export default function CTA({ className }: CTAProps) {
  return (
    <Section
      id="contato"
      className={cn("group relative overflow-hidden", className)}
    >
      <div className="max-w-container relative z-10 mx-auto flex flex-col items-center gap-6 text-center sm:gap-8">
        <KauaiLogo className="text-brand size-12" />
        <h2 className="text-3xl leading-tight font-bold tracking-tight sm:text-5xl sm:leading-tight uppercase">
          Contato
        </h2>
        <p className="text-muted-foreground max-w-[560px] text-lg">
          Nossa equipe vai conhecer sua operação e identificar as oportunidades
          de maior retorno com inteligência artificial
        </p>
        <a
          href="mailto:contato@kauai.ai"
          className="text-brand hover:text-brand/80 text-lg font-medium underline underline-offset-4 transition-colors"
        >
          contato@kauai.ai
        </a>
      </div>
      <div className="absolute top-0 left-0 h-full w-full translate-y-[1rem] opacity-80 transition-all duration-500 ease-in-out group-hover:translate-y-[-2rem] group-hover:opacity-100">
        <Glow variant="bottom" />
      </div>
    </Section>
  );
}
