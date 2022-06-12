import {
  Container,
  ImageProject,
  DataContainer,
  Technologies,
  Buttons,
} from "./styles";
import { Title } from "../../../Title";
import { PrimaryButton } from "../../../buttons/PrimaryButton";

export const Project = ({ title, technologies, links, image }) => {
  return (
    <Container>
      <DataContainer>
        <Title>{title}</Title>

        <ImageProject src={image} />

        <Technologies>
          {technologies.map((technologie, index) => {
            return <li key={index}>{technologie}</li>;
          })}
        </Technologies>

        <Buttons>
          {links.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.link} target="_blank">
                  <PrimaryButton>{item.name}</PrimaryButton>
                </a>
              </li>
            );
          })}
        </Buttons>
      </DataContainer>
    </Container>
  );
};
