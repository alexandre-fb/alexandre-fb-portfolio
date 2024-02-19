import libVueImage from "../../../assets/images/lib-vue.webp";
import whereInTheWorldImage from "../../../assets/images/api-rest-coutries-project.webp";
import pokedexProjectImage from "../../../assets/images/pokedex-project.webp";
import portfolioProjectImage from "../../../assets/images/portfolio-project.webp";
import pesquisaGitHubProjectImage from "../../../assets/images/busca-api-github-project.webp";

export const projectsData = [
  {
    title: "Biblioteca de componentes Vue.js",
    image: libVueImage,
    technologies: ["Html", "Css", "JavaScript", "VueJS", "Nuxt", "TailwidCSS"],
    links: [
      {
        name: "Página",
        link: "https://lib-vue.alexandrefb.com/",
      },
      {
        name: "gitHub",
        link: "https://github.com/alexandre-fb/lib-vuejs",
      },
    ],
  },
  {
    title: "Where in the World?",
    image: whereInTheWorldImage,
    technologies: ["Html", "Css", "JavaScript", "ReactJS", "Styled Components"],
    links: [
      {
        name: "Página",
        link: "https://countries-api-frontend-mentor-rust.vercel.app/",
      },
      {
        name: "gitHub",
        link: "https://github.com/alexandre-fb/countries-api-frontend-mentor",
      },
    ],
  },
  {
    title: "Pokedex com PokeApi",
    image: pokedexProjectImage,
    technologies: ["Html", "Css", "JavaScript", "ReactJS", "Styled Components"],
    links: [
      {
        name: "Página",
        link: "https://lista-de-pokemons-com-api.vercel.app/",
      },
      {
        name: "gitHub",
        link: "https://github.com/alexandre-fb/lista-de-pokemons-com-api",
      },
    ],
  },
  {
    title: "Portfólio Alexandre Bisognin",
    image: portfolioProjectImage,
    technologies: ["Html", "Css", "JavaScript", "ReactJS", "Styled Components"],
    links: [
      {
        name: "Página",
        link: "/",
      },
      {
        name: "gitHub",
        link: "https://github.com/alexandre-fb/alexandre-fb-portfolio",
      },
    ],
  },
  {
    title: "Página de busca de usuário com Api do GitHub",
    image: pesquisaGitHubProjectImage,
    technologies: ["Html", "Css", "JavaScript"],
    links: [
      {
        name: "Página",
        link: "https://alexandre-fb.github.io/projeto-inicial-fetch-github-api/",
      },
      {
        name: "gitHub",
        link: "https://github.com/alexandre-fb/projeto-inicial-fetch-github-api",
      },
    ],
  },
];
