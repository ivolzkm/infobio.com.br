// src/app/oportunidades/page.tsx

export default function Oportunidades() {
  return (
    <main className="flex min-h-[calc(100vh-73px)] flex-col items-center bg-slate-950 text-white p-8">
      <div className="container mx-auto max-w-4xl text-center py-12">
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 bg-sky-500/10 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-sky-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m0 0C5.306 7.867 3.75 9.233 3.75 10.5" />
            </svg>
          </div>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
          Oportunidades em <span className="text-sky-400">Construção</span>
        </h1>
        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
          Estamos preparando um mural completo de vagas de estágio, emprego, pesquisa e networking na área de Informática Biomédica.
        </p>
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-xl">
          <p className="text-slate-400 mb-6">Volte em breve para descobrir as melhores oportunidades para sua carreira!</p>
          <div className="inline-flex items-center justify-center">
            <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse mr-2"></div>
            <span className="text-sky-400 font-medium">Em desenvolvimento</span>
          </div>
        </div>
      </div>
    </main>
  );
}
