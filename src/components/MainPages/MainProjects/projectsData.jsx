import pokedexProjectImage from "../../../assets/images/pokedex-project.png";
import portfolioProjectImage from "../../../assets/images/portfolio-project.png";
import pesquisaGitHubProjectImage from "../../../assets/images/busca-api-github-project.png";

export const projectsData = [
  {
    title: "Pokedex com PokeApi",
    image: pokedexProjectImage,
    technologies: [
      "Html",
      "Css",
      "JavaScript",
      "ReactJS",
      "Styled, Components",
    ],
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
        link: "#",
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
