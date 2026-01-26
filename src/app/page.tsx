// src/app/page.tsx

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-73px)] items-center justify-center bg-slate-950 text-white p-8">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center max-w-6xl">

        {/* Lado Esquerdo: Conteúdo e Título */}
        <div className="flex flex-col items-start space-y-6 text-center md:text-left">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Code Meets <span className="text-sky-400">Biology</span>.
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-md">
            Unindo a ciência de dados com a saúde para construir o futuro da tecnologia biomédica no Brasil.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-sky-900/20 transform hover:-translate-y-1">
              Começar Agora
            </button>
            <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg transition-all duration-300 border border-slate-700">
              Ver Projetos
            </button>
          </div>
        </div>

        {/* Lado Direito: Bloco de Código Estilizado */}
        <div className="hidden md:block bg-slate-900 p-8 rounded-2xl shadow-2xl border border-slate-800 font-mono text-sm text-slate-300 transform hover:scale-[1.02] transition-transform duration-500">
          <div className="flex space-x-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
          </div>
          <pre>
            <span className="text-sky-400">const</span> <span className="text-emerald-300">biomedData</span> = <span className="text-yellow-400">{'{'}</span>
            <br />
            &nbsp;&nbsp;<span className="text-pink-400">datasets</span>: [<span className="text-green-400">&apos;genomics&apos;</span>, <span className="text-green-400">&apos;medical_imaging&apos;</span>, <span className="text-green-400">&apos;ehr&apos;</span>],
            <br />
            &nbsp;&nbsp;<span className="text-pink-400">tools</span>: [<span className="text-green-400">&apos;python&apos;</span>, <span className="text-green-400">&apos;r&apos;</span>, <span className="text-green-400">&apos;tensorflow&apos;</span>],
            <br />
            &nbsp;&nbsp;<span className="text-pink-400">communitySize</span>: <span className="text-yellow-400">1000</span>,
            <br />
            <span className="text-yellow-400">{'}'}</span>;
            <br /><br />
            <span className="text-orange-400">function</span> <span className="text-sky-400">getInnovations</span>(<span className="text-emerald-300">data</span>) <span className="text-yellow-400">{'{'}</span>
            <br />
            &nbsp;&nbsp;<span className="text-green-400">console</span>.<span className="text-red-400">log</span>(<span className="text-green-400">&apos;Building the future...&apos;</span>);
            <br />
            <span className="text-yellow-400">{'}'}</span>;
          </pre>
        </div>

      </div>
    </main>
  );
}
