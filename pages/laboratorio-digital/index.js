/**
 * @file Renderiza a página do "Laboratório Digital" com a ferramenta interativa do Dogma Central.
 */

import Head from "next/head";
import Link from "next/link";
import BotaoAlternarTema from "../../components/ThemeToggleButton";
import DogmaVisualizer from "../../components/DogmaVisualizer";

/**
 * Componente para a página "Laboratório Digital".
 *
 * @returns {JSX.Element}
 */
function PaginaLaboratorioDigital() {
  return (
    <>
      <Head>
        <title>Laboratório Digital - InfoBio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="min-h-screen bg-gray-800 dark:bg-black text-white selection:bg-purple-500/50 selection:text-white">
        <div className="absolute top-4 right-4">
          <BotaoAlternarTema />
        </div>

        <div className="p-4 sm:p-8">
          <header className="text-center my-8">
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-2">
              Laboratório Digital
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Uma simulação interativa do Dogma Central da Biologia Molecular. Insira uma fita de DNA e veja a mágica acontecer.
            </p>
          </header>

          <main className="flex flex-col items-center justify-center">
            <DogmaVisualizer />
          </main>

          <footer className="text-center mt-12 mb-4">
            <Link href="/ivolzkm" legacyBehavior>
              <a className="text-blue-400 hover:underline">
                &larr; Voltar ao portfólio de ivolzkm
              </a>
            </Link>
          </footer>
        </div>
      </div>
    </>
  );
}

export default PaginaLaboratorioDigital;
