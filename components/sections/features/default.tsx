"use client";

import { cn } from "@/lib/utils";

import { FadeIn, StaggerContainer, StaggerItem } from "../../ui/motion";
import { Section } from "../../ui/section";

interface PillarProps {
  number: string;
  title: string;
  description: string;
}

interface FeaturesProps {
  className?: string;
}

const pillars: PillarProps[] = [
  {
    number: "01",
    title: "Integração de Dados",
    description:
      "Conectamos ERPs, planilhas, sensores e sistemas legados em uma base única",
  },
  {
    number: "02",
    title: "IA Personalizada",
    description:
      "Treinamos modelos com seus próprios dados para executar tarefas e apoiar decisões operacionais",
  },
  {
    number: "03",
    title: "Automação de Processos",
    description: "Integramos a IA aos processos do dia a dia",
  },
  {
    number: "04",
    title: "Escala com ROI",
    description:
      "Monitoramos resultados e expandimos apenas o que gera retorno financeiro",
  },
];

export default function Features({ className }: FeaturesProps) {
  return (
    <Section id="o-que-e-kauai" className={cn("", className)}>
      <div className="max-w-container mx-auto">
        <div className="mb-12 flex flex-col items-start gap-4 sm:mb-16">
          <FadeIn>
            <span className="text-brand text-sm font-semibold tracking-[0.3em] uppercase">
              O que é Kauai
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="max-w-[640px] text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
              IA que gera resultado.
              <br />
              Não mais um custo no seu P&L
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-muted-foreground max-w-[720px] text-lg">
              A Kauai é uma plataforma de inteligência artificial empresarial.
              Trabalhamos com empresas brasileiras para construir automações de
              back-office e ferramentas de apoio à tomada de decisão com retorno
              real e mensurável
            </p>
          </FadeIn>
        </div>
        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <StaggerItem key={pillar.number}>
              <div className="bg-card border-border group flex h-full flex-col gap-3 rounded-xl border p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <span className="text-brand text-3xl font-semibold transition-transform duration-300 group-hover:scale-110 inline-block origin-left">
                  {pillar.number}
                </span>
                <h3 className="text-lg font-semibold">{pillar.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {pillar.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}
