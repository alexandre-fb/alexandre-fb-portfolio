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
import { Link } from "react-router-dom";

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
          <p>
            Bem-vindo(a) ao meu portfólio. Esse espaço tem o propósito de reunir
            os últimos projetos que desenvolvi, bem como algumas informações
            sobre mim.
            <br />
            <br />
            Tenho como objetivo especializar-me na área de{" "}
            <strong>desenvolvimento FrontEnd</strong>. Para isso venho
            continuamente me capacitando e aplicando os conhecimentos adquiridos
            em projetos pessoais e profissionais, utilizando as principais
            tecnologias e ferramentas da área.
            <br />
            <br />
            Disponibilizo no botão abaixo o meu currículo completo, onde pode
            encontrar minhas experiências e formações profissionais.
          </p>

          <a href="https://drive.google.com/file/d/18IwZvFrf0lE--xY8tFlU8W66EjzmTVjW/view?usp=sharing" target='_blank'>
            <PrimaryButton>Currículo completo</PrimaryButton>
          </a>
        </TextAndButton>
      </ContainerData>
    </Container>
  );
};
