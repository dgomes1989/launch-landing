"use client";

import { cn } from "@/lib/utils";

import { FadeIn, StaggerContainer, StaggerItem } from "../../ui/motion";
import { Section } from "../../ui/section";

interface StepProps {
  number: number;
  title: string;
  description: string;
}

interface ProcessProps {
  className?: string;
}

const steps: StepProps[] = [
  {
    number: 1,
    title: "Diagnóstico",
    description:
      "Conhecemos sua operação e identificamos as oportunidades de maior retorno com IA",
  },
  {
    number: 2,
    title: "Validação de Valor",
    description:
      "Em menos de 4 semanas, implementamos uma solução para comprovar o valor da plataforma",
  },
  {
    number: 3,
    title: "Integração de Dados",
    description:
      "Centralizamos operações, sistemas e informações, dando à IA o contexto para decisões inteligentes",
  },
  {
    number: 4,
    title: "Desenvolvimento & Implementação",
    description:
      "Colocamos em operação soluções de IA com alto impacto e retorno",
  },
  {
    number: 5,
    title: "Acompanhamento Contínuo",
    description:
      "Acompanhamento e suporte permanentes para máxima estabilidade da plataforma",
  },
];

export default function Process({ className }: ProcessProps) {
  return (
    <Section id="processo" className={cn("bg-muted/50", className)}>
      <div className="max-w-container mx-auto flex flex-col gap-12">
        <div className="flex flex-col items-start gap-4">
          <FadeIn>
            <span className="text-brand text-sm font-semibold tracking-[0.3em] uppercase">
              Nosso Processo
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="max-w-[640px] text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
              Do diagnóstico ao resultado em semanas, não meses
            </h2>
          </FadeIn>
        </div>
        <StaggerContainer className="relative flex flex-col gap-0" staggerDelay={0.15}>
          {steps.map((step, index) => (
            <StaggerItem key={step.number} direction="left">
              <div className="flex items-start gap-6 pb-10 last:pb-0">
                <div className="relative flex flex-col items-center">
                  <div className="bg-brand text-primary-foreground flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-bold shadow-md">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="bg-border absolute top-10 h-full w-px" />
                  )}
                </div>
                <div className="flex flex-col gap-1 pt-1.5">
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground max-w-[480px] text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}
