import "@/app/globals.css";

import type { Metadata } from "next";

import { ThemeProvider } from "@/components/contexts/theme-provider";
import { inter } from "@/lib/fonts";

import { siteConfig } from "../config/site";

export const metadata: Metadata = {
  title: "Kauai | A Plataforma de Inteligência Artificial para a sua Empresa",
  description:
    "A Kauai é uma plataforma de inteligência artificial empresarial. Trabalhamos com empresas brasileiras para construir automações de back-office e ferramentas de apoio à tomada de decisão com retorno real e mensurável.",
  keywords: [
    "Inteligência Artificial",
    "IA Empresarial",
    "Automação",
    "Machine Learning",
    "Consultoria IA",
    "Supermercados",
    "Varejo",
    "Forward-Deployed AI",
    "Brasil",
  ],
  authors: [
    {
      name: "Kauai AI",
      url: "https://kauai.ai",
    },
  ],
  creator: "Kauai AI",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    title: "Kauai | A Plataforma de Inteligência Artificial para a sua Empresa",
    description:
      "Automatize operações, reduza custos e aumente margens com IA empresarial.",
    siteName: "Kauai AI",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Kauai AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kauai | Inteligência Artificial Empresarial",
    description:
      "Automatize operações, reduza custos e aumente margens com IA empresarial.",
    images: [siteConfig.ogImage],
    creator: "@dgomes1989",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" style={{ colorScheme: "dark" }} className="dark">
      <body className={`${inter.className} bg-background antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
