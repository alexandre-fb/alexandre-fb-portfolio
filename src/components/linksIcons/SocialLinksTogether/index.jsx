import styled from "styled-components";
import { SocialIconLink } from "../SocialIconLink";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export const SocialLinks = ({ size }) => {
  console.log("size", size);
  return (
    <Container layoutId="social-links-togeder" transition={{ duration: 0.5 }}>
      <SocialIconLink href={"https://www.linkedin.com/in/alexandre-fb/"}>
        <FaLinkedin size={size} />
      </SocialIconLink>
      <SocialIconLink href={"https://github.com/alexandre-fb"}>
        <FaGithub size={size} />
      </SocialIconLink>
    </Container>
  );
};

const Container = styled(motion.div)`
  display: flex;
  gap: 15px;
`;
