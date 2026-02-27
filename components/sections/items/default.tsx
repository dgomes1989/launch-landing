import {
  BotIcon,
  FileSearchIcon,
  ShieldAlertIcon,
  TrendingUpIcon,
  GlobeIcon,
} from "lucide-react";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Section } from "../../ui/section";

interface CapabilityProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ItemsProps {
  className?: string;
}

const capabilities: CapabilityProps[] = [
  {
    title: "Automação de Processos",
    description: "Tarefas operacionais executadas automaticamente",
    icon: <BotIcon className="size-6 text-brand" />,
  },
  {
    title: "Análise de Documentos",
    description:
      "Leitura e validação automática de contratos, NFs e relatórios",
    icon: <FileSearchIcon className="size-6 text-brand" />,
  },
  {
    title: "Detecção de Riscos & Desvios",
    description:
      "Fraudes e inconsistências identificadas instantaneamente, antes que impactem o negócio",
    icon: <ShieldAlertIcon className="size-6 text-brand" />,
  },
  {
    title: "Previsões & Otimização",
    description:
      "Modelos preditivos para estimar demanda, otimizar recursos e maximizar margens",
    icon: <TrendingUpIcon className="size-6 text-brand" />,
  },
  {
    title: "Dados Externos & Inteligência de Mercado",
    description:
      "Monitoramento contínuo de informações públicas e fontes externas para ampliar o contexto das decisões",
    icon: <GlobeIcon className="size-6 text-brand" />,
  },
];

export default function Items({ className }: ItemsProps) {
  return (
    <Section className={cn("bg-muted/50", className)}>
      <div className="max-w-container mx-auto flex flex-col gap-12">
        <div className="flex flex-col items-start gap-4">
          <span className="text-brand text-sm font-semibold tracking-[0.3em] uppercase">
            Capacidades da Plataforma
          </span>
          <h2 className="max-w-[640px] text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            Tecnologia pronta para automatizar e otimizar sua operação
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, index) => (
            <div
              key={index}
              className="bg-card border-border flex flex-col gap-3 rounded-xl border p-6 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center rounded-lg bg-primary/5 p-2">
                  {cap.icon}
                </div>
                <h3 className="text-base font-semibold">{cap.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm">{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
