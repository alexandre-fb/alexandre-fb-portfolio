import styled from "styled-components";
import { Link } from "react-router-dom";
import { mediaSizes } from "../../style/mediaSizes/mediaSizes";

export const Container = styled.header`
  width: 100%;
  margin: 80px 0 20px 0;

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

  //=====ProfileName=====
  & :first-child {
    font-size: 1.2rem;
  }
`;

export const SocialLinksAndThemeButtonArea = styled.div`
  position: absolute;
  right: 0;

  display: flex;
  gap: 10px;
  align-items: center;
`;
