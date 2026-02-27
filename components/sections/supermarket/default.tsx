"use client";

import {
  PackageIcon,
  TagIcon,
  StoreIcon,
  FileTextIcon,
  UsersIcon,
  CalendarIcon,
} from "lucide-react";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Button } from "../../ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "../../ui/motion";
import { Section } from "../../ui/section";

interface CategoryProps {
  icon: ReactNode;
  title: string;
  highlight: string;
  items: string[];
}

interface SupermarketProps {
  className?: string;
  onOpenForm?: () => void;
}

const categories: CategoryProps[] = [
  {
    icon: <PackageIcon className="size-5" />,
    title: "Estoque & Demanda",
    highlight: "Redução de até 28% em ruptura",
    items: [
      "Previsão de demanda por SKU / loja",
      "Reposição automática",
      "Alertas de ruptura",
      "Mix otimizado por região",
    ],
  },
  {
    icon: <TagIcon className="size-5" />,
    title: "Precificação & Margem",
    highlight: "Margem otimizada em tempo real",
    items: [
      "Monitoramento de preços da concorrência",
      "Sugestão dinâmica de preços por categoria",
      "Alertas de desvio de margem",
    ],
  },
  {
    icon: <StoreIcon className="size-5" />,
    title: "Operação de Loja & Perdas",
    highlight: "30% menos perdas operacionais",
    items: [
      "Detecção de furtos e desperdícios",
      "Prateleiras vazias em tempo real",
      "Monitoramento de filas e fluxo",
      "Desvios de caixa sinalizados",
    ],
  },
  {
    icon: <FileTextIcon className="size-5" />,
    title: "Fiscal & Administrativo",
    highlight: "Horas de trabalho manual eliminadas",
    items: [
      "Conferência automática de NFs",
      "Conciliação de pagamentos",
      "Relatórios regulatórios automáticos",
    ],
  },
  {
    icon: <UsersIcon className="size-5" />,
    title: "Atendimento & CRM",
    highlight: "Segmentação por comportamento",
    items: [
      "Segmentação de clientes",
      "Análise de satisfação",
      "Campanhas personalizadas",
    ],
  },
  {
    icon: <CalendarIcon className="size-5" />,
    title: "RH & Escala",
    highlight: "Escalas otimizadas por demanda",
    items: [
      "Previsão de demanda por turno",
      "Automatização de escalas",
      "Indicadores de turnover",
    ],
  },
];

export default function Supermarket({ className, onOpenForm }: SupermarketProps) {
  return (
    <Section id="supermercados" className={cn("bg-muted/50", className)}>
      <div className="max-w-container mx-auto flex flex-col gap-12">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-4">
            <FadeIn>
              <span className="text-brand text-sm font-semibold tracking-[0.3em] uppercase">
                IA para Redes de Supermercados
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="max-w-[540px] text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
                Rede com 45 lojas reduziu ruptura em 28% em 6 semanas
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-muted-foreground max-w-[540px] text-base">
                Veja como IA transforma a operação do varejo alimentar em cada
                área do negócio — do estoque ao RH
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.3}>
            <Button size="lg" onClick={onOpenForm}>
              Quero um diagnóstico
            </Button>
          </FadeIn>
        </div>
        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, index) => (
            <StaggerItem key={index}>
              <div className="bg-card border-border group flex h-full flex-col gap-4 rounded-xl border p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <div className="bg-brand/10 text-brand flex items-center justify-center rounded-lg p-2">
                    {cat.icon}
                  </div>
                  <h3 className="text-base font-semibold">{cat.title}</h3>
                </div>
                <p className="text-brand text-xs font-semibold uppercase tracking-wider">
                  {cat.highlight}
                </p>
                <ul className="text-muted-foreground flex flex-col gap-1.5 text-sm">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-brand mt-1.5 block size-1 shrink-0 rounded-full bg-current" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}
