import styled from 'styled-components';
import { Title } from "../../Title";
import { mediaSizes } from "../../../assets/mediaSizes/mediaSizes";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 900px;
`;

export const ListProjects = styled.ul`
  margin-top: 30px;
  width: 100%;

  & > :last-child::after {
    display: none;
  }
`;

export const Project = styled.li`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;

  ::after {
    content: "";
    height: 1px;
    width: 50%;
    background-color: rgba(255, 255, 255, 0.3);
    margin: 60px 0;
  }
`;

export const ProjectTitle = styled(Title).attrs({ as: "h3" })`
  font-size: 1.4rem;
  text-align: center;
`;

export const Technologies = styled.p`
  text-align: center;
`;

export const ImageArea = styled.div`
  background-color: #fff;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 400px;
  border: 1px solid yellow;

  @media (max-width: ${mediaSizes.tablet}) {
    padding: 3px;
    height: 300px;
  }

  @media (max-width: ${mediaSizes.mobile}) {
    height: 200px;
    max-width: 375px;
    min-width: 300px;
  }
`;

export const ImageProject = styled.div`
  width: 100%;
  height: 100%;

  background: no-repeat top center url(${({ image }) => image});
  background-size: cover;
  box-shadow: 2px 2px 10px 10px rgba(0, 0, 0, 0.1);
`;

export const Links = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
`;
