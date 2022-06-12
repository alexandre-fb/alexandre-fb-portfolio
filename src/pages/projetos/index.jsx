import styled from "styled-components";
import { ContainerPage } from "../../components/ContainerPage";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { MainProjects } from "../../components/MainPages/MainProjects";

export const Projetos = () => {
  return (
    <ContainerPage>
      <Header />
      <MainProjects />
      <Footer />
    </ContainerPage>
  );
};
