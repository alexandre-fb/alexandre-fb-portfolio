import styled from "styled-components";
import { ContainerPage } from "../../components/ContainerPage";
import { Header } from "../../components/Header";
import { MainSobre } from "../../components/MainPages/MainSobre";
import { Footer } from "../../components/Footer";

export const Sobre = () => {
  return (
    <ContainerPage>
      <Header hiddenSocialLinks={true} />
      <MainSobre />
      <Footer />
    </ContainerPage>
  );
};
