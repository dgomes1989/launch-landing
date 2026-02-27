"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";

import { FadeIn, StaggerContainer, StaggerItem } from "../../ui/motion";
import { Section } from "../../ui/section";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  initials: string;
}

interface TeamProps {
  className?: string;
}

const members: TeamMemberProps[] = [
  {
    name: "Doca Gomes",
    role: "Co-Founder",
    image: "/doca.jpg",
    initials: "DG",
    bio: "Baseado em São Francisco. 12 anos no mercado financeiro liderando a área comercial da Constellation, uma das maiores gestoras do Brasil. Formado em Administração pela FGV-SP com mestrado em Stanford. Cofundou a Kauai para levar IA com retorno real para empresas brasileiras.",
  },
  {
    name: "Guilherme Zaccaria",
    role: "Co-Founder",
    image: "/guilherme.jpg",
    initials: "GZ",
    bio: "Baseado em São Paulo. 12+ anos em investment banking nos maiores bancos da América Latina: Santander (Brasil e Londres), Itaú BBA e Bank of America. Formado em Direito pela PUC-SP com especialização em Corporate Finance pelo Insper. Cofundou a Kauai para ajudar empresas a usar IA onde mais importa: no resultado.",
  },
];

export default function Team({ className }: TeamProps) {
  return (
    <Section className={cn("", className)}>
      <div className="max-w-container mx-auto flex flex-col gap-12">
        <div className="flex flex-col items-start gap-4">
          <FadeIn>
            <span className="text-brand text-sm font-semibold tracking-[0.3em] uppercase">
              Quem Somos
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-muted-foreground max-w-[640px] text-lg">
              Entendemos a pressão de gerir um negócio. Nosso foco é gerar
              retorno real — não adicionar mais um custo à sua estrutura.
            </p>
          </FadeIn>
        </div>
        <StaggerContainer className="grid gap-12 sm:grid-cols-2" staggerDelay={0.2}>
          {members.map((member) => (
            <StaggerItem key={member.name}>
              <div className="flex flex-col items-center gap-6 text-center">
                <div className="bg-muted relative size-36 overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent) {
                        parent.classList.add(
                          "flex",
                          "items-center",
                          "justify-center",
                        );
                        const span = document.createElement("span");
                        span.className =
                          "text-muted-foreground text-4xl font-bold";
                        span.textContent = member.initials;
                        parent.appendChild(span);
                      }
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-brand text-sm font-semibold tracking-[0.2em] uppercase">
                    {member.role}
                  </p>
                </div>
                <p className="text-muted-foreground max-w-[400px] text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}
