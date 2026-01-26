// src/app/sobre/page.tsx

export default function Sobre() {
  const features = [
    {
      icon: '📚',
      title: 'Hub de Conhecimento',
      desc: 'Com artigos, tutoriais e guias de estudo sobre bioinformática, informática clínica e saúde digital.'
    },
    {
      icon: '🤝',
      title: 'Comunidade Ativa',
      desc: 'Um fórum para troca de ideias, dúvidas e networking entre estudantes e profissionais.'
    },
    {
      icon: '💼',
      title: 'Portal de Oportunidades',
      desc: 'Um mural dedicado a vagas de estágio, emprego e pesquisa na área.'
    },
    {
      icon: '🛠️',
      title: 'Vitrine de Projetos',
      desc: 'Um espaço para que membros da comunidade possam divulgar seus projetos e portfólios.'
    }
  ];

  return (
    <main className="flex min-h-[calc(100vh-73px)] flex-col items-center bg-slate-950 text-white p-8">
      <div className="container mx-auto max-w-5xl py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Sobre o <span className="text-sky-400">InfoBio</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            O InfoBio.com.br nasceu da necessidade de centralizar o conhecimento e fortalecer a comunidade de Informática Biomédica no Brasil. Atualmente, os recursos, as oportunidades de carreira e os espaços para discussão estão espalhados pela web, dificultando o acesso e a colaboração, especialmente para quem está começando na área.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="group p-8 bg-slate-900 rounded-2xl border border-slate-800 hover:border-sky-500/50 hover:bg-slate-800/50 transition-all duration-300 shadow-xl">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
              <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">{feature.title}</h2>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
