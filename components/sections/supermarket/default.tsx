"use client";

import { cn } from "@/lib/utils";

import { FadeIn, StaggerContainer, StaggerItem } from "../../ui/motion";
import { Section } from "../../ui/section";

interface CategoryProps {
  title: string;
  items: string[];
}

interface SupermarketProps {
  className?: string;
}

const categories: CategoryProps[] = [
  {
    title: "Estoque & Demanda",
    items: [
      "Previsão de demanda por SKU / loja",
      "Reposição automática",
      "Alertas de ruptura",
      "Mix otimizado por região",
    ],
  },
  {
    title: "Precificação & Margem",
    items: [
      "Monitoramento de preços da concorrência",
      "Sugestão dinâmica de preços por categoria e margem",
      "Alertas de desvio de margem",
    ],
  },
  {
    title: "Operação de Loja & Perdas",
    items: [
      "Detecção de furtos e desperdícios",
      "Prateleiras vazias identificadas em tempo real",
      "Monitoramento de filas e fluxo",
      "Desvios de caixa/estoque sinalizados automaticamente",
    ],
  },
  {
    title: "Fiscal & Administrativo",
    items: [
      "Conferência automática de notas fiscais",
      "Conciliação de pagamentos e recebíveis",
      "Geração automatizada de relatórios regulatórios",
    ],
  },
  {
    title: "Atendimento & CRM",
    items: [
      "Segmentação de clientes por comportamento",
      "Análise satisfação",
      "Campanhas personalizadas com base no histórico de compra",
    ],
  },
  {
    title: "RH & Escala",
    items: [
      "Previsão de demanda de funcionários por turno e loja",
      "Automatização de comunicados e escalas",
      "Monitoramento de indicadores de turnover",
    ],
  },
];

export default function Supermarket({ className }: SupermarketProps) {
  return (
    <Section className={cn("", className)}>
      <div className="max-w-container mx-auto flex flex-col gap-12">
        <div className="flex flex-col items-start gap-4">
          <FadeIn>
            <span className="text-brand text-sm font-semibold tracking-[0.3em] uppercase">
              IA para Redes de Supermercados
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-muted-foreground text-lg italic">
              Automações de alto impacto pensadas para o varejo alimentar
            </p>
          </FadeIn>
        </div>
        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, index) => (
            <StaggerItem key={index}>
              <div className="bg-card border-border group flex h-full flex-col gap-4 rounded-xl border p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <h3 className="text-base font-semibold">{cat.title}</h3>
                <ul className="text-muted-foreground flex flex-col gap-2 text-sm">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-brand mt-0.5 text-xs">&#9679;</span>
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
