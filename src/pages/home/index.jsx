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
  height: 100vh;
  margin: 0 40px;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  > & :nth-child(3) {
    position: absolute;
    bottom: 0;
  }
`;
