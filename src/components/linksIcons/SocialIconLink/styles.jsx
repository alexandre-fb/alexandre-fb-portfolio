import styled from "styled-components";

export const IconLinkStyled = styled.a`
  svg {
    transition: 300ms;
    cursor: pointer;
  }

  svg:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
