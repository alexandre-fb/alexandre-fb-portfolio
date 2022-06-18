import styled from "styled-components";
import { mediaSizes } from "../../style/mediaSizes/mediaSizes";

export const IconResponsiveMenuArea = styled.button`
  display: none;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  svg {
    color: ${({ theme, responsiveMenuIsSelected }) =>
      responsiveMenuIsSelected ? "#fff" : theme.colors.textColor};

    font-size: 1.5rem;
  }

  @media (max-width: ${mediaSizes.tablet}) {
    display: flex;
    z-index: 10;
  }
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    gap: 32px;
  }

  li > a {
    position: relative;
    cursor: pointer;
    text-transform: uppercase;

    //=========Animation Hover=========

    ::after {
      content: "";
      height: 2px;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.primary};

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

    &.active {
      font-weight: 400;

      ::after {
        display: none;
      }
    }
  }

  //=========Mobile Menu=========

  @media (max-width: ${mediaSizes.tablet}) {
    transform: scale(
      ${({ responsiveMenuIsSelected }) =>
        responsiveMenuIsSelected ? "1" : "0"}
    );
    opacity: ${({ responsiveMenuIsSelected }) =>
      responsiveMenuIsSelected ? "1" : "0"};
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
      top: -24px;

      li a {
        color: #fff;
      }
    }
  }
`;
