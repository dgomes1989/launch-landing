import "@/app/globals.css";

import type { Metadata } from "next";

import { ThemeProvider } from "@/components/contexts/theme-provider";
import { inter } from "@/lib/fonts";

import { siteConfig } from "../config/site";

export const metadata: Metadata = {
  title: "Launch UI Landing Page",
  description:
    "A responsive landing page built with Launch UI and Tailwind CSS. Features modern design, dark mode support, and production-ready components.",
  keywords: [
    "Landing page template",
    "Components",
    "Shadcn",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Radix UI",
    "Launch UI",
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
    title: "Launch UI Landing Page",
    description:
      "A responsive landing page built with Launch UI and Tailwind CSS.",
    siteName: "Launch UI Landing Page",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Launch UI Landing Page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Launch UI Landing Page",
    description:
      "A responsive landing page built with Launch UI and Tailwind CSS.",
    images: [siteConfig.ogImage],
    creator: "@mikolajdobrucki",
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
