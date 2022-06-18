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
  //=====start variants framer motion=====
  const animationProject = {
    visible: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const animationProjectContent = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { ease: "easeOut" },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.5, type: "spring", stiffness: 100 },
    },
  };
  //=====end Variables animation=====

  return (
    <Container>
      <ListProjects>
        {projectsData.map((item, index) => {
          return (
            <ItemProject key={index}>
              <Title
                fontSize={"1.4rem"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.7 } }}
              >
                {item.title}
              </Title>
              <Image
                src={item.image}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.3 },
                }}
              />
              <Technologies
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.4 },
                }}
              >
                {item.technologies.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </Technologies>
              <Buttons
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.5 },
                }}
              >
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
