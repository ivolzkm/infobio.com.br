import { BriefcaseBusiness, ExternalLink, GitFork } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Sobre",
  description: "A missão da InfoBio e seu criador, Ivo Ricardo Lozekam Junior.",
};

const stack = ["PHP", "Laravel", "Java", "Oracle", "MySQL", "Docker", "Linux", "Git"];

export default function AboutPage() {
  return (
    <div className="site-container py-16 sm:py-24">
      <SectionHeading
        eyebrow="About the project"
        title="InfoBio é infraestrutura pública em construção."
        description="O projeto conecta engenharia de software, informática biomédica e saúde digital por meio de ferramentas pequenas, abertas e tecnicamente responsáveis."
      />

      <section className="mt-14 grid gap-8 lg:grid-cols-[360px_1fr]">
        <div className="technical-panel overflow-hidden p-3">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-900">
            <Image
              src="/images/ivo.jpeg"
              alt="Ivo Ricardo Lozekam Junior"
              fill
              sizes="(max-width: 1024px) 100vw, 360px"
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="technical-panel p-7 sm:p-10">
          <p className="eyebrow">Criador e mantenedor</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
            Ivo Ricardo Lozekam Junior
          </h2>
          <p className="mt-2 font-mono text-xs text-teal-700 dark:text-teal-300">
            Desenvolvedor backend · Informática Biomédica
          </p>
          <div className="mt-7 space-y-4 text-base leading-7 text-slate-600 dark:text-slate-400">
            <p>
              Estudante de Informática Biomédica na Universidade Federal de Ciências da
              Saúde de Porto Alegre (UFCSPA) e desenvolvedor backend na SETIC da universidade,
              atuando em sistemas e APIs de uso institucional.
            </p>
            <p>
              Seus interesses incluem engenharia de software, arquitetura de sistemas,
              desenvolvimento backend e aplicações da computação na saúde. A InfoBio é o
              espaço onde essa prática se transforma em ferramentas e experimentos abertos.
            </p>
          </div>
          <div className="mt-7 flex flex-wrap gap-2">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1.5 font-mono text-[11px] text-slate-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-400"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://github.com/ivolzkm" target="_blank" rel="noreferrer" className="button-secondary">
              <GitFork size={16} /> GitHub <ExternalLink size={13} />
            </a>
            <a
              href="https://www.linkedin.com/in/ivo-ricardo-lozekam-junior-6944a1195/"
              target="_blank"
              rel="noreferrer"
              className="button-secondary"
            >
              <BriefcaseBusiness size={16} /> LinkedIn <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
