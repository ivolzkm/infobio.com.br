"use client";

import {
  Braces,
  CheckCircle2,
  Clipboard,
  Eraser,
  FileJson2,
  Play,
  ShieldAlert,
  TriangleAlert,
} from "lucide-react";
import { useMemo, useState } from "react";

import { fhirBundleExample, rndsPatientExample } from "@/lib/fhir/examples";
import type {
  IssueSeverity,
  ValidationMode,
  ValidationResult,
} from "@/lib/fhir/types";
import { validateFhirJson } from "@/lib/fhir/validator";

const severityStyles: Record<IssueSeverity, string> = {
  fatal: "border-red-500/25 bg-red-500/[0.08] text-red-700 dark:text-red-300",
  error: "border-red-500/25 bg-red-500/[0.08] text-red-700 dark:text-red-300",
  warning:
    "border-amber-500/25 bg-amber-500/[0.08] text-amber-700 dark:text-amber-300",
  information:
    "border-sky-500/25 bg-sky-500/[0.08] text-sky-700 dark:text-sky-300",
};

const severityLabels: Record<IssueSeverity, string> = {
  fatal: "Fatal",
  error: "Erro",
  warning: "Alerta",
  information: "Informação",
};

export function ValidatorWorkbench() {
  const [mode, setMode] = useState<ValidationMode>("rnds-individuo");
  const [input, setInput] = useState(rndsPatientExample);
  const [result, setResult] = useState<ValidationResult | null>(null);
  const [copied, setCopied] = useState(false);

  const counts = useMemo(() => {
    const initial: Record<IssueSeverity, number> = {
      fatal: 0,
      error: 0,
      warning: 0,
      information: 0,
    };
    result?.outcome.issue.forEach((issue) => {
      initial[issue.severity] += 1;
    });
    return initial;
  }, [result]);

  function validate() {
    setResult(validateFhirJson(input, mode));
  }

  function loadExample(nextMode: ValidationMode) {
    setMode(nextMode);
    setInput(nextMode === "rnds-individuo" ? rndsPatientExample : fhirBundleExample);
    setResult(null);
  }

  function formatJson() {
    try {
      setInput(JSON.stringify(JSON.parse(input), null, 2));
    } catch {
      setResult(validateFhirJson(input, mode));
    }
  }

  async function copyOutcome() {
    if (!result) return;
    await navigator.clipboard.writeText(JSON.stringify(result.outcome, null, 2));
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-950/[0.04] dark:border-white/[0.08] dark:bg-[#0b1119] dark:shadow-black/30">
      <div className="flex flex-col gap-4 border-b border-slate-200 p-4 sm:flex-row sm:items-center sm:justify-between dark:border-white/[0.08]">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-300">
            <FileJson2 size={18} />
          </span>
          <div>
            <p className="text-sm font-semibold text-slate-950 dark:text-white">
              Validation workbench
            </p>
            <p className="font-mono text-[10px] text-slate-500">client-side · sem upload</p>
          </div>
        </div>
        <label className="flex items-center gap-3 text-xs text-slate-500">
          Perfil de validação
          <select
            value={mode}
            onChange={(event) => {
              setMode(event.target.value as ValidationMode);
              setResult(null);
            }}
            className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none focus:border-teal-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-white"
          >
            <option value="fhir-r4">FHIR R4 — estrutura local</option>
            <option value="rnds-individuo">RNDS — BRIndivíduo 1.0</option>
          </select>
        </label>
      </div>

      <div className="grid xl:grid-cols-[1.08fr_0.92fr]">
        <div className="border-b border-slate-200 xl:border-b-0 xl:border-r dark:border-white/[0.08]">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 px-4 py-3 dark:border-white/[0.08]">
            <span className="font-mono text-xs text-slate-500">resource.json</span>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={formatJson}
                className="button-secondary !px-3 !py-2"
              >
                <Braces size={14} /> Formatar
              </button>
              <button
                type="button"
                onClick={() => loadExample(mode)}
                className="button-secondary !px-3 !py-2"
              >
                Exemplo
              </button>
              <button
                type="button"
                onClick={() => {
                  setInput("");
                  setResult(null);
                }}
                className="button-secondary !px-3 !py-2"
              >
                <Eraser size={14} /> Limpar
              </button>
            </div>
          </div>
          <textarea
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
              setResult(null);
            }}
            spellCheck={false}
            aria-label="Recurso FHIR em JSON"
            className="min-h-[480px] w-full resize-y bg-transparent p-5 font-mono text-[13px] leading-6 text-slate-800 outline-none placeholder:text-slate-400 dark:text-slate-200"
            placeholder='{"resourceType": "Patient"}'
          />
          <div className="flex flex-col gap-3 border-t border-slate-200 p-4 sm:flex-row sm:items-center sm:justify-between dark:border-white/[0.08]">
            <p className="flex items-center gap-2 text-xs text-slate-500">
              <ShieldAlert size={14} /> Não cole dados reais ou identificáveis.
            </p>
            <button type="button" onClick={validate} className="button-primary">
              <Play size={15} fill="currentColor" /> Validar recurso
            </button>
          </div>
        </div>

        <div className="min-h-[580px] bg-slate-50/70 dark:bg-black/10">
          <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 dark:border-white/[0.08]">
            <span className="font-mono text-xs text-slate-500">OperationOutcome</span>
            {result ? (
              <button
                type="button"
                onClick={copyOutcome}
                className="button-secondary !px-3 !py-2"
              >
                <Clipboard size={14} /> {copied ? "Copiado" : "Copiar JSON"}
              </button>
            ) : null}
          </div>

          {!result ? (
            <div className="grid min-h-[520px] place-items-center p-8 text-center">
              <div className="max-w-sm">
                <Braces className="mx-auto text-slate-300 dark:text-slate-700" size={36} />
                <p className="mt-5 font-medium text-slate-700 dark:text-slate-300">
                  Aguardando validação
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Os achados aparecerão aqui com severidade, origem e caminho do elemento.
                </p>
              </div>
            </div>
          ) : (
            <div className="p-4 sm:p-5">
              <div
                className={`flex items-start gap-3 rounded-xl border p-4 ${
                  result.valid
                    ? "border-emerald-500/25 bg-emerald-500/[0.08]"
                    : "border-red-500/25 bg-red-500/[0.08]"
                }`}
              >
                {result.valid ? (
                  <CheckCircle2 className="mt-0.5 text-emerald-500" size={20} />
                ) : (
                  <TriangleAlert className="mt-0.5 text-red-500" size={20} />
                )}
                <div>
                  <p className="font-semibold text-slate-950 dark:text-white">
                    {result.valid
                      ? "Sem erros nas regras locais"
                      : "Foram encontrados problemas bloqueantes"}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    {result.resourceType ?? "Recurso não identificado"} · {counts.error + counts.fatal}{" "}
                    erro(s) · {counts.warning} alerta(s)
                  </p>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                {result.outcome.issue.map((issue, index) => (
                  <article
                    key={`${issue.expression[0]}-${issue.code}-${index}`}
                    className={`rounded-xl border p-4 ${severityStyles[issue.severity]}`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-semibold uppercase tracking-wide">
                        {severityLabels[issue.severity]}
                      </span>
                      <span className="font-mono text-[10px] opacity-70">{issue.source}</span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-800 dark:text-slate-200">
                      {issue.diagnostics}
                    </p>
                    <code className="mt-2 block break-all text-[11px] opacity-75">
                      {issue.expression.join(", ")}
                    </code>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
