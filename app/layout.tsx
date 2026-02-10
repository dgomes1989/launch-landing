import "@/app/globals.css";

import type { Metadata } from "next";

import { ThemeProvider } from "@/components/contexts/theme-provider";
import { inter } from "@/lib/fonts";

import { siteConfig } from "../config/site";

export const metadata: Metadata = {
  title: "Cilantro | Forward-Deployed AI Consulting",
  description:
    "Cilantro embeds expert AI engineers directly into your team to build, deploy, and scale intelligent systems. Forward-deployed consulting for LLMs, computer vision, and custom AI solutions.",
  keywords: [
    "AI Consulting",
    "Machine Learning",
    "LLM Integration",
    "Computer Vision",
    "Forward-Deployed Engineering",
    "AI Strategy",
    "Custom AI Solutions",
    "Enterprise AI",
  ],
  authors: [
    {
      name: "Mikolaj Dobrucki",
      url: "https://mikolajdobrucki.com",
    },
  ],
  creator: "mikolajdobrucki",
  metadataBase: new URL(siteConfig.getStartedUrl),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.getStartedUrl,
    title: "Cilantro | Forward-Deployed AI Consulting",
    description:
      "Expert AI engineers embedded in your team. Build and deploy production-ready AI systems.",
    siteName: "Cilantro AI Consulting",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Cilantro AI Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cilantro | Forward-Deployed AI Consulting",
    description:
      "Expert AI engineers embedded in your team. Build and deploy production-ready AI systems.",
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
    <html lang="en" style={{ colorScheme: "dark" }} className="dark">
      <body className={`${inter.className} bg-background antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
