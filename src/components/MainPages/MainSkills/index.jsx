import {
  Container,
  ContainerHardSkills,
  ListPrimaryHardSkills,
  ListSecundaryHardSkills,
  ContainerSoftSkills,
  ListSoftSkills,
} from "./styles";
import {
  primaryHardSkillsData,
  secondaryHardSkillsData,
  softSkillsData,
} from "./skillsData.jsx";
import { Title } from "../../Title";
import { Divider } from "../../Divider";
import { motion } from "framer-motion";

export const MainSkills = () => {
  
  //=====start variants animation framer motion=====
  const animationListPrimaryHardSkills = {
    visible: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const animationItemPrimaryHardSkills = {
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
      <ContainerHardSkills>
        <Title
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Hard Skills
        </Title>

        <ListPrimaryHardSkills
          initial="hidden"
          animate="visible"
          variants={animationListPrimaryHardSkills}
        >
          {primaryHardSkillsData.map((item, index) => {
            return (
              <motion.li
                key={index}
                variants={animationItemPrimaryHardSkills}
                whileHover={animationItemPrimaryHardSkills.hover}
              >
                {item.icon}
                <h3>{item.name}</h3>
              </motion.li>
            );
          })}
        </ListPrimaryHardSkills>

        <ListSecundaryHardSkills
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.7, delay: 0.7 } }}
        >
          {secondaryHardSkillsData.map((item, index) => {
            return <li key={index}>{item.name}</li>;
          })}
        </ListSecundaryHardSkills>
      </ContainerHardSkills>

      <Divider
        horizontal
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1.2 } }}
      ></Divider>

      <ContainerSoftSkills
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1, delay: 1.2 } }}
      >
        <Title>Soft Skills</Title>
        <ListSoftSkills>
          {softSkillsData.map((item, index) => {
            return (
              <li key={index}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </li>
            );
          })}
        </ListSoftSkills>
      </ContainerSoftSkills>
    </Container>
  );
};
