import { Link } from "react-router-dom";
import styled from "styled-components";
import { mediaSizes } from "../../assets/mediaSizes/mediaSizes";

export const Container = styled.header`
  width: 100%;
  padding: 80px 0 20px 0;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${mediaSizes.tablet}) {
    justify-content: flex-start;
  }
`;

export const LogoArea = styled(Link)`
  position: absolute;
  left: 0;

  @media (max-width: ${mediaSizes.tablet}) {
    display: none;
  }
`;

// export const MenuArea = styled.div`
//   @media (max-width: ${mediaSizes.tablet}) {
//     position: absolute;
//     left: 0;

//     justify-content: flex-start;
//     align-items: flex-start;
//   }
// `;

export const SocialLinksAndThemeButtonArea = styled.div`
  position: absolute;
  right: 0;

  display: flex;
  gap: 10px;
  align-items: center;
`;
