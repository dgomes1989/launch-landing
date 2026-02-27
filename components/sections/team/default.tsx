import { cn } from "@/lib/utils";

import { Section } from "../../ui/section";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  imageUrl?: string;
}

interface TeamProps {
  className?: string;
}

const members: TeamMemberProps[] = [
  {
    name: "Doca Gomes",
    role: "Co-Founder",
    bio: "Baseado em São Francisco. 12 anos no mercado financeiro liderando a área comercial da Constellation, uma das maiores gestoras do Brasil. Formado em Administração pela FGV-SP com mestrado em Stanford. Cofundou a Kauai para levar IA com retorno real para empresas brasileiras.",
  },
  {
    name: "Guilherme Zaccaria",
    role: "Co-Founder",
    bio: "Baseado em São Paulo. 12+ anos em investment banking nos maiores bancos da América Latina: Santander (Brasil e Londres), Itaú BBA e Bank of America. Formado em Direito pela PUC-SP com especialização em Corporate Finance pelo Insper. Cofundou a Kauai para ajudar empresas a usar IA onde mais importa: no resultado.",
  },
];

export default function Team({ className }: TeamProps) {
  return (
    <Section className={cn("", className)}>
      <div className="max-w-container mx-auto flex flex-col gap-12">
        <div className="flex flex-col items-start gap-4">
          <span className="text-brand text-sm font-semibold tracking-[0.3em] uppercase">
            Quem Somos
          </span>
          <p className="text-muted-foreground max-w-[640px] text-lg">
            Entendemos a pressão de gerir um negócio. Nosso foco é gerar
            retorno real — não adicionar mais um custo à sua estrutura.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {members.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 text-center"
            >
              <div className="bg-muted flex size-28 items-center justify-center rounded-xl overflow-hidden">
                <span className="text-muted-foreground text-4xl font-bold">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </span>
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
          ))}
        </div>
      </div>
    </Section>
  );
}
