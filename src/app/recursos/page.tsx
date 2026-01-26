// src/app/recursos/page.tsx

import Link from 'next/link';

export default function RecursosPage() {
  return (
    <main className="flex min-h-[calc(100vh-73px)] flex-col items-center bg-slate-950 text-white p-8">
      <div className="container mx-auto max-w-5xl py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Recursos e <span className="text-sky-400">Ferramentas</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Uma coleção de ferramentas úteis para o dia a dia de um profissional de bioinformática e informática biomédica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Link href="/recursos/conversor" className="group p-8 bg-slate-900 rounded-2xl border border-slate-800 hover:border-sky-500/50 hover:bg-slate-800/50 transition-all duration-300 shadow-xl">
            <div className="w-12 h-12 bg-sky-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-sky-500/20 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-sky-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0113.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-2 text-white group-hover:text-sky-400 transition-colors">Conversor de Formatos</h2>
            <p className="text-slate-400 text-sm leading-relaxed">Converta arquivos de sequência entre diferentes formatos como FASTA, GenBank, etc.</p>
          </Link>

          <div className="p-8 bg-slate-900/50 rounded-2xl border border-slate-800/50 opacity-60">
            <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-slate-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-3-3V18m-3-3V18m3-3h.008v.008H12.75V15zm0 2.25h.008v.008H12.75V17.25zm0 2.25h.008v.008H12.75V19.5zM4.5 5.25a3 3 0 013-3h10.5a3 3 0 013 3v13.5a3 3 0 01-3 3H7.5a3 3 0 01-3-3V5.25z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-2 text-slate-400">Calculadora de Propriedades <span className="text-xs bg-slate-800 px-2 py-1 rounded ml-2">EM BREVE</span></h2>
            <p className="text-slate-500 text-sm leading-relaxed">Calcule propriedades de sequências de DNA/RNA/proteína de forma rápida e precisa.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
