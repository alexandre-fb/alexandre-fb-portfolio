import {
  Container,
  ListProjects,
  Project,
  ProjectTitle,
  Technologies,
  ImageArea,
  ImageProject,
  Links,
} from "./styles";
import { Title } from "../../Title";
import pokemonPage from "../../../assets/images/pokemon-page.png";
import pesquisaGitHubPage from "../../../assets/images/pesquisa-github-page.png";
import portfolioPage from "../../../assets/images/portfolio-page.png";
import { PrimaryButton } from "../../buttons/PrimaryButton";

export const MainProjects = () => {
  return (
    <Container>
      <Title>Projetos</Title>

      <ListProjects>
        <Project>
          <ProjectTitle>Pokedex com Poke Api</ProjectTitle>
          <Technologies>
            HTML, CSS, JavaScript, ReactJS, Styled Components
          </Technologies>
          <ImageArea>
            <ImageProject image={pokemonPage} />
          </ImageArea>
          <Links>
            <li>
              <a
                href="https://lista-de-pokemons-com-api.vercel.app/"
                target="_blank"
              >
                <PrimaryButton>Página</PrimaryButton>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/alexandre-fb/lista-de-pokemons-com-api"
                target="_blank"
              >
                <PrimaryButton>GitHub</PrimaryButton>
              </a>
            </li>
          </Links>
        </Project>

        <Project>
          <ProjectTitle>Pesquisa de usuário com Api do GitHub</ProjectTitle>
          <Technologies>HTML, CSS, JavaScript</Technologies>

          <ImageArea>
            <ImageProject image={pesquisaGitHubPage} />
          </ImageArea>

          <Links>
            <li>
              <a
                href="https://alexandre-fb.github.io/projeto-inicial-fetch-github-api/"
                target="_blank"
              >
                <PrimaryButton>Página</PrimaryButton>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/alexandre-fb/projeto-inicial-fetch-github-api"
                target="_blank"
              >
                <PrimaryButton>GitHub</PrimaryButton>
              </a>
            </li>
          </Links>
        </Project>

        <Project>
          <ProjectTitle>Portfólio Alexandre Bisognin</ProjectTitle>
          <Technologies>
            HTML, CSS, JavaScript, ReactJS, Styled Components
          </Technologies>

          <ImageArea>
            <ImageProject image={portfolioPage} />
          </ImageArea>

          <Links>
            <li>
              <a href="">
                <PrimaryButton>Página</PrimaryButton>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/alexandre-fb/alexandre-fb-portfolio"
                target="_blank"
              >
                <PrimaryButton>GitHub</PrimaryButton>
              </a>
            </li>
          </Links>
        </Project>
      </ListProjects>
    </Container>
  );
};
