import Link from 'next/link';

export default function FerramentasPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 text-white p-8">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-8">
          Ferramentas para Bioinformatas
        </h1>
        <p className="text-lg sm:text-xl text-slate-400 mb-12">
          Uma coleção de ferramentas úteis para o dia a dia de um profissional de bioinformática.
        </p>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <Link href="/ferramentas/conversor" className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700 hover:bg-slate-700 transition-colors">
            <h2 className="text-2xl font-bold mb-2 text-sky-400">Conversor de Formatos</h2>
            <p className="text-slate-400">Converta arquivos de sequência entre diferentes formatos como FASTA, GenBank, etc.</p>
          </Link>
          <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700 opacity-50">
            <h2 className="text-2xl font-bold mb-2 text-sky-400">Calculadora de Propriedades (em breve)</h2>
            <p className="text-slate-400">Calcule propriedades de sequências de DNA/RNA/proteína.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
