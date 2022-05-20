import styled from "styled-components";

export const Nav = styled.nav`
  ul {
    display: flex;
    gap: 32px;
  }

  @media (max-width: 769px) {
    flex-direction: column;
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
`;
