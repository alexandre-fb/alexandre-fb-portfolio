import styled from "styled-components";

export const Footer = () => {
  return (
    <Container>
      <p>
        Desenvolvido por 👉{" "}
        <a href="https://www.linkedin.com/in/alexandre-fb/" target="_blank">
          Alexandre Bisognin
        </a>
      </p>
    </Container>
  );
};

const Container = styled.footer`
padding: 20px 0;

p{
  font-size: 0.8rem;
  color: #8c8c8c;

  a {
    cursor: pointer;
    color: #8c8c8c;

    &:hover {
      color: var(--light-green);
    }
  }
}
`;
