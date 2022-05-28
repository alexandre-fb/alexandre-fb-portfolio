import styled from "styled-components";

import { ContainerPage } from "../../components/ContainerPage";
import { Header } from "../../components/Header";
import { MainHome } from "../../components/MainPages/MainHome";
import { Footer } from "../../components/Footer";


export const Home = () => {
  return (
    <Container>
      <Header hiddenLogo={true}/>
      <MainHome />
      <Footer />
    </Container>
  );
};

const Container = styled(ContainerPage)`
`