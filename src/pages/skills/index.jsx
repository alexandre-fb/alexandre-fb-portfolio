import styled from "styled-components";
import { ContainerPage } from "../../components/ContainerPage";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { MainSkills } from "../../components/MainSkills";

export const Skills = () => {
  return (
    <Container>
      <Header />
      <MainSkills />
      <Footer />
    </Container>
  );
};

const Container = styled(ContainerPage)``;
