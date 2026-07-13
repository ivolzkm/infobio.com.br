import { Bug, GitPullRequest, Lightbulb, MessageSquareText } from "lucide-react";
import type { Metadata } from "next";

import { SectionHeading } from "@/components/section-heading";
import { repositoryUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Comunidade",
  description: "Como contribuir tecnicamente com a InfoBio.",
};

const paths = [
  {
    icon: Bug,
    title: "Relatar um caso de falha",
    description: "Descreva o recurso sintético, o resultado atual e o resultado esperado.",
  },
  {
    icon: Lightbulb,
    title: "Propor uma ferramenta",
    description: "Explique o problema, quem o enfrenta e quais dados seriam processados.",
  },
  {
    icon: GitPullRequest,
    title: "Contribuir com código",
    description: "Abra uma mudança pequena, testável e ligada a uma discussão existente.",
  },
];

export default function CommunityPage() {
  return (
    <div className="site-container py-16 sm:py-24">
      <SectionHeading
        eyebrow="Open collaboration"
        title="Discussão técnica junto ao código."
        description="A comunidade começa de forma deliberadamente simples: issues, casos de teste e pull requests públicos no GitHub. Sem fórum vazio e sem cadastro desnecessário."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {paths.map(({ icon: Icon, title, description }) => (
          <article key={title} className="technical-panel p-6">
            <Icon className="text-teal-600 dark:text-teal-300" size={22} />
            <h2 className="mt-5 font-semibold text-slate-950 dark:text-white">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">{description}</p>
          </article>
        ))}
      </div>
      <section className="mt-12 rounded-2xl border border-teal-500/20 bg-teal-500/[0.06] p-8 sm:p-10">
        <MessageSquareText className="text-teal-600 dark:text-teal-300" size={25} />
        <h2 className="mt-5 text-2xl font-semibold text-slate-950 dark:text-white">Abra a primeira discussão.</h2>
        <p className="mt-3 max-w-2xl leading-7 text-slate-600 dark:text-slate-400">
          Nunca inclua dados reais de pacientes. Para reproduções, use recursos completamente
          sintéticos e remova identificadores, nomes, datas e narrativas sensíveis.
        </p>
        <a
          href={repositoryUrl + "/issues"}
          target="_blank"
          rel="noreferrer"
          className="button-primary mt-7"
        >
          Acessar issues no GitHub
        </a>
      </section>
    </div>
  );
}
