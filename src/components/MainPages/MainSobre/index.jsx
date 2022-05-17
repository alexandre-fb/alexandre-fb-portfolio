import styled from "styled-components";
import { SocialLinks } from "../../linksIcons/SocialLinksTogether";
import { ProfileImage } from "../../ProfileImage";

export const MainSobre = () => {
  return (
    <Container>
      <h2>Sobre</h2>
      <ContainerData>
        <div>
          <ProfileImage />
          <SocialLinks />
        </div>
        <div>
          <h3>Olá :)</h3>
          <h4>sou Alexandre Bisognin, bem-vindo ao meu portfólio.</h4>
          <p>
            Tenho como objetivo especializar-me na área de desenvolvimento
            Frontend. Para isso venho continuamente me capacitando e aplicando
            os conhecimentos adquiridos em projetos pessoais e profissionais,
            utilizando as principais técnologias e ferramentas da área. Esta
            página tem o propósito de reunir os últimos trabalhos desenvolvidos,
            bem como algumas informações sobre mim. Disponibilizo no botão
            abaixo o meu currículo completo, onde pode encontrar minhas
            experiências e formações profissionais.
          </p>
          <button>Currículo completo</button>
        </div>
      </ContainerData>
    </Container>
  );
};

const ContainerData = styled.div``;

const Container = styled.main`
  h2{
    font-family: 'Fira Code', monospace;
    color: 
  }
`;


