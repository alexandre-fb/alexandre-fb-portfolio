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
          <p></p>
          <button></button>
        </div>
      </ContainerData>
    </Container>
  );
};

const Container = styled.main``;
