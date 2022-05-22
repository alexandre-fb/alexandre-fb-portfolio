import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { IconMenuArea, Nav } from "./styles";
import { CgMenu, CgCloseO } from "react-icons/cg";

export const Menu = () => {

  const [ mobileMenuIsSelected, setMobileMenuIsSelected ] = useState(false)

  useEffect(()=>{
    console.log(mobileMenuIsSelected)
  }, [mobileMenuIsSelected])

  return (
    <>
      <IconMenuArea onClick={() => setMobileMenuIsSelected(!mobileMenuIsSelected)}>
        {mobileMenuIsSelected ? <CgCloseO /> : <CgMenu /> }
      </IconMenuArea>

      <Nav mobileMenuIsSelected={ mobileMenuIsSelected }>
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
    </>
  );
};
