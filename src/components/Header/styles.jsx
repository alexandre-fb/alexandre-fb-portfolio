import styled from "styled-components";
import { Link } from "react-router-dom";
import { mediaSizes } from "../../style/mediaSizes/mediaSizes";
import { motion } from "framer-motion";

export const Container = styled(motion.header)`
  width: 100%;
  margin: 80px 0 20px 0;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${mediaSizes.tablet}) {
    justify-content: flex-start;
    margin-top: 25px;
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
    text-align: right;
  }
`;

export const SocialLinksAndThemeButtonArea = styled.div`
  position: absolute;
  right: 0;

  display: flex;
  gap: 10px;
  align-items: center;
`;
