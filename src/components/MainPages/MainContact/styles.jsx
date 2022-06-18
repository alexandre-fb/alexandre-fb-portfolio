import { motion } from "framer-motion";
import styled from "styled-components";
import { mediaSizes } from "../../../style/mediaSizes/mediaSizes";
import { Divider } from "../../divider";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

export const NameAndPositionContainer = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;

  @media (max-width: ${mediaSizes.tablet}) {
    gap: 30px;
  }

  @media (max-width: ${mediaSizes.mobile}) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const NameArea = styled(motion.div)`
  //=====ProfileName=====
  & :first-child {
    font-size: 3rem;

    @media (max-width: ${mediaSizes.tablet}) {
      font-size: 2.8rem;
    }

    @media (max-width: ${mediaSizes.mobile}) {
      text-align: center;
    }
  }
`;
export const PositionArea = styled(motion.div)`
  //=====ProfilePosition=====
  & :first-child {
    font-size: 1.5rem;

    @media (max-width: ${mediaSizes.tablet}) {
      font-size: 1.4rem;
    }

    @media (max-width: ${mediaSizes.mobile}) {
      font-size: 1.3rem;
    }
  }
`;

export const StyledDivider = styled(Divider)`
  @media (max-width: ${mediaSizes.mobile}) {
    display: none;
  }
`;

export const Contacts = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`;
