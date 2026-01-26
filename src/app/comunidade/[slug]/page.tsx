// src/app/comunidade/[slug]/page.tsx

import Link from 'next/link';

export default function UniversityPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const name = slug.toUpperCase();

  return (
    <main className="flex min-h-[calc(100vh-73px)] flex-col items-center bg-slate-950 text-white p-8">
      <div className="container mx-auto max-w-4xl text-center py-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
          Comunidade <span className="text-sky-400">{name}</span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-400 mb-12">
          Bem-vindo ao espaço dedicado aos estudantes e profissionais de Informática Biomédica da {name}.
        </p>
        
        <div className="bg-slate-900 border border-slate-800 p-12 rounded-2xl shadow-xl">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-sky-500/10 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-sky-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147L12 15l7.74-4.853a.75.75 0 000-1.294L12 4l-7.74 4.853a.75.75 0 000 1.294zm0 0l7.74 4.853a.75.75 0 000 1.294L12 20l-7.74-4.853a.75.75 0 000-1.294z" />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-4">Página em Construção</h2>
          <p className="text-slate-400 mb-8">
            Estamos coletando informações e recursos específicos para a comunidade da {name}. 
            Se você deseja contribuir com conteúdos para esta página, entre em contato conosco!
          </p>
          <Link href="/comunidade" className="inline-flex items-center text-sky-400 hover:text-sky-300 font-medium transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Voltar para Comunidades
          </Link>
        </div>
      </div>
    </main>
  );
}
