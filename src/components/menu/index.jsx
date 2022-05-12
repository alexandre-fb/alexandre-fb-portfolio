import styled from "styled-components";

export const Menu = () => {
  return (
    <Nav>
      <ul>
        <li>
          <a href="#">Início</a>
        </li>
        <li>
          <a href="#">Sobre</a>
        </li>
        <li>
          <a href="#">Skills</a>
        </li>
        <li>
          <a href="#">Projetos</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
      </ul>
    </Nav>
  );
};

const Nav = styled.nav`
  text-transform: uppercase;
  height: 50px;
  background-color: var(--very-dark-purple);
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 5;

  ul {
    display: flex;
    gap: 32px;
  }

  a {
    position: relative;
    cursor: pointer;
    transition: all 300ms;

    :after {
      content: "";
      width: 100%;
      height: 2px;
      background-color: #fff;
      position: absolute;
      left: 0;
      bottom: -5px;
      transform: scale(0);
      opacity: 0;
      transition: all 300ms;
    }

    :hover:after {
      background-color: var(--light-green);
      scale: 1;
      transform: scale(1);
      opacity: 1;
    }
  }
`;
