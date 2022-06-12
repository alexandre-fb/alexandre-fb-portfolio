import styled from "styled-components";
import { mediaSizes } from "../../../style/mediaSizes/mediaSizes";
import { motion } from "framer-motion";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerData = styled.div`
  display: grid;
  grid-template-areas:
    "image-and-links hello-message"
    "image-and-links text-and-button";
  grid-template-columns: 1fr 2fr;
  row-gap: 20px;
  column-gap: 40px;
  max-width: 900px;

  @media (max-width: ${mediaSizes.tablet}) {
    grid-template-areas:
      "hello-message "
      "image-and-links "
      "text-and-button";
    grid-template-columns: 100%;
    justify-items: center;
    max-width: 500px;
  }
`;

export const ImageAndLinks = styled(motion.div)`
  grid-area: image-and-links;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 256px;
  min-width: 150px;

  @media (max-width: ${mediaSizes.tablet}) {
    width: 60%;
  }
`;

export const HelloMessage = styled(motion.div)`
  grid-area: hello-message;

  h3 {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  h4 {
    font-size: 1.2rem;
  }

  @media (max-width: ${mediaSizes.tablet}) {
    text-align: center;

    h3 {
      font-size: 1.8rem;
    }
  }

  @media (max-width: ${mediaSizes.mobile}) {
    h3 {
      font-size: 1.6rem;
    }

    h4 {
      font-size: 1rem;
    }
  }
`;

export const TextAndButton = styled(motion.div)`
  grid-area: text-and-button;
  display: flex;
  flex-direction: column;
  gap: 20px;

  p {
    strong,
    a {
      font-weight: 500;
    }
  }

  a {
    margin-top: 20px;
  }

  @media (max-width: ${mediaSizes.tablet}) {
    text-align: center;
    align-items: center;
  }
`;
