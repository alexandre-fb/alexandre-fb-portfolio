import styled from "styled-components";
import { FaLinkedin } from 'react-icons/fa'

export const LinkedinIconLink = () => {
  return (
    <Container href="https://www.linkedin.com/in/alexandre-fb/" target="_blank">
     <FaLinkedin />
    </Container>
  );
};

const Container = styled.a`
  svg{
    font-size: 1.5rem;
    transition: 300ms;
  }

  svg:hover{
    color: var(--light-green);
  }
`;
