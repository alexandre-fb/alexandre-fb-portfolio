import styled from "styled-components";
import { GitHubIconLink } from "../GitHub";
import { LinkedinIconLink } from "../Linkedin";

export const SocialLinks = ({ size }) => {
  return (
    <Container>
      <LinkedinIconLink size={size} />
      <GitHubIconLink size={size} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 15px;
`;
