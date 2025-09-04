// src/app/page.tsx

import Hero from '@/components/layout/Hero';

export default function Home() {
  return (
    <>
      <Hero />
      <section className="bg-slate-900 text-white py-16 px-8 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-sky-400">O que é Informática Biomédica?</h2>
        <p className="mt-4 text-xl text-slate-300 max-w-4xl mx-auto">
          A Informática Biomédica é a ponte entre a biologia, a medicina e a ciência da computação. É a área que utiliza tecnologias da informação para gerenciar, analisar e aplicar dados complexos para resolver problemas na saúde. Desde a gestão hospitalar até a pesquisa genética, a Informática Biomédica é a chave para a inovação.
        </p>
      </section>
    </>
  );
}
