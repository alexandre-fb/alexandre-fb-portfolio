import styled from "styled-components";

export const Container = styled.footer`
  padding: 20px 0;

  p {
    font-size: 0.8rem;
    color: #8c8c8c;

    a {
      cursor: pointer;
      color: #8c8c8c;

      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;
