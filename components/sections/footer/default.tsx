import { cn } from "@/lib/utils";

import { ModeToggle } from "../../ui/mode-toggle";

interface FooterProps {
  className?: string;
}

export default function FooterSection({ className }: FooterProps) {
  return (
    <footer className={cn("bg-background w-full px-4 py-8", className)}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-4">
        <div className="text-muted-foreground flex items-center gap-3 text-sm tracking-[0.2em] uppercase">
          <span>Kauai AI</span>
          <span className="text-muted-foreground/40">·</span>
          <span>kauai.ai</span>
        </div>
        <ModeToggle />
      </div>
    </footer>
  );
}
