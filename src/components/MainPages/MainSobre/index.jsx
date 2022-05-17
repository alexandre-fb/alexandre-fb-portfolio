import styled from "styled-components";
import { SocialLinks } from "../../linksIcons/SocialLinksTogether";
import { ProfileImage } from "../../ProfileImage";
import { TitlePage } from "../../TitlePage";
import { PrimaryButton } from "../../buttons/PrimaryButton";

export const MainSobre = () => {
  return (
    <Container>
      <TitlePage>Sobre</TitlePage>

      <ContainerData>
        <ImageAndLinks>
          <ProfileImage />
          <SocialLinks />
        </ImageAndLinks>
        <TextAndButton>
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

          <a href="#">
            <PrimaryButton>Currículo completo</PrimaryButton>
          </a>
        </TextAndButton>
      </ContainerData>
    </Container>
  );
};

const ContainerData = styled.div``;
const ImageAndLinks = styled.div``;
const TextAndButton = styled.div``;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;

  ${ContainerData} {
    display: flex;
    gap: 40px;
    margin: 0 auto;

    ${ImageAndLinks} {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }

    ${TextAndButton} {
      display: flex;
      flex-direction: column;
      gap: 20px;

      position: relative;

      width: 88%;

      h3 {
        font-size: 2rem;
      }

      h4 {
        font-size: 1.2rem;
      }

      p {
        line-height: 1.4rem;
      }

      a {
        margin-top: 20px;
        width: fit-content;
      }
    }
  }
`;
