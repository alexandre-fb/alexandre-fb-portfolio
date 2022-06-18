import { Container } from "./styles";
import { SocialIconLink } from "../SocialIconLink";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const SocialLinks = ({ size }) => {
  return (
    <Container layoutId="social-links-togeder" transition={{ duration: 0.7 }}>
      <SocialIconLink href={"https://www.linkedin.com/in/alexandre-fb/"}>
        <FaLinkedin size={size} />
      </SocialIconLink>
      <SocialIconLink href={"https://github.com/alexandre-fb"}>
        <FaGithub size={size} />
      </SocialIconLink>
    </Container>
  );
};
