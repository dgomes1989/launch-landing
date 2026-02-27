import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Section } from "../../ui/section";

interface FAQItemProps {
  question: string;
  answer: string;
}

interface FAQProps {
  className?: string;
}

const faqItems: FAQItemProps[] = [
  {
    question: "O que é a Kauai?",
    answer:
      "A Kauai é uma plataforma de inteligência artificial empresarial. Trabalhamos com empresas brasileiras para construir automações de back-office e ferramentas de apoio à tomada de decisão com retorno real e mensurável.",
  },
  {
    question: "Como funciona a segurança dos dados?",
    answer:
      "Segurança é prioridade. Nossa plataforma adota padrões corporativos de proteção de dados e operamos a lado com sua equipe para garantir conformidade total com suas políticas e exigências regulatórias.",
  },
  {
    question: "Quais recursos a plataforma oferece?",
    answer:
      "A plataforma unifica dados, automatiza fluxos e permite que a IA faça parte do dia a dia do negócio. Também oferece monitoramento contínuo, inteligência analítica e integração com mais de 50 ferramentas corporativas — como SAP, AWS, Microsoft Dynamics, TOTVS e Oracle.",
  },
  {
    question: "Preciso ter equipe técnica?",
    answer:
      "Não. Nossa equipe de engenharia cuida de toda implementação, integração e manutenção. Trabalhamos com sua equipe para definir prioridades e ativar soluções que geram impacto imediato.",
  },
  {
    question: "A Kauai cria soluções personalizadas para minha empresa?",
    answer:
      "Sim. Trabalhamos lado a lado com sua equipe para conceber e implementar soluções de IA sob medida, priorizando as iniciativas que geram maior impacto e retorno para o negócio.",
  },
  {
    question: "Qual o modelo de precificação?",
    answer:
      "Personalizado conforme o escopo. Começamos com um diagnóstico gratuito para identificar as melhores oportunidades.",
  },
];

export default function FAQ({ className }: FAQProps) {
  return (
    <Section className={cn("", className)}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8">
        <span className="text-brand text-sm font-semibold tracking-[0.3em] uppercase">
          Perguntas Frequentes
        </span>
        <div className="grid w-full gap-4 sm:grid-cols-2">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-card border-border rounded-xl border p-6"
            >
              <h3 className="text-base font-semibold mb-3">{item.question}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
