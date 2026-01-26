// src/app/comunidade/page.tsx

import Link from 'next/link';

export default function ComunidadePage() {
  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center bg-slate-950 text-white p-8">
      <div className="w-full max-w-5xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
          Nossa Comunidade
        </h1>
        <p className="text-lg text-slate-300 mb-12">
          Um espaço para conectar estudantes e entusiastas da Informática Biomédica de todo o Brasil. 
          Comece explorando os cursos nas principais universidades.
        </p>
      </div>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card para UFCSPA */}
        <Link href="/comunidade/ufcspa" className="block p-6 bg-slate-800 rounded-lg border border-slate-700 hover:bg-slate-700 hover:border-sky-400 transition-all duration-300">
          <h2 className="text-2xl font-bold text-sky-400 mb-2">UFCSPA</h2>
          <p className="text-slate-400">Conheça o curso de Informática Biomédica em Porto Alegre.</p>
        </Link>
        
        {/* Card para USP */}
        <Link href="/comunidade/usp" className="block p-6 bg-slate-800 rounded-lg border border-slate-700 hover:bg-slate-700 hover:border-sky-400 transition-all duration-300">
          <h2 className="text-2xl font-bold text-sky-400 mb-2">USP</h2>
          <p className="text-slate-400">Explore o curso de Informática Biomédica em Ribeirão Preto.</p>
        </Link>
        
        {/* Card para UFPR */}
        <Link href="/comunidade/ufpr" className="block p-6 bg-slate-800 rounded-lg border border-slate-700 hover:bg-slate-700 hover:border-sky-400 transition-all duration-300">
          <h2 className="text-2xl font-bold text-sky-400 mb-2">UFPR</h2>
          <p className="text-slate-400">Descubra mais sobre o curso em Curitiba.</p>
        </Link>
      </div>
    </main>
  );
}