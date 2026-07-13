import type { Metadata } from "next";

import { SectionHeading } from "@/components/section-heading";
import { ToolCard } from "@/components/tool-card";
import { tools } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ferramentas",
  description: "Catálogo técnico e roadmap de ferramentas abertas da InfoBio.",
};

export default function ToolsPage() {
  const available = tools.filter((tool) => tool.status === "Disponível");
  const roadmap = tools.filter((tool) => tool.status !== "Disponível");

  return (
    <div className="site-container py-16 sm:py-24">
      <SectionHeading
        eyebrow="Tool registry"
        title="Ferramentas técnicas, escopo explícito."
        description="Utilitários executáveis e um roadmap público para interoperabilidade, bioinformática, qualidade de dados, privacidade e segurança em saúde."
      />

      <section className="mt-14">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 dark:border-white/[0.08]">
          <h2 className="text-lg font-semibold text-slate-950 dark:text-white">Disponíveis</h2>
          <span className="font-mono text-xs text-slate-500">{available.length} ferramentas</span>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {available.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      <section className="mt-20">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 dark:border-white/[0.08]">
          <div>
            <h2 className="text-lg font-semibold text-slate-950 dark:text-white">Roadmap técnico</h2>
            <p className="mt-1 text-sm text-slate-500">Itens candidatos, ainda sem compromisso de entrega.</p>
          </div>
          <span className="font-mono text-xs text-slate-500">{roadmap.length} propostas</span>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {roadmap.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>
    </div>
  );
}
