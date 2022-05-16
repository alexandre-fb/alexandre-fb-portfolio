import styled from "styled-components";
import { ContainerPage } from "../../components/ContainerPage";
import { Header } from "../../components/Header";
import { MainSobre } from "../../components";
import { Footer } from "../../components/Footer";


export const Sobre = () => {
  return (
    <Container>
      <Header />
      <MainSobre />
      <Footer />
    </Container>
  );
};

const Container = styled(ContainerPage)`

  `
