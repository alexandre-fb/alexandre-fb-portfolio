import styled from "styled-components";
import { FaLinkedin } from 'react-icons/fa'

export const LinkedinIconLink = ({ size }) => {
  return (
    <Container href="https://www.linkedin.com/in/alexandre-fb/" target="_blank">
     <FaLinkedin size={ size } />
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
