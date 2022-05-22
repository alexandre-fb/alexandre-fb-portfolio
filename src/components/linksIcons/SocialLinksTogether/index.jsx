import styled from "styled-components";
import { SocialIconLink } from "../SocialIconLink";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const SocialLinks = ({ size }) => {
  console.log("size", size);
  return (
    <Container>
      <SocialIconLink href={"https://www.linkedin.com/in/alexandre-fb/"}>
        <FaLinkedin size={size} />
      </SocialIconLink>
      <SocialIconLink href={"https://github.com/alexandre-fb"}>
        <FaGithub size={size} />
      </SocialIconLink>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 15px;
`;
