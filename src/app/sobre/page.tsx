// src/app/sobre/page.tsx

export default function Sobre() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 text-white p-8">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-8">
          Sobre o <span className="text-sky-400">InfoBio</span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-400 mb-12">
          O InfoBio.com.br nasceu da necessidade de centralizar o conhecimento e fortalecer a comunidade de Informática Biomédica no Brasil. Atualmente, os recursos, as oportunidades de carreira e os espaços para discussão estão espalhados pela web, dificultando o acesso e a colaboração, especialmente para quem está começando na área.
        </p>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700">
            <h2 className="text-2xl font-bold text-sky-400 mb-4">📚 Hub de Conhecimento</h2>
            <p className="text-slate-300">Com artigos, tutoriais e guias de estudo sobre bioinformática, informática clínica e saúde digital.</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700">
            <h2 className="text-2xl font-bold text-sky-400 mb-4">🤝 Comunidade Ativa</h2>
            <p className="text-slate-300">Um fórum para troca de ideias, dúvidas e networking entre estudantes e profissionais.</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700">
            <h2 className="text-2xl font-bold text-sky-400 mb-4">💼 Portal de Oportunidades</h2>
            <p className="text-slate-300">Um mural dedicado a vagas de estágio, emprego e pesquisa na área.</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700">
            <h2 className="text-2xl font-bold text-sky-400 mb-4">🛠️ Vitrine de Projetos</h2>
            <p className="text-slate-300">Um espaço para que membros da comunidade possam divulgar seus projetos e portfólios.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
