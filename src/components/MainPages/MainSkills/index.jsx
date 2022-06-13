import {
  Container,
  ContainerHardSkills,
  ListPrimaryHardSkills,
  ListSecundaryHardSkills,
  ContainerSoftSkills,
  ListSoftSkills,
} from "./styles";
import { Title } from "../../Title";
import { Divider } from "../../Divider";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { motion } from "framer-motion";

export const MainSkills = () => {
  //=====start Variables animation=====
  const listPrimaryHardSkills = {
    visible: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemPrimaryHardSkills = {
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
          variants={listPrimaryHardSkills}
        >
          <motion.li
            variants={itemPrimaryHardSkills}
            whileHover={itemPrimaryHardSkills.hover}
          >
            <FaHtml5 />
            <h3>HTML</h3>
          </motion.li>
          <motion.li
            variants={itemPrimaryHardSkills}
            whileHover={itemPrimaryHardSkills.hover}
          >
            <FaCss3Alt />
            <h3>CSS</h3>
          </motion.li>
          <motion.li
            variants={itemPrimaryHardSkills}
            whileHover={itemPrimaryHardSkills.hover}
          >
            <DiJavascript1 />
            <h3>JavaScript</h3>
          </motion.li>
          <motion.li
            variants={itemPrimaryHardSkills}
            whileHover={itemPrimaryHardSkills.hover}
          >
            <FaReact />
            <h3>ReactJs</h3>
          </motion.li>
        </ListPrimaryHardSkills>

        <ListSecundaryHardSkills
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.7, delay: 0.7 } }}
        >
          <li>Styled Components</li>
          <li>Git</li>
          <li>GitHub</li>
          <li>Git Flow</li>
          <li>Fetch Api</li>
          <li>Context Api</li>
          <li>Framer Motion</li>
          <li>Figma</li>
          <li>After Effects</li>
          <li>Premire</li>
          <li>Illustrator</li>
          <li>Indesign</li>
          <li>Photoshop</li>
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
          <li>
            <h3>Resiliência, tolerância e flexibilidade</h3>
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
