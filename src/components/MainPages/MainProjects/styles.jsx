import styled from 'styled-components';
import { Title } from "../../Title";
import { mediaSizes } from "../../../style/mediaSizes/mediaSizes";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 900px;
`;

export const StyledTitle = styled(Title)`
  margin: 80px 0;
`

export const ListProjects = styled.ul`
  margin-top: 30px;
  width: 100%;

  & > :last-child::after {
    display: none;
  }
`;










