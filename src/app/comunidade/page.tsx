// src/app/comunidade/page.tsx

import Link from 'next/link';

export default function ComunidadePage() {
  const universidades = [
    { slug: 'ufcspa', name: 'UFCSPA', city: 'Porto Alegre', desc: 'Conheça o curso de Informática Biomédica em Porto Alegre.' },
    { slug: 'usp', name: 'USP', city: 'Ribeirão Preto', desc: 'Explore o curso de Informática Biomédica em Ribeirão Preto.' },
    { slug: 'ufpr', name: 'UFPR', city: 'Curitiba', desc: 'Descubra mais sobre o curso em Curitiba.' },
  ];

  return (
    <main className="flex min-h-[calc(100vh-73px)] flex-col items-center bg-slate-950 text-white p-8">
      <div className="container mx-auto max-w-6xl py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Nossa <span className="text-sky-400">Comunidade</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Um espaço para conectar estudantes e entusiastas da Informática Biomédica de todo o Brasil. 
            Comece explorando os cursos nas principais universidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {universidades.map((uni) => (
            <Link 
              key={uni.slug}
              href={`/comunidade/${uni.slug}`} 
              className="group p-8 bg-slate-900 rounded-2xl border border-slate-800 hover:border-sky-500/50 hover:bg-slate-800/50 transition-all duration-300 shadow-xl"
            >
              <div className="w-12 h-12 bg-sky-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-sky-500/20 transition-colors">
                <span className="text-sky-400 font-bold">{uni.name[0]}</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">{uni.name}</h2>
              <p className="text-slate-400 text-sm leading-relaxed">{uni.desc}</p>
              <div className="mt-6 flex items-center text-sky-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Ver mais 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
