import styled from "styled-components";
import { ContainerPage } from "../../components/ContainerPage";
import { Header } from "../../components/Header";
import { MainHome } from "../../components/MainPages/MainHome";
import { Footer } from "../../components/Footer";

export const Home = () => {
  return (
    <ContainerPage>
      <Header hiddenLogo />
      <MainHome />
      <Footer />
    </ContainerPage>
  );
};
