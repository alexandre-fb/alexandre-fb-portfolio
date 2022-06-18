import {
  Container,
  ListProjects,
  ItemProject,
  Image,
  Technologies,
  Buttons,
} from "./styles";
import { Title } from "../../Title";
import { projectsData } from "./projectsData";
import { PrimaryButton } from "../../buttons/PrimaryButton";

export const MainProjects = () => {
  return (
    <Container>
      <ListProjects>
        {projectsData.map((item, index) => {
          return (
            <ItemProject key={index}>
              <Title fontSize={"1.4rem"}>{item.title}</Title>
              <Image src={item.image} />
              <Technologies>
                {item.technologies.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </Technologies>
              <Buttons>
                {item.links.map((item, index) => {
                  return (
                    <a href={item.link} target="_blank" key={index}>
                      <PrimaryButton>{item.name}</PrimaryButton>
                    </a>
                  );
                })}
              </Buttons>
            </ItemProject>
          );
        })}
      </ListProjects>
    </Container>
  );
};
