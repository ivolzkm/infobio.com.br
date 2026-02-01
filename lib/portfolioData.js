// lib/portfolioData.js

export function getPortfolioData() {
  return {
    title: "Portfólio Ivo Lozekam",
    name: "Ivo Ricardo Lozekam Junior",
    role: "Informática Biomédica",
    profileImage: {
      src: "/images/ivo.jpeg",
      alt: "Foto de perfil de Ivo Ricardo Lozekam",
    },
    ufcspaImage: {
      src: "/images/ufcspafrente.jpeg",
      alt: "Frente da UFCSPA",
    },
    bio: [
      {
        type: "paragraph",
        content:
          "👋 Olá! Eu sou Ivo, estudante de graduação na <strong>Universidade Federal de Ciências da Saúde de Porto Alegre (UFCSPA)</strong>. Sou um entusiasta da tecnologia apaixonado por encontrar e aplicar soluções inovadoras para os desafios da área da saúde.",
      },
      {
        type: "paragraph",
        content:
          "Minha jornada na UFCSPA tem me proporcionado uma base sólida em ciência da computação e biologia, preparando-me para desenvolver projetos de impacto.",
      },
      {
        type: "paragraph",
        content:
          "Que tal explorar de forma interativa <strong>como a tecnologia e a saúde se conectam</strong>? Criei um <span class=\"italic text-blue-500 dark:text-blue-400\">laboratório digital</span> onde você pode descobrir minha paixão pela UFCSPA, entender o que é Informática Biomédica na prática e ver os projetos que ganham vida no código.",
      },
    ],
    labButton: {
      text: "Acessar Laboratório Interativo",
      subtext: "Uma experiência gamificada sobre saúde, código e inovação",
      href: "/laboratorio-digital",
    },
    connect: {
      title: "Conecte-se Comigo!",
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
