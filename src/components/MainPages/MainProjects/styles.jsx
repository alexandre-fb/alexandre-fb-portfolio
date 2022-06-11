import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListProjects = styled.ul`
  margin-top: 30px;
  width: 100%;

  & > :last-child::after {
    display: none;
  }
`;
