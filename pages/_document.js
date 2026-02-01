/**
 * @file Este arquivo define um Documento customizado para o Next.js.
 * O Documento permite modificar a estrutura HTML base que envolve a aplicação,
 * como as tags `<html>` e `<body>`. É o local ideal para adicionar fontes externas,
 * meta tags globais e outros scripts que precisam ser carregados em todas as páginas.
 */

import { Html, Head, Main, NextScript } from 'next/document';

/**
 * Componente que define a estrutura HTML base da aplicação.
 * 
 * @returns {JSX.Element} A estrutura HTML personalizada.
 */
function Documento() {
  return (
    <Html lang="pt-BR">
      <Head>
        {/*
          As linhas abaixo são responsáveis por importar a fonte 'Inter' do Google Fonts,
          que é utilizada no design da aplicação.
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        {/* Main é onde os componentes da página são renderizados. */}
        <Main />
        {/* NextScript é onde os scripts do Next.js são injetados. */}
        <NextScript />
      </body>
    </Html>
  );
}

export default Documento;
