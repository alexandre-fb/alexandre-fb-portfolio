import styled from "styled-components";
import { Title } from "../../../Title";
import { mediaSizes } from "../../../../style/mediaSizes/mediaSizes";

export const Container = styled.li`
  display: flex;
  gap: 15px;
  align-items: start;
  flex-wrap: wrap;
  justify-content: center;

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

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`;

export const ProjectTitle = styled(Title).attrs({ as: "h3" })`
  font-size: 1.4rem;
  text-align: center;
`;

export const ImageProject = styled.img`
  width: 80%;

  @media (max-width: ${mediaSizes.mobile}) {
    width: 100%;
  }
`;

export const Technologies = styled.ul`
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

export const Buttons = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
`;
