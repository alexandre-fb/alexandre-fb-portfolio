import styled from "styled-components";
import { mediaSizes } from "../../assets/mediaSizes/mediaSizes";

//==========Icon Menu Hamburger=========

export const IconMenuHamburgerArea = styled.button`
  display: none;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  @media (max-width: ${mediaSizes.tablet}) {
    display: flex;
    z-index: 10;

    svg {
      color: #fff;
      font-size: 1.5rem;
    }
  }
`;

//==========Menu=========

export const Nav = styled.nav`
  ul {
    display: flex;
    gap: 32px;
  }

  li > a {
    position: relative;
    cursor: pointer;
    text-transform: uppercase;
    color: #e0e0e0;

    //=========Animation Hover=========

    ::after {
      content: "";
      height: 2px;
      width: 100%;
      background-color: var(--light-green);

      position: absolute;
      left: 0;
      bottom: -10px;

      opacity: 0;
      transform: scaleX(0);
      transform-origin: left;

      transition: 300ms;
    }

    :hover::after {
      opacity: 1;
      transform: scaleX(1);
    }

    //=========Active NavLink=========

    &.active {
      font-weight: 400;
      color: #fff;

      ::after {
        display: none;
      }
    }
  }

  //=========Mobile Menu=========

  @media (max-width: ${mediaSizes.tablet}) {
    transform: scale(
      ${({ mobileMenuIsSelected }) => (mobileMenuIsSelected ? "1" : "0")}
    );
    transform-origin: 0 0;
    transition: 200ms ease-in-out;

    position: absolute;
    z-index: 9;
    ul {
      flex-direction: column;

      padding: 80px 100px;
      background-color: rgba(27, 27, 27, 0.95);

      position: absolute;
      left: -10px;
      top: -10px;
    }
  }
`;
