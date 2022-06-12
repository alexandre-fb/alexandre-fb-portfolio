import styled from "styled-components";
import { mediaSizes } from "../../style/mediaSizes/mediaSizes";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 60px;

  @media (max-width: ${mediaSizes.tablet}) {
    gap: 30px;
  }
`;
