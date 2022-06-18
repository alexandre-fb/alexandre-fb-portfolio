import styled from "styled-components";
import { mediaSizes } from "../../../style/mediaSizes/mediaSizes";
import { Divider } from "../../divider";
import { motion } from "framer-motion";

export const Container = styled.main`
  display: grid;
  grid-template-rows: auto;

  align-items: center;

  grid-column-gap: 60px;
  grid-row-gap: 10px;

  grid-template-areas:
    "name divider image"
    "position . .";

  @media (max-width: ${mediaSizes.tablet}) {
    grid-row-gap: 40px;

    grid-template-areas:
      "name"
      "position";
  }
`;

export const NameArea = styled(motion.div)`
  grid-area: name;

  //=====ProfileName=====
  & :first-child {
    font-size: 4rem;

    @media (max-width: ${mediaSizes.tablet}) {
      font-size: 3.6rem;
      text-align: center;
    }

    @media (max-width: ${mediaSizes.mobile}) {
      font-size: 3.2rem;
    }
  }
`;

export const StyledDivider = styled(Divider)`
  grid-area: divider;

  @media (max-width: ${mediaSizes.tablet}) {
    display: none;
  }
`;

export const ImageArea = styled(motion.div)`
  grid-area: image;
  position: relative;
  display: flex;
  align-items: center;
  width: 240px;

  //=====ProfileImage======
  & :first-child {
    position: absolute;
    width: 100%;
  }

  @media (max-width: ${mediaSizes.tablet}) {
    display: none;
  }
`;

export const PositionArea = styled(motion.div)`
  grid-area: position;
  justify-self: end;

  @media (max-width: ${mediaSizes.tablet}) {
    justify-self: center;
  }

  //=====ProfilePosition=====
  & :first-child {
    font-size: 1.8rem;

    @media (max-width: ${mediaSizes.tablet}) {
      font-size: 1.5rem;
    }

    @media (max-width: ${mediaSizes.mobile}) {
      font-size: 1.3rem;
    }
  }
`;
