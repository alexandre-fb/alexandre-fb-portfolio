import styled from "styled-components";
import { mediaSizes } from "../../assets/mediaSizes/mediaSizes";

export const Nav = styled.nav`
  ul {
    display: flex;
    gap: 32px;
  }

  //=========Link=========

  li > a {
    position: relative;
    cursor: pointer;
    text-transform: uppercase;
    color: #e0e0e0;

    //=========Active Link=========

    &.active {
      font-weight: 400;
      color: #fff;

      ::after {
        display: none;
      }
    }

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
  }

  @media (max-width: ${mediaSizes.tablet}) {
    transform: scale(
      ${({ mobileMenuIsSelected }) => (mobileMenuIsSelected ? "1" : "0")}
    );
    transform-origin: 0 0;
    transition: 200ms ease-in-out;

    padding: 80px 100px;
    background-color: #1b1b1bf8;

    position: absolute;
    left: -10px;
    top: -10px;
    z-index: 5;

    ul {
      flex-direction: column;
    }
  }
`;

export const IconMenuArea = styled.button`
  display: none;
  cursor: pointer;

  @media (max-width: ${mediaSizes.tablet}) {
    display: flex;

    background: none;
    border: none;
    padding: 0;

    z-index: 10;

    svg {
      color: #fff;
      font-size: 1.5rem;
    }
  }
`;
