/**
 * @file Renderiza a página de portfólio de ivolzkm.
 * Esta página é gerada estaticamente usando dados de `lib/portfolioData.js`.
 */

import Head from "next/head";
import Image from "next/image";
import BotaoAlternarTema from "../../components/ThemeToggleButton";
import { obterDadosDoPortfolio } from "../../lib/portfolioData";

/**
 * Componente principal da página de portfólio.
 *
 * @param {{dados: object}} props As propriedades da página, recebidas de `getStaticProps`.
 * @returns {JSX.Element}
 */
function PaginaPortfolio({ dados }) {
  /**
   * Renderiza um parágrafo da biografia que pode conter HTML.
   * A propriedade `dangerouslySetInnerHTML` é usada aqui para permitir a formatação
   * (ex: <strong>) vinda do arquivo de dados.
   *
   * @param {{content: string}} paragrafo O objeto do parágrafo.
   * @returns {JSX.Element}
   */
  const renderizarBiografia = (paragrafo) => {
    return (
      <p
        className="text-lg text-center sm:text-left mb-4 text-gray-700 dark:text-gray-300"
        dangerouslySetInnerHTML={{ __html: paragrafo.content }}
      ></p>
    );
  };

  return (
    <>
      <Head>
        <title>{dados.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4 transition-colors duration-500">
        <div className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-10 relative">
          <div className="absolute top-4 right-4">
            <BotaoAlternarTema />
          </div>

          <header className="flex flex-col sm:flex-row items-center text-center sm:text-left mb-10">
            <Image
              src={dados.profileImage.src}
              alt={dados.profileImage.alt}
              width={150}
              height={150}
              className="flex-shrink-0 w-32 h-32 sm:w-36 sm:h-36 rounded-full mb-6 sm:mb-0 sm:mr-8 border-4 border-blue-500 shadow-lg profile-image"
            />

            <div>
              <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 dark:text-gray-100">
                {dados.name}
              </h1>
              <h2 className="text-xl sm:text-2xl text-blue-600 dark:text-blue-400 mt-1">
                {dados.role}
              </h2>
            </div>
          </header>

          <main>
            <section className="border-t border-gray-200 dark:border-gray-700 pt-8">
              {dados.bio.map((p, index) => (
                <div key={index}>{renderizarBiografia(p)}</div>
              ))}
              
              <div className="flex justify-center my-8">
                <Image
                  src={dados.ufcspaImage.src}
                  alt={dados.ufcspaImage.alt}
                  width={1200}
                  height={800}
                  className="rounded-lg shadow-lg"
                />
              </div>

              <div className="mb-10 text-center">
                <a
                  href={dados.labButton.href}
                  className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] group"
                  style={{ minWidth: "280px" }}
                >
                  <span className="text-2xl mr-3 group-hover:rotate-12 transition-transform">
                    🧪
                  </span>
                  <span className="text-lg">
                    {dados.labButton.text}
                  </span>
                  <span className="ml-3 opacity-75 group-hover:ml-4 group-hover:opacity-100 transition-all">
                    →
                  </span>
                </a>
                <p className="text-gray-500 dark:text-gray-400 mt-3 text-sm">
                  {dados.labButton.subtext}
                </p>
              </div>
            </section>

            <section className="mt-10 text-center">
              <h3 className="text-2xl font-bold mb-5 text-gray-800 dark:text-gray-100">
                {dados.connect.title}
              </h3>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                {dados.connect.links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full sm:w-auto font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md transform hover:scale-105 ${
                      link.name === 'GitHub'
                        ? 'bg-gray-800 text-white hover:bg-gray-700 dark:hover:bg-gray-600'
                        : 'bg-blue-600 text-white hover:bg-blue-500 dark:hover:bg-blue-700'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

/**
 * Função do Next.js para buscar dados em tempo de build (Static Site Generation).
 * Busca os dados do portfólio e os passa como props para o componente `PaginaPortfolio`.
 *
 * @returns {Promise<{props: {dados: object}}>}
 */
export async function getStaticProps() {
  const dados = obterDadosDoPortfolio();
  return {
    props: {
      dados,
    },
  };
}

export default PaginaPortfolio;