import styled from "styled-components";
import { mediaSizes } from "../../../style/mediaSizes/mediaSizes";
import { motion } from "framer-motion";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
`;

export const ContainerHardSkills = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

export const ListPrimaryHardSkills = styled(motion.ul)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 30px;
  row-gap: 30px;
  text-align: center;

  li {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 12px;
    width: 150px;
    height: 150px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;


    svg {
      font-size: 3rem;
      transition: 300ms;
    }
  }

  @media (max-width: ${mediaSizes.tablet}) {
    column-gap: 20px;
    row-gap: 20px;

    li {
      width: 120px;
      height: 120px;
    }
  }
`;

export const ListSecundaryHardSkills = styled(motion.ul)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  li {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    text-align: center;
    cursor: default;
  }

  & ::before {
    content: "";
    display: inline-block;
    margin-right: 7px;
    width: 5px;
    height: 5px;
    border-radius: 100%;
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const ContainerSoftSkills = styled(ContainerHardSkills)`
  text-align: center;
`;

export const ListSoftSkills = styled(motion.ul)`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 50px;

  li {
    h3 {
    font-weight: 500;
    margin-bottom: 10px;
  
    &::before {
      content: "✔";
      margin-right: 5px;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  }
`;

