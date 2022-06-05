import { Container, ContainerProSkills, ListPrimaryProSkills, ListSecundaryProSkills, ContainerSoftSkills  } from "./styles";
import { Title } from "../../Title";
import { Divider } from "../../Divider";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";


export const MainSkills = () => {
  return (
    <Container>
      <ContainerProSkills>
        <Title>Pró Skills</Title>

        <ListPrimaryProSkills>
          <li>
            <i>
              <FaHtml5 />
            </i>
            <h3>HTML</h3>
          </li>
          <li>
            <i>
              <FaCss3Alt />
            </i>
            <h3>CSS</h3>
          </li>
          <li>
            <i>
              <DiJavascript1 />
            </i>
            <h3>JavaScript</h3>
          </li>
          <li>
            <i>
              <FaReact />
            </i>
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

