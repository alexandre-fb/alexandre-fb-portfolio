import styled from "styled-components";
import { GitHubIconLink } from "../gitHub";
import { LinkedinIconLink } from "../linkedin";

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
