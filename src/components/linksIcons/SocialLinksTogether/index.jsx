import styled from "styled-components";
import { GitHubIconLink } from "../GitHub";
import { LinkedinIconLink } from "../Linkedin";

export const SocialLinks = () => {
  return (
    <Container>
      <LinkedinIconLink />
      <GitHubIconLink />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 15px;
`;
