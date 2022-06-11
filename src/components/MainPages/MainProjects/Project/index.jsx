import {
  Container,
  ProjectTitle,
  ImageProject,
  DataContainer,
  Technologies,
  Buttons,
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
          {links.map( (item, index) => {
              return (
                <li>
                  <a href={item.link}></a>
                  <PrimaryButton>{item.name }</PrimaryButton>
                </li>
              )
            })
          }
        </Buttons>
      </DataContainer>
    </Container>
  );
};
