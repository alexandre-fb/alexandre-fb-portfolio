import styled from "styled-components";

import {
  Container,
  ContainerData,
  ImageAndLinks,
  TextAndButton,
} from "./styles";
import { ProfileImage } from "../../profileData/ProfileImage";
import { SocialLinks } from "../../linksIcons/SocialLinksTogether";
import { TitlePage } from "../../TitlePage";
import { PrimaryButton } from "../../buttons/PrimaryButton";

export const MainSobre = () => {
  return (
    <Container>
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
