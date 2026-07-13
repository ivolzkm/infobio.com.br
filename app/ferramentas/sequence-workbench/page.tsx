import type { Metadata } from "next";

import { SequenceWorkbench } from "@/components/sequence-workbench";

export const metadata: Metadata = {
  title: "Sequence Workbench",
  description: "Inspeção local de sequências de DNA, RNA e proteína.",
};

export default function SequenceWorkbenchPage() {
  return (
    <div className="site-container py-12 sm:py-16">
      <div className="max-w-3xl">
        <p className="eyebrow">Bioinformática · Client-side</p>
        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
          Sequence Workbench
        </h1>
        <p className="mt-5 text-pretty text-lg leading-8 text-slate-600 dark:text-slate-400">
          Uma bancada compacta para normalizar DNA, transcrever RNA, traduzir fases de
          leitura e inspecionar propriedades básicas da sequência no navegador.
        </p>
      </div>
      <div className="mt-10">
        <SequenceWorkbench />
      </div>
      <p className="mt-6 text-sm leading-6 text-slate-500">
        Ferramenta exploratória. Sequências com códigos IUPAC ambíguos ainda não são
        interpretadas nesta versão.
      </p>
    </div>
  );
}
