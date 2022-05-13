import styled from "styled-components";
import { Header } from "../../components/Header";
import { Panel } from "../../components/panel";
import { Footer } from "../../components/Footer";

export const Home = () => {
  return (
    <Container>
      <Header />

      <main>
        <Panel />
      </main>

      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
