import { cn } from "@/lib/utils";

import KauaiLogo from "../../logos/kauai";
import { Button } from "../../ui/button";
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
  return (
    <Section
      className={cn(
        "fade-bottom overflow-hidden pb-0 sm:pb-0 md:pb-0",
        className,
      )}
    >
      <div className="max-w-container mx-auto flex flex-col gap-12 pt-16 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          <div className="animate-appear flex items-center gap-3">
            <KauaiLogo className="text-brand size-10" />
            <span className="text-brand text-sm font-semibold tracking-[0.3em] uppercase">
              Kauai
            </span>
          </div>
          <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-4xl leading-tight font-semibold text-balance text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-7xl md:leading-tight">
            A Plataforma de{" "}
            <span className="text-brand bg-clip-text">
              Inteligência Artificial
            </span>{" "}
            para a sua Empresa
          </h1>
          <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-[740px] font-medium tracking-[0.15em] uppercase opacity-0 delay-100 sm:text-lg">
            Automatize operações. Reduza custos. Aumente margens
          </p>
          <div className="animate-appear relative z-10 flex justify-center gap-4 opacity-0 delay-300">
            <Button variant="default" size="lg" asChild>
              <a href="#contato">Agendar Diagnóstico</a>
            </Button>
            <Button variant="glow" size="lg" asChild>
              <a href="#o-que-e-kauai">Saiba Mais</a>
            </Button>
          </div>
          <div className="animate-appear text-muted-foreground relative z-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 opacity-0 delay-500 text-sm">
            <span className="text-muted-foreground/60">Integra com:</span>
            {integrations.map((name, i) => (
              <span key={i} className="text-muted-foreground/80">
                {name}
              </span>
            ))}
          </div>
          <div className="relative w-full pt-12">
            <Glow
              variant="top"
              className="animate-appear-zoom opacity-0 delay-1000"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
