import {
  Container,
  ContainerProSkills,
  ListPrimaryProSkills,
  ListSecundaryProSkills,
  ContainerSoftSkills,
  ListSoftSkills,
} from "./styles";
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
          <li>After Effects</li>
          <li>Premire</li>
          <li>Illustrator</li>
          <li>Indesign</li>
          <li>Photoshop</li>
        </ListSecundaryProSkills>
      </ContainerProSkills>

      <Divider horizontal></Divider>

      <ContainerSoftSkills>
        <Title>Soft Skills</Title>
        <ListSoftSkills>
          <li>
            <h3>
              Resiliência, tolerância e flexibilidade
            </h3>
            <p>
              Aprendi a importância e pude desenvolver essas habilidades atuando
              em instituições públicas, interagindo e trabalhando com os mais
              variados perfis de pessoas.
            </p>
          </li>
          <li>
            <h3>Inteligência emocional</h3>
            <p>
              Procuro desenvolver essa habilidade através de leitura, cursos e
              eventos sobre o tema, por perceber que é uma skill que traz uma
              maior qualidade de vida para mim, e, por consequência, para as
              pessoas ao meu redor.
            </p>
          </li>

          <li>
            <h3>Aprendizado ativo</h3>
            <p>
              Essa é uma habilidade pela qual tenho me dedicado cada vez mais,
              tanto para me manter atualizado frente às rápidas mudanças do
              mundo, quanto para me manter motivado na busca de evolução pessoal
              e profissional.
            </p>
          </li>
        </ListSoftSkills>
      </ContainerSoftSkills>
    </Container>
  );
};
