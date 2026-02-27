import { cn } from "@/lib/utils";

import KauaiLogo from "../../logos/kauai";
import { ModeToggle } from "../../ui/mode-toggle";

interface FooterProps {
  className?: string;
}

export default function FooterSection({ className }: FooterProps) {
  return (
    <footer className={cn("bg-background w-full px-4 py-12", className)}>
      <div className="max-w-container mx-auto">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <KauaiLogo className="text-brand size-6" />
              <span className="text-sm font-semibold">Kauai AI</span>
            </div>
            <p className="text-muted-foreground max-w-[300px] text-xs leading-relaxed">
              Engenheiros de IA integrados à sua operação.
              <br />
              São Francisco · São Paulo
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold tracking-[0.15em] uppercase">
                Plataforma
              </span>
              <a
                href="#plataforma"
                className="text-muted-foreground hover:text-foreground text-xs transition-colors"
              >
                Como funciona
              </a>
              <a
                href="#supermercados"
                className="text-muted-foreground hover:text-foreground text-xs transition-colors"
              >
                Supermercados
              </a>
              <a
                href="#processo"
                className="text-muted-foreground hover:text-foreground text-xs transition-colors"
              >
                Processo
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold tracking-[0.15em] uppercase">
                Empresa
              </span>
              <a
                href="#equipe"
                className="text-muted-foreground hover:text-foreground text-xs transition-colors"
              >
                Equipe
              </a>
              <a
                href="#faq"
                className="text-muted-foreground hover:text-foreground text-xs transition-colors"
              >
                FAQ
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold tracking-[0.15em] uppercase">
                Contato
              </span>
              <a
                href="mailto:contato@kauai.ai"
                className="text-muted-foreground hover:text-foreground text-xs transition-colors"
              >
                contato@kauai.ai
              </a>
            </div>
          </div>
        </div>

        <div className="border-border mt-8 flex items-center justify-between border-t pt-6">
          <span className="text-muted-foreground/60 text-xs">
            &copy; {new Date().getFullYear()} Kauai AI. Todos os direitos
            reservados.
          </span>
          <ModeToggle />
        </div>
      </div>
    </footer>
  );
}
