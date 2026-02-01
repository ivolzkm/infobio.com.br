/**
 * @file Renderiza a página inicial (landing page) do portal InfoBio com um design de terminal.
 */

import Head from 'next/head';
import BotaoAlternarTema from '../components/ThemeToggleButton';
import Terminal from '../components/Terminal';
import { obterDadosDoPortal } from '../lib/portalData';

/**
 * Componente principal da página inicial.
 *
 * @param {{dados: object}} props As propriedades da página, recebidas de `getStaticProps`.
 * @returns {JSX.Element}
 */
function PaginaInicial({ dados }) {
  return (
    <>
      <Head>
        <title>{dados.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
      </Head>

      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-500 font-sans">
        <div className="absolute top-4 right-4">
          <BotaoAlternarTema />
        </div>

        <header className="text-center py-12 sm:py-20">
          <h1 className="text-5xl sm:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600" style={{ fontFamily: "'Inter', sans-serif" }}>
            {dados.header.title}
          </h1>
          <p className="text-lg sm:text-xl mt-4 text-gray-600 dark:text-gray-300" style={{ fontFamily: "'Inter', sans-serif" }}>
            {dados.header.subtitle}
          </p>
        </header>

        <main className="max-w-4xl mx-auto px-4 pb-16">
          {/* O componente Terminal substitui a antiga grade de cartões */}
          <Terminal data={dados.cards} />
        </main>

        <footer className="text-center py-8 text-gray-500 dark:text-gray-400">
          <p>&copy; 2024 InfoBio. Todos os direitos reservados.</p>
        </footer>
      </div>
    </>
  );
}

/**
 * Função do Next.js para buscar dados em tempo de build (Static Site Generation).
 * Busca os dados do portal e os passa como props para o componente `PaginaInicial`.
 *
 * @returns {Promise<{props: {dados: object}}>}
 */
export async function getStaticProps() {
  const dados = obterDadosDoPortal();
  return {
    props: {
      dados,
    },
  };
}

export default PaginaInicial;