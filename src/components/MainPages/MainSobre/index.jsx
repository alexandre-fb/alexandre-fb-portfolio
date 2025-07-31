import {
  Container,
  ContainerData,
  ImageAndLinks,
  HelloMessage,
  TextAndButton,
} from "./styles";
import { ProfileImage } from "../../profileData/ProfileImage";
import { SocialLinks } from "../../linksIcons/SocialLinks";
import { PrimaryButton } from "../../buttons/PrimaryButton";
import curriculoFile from "../../../assets/pdfs/alexandre-bisognin-curriculo.pdf";

export const MainSobre = () => {
  return (
    <Container>
      <ContainerData>
        <ImageAndLinks
          initial={{ x: -5, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <ProfileImage />
          <SocialLinks size={"1.5rem"} />
        </ImageAndLinks>

        <HelloMessage
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h3>Olá :)</h3>
          <p></p>
        </HelloMessage>

        <TextAndButton
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div>
            <p>
              Bem-vindo(a) ao meu portfólio. Esse espaço tem o propósito de reunir
              os últimos projetos que desenvolvi, bem como algumas informações
              sobre mim.
            </p>
            <p>
              Atuo como <strong>Desenvolvedor Front-End</strong>, contribuindo no desenvolvimento de interfaces, criação de componentes reutilizáveis e aprimoramento da experiência do usuário. Tenho experiência com frameworks modernos como Vue e React, e participação ativa em projetos de Design System.
            </p>
            <p>
              Disponibilizo no botão abaixo o meu currículo completo, onde pode
              encontrar minhas experiências e formações profissionais.
            </p>
          </div>

          <a href={curriculoFile} download>
            <PrimaryButton>Currículo completo</PrimaryButton>
          </a>
        </TextAndButton>
      </ContainerData>
    </Container>
  );
};
