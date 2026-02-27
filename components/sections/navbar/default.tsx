"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, XIcon } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import KauaiLogo from "../../logos/kauai";
import { Button } from "../../ui/button";

interface NavbarProps {
  className?: string;
  onOpenForm?: () => void;
}

const links = [
  { text: "Plataforma", href: "#plataforma" },
  { text: "Supermercados", href: "#supermercados" },
  { text: "Processo", href: "#processo" },
  { text: "Equipe", href: "#equipe" },
  { text: "FAQ", href: "#faq" },
];

export default function Navbar({ className, onOpenForm }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 1]);

  return (
    <motion.header
      className={cn("fixed top-0 left-0 right-0 z-50", className)}
    >
      <motion.div
        className="absolute inset-0 border-b border-border/0 backdrop-blur-md"
        style={{
          opacity: bgOpacity,
          backgroundColor: "var(--background)",
          borderColor: "var(--border)",
        }}
      />
      <div className="max-w-container relative mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <a href="#" className="flex items-center gap-2 text-lg font-bold">
            <KauaiLogo className="text-brand size-8" />
            <span>Kauai</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {link.text}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <Button size="sm" onClick={onOpenForm}>
              Agendar Diagnóstico
            </Button>
          </div>

          <button
            className="text-foreground md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <XIcon className="size-6" />
            ) : (
              <Menu className="size-6" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          className="bg-background border-border border-b px-4 pb-6 md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.text}
              </a>
            ))}
            <Button size="sm" className="w-full" onClick={onOpenForm}>
              Agendar Diagnóstico
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
