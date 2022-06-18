import { motion } from "framer-motion";
import styled from "styled-components";
import { mediaSizes } from "../../../style/mediaSizes/mediaSizes";


export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

export const ListProjects = styled.ul`
  margin-top: 30px;
  width: 100%;

  & > :last-child::after {
    display: none;
  }
`;

export const ItemProject = styled(motion.li)`
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: ${mediaSizes.tablet}) {
    flex-direction: column;
    align-items: center;
  }

  //=====Divisor=====
  ::after {
    content: "";
    height: 1px;
    width: 50%;
    background-color: rgba(255, 255, 255, 0.3);
    margin: 60px 0;
  }
`;

export const Image = styled(motion.img)`
  width: 100%;
`;

export const Technologies = styled(motion.ul)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  li {
    margin: 5px 15px;
  }

  & li::before {
    content: "✔";
    margin-right: 7px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Buttons = styled(motion.ul)`
  display: flex;
  align-items: center;
  gap: 20px;
`;
