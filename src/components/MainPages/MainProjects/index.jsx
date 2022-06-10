import { Container, StyledTitle, ListProjects } from "./styles";
import { Project } from "./Project";
import { Title } from "../../Title";
import pokedexProjectImage from "../../../assets/images/pokedex-project.png";
import portfolioProjectImage from "../../../assets/images/portfolio-project.png";
import pesquisaGitHubProjectImage from "../../../assets/images/busca-api-github-project.png";

import { PrimaryButton } from "../../buttons/PrimaryButton";

export const MainProjects = () => {
  return (
    <Container>
      <StyledTitle>Projetos</StyledTitle>

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
          links={{
            pagina: "https://lista-de-pokemons-com-api.vercel.app/",
            gitHub: "https://github.com/alexandre-fb/lista-de-pokemons-com-api",
          }}
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
          links={{ pagina: "www.google.com", gitHub: "www.google.com" }}
          image={portfolioProjectImage}
        />

        <Project
          title="Página de busca de usuário com Api do GitHub"
          technologies={["Html", "Css", "JavaScript"]}
          links={{ pagina: "www.google.com", gitHub: "www.google.com" }}
          image={pesquisaGitHubProjectImage}
        />
      </ListProjects>
    </Container>
  );
};
