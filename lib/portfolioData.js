/**
 * @file Este arquivo serve como um "Model" estático para a página de portfólio.
 * Ele centraliza todo o conteúdo textual e de imagem necessário para renderizar
 * a página de portfólio de Ivo Ricardo Lozekam Junior, facilitando a manutenção
 * e atualização das informações.
 */

/**
 * Retorna um objeto com todos os dados necessários para a página de portfólio.
 *
 * @returns {{
 *   title: string,
 *   name: string,
 *   role: string,
 *   profileImage: {src: string, alt: string},
 *   ufcspaImage: {src: string, alt: string},
 *   bio: Array<{type: string, content: string}>,
 *   stack: Array<string>,
 *   labButton: {text: string, subtext: string, href: string},
 *   connect: {title: string, links: Array<{name: string, href: string}>}
 * }} Objeto de dados estáticos para a página de portfólio.
 */
export function obterDadosDoPortfolio() {
  return {
    // Título da página, usado na tag <title>.
    title: "InfoBio | Portfólio de Ivo Ricardo Lozekam Junior",

    // Informações principais do perfil.
    name: "Ivo Ricardo Lozekam Junior",
    role: "Desenvolvedor Backend • Informática Biomédica",

    profileImage: {
      src: "/images/ivo.jpeg",
      alt: "Foto de perfil de Ivo Ricardo Lozekam Junior",
    },

    ufcspaImage: {
      src: "/images/ufcspafrente.jpeg",
      alt: "Frente da Universidade Federal de Ciências da Saúde de Porto Alegre",
    },

    // Biografia, dividida em parágrafos. O conteúdo pode incluir HTML para formatação.
    bio: [
      {
        type: "paragraph",
        content:
          "👋 Olá! Eu sou <strong>Ivo Ricardo Lozekam Junior</strong>, estudante de <strong>Informática Biomédica</strong> na <strong>Universidade Federal de Ciências da Saúde de Porto Alegre (UFCSPA)</strong> e desenvolvedor backend. Atualmente atuo na <strong>SETIC</strong> da universidade, desenvolvendo sistemas e APIs para uso institucional.",
      },
      {
        type: "paragraph",
        content:
          "Tenho interesse em <strong>engenharia de software</strong>, arquitetura de sistemas, desenvolvimento backend e aplicações da computação na área da saúde. Trabalho principalmente com <strong>Laravel</strong>, bancos de dados relacionais, <strong>Docker</strong> e <strong>Linux</strong>.",
      },
      {
        type: "paragraph",
        content:
          "O <strong>InfoBio</strong> é o espaço onde reúno meus projetos, experimentos e estudos. Aqui compartilho desde aplicações e ferramentas desenvolvidas em software até iniciativas que conectam <strong>tecnologia, biologia e saúde</strong>.",
      },
    ],

    // Tecnologias principais.
    stack: [
      "PHP",
      "Laravel",
      "Java",
      "Oracle",
      "MySQL",
      "Docker",
      "Linux",
      "Git",
    ],

    // Informações para o botão de chamada para ação (CTA).
    labButton: {
      text: "Explorar Projetos e Laboratórios",
      subtext: "Software, Informática Biomédica e experimentos digitais",
      href: "/laboratorio-digital",
    },

    // Seção de links para redes sociais e contato.
    connect: {
      title: "Conecte-se comigo",
      links: [
        {
          name: "GitHub",
          href: "https://github.com/ivolzkm",
        },
        {
          name: "LinkedIn",
          href: "https://www.linkedin.com/in/ivo-ricardo-lozekam-junior-6944a1195/",
        },
      ],
    },
  };
}
