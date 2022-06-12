import styled from "styled-components";
import { ContainerPage } from "../../components/ContainerPage";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { MainSkills } from "../../components/MainPages/MainSkills";

export const Skills = () => {
  return (
    <ContainerPage>
      <Header />
      <MainSkills />
      <Footer />
    </ContainerPage>
  );
};

const Container = styled(ContainerPage)``;
