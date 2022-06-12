import styled from "styled-components";

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transform: scale(1);
  transition: all 300ms;

  :hover {
    transform: scale(0.8);
  }

  svg {
    color: ${({ theme }) =>
      theme.name === "dark" ? theme.colors.secondary : theme.colors.textColor};
  }
`;
