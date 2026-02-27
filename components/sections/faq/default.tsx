"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { FadeIn, StaggerContainer, StaggerItem } from "../../ui/motion";
import { Section } from "../../ui/section";

interface FAQItemProps {
  question: string;
  answer: string;
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
      "Segurança é prioridade. Nossa plataforma adota padrões corporativos de proteção de dados e operamos ao lado da sua equipe para garantir conformidade total com suas políticas e exigências regulatórias.",
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

function FAQCard({ item, index }: { item: FAQItemProps; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className={cn(
        "bg-card border-border cursor-pointer select-none rounded-xl border transition-all duration-300",
        isOpen && "shadow-lg ring-1 ring-brand/10",
      )}
      onClick={() => setIsOpen(!isOpen)}
      layout
    >
      <div className="flex items-start justify-between gap-4 p-6">
        <h3 className="text-base font-semibold pr-2">{item.question}</h3>
        <motion.div
          className="text-brand mt-0.5 shrink-0"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
        >
          {isOpen ? (
            <MinusIcon className="size-5" />
          ) : (
            <PlusIcon className="size-5" />
          )}
        </motion.div>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.35, ease: [0.25, 0.4, 0.25, 1] },
              opacity: { duration: 0.25, delay: isOpen ? 0.1 : 0 },
            }}
            className="overflow-hidden"
          >
            <div className="text-muted-foreground px-6 pb-6 text-sm leading-relaxed">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

interface FAQProps {
  className?: string;
}

export default function FAQ({ className }: FAQProps) {
  return (
    <Section id="faq" className={cn("", className)}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-10">
        <FadeIn>
          <span className="text-brand text-sm font-semibold tracking-[0.3em] uppercase">
            Perguntas Frequentes
          </span>
        </FadeIn>
        <StaggerContainer className="grid w-full gap-4 sm:grid-cols-2">
          {faqItems.map((item, index) => (
            <StaggerItem key={index}>
              <FAQCard item={item} index={index} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}
