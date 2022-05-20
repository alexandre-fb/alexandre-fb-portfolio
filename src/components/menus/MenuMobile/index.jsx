import { NavLink } from "react-router-dom";

import { Nav } from "./styles";

export const MenuMobile = () => {
  return (
      <Nav>
        <ul>
          <li>
            <NavLink to="/">Início</NavLink>
          </li>
          <li>
            <NavLink to="/sobre">Sobre</NavLink>
          </li>
          <li>
            <NavLink to="/skills">Skills</NavLink>
          </li>
          <li>
            <NavLink to="/projetos">Projetos</NavLink>
          </li>
          <li>
            <NavLink to="/contato">Contato</NavLink>
          </li>
        </ul>
      </Nav>
  );
};
