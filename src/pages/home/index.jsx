import styled from "styled-components";

import { ContainerPage } from "../../components/ContainerPage";
import { Header } from "../../components/Header";
import { Panel } from "../../components/Panel";
import { Footer } from "../../components/Footer";


export const Home = () => {
  return (
    <Container>
      <Header hiddenLogo={true}/>
      <main>
        <Panel />
      </main>
      <Footer />
    </Container>
  );
};

const Container = styled(ContainerPage)`
`