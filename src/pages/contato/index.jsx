import styled from "styled-components";
import { ContainerPage } from "../../components/ContainerPage";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { MainContact } from "../../components/MainPages/MainContact";

export const Contato = () => {
  return (
    <Container>
      <Header hiddenSocialLinks/>
      <MainContact />
      <Footer />
    </Container>
  );
};

const Container = styled(ContainerPage)``;
