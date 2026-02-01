/**
 * @file Arquivo raiz da aplicação Next.js.
 * Este componente, conhecido como App, é o ponto de entrada principal e é
 * renderizado em todas as páginas. Ele é usado para importar estilos globais
 * e envolver todas as páginas com componentes ou provedores comuns.
 */

import './style.css';

/**
 * Componente principal da aplicação.
 * 
 * @param {object} props As propriedades do componente.
 * @param {React.ElementType} props.Component O componente da página ativa.
 * @param {object} props.pageProps As propriedades iniciais que foram pré-carregadas para a página.
 * @returns {JSX.Element} O componente da página renderizado.
 */
function Aplicacao({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default Aplicacao;
