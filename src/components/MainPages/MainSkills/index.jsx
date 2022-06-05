import styled from "styled-components";
import { Title } from "../../Title";
import { Divider } from "../../Divider";
import { FaHtml5, FaCss3Alt, FaReact, FaGithub, FaFigma } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiStyledcomponents } from "react-icons/si";

export const MainSkills = () => {
  return (
    <Container>
      <ContainerProSkills>
        <Title>Pró Skills</Title>

        <ListPrimaryProSkills>
          <li>
            <FaHtml5 />
            <h3>HTML</h3>
          </li>
          <li>
            <FaCss3Alt />
            <h3>CSS</h3>
          </li>
          <li>
            <DiJavascript1 />
            <h3>JavaScript</h3>
          </li>
          <li>
            <FaReact />
            <h3>ReactJs</h3>
          </li>
        </ListPrimaryProSkills>

        <ListSecundaryProSkills>
          <li>Styled Components</li>
          <li>Git</li>
          <li>GitHub</li>
          <li>Git Flow</li>
          <li>Fetch Api</li>
          <li>Figma</li>
          <li> After Effects</li>
          <li> Premire</li>
          <li> Illustrator</li>
          <li> Indesign</li>
          <li> Photoshop</li>
        </ListSecundaryProSkills>
      </ContainerProSkills>

      <Divider horizontal></Divider>

      <ContainerSoftSkills>
        <Title>Soft Skills</Title>

        <p>
          Sou uma pessoa responsável e colaborativa. Procuro manter uma
          comunicação clara e respeitosa em qualquer situação. Tenho buscado me
          aprimorar na habilidade de "aprender a aprender", visando manter-me
          motivado, atualizado e em constante evolução.
        </p>
      </ContainerSoftSkills>
    </Container>
  );
};

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 900px;

  /* border: 1px solid red; */
`;

const ContainerProSkills = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

const ListPrimaryProSkills = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  column-gap: 50px;
  row-gap: 30px;

  text-align: center;

  li {
    border: 1px solid var(--light-green);
    border-radius: 12px;
    width: 150px;
    height: 150px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    transition: 300ms;

    svg {
      font-size: 3rem;
      transition: inherit;
    }

    h3 {
      transition: inherit;
    }

    :hover {
      background-color: #fff;

      h3 {
        color: #000;
      }

      svg {
        color: var(--light-green);
      }
    }
  }
`;

const ListSecundaryProSkills = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  li {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    text-align: center;
  }

  & li::before {
    content: "";
    display: inline-block;
    margin-right: 7px;
    width: 5px;
    height: 5px;
    border-radius: 100%;
    border: 1px solid var(--light-green);
  }
`;

const ContainerSoftSkills = styled.div`
  text-align: center;
  p {
    padding: 30px 30px;
  }
`;
