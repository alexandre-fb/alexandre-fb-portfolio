import {
  Container,
  DataContainer,
  ProjectTitle,
  Technologies,
  Buttons,
  ImageProject,
} from "./styles";
import { PrimaryButton } from "../../../buttons/PrimaryButton";

export const Project = ({ title, technologies, links, image }) => {
  return (
    <Container>
      <DataContainer>
        <ProjectTitle>{title}</ProjectTitle>

        <ImageProject src={image} />

        <Technologies>
          {technologies.map((technologie, index) => {
            return <li key={index}>{technologie}</li>;
          })}
        </Technologies>

        <Buttons>
          <li>
            <a href={links.pagina} target="_blank">
              <PrimaryButton>Página</PrimaryButton>
            </a>
          </li>
          <li>
            <a href={links.gitHub} target="_blank">
              <PrimaryButton>GitHub</PrimaryButton>
            </a>
          </li>
        </Buttons>
      </DataContainer>
    </Container>
  );
};
