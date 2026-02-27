"use client";

import { cn } from "@/lib/utils";

import { FadeIn, StaggerContainer, StaggerItem } from "../../ui/motion";
import { Section } from "../../ui/section";

interface MetricProps {
  value: string;
  label: string;
}

interface MetricsProps {
  className?: string;
}

const metrics: MetricProps[] = [
  { value: "4 sem", label: "até o primeiro resultado operacional" },
  { value: "30%", label: "redução média de perdas em supermercados" },
  { value: "50+", label: "integrações corporativas disponíveis" },
  { value: "0", label: "equipe técnica necessária do seu lado" },
];

export default function Metrics({ className }: MetricsProps) {
  return (
    <Section
      className={cn(
        "bg-primary text-primary-foreground border-none",
        className,
      )}
    >
      <div className="max-w-container mx-auto">
        <FadeIn>
          <p className="text-primary-foreground/60 mb-10 text-center text-sm font-semibold tracking-[0.3em] uppercase">
            Resultados
          </p>
        </FadeIn>
        <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
          {metrics.map((metric, index) => (
            <StaggerItem key={index}>
              <div className="flex flex-col items-center gap-2 text-center">
                <span className="text-4xl font-bold sm:text-5xl">
                  {metric.value}
                </span>
                <span className="text-primary-foreground/70 max-w-[200px] text-sm">
                  {metric.label}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}
