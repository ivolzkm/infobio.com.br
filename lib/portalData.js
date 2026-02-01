// lib/portalData.js

export function getPortalData() {
  return {
    title: "InfoBio - Comunidade de Informática Biomédica",
    header: {
      title: "InfoBio",
      subtitle: "Conectando mentes na intersecção da saúde e tecnologia.",
    },
    cards: [
      {
        title: "Meu Portfólio",
        description: "Conheça a jornada de Ivo Lozekam, estudante de Informática Biomédica.",
        href: "/ivolzkm",
        status: "active",
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
        status: "soon",
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
