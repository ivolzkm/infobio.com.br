import { ExternalLink, Info, LockKeyhole } from "lucide-react";
import type { Metadata } from "next";

import { ValidatorWorkbench } from "@/components/validator-workbench";

export const metadata: Metadata = {
  title: "Validador FHIR / RNDS",
  description:
    "Pré-valide localmente recursos FHIR R4 e regras selecionadas do perfil BRIndivíduo-1.0 da RNDS.",
};

export default function FhirValidatorPage() {
  return (
    <div className="site-container py-12 sm:py-16">
      <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-end">
        <div className="max-w-3xl">
          <p className="eyebrow">Interoperabilidade · MVP 0.1</p>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
            Validador FHIR / RNDS
          </h1>
          <p className="mt-5 text-pretty text-lg leading-8 text-slate-600 dark:text-slate-400">
            Encontre problemas de JSON, estrutura FHIR R4 e regras selecionadas do perfil
            BRIndivíduo-1.0 antes de integrar um validador semântico completo.
          </p>
        </div>
        <div className="rounded-xl border border-teal-500/20 bg-teal-500/[0.07] p-4">
          <p className="flex items-center gap-2 text-xs font-semibold text-teal-700 dark:text-teal-300">
            <LockKeyhole size={14} /> Execução local no navegador
          </p>
          <p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-400">
            O conteúdo não é enviado ao servidor nem armazenado por esta versão.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <ValidatorWorkbench />
      </div>

      <section className="mt-10 grid gap-5 lg:grid-cols-2">
        <article className="technical-panel p-6">
          <Info className="text-teal-600 dark:text-teal-300" size={20} />
          <h2 className="mt-4 font-semibold text-slate-950 dark:text-white">Escopo desta versão</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
            Esta é uma pré-validação técnica experimental. Ela não executa todas as
            StructureDefinitions, invariantes FHIRPath, bindings terminológicos ou pacotes
            de implementação. Um resultado sem erros locais não comprova conformidade total.
          </p>
        </article>
        <article className="technical-panel p-6">
          <ExternalLink className="text-teal-600 dark:text-teal-300" size={20} />
          <h2 className="mt-4 font-semibold text-slate-950 dark:text-white">Referências verificáveis</h2>
          <div className="mt-3 flex flex-col items-start gap-2 text-sm">
            <a
              href="https://hl7.org/fhir/R4/validation.html"
              target="_blank"
              rel="noreferrer"
              className="text-teal-700 hover:underline dark:text-teal-300"
            >
              HL7 FHIR R4 — Validation
            </a>
            <a
              href="https://rnds-fhir.saude.gov.br/StructureDefinition-BRIndividuo-1.0.html"
              target="_blank"
              rel="noreferrer"
              className="text-teal-700 hover:underline dark:text-teal-300"
            >
              Guia RNDS — BRIndivíduo 1.0.0
            </a>
          </div>
        </article>
      </section>
    </div>
  );
}
