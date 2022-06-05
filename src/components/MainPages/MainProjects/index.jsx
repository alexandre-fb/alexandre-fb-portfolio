import styled from "styled-components";
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
              <a href="">
                <PrimaryButton>Página</PrimaryButton>
              </a>
            </li>
            <li>
              <a href="">
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
              <a href="">
                <PrimaryButton>Página</PrimaryButton>
              </a>
            </li>
            <li>
              <a href="">
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
              <a href="">
                <PrimaryButton>GitHub</PrimaryButton>
              </a>
            </li>
          </Links>
        </Project>
      </ListProjects>
    </Container>
  );
};

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 900px;
  margin: 20px;
`;

const ListProjects = styled.ul`
  margin-top: 30px;
  width: 100%;
`;

const Project = styled.li`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;

  ::after {
    content: "";
    height: 1px;
    width: 50%;
    background-color: rgba(255, 255, 255, 0.3);
    margin: 60px 0;
  }
`;

const ProjectTitle = styled(Title).attrs({ as: "h3" })`
  font-size: 1.4rem;
`;
const Technologies = styled.p``;

const ImageArea = styled.div`
  background-color: #fff;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  border: 1px solid yellow;
`;

const ImageProject = styled.div`
  height: 400px;
  width: 100%;

  background: no-repeat top center url(${({ image }) => image});
  background-size: cover;
  box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.1);
`;

const Links = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
`;
