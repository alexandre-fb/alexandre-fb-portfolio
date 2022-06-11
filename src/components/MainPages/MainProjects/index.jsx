import { Container, ListProjects } from "./styles";
import { Project } from "./Project";
import pokedexProjectImage from "../../../assets/images/pokedex-project.png";
import portfolioProjectImage from "../../../assets/images/portfolio-project.png";
import pesquisaGitHubProjectImage from "../../../assets/images/busca-api-github-project.png";

export const MainProjects = () => {
  return (
    <Container>
      <ListProjects>
        <Project
          title="Pokedex com PokeApi"
          technologies={[
            "Html",
            "Css",
            "JavaScript",
            "ReactJS",
            "Styled Components",
          ]}
          links={[
            { name: "Página", link: "www.google.com" },
            { name: "gitHub", link: "www.google.com" },
          ]}
          image={pokedexProjectImage}
        />

        <Project
          title="Portfólio Alexandre Bisognin"
          technologies={[
            "Html",
            "Css",
            "JavaScript",
            "ReactJS",
            "Styled Components",
          ]}
          links={[
            { name: "Página", link: "www.google.com" },
            { name: "gitHub", link: "www.google.com" },
          ]}
          image={portfolioProjectImage}
        />

        <Project
          title="Página de busca de usuário com Api do GitHub"
          technologies={["Html", "Css", "JavaScript"]}
          links={[
            { name: "Página", link: "www.google.com" },
            { name: "gitHub", link: "www.google.com" },
          ]}
          image={pesquisaGitHubProjectImage}
        />
      </ListProjects>
    </Container>
  );
};
