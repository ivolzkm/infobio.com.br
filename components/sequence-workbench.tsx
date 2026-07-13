"use client";

import { useMemo, useState } from "react";

import {
  gcContent,
  invalidDnaBases,
  normalizeDna,
  reverseComplement,
  translateDna,
  transcribeDna,
} from "@/lib/bio";

const example = "ATG TTC GGT TAA";

export function SequenceWorkbench() {
  const [input, setInput] = useState(example);
  const [frame, setFrame] = useState(0);

  const analysis = useMemo(() => {
    const dna = normalizeDna(input);
    return {
      dna,
      invalid: invalidDnaBases(input),
      rna: transcribeDna(input),
      reverse: reverseComplement(input),
      protein: translateDna(input, frame),
      gc: gcContent(input),
    };
  }, [frame, input]);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-white/[0.08] dark:bg-[#0b1119]">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
        <div className="border-b border-slate-200 p-5 lg:border-b-0 lg:border-r dark:border-white/[0.08]">
          <div className="flex items-center justify-between gap-4">
            <label htmlFor="dna-input" className="font-mono text-xs text-slate-500">
              input.sequence
            </label>
            <button
              type="button"
              onClick={() => setInput(example)}
              className="button-secondary !px-3 !py-2"
            >
              Carregar exemplo
            </button>
          </div>
          <textarea
            id="dna-input"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            maxLength={100000}
            spellCheck={false}
            className="mt-4 min-h-64 w-full resize-y rounded-xl border border-slate-200 bg-slate-50 p-4 font-mono text-sm uppercase leading-7 text-slate-800 outline-none focus:border-teal-500 dark:border-white/10 dark:bg-black/20 dark:text-slate-200"
          />
          <div className="mt-4 flex items-center justify-between gap-4">
            <p className="text-xs text-slate-500">Limite local: 100.000 bases</p>
            <label className="flex items-center gap-2 text-xs text-slate-500">
              Fase
              <select
                value={frame}
                onChange={(event) => setFrame(Number(event.target.value))}
                className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 dark:border-white/10 dark:bg-white/[0.04] dark:text-white"
              >
                <option value={0}>+1</option>
                <option value={1}>+2</option>
                <option value={2}>+3</option>
              </select>
            </label>
          </div>
          {analysis.invalid.length > 0 ? (
            <p className="mt-4 rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-700 dark:text-red-300">
              Bases não reconhecidas: {analysis.invalid.join(", ")}
            </p>
          ) : null}
        </div>

        <div className="bg-slate-50/70 p-5 dark:bg-black/10">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <Stat label="Comprimento" value={`${analysis.dna.length} bp`} />
            <Stat label="Conteúdo GC" value={`${analysis.gc.toFixed(2)}%`} />
            <Stat label="Aminoácidos" value={`${analysis.protein.length} aa`} />
          </div>
          <div className="mt-5 space-y-3">
            <Output label="DNA normalizado" value={analysis.dna} />
            <Output label="RNA mensageiro" value={analysis.rna} />
            <Output label="Complemento reverso" value={analysis.reverse} />
            <Output label={`Proteína · fase +${frame + 1}`} value={analysis.protein} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-white/[0.08] dark:bg-white/[0.025]">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="mt-2 font-mono text-lg font-semibold text-slate-950 dark:text-white">{value}</p>
    </div>
  );
}

function Output({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-white/[0.08] dark:bg-white/[0.025]">
      <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">{label}</p>
      <p className="mt-3 min-h-6 break-all font-mono text-sm leading-6 text-slate-800 dark:text-slate-200">
        {value || "—"}
      </p>
    </div>
  );
}
