import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://infobio.com.br"),
  title: {
    default: "InfoBio — Ferramentas abertas para tecnologia em saúde",
    template: "%s | InfoBio",
  },
  description:
    "Ferramentas técnicas, projetos abertos e infraestrutura experimental para informática biomédica e interoperabilidade em saúde.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "InfoBio",
    title: "InfoBio — Ferramentas abertas para tecnologia em saúde",
    description:
      "Ferramentas técnicas, projetos abertos e infraestrutura experimental para informática biomédica.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <body
        className={[
          geist.variable,
          geistMono.variable,
          "flex min-h-screen flex-col font-sans text-slate-900 antialiased dark:text-slate-100",
        ].join(" ")}
      >
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
