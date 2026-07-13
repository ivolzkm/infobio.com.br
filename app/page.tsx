import {
  ArrowRight,
  Braces,
  CheckCircle2,
  GitFork,
  Layers3,
  LockKeyhole,
  Network,
  TerminalSquare,
} from "lucide-react";
import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import { ToolCard } from "@/components/tool-card";
import { repositoryUrl, tools } from "@/lib/site";

const principles = [
  {
    icon: LockKeyhole,
    title: "Privacidade por padrão",
    description: "Processamento local quando possível e nenhum dado clínico persistido no MVP.",
  },
  {
    icon: GitFork,
    title: "Código verificável",
    description: "Implementação aberta, decisões documentadas e espaço para revisão técnica.",
  },
  {
    icon: Network,
    title: "Interoperabilidade real",
    description: "Ferramentas orientadas a padrões usados na infraestrutura digital da saúde.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200 dark:border-white/[0.08]">
        <div className="pointer-events-none absolute left-1/2 top-12 h-96 w-96 -translate-x-1/2 rounded-full bg-teal-400/10 blur-3xl" />
        <div className="site-container relative grid min-h-[680px] items-center gap-16 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/[0.08] px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-teal-700 dark:text-teal-300">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
              Open health tech commons
            </div>
            <h1 className="mt-7 max-w-3xl text-balance text-5xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl dark:text-white">
              Ferramentas para quem constrói a{" "}
              <span className="text-teal-600 dark:text-teal-300">saúde digital.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-600 dark:text-slate-400">
              A InfoBio reúne utilitários técnicos, projetos abertos e investigação aplicada
              na interseção entre software, dados e informática biomédica.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/ferramentas/validador-fhir-rnds" className="button-primary">
                Abrir Validador FHIR / RNDS <ArrowRight size={16} />
              </Link>
              <a href={repositoryUrl} target="_blank" rel="noreferrer" className="button-secondary">
                Explorar código <GitFork size={16} />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-8 rounded-full bg-teal-500/[0.06] blur-2xl" />
            <div className="technical-panel relative overflow-hidden shadow-glow">
              <div className="flex items-center justify-between border-b border-slate-200 px-5 py-3 dark:border-white/[0.08]">
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                </div>
                <span className="font-mono text-[10px] text-slate-500">validator.pipeline</span>
              </div>
              <div className="p-5 sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-300">
                    <Braces size={20} />
                  </span>
                  <div>
                    <p className="font-semibold text-slate-950 dark:text-white">BRIndivíduo · 1.0.0</p>
                    <p className="font-mono text-[10px] text-slate-500">FHIR R4 · Patient</p>
                  </div>
                </div>
                <div className="mt-7 space-y-3">
                  {[
                    ["01", "Parse JSON", "complete"],
                    ["02", "FHIR R4 structural checks", "complete"],
                    ["03", "RNDS profile rules", "complete"],
                    ["04", "OperationOutcome", "ready"],
                  ].map(([step, label, status]) => (
                    <div
                      key={step}
                      className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50/80 p-4 dark:border-white/[0.08] dark:bg-black/20"
                    >
                      <span className="font-mono text-xs text-slate-400">{step}</span>
                      <span className="flex-1 text-sm text-slate-700 dark:text-slate-300">{label}</span>
                      {status === "ready" ? (
                        <span className="rounded-full bg-teal-500/10 px-2 py-1 font-mono text-[9px] text-teal-600 dark:text-teal-300">
                          READY
                        </span>
                      ) : (
                        <CheckCircle2 size={15} className="text-emerald-500" />
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-2 font-mono text-[10px] text-slate-500">
                  <TerminalSquare size={13} /> local processing · zero persistence
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-container py-24">
        <SectionHeading
          eyebrow="Ferramentas em produção"
          title="Utilidade antes de promessa."
          description="O catálogo começa por problemas verificáveis e evolui com testes, referências técnicas e contribuições públicas."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {tools.slice(0, 2).map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
        <Link
          href="/ferramentas"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-600 dark:text-teal-300"
        >
          Ver catálogo e roadmap <ArrowRight size={15} />
        </Link>
      </section>

      <section className="border-y border-slate-200 bg-white/60 dark:border-white/[0.08] dark:bg-white/[0.015]">
        <div className="site-container py-24">
          <SectionHeading
            eyebrow="Princípios de engenharia"
            title="Infraestrutura pequena, critérios rigorosos."
            description="A plataforma nasce sem banco de dados e sem coleta de recursos clínicos. Cada nova camada precisa justificar seu risco operacional."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {principles.map(({ icon: Icon, title, description }) => (
              <article key={title} className="technical-panel p-6">
                <Icon className="text-teal-600 dark:text-teal-300" size={21} />
                <h3 className="mt-5 font-semibold text-slate-950 dark:text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container py-24">
        <div className="technical-panel relative overflow-hidden p-8 sm:p-12">
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-teal-500/[0.08] blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-2xl">
              <Layers3 className="text-teal-600 dark:text-teal-300" size={26} />
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
                Uma comunidade construída ao redor de ferramentas.
              </h2>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                Sugira casos de teste, revise regras de interoperabilidade ou proponha o
                próximo utilitário. A discussão técnica acontece junto ao código.
              </p>
            </div>
            <Link href="/comunidade" className="button-secondary">
              Como contribuir <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
