import styled from "styled-components";

export const Divider = styled.div`
  width: 1px;
  height: ${({ height }) => (height ? height : "150px")};
  background-color: ${({ theme }) =>
    theme.name === "light" ? "#c3c3c3" : theme.colors.textColor};
  transform: rotate(${({ horizontal }) => horizontal && "90deg"});
`;
