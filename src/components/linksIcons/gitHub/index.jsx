import styled from "styled-components";
import { FaGithub } from 'react-icons/fa'

export const GitHubIconLink = ({ size }) => {
  return (
    <Container href="https://github.com/alexandre-fb" target="_blank">
     <FaGithub size={ size } />
    </Container>
  );
};

const Container = styled.a`
  svg{
    font-size: ${({ size }) => size };
    transition: 300ms;
  }

  svg:hover{
    color: var(--light-green);
  }
`;
