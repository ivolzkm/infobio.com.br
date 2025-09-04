// src/app/page.tsx

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white p-8">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center max-w-6xl">

        {/* Lado Esquerdo: Conteúdo e Título */}
        <div className="flex flex-col items-start space-y-6 text-center md:text-left animate-fadeInUp">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Code Meets <span className="text-sky-400">Biology</span>.
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-md">
            Unindo a ciência de dados com a saúde para construir o futuro da tecnologia biomédica no Brasil.
          </p>
          <button className="px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Saiba Mais
          </button>
        </div>

        {/* Lado Direito: Bloco de Código Estilizado */}
        <div className="hidden md:block bg-slate-800 p-8 rounded-xl shadow-lg border border-slate-700 font-mono text-sm text-slate-300 transform scale-95 opacity-0 animate-fadeInUp [animation-delay:0.3s]">
          <pre>
            <span className="text-sky-400">const</span> <span className="text-emerald-300">biomedData</span> = <span className="text-yellow-400">{'{'}</span>
            <br />
            &nbsp;&nbsp;<span className="text-pink-400">datasets</span>: [<span className="text-green-400">'genomics'</span>, <span className="text-green-400">'medical_imaging'</span>, <span className="text-green-400">'ehr'</span>],
            <br />
            &nbsp;&nbsp;<span className="text-pink-400">tools</span>: [<span className="text-green-400">'python'</span>, <span className="text-green-400">'r'</span>, <span className="text-green-400">'tensorflow'</span>],
            <br />
            &nbsp;&nbsp;<span className="text-pink-400">communitySize</span>: <span className="text-yellow-400">1000</span>,
            <br />
            <span className="text-yellow-400">{'}'}</span>;
            <br /><br />
            <span className="text-orange-400">function</span> <span className="text-sky-400">getInnovations</span>(<span className="text-emerald-300">data</span>) <span className="text-yellow-400">{'{'}</span>
            <br />
            &nbsp;&nbsp;<span className="text-green-400">console</span>.<span className="text-red-400">log</span>(<span className="text-green-400">'Building the future...'</span>);
            <br />
            <span className="text-yellow-400">{'}'}</span>;
          </pre>
        </div>

      </div>
    </main>
  );
}
