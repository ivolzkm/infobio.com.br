import { ArrowUpRight, GitBranch, ServerCog } from "lucide-react";
import type { Metadata } from "next";

import { SectionHeading } from "@/components/section-heading";
import { repositoryUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Projetos, experimentos e decisões técnicas da InfoBio.",
};

const projects = [
  {
    name: "InfoBio Platform",
    status: "Ativo",
    description:
      "Aplicação Next.js que hospeda o catálogo, as ferramentas client-side e a documentação do projeto.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    href: repositoryUrl,
  },
  {
    name: "FHIR Validation Service",
    status: "Próxima etapa",
    description:
      "Serviço stateless planejado com o validador oficial/HAPI, pacotes FHIR R4 e artefatos publicados da RNDS.",
    stack: ["Java", "HAPI FHIR", "OCI", "No persistence"],
  },
  {
    name: "Health Data Fixtures",
    status: "Proposto",
    description:
      "Coleção aberta de recursos sintéticos e casos de falha para testes de interoperabilidade em português.",
    stack: ["FHIR R4", "JSON", "Test fixtures"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="site-container py-16 sm:py-24">
      <SectionHeading
        eyebrow="Build log"
        title="Projetos com arquitetura e limites documentados."
        description="O portfólio técnico da InfoBio registra o que está operando, o que está sendo investigado e o que ainda é apenas proposta."
      />
      <div className="mt-12 space-y-5">
        {projects.map((project, index) => (
          <article key={project.name} className="technical-panel grid gap-6 p-6 sm:p-8 lg:grid-cols-[80px_1fr_auto] lg:items-center">
            <span className="font-mono text-3xl font-semibold text-slate-200 dark:text-white/10">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-xl font-semibold text-slate-950 dark:text-white">{project.name}</h2>
                <span className="rounded-full border border-teal-500/20 bg-teal-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-300">
                  {project.status}
                </span>
              </div>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-400">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="font-mono text-[10px] text-slate-500">
                    {"#" + item.replaceAll(" ", "-").toLowerCase()}
                  </span>
                ))}
              </div>
            </div>
            {project.href ? (
              <a href={project.href} target="_blank" rel="noreferrer" className="button-secondary">
                Repositório <ArrowUpRight size={15} />
              </a>
            ) : project.status === "Próxima etapa" ? (
              <ServerCog className="text-slate-400" size={24} />
            ) : (
              <GitBranch className="text-slate-400" size={24} />
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
