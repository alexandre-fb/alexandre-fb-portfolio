import styled from "styled-components";

export const Position = styled.h2`
  font-weight: 300;
  color: ${({ theme }) => theme.colors.primary};

  span {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
