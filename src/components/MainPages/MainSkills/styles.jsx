import styled from "styled-components";
import { mediaSizes } from "../../../style/mediaSizes/mediaSizes";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
`;

export const ContainerProSkills = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

export const ListPrimaryProSkills = styled.ul`
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
    transition: 300ms;

    transform: scale(1);

    svg {
      font-size: 3rem;
      transition: inherit;
    }

    h3 {
      transition: inherit;
    }

    &:hover {
      transform: scale(1.05);
      cursor: default;

      svg {
        color: ${({ theme }) => theme.colors.primary};
      }
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

export const ListSecundaryProSkills = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  li {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    text-align: center;

    transition: 300ms;
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

  & li:hover {
    transform: scale(1.1);
    cursor: default;
  }
`;

export const ContainerSoftSkills = styled(ContainerProSkills)`
  text-align: center;
`;

export const ListSoftSkills = styled.ul`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 50px;

  h3 {
    font-weight: 500;
    margin-bottom: 10px;

    &::before {
      content: "✔";
      margin-right: 5px;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
