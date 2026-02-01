/**
 * @file Este arquivo atua como um "Model" estático para a página principal do portal.
 * Ele fornece todos os textos e dados necessários para renderizar a página inicial,
 * centralizando o conteúdo e facilitando a manutenção.
 */

/**
 * Retorna um objeto com todos os dados necessários para a página do portal.
 * 
 * @returns {{
 *   title: string,
 *   header: {title: string, subtitle: string},
 *   cards: Array<{title: string, description: string, href: string, status: 'active' | 'soon'}>,
 *   footer: {text: string}
 * }} Objeto de dados estáticos para a página principal.
 */
export function obterDadosDoPortal() {
  return {
    // Título da página, usado na tag <title>
    title: "InfoBio - Comunidade de Informática Biomédica",
    header: {
      title: "InfoBio",
      subtitle: "Conectando mentes na intersecção da saúde e tecnologia.",
    },
    // Array de cards que aparecem na página principal.
    cards: [
      {
        title: "Meu Portfólio",
        description: "Conheça a jornada de ivolzkm, estudante de Informática Biomédica.",
        href: "/ivolzkm",
        status: "active", // 'active' significa que o link está ativo e funcional.
      },
      {
        title: "Laboratório Digital",
        description: "Explore conceitos de saúde e tecnologia de forma interativa.",
        href: "/laboratorio-digital",
        status: "active",
      },
      {
        title: "Blog",
        description: "Artigos, notícias e tutoriais sobre o universo da Informática Biomédica.",
        href: "/blog",
        status: "soon", // 'soon' indica que a seção está planejada, mas ainda não disponível.
      },
      {
        title: "Comunidade",
        description: "Conecte-se com outros estudantes e profissionais da área.",
        href: "#",
        status: "soon",
      },
    ],
    footer: {
      text: "InfoBio. Todos os direitos reservados.",
    },
  };
}
