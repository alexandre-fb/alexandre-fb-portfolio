import styled from "styled-components";
import { mediaSizes } from "../../assets/mediaSizes/mediaSizes";

export const ContainerPage = styled.div`
  height: 100vh;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 100px;

  @media (max-width: ${mediaSizes.tablet}){
    gap: 30px;
  }
`;
