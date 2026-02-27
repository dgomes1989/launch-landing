"use client";

import {
  BotIcon,
  DatabaseIcon,
  BrainCircuitIcon,
  FileSearchIcon,
  ShieldAlertIcon,
  TrendingUpIcon,
  GlobeIcon,
  BarChart3Icon,
} from "lucide-react";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { FadeIn, StaggerContainer, StaggerItem } from "../../ui/motion";
import { Section } from "../../ui/section";

interface FeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
}

interface FeaturesProps {
  className?: string;
}

const features: FeatureProps[] = [
  {
    icon: <DatabaseIcon className="size-5 text-brand" />,
    title: "Integração de Dados",
    description:
      "Conectamos ERPs, planilhas, sensores e sistemas legados em uma base única e estruturada",
  },
  {
    icon: <BrainCircuitIcon className="size-5 text-brand" />,
    title: "IA Personalizada",
    description:
      "Modelos treinados com seus próprios dados para executar tarefas e apoiar decisões operacionais",
  },
  {
    icon: <BotIcon className="size-5 text-brand" />,
    title: "Automação de Processos",
    description:
      "Tarefas repetitivas de back-office executadas automaticamente, sem intervenção humana",
  },
  {
    icon: <FileSearchIcon className="size-5 text-brand" />,
    title: "Análise de Documentos",
    description:
      "Leitura e validação automática de contratos, notas fiscais e relatórios",
  },
  {
    icon: <ShieldAlertIcon className="size-5 text-brand" />,
    title: "Detecção de Riscos",
    description:
      "Fraudes e inconsistências identificadas instantaneamente, antes que impactem o negócio",
  },
  {
    icon: <TrendingUpIcon className="size-5 text-brand" />,
    title: "Previsões & Otimização",
    description:
      "Modelos preditivos para estimar demanda, otimizar recursos e maximizar margens",
  },
  {
    icon: <GlobeIcon className="size-5 text-brand" />,
    title: "Inteligência de Mercado",
    description:
      "Monitoramento de informações públicas e fontes externas para ampliar o contexto das decisões",
  },
  {
    icon: <BarChart3Icon className="size-5 text-brand" />,
    title: "Escala com ROI",
    description:
      "Monitoramos resultados e expandimos apenas o que gera retorno financeiro comprovado",
  },
];

export default function Features({ className }: FeaturesProps) {
  return (
    <Section id="plataforma" className={cn("", className)}>
      <div className="max-w-container mx-auto">
        <div className="mb-12 flex flex-col items-start gap-4 sm:mb-16">
          <FadeIn>
            <span className="text-brand text-sm font-semibold tracking-[0.3em] uppercase">
              A Plataforma
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
            <p className="text-muted-foreground max-w-[620px] text-base sm:text-lg">
              Engenheiros de IA integrados à sua equipe constroem automações de
              back-office e ferramentas de decisão com retorno mensurável
            </p>
          </FadeIn>
        </div>
        <StaggerContainer className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.06}>
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <div className="bg-card border-border group flex h-full flex-col gap-3 rounded-xl border p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center rounded-lg bg-primary/5 p-1.5 transition-colors duration-300 group-hover:bg-primary/10">
                    {feature.icon}
                  </div>
                  <h3 className="text-sm font-semibold">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}
