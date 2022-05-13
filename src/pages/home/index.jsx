import { Container } from "./styles";
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
