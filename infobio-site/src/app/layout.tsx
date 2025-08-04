// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header"; // 1. Importe o Header aqui

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InfoBio.com.br",
  description: "A plataforma da Informática Biomédica no Brasil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header /> {/* 2. Adicione o Header aqui */}
        {children}{" "}
        {/* O conteúdo da sua página (page.tsx) será renderizado aqui */}
      </body>
    </html>
  );
}
