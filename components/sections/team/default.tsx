"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";

import { FadeIn, StaggerContainer, StaggerItem } from "../../ui/motion";
import { Section } from "../../ui/section";

interface TeamMemberProps {
  name: string;
  role: string;
  location: string;
  image: string;
  initials: string;
  credentials: string[];
  mission: string;
}

interface TeamProps {
  className?: string;
}

const members: TeamMemberProps[] = [
  {
    name: "Doca Gomes",
    role: "Co-Founder",
    location: "São Francisco",
    image: "/doca.jpg",
    initials: "DG",
    credentials: [
      "12 anos no mercado financeiro",
      "Liderança comercial na Constellation",
      "Administração — FGV-SP",
      "Mestrado — Stanford",
    ],
    mission:
      "Cofundou a Kauai para levar IA com retorno real para empresas brasileiras.",
  },
  {
    name: "Guilherme Zaccaria",
    role: "Co-Founder",
    location: "São Paulo",
    image: "/guilherme.jpg",
    initials: "GZ",
    credentials: [
      "12+ anos em investment banking",
      "Santander, Itaú BBA, Bank of America",
      "Direito — PUC-SP",
      "Corporate Finance — Insper",
    ],
    mission:
      "Cofundou a Kauai para ajudar empresas a usar IA onde mais importa: no resultado.",
  },
];

export default function Team({ className }: TeamProps) {
  return (
    <Section id="equipe" className={cn("", className)}>
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
        <StaggerContainer
          className="grid gap-6 sm:grid-cols-2"
          staggerDelay={0.2}
        >
          {members.map((member) => (
            <StaggerItem key={member.name}>
              <div className="bg-card border-border flex flex-col gap-6 rounded-xl border p-6 sm:p-8">
                <div className="flex items-center gap-4">
                  <div className="bg-muted relative size-16 shrink-0 overflow-hidden rounded-xl">
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
                            "text-muted-foreground text-xl font-bold";
                          span.textContent = member.initials;
                          parent.appendChild(span);
                        }
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-brand text-xs font-semibold tracking-[0.2em] uppercase">
                      {member.role} · {member.location}
                    </p>
                  </div>
                </div>
                <ul className="text-muted-foreground flex flex-col gap-1.5 text-sm">
                  {member.credentials.map((cred, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-brand mt-1.5 block size-1 shrink-0 rounded-full bg-current" />
                      {cred}
                    </li>
                  ))}
                </ul>
                <p className="text-foreground text-sm font-medium italic">
                  &ldquo;{member.mission}&rdquo;
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}
