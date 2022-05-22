import { useState } from "react";

import { Container, LogoArea, SocialLinksAndThemeButtonArea } from "./styles";
import { ProfileName } from "../profileData/ProfileName";
import { SocialLinks } from "../linksIcons/SocialLinksTogether";
import { ThemeButton } from "../buttons/ThemeButton";
import { Menu } from "../Menu";

export const Header = ({ hiddenSocialLinks, hiddenLogo }) => {
  return (
    <Container>
      <LogoArea to="/">
        {!hiddenLogo && <ProfileName fontSize={"1.2rem"} />}
      </LogoArea>

      <Menu />

      <SocialLinksAndThemeButtonArea>
        {!hiddenSocialLinks && <SocialLinks size={"1.5rem"} />}
        <ThemeButton size={"1.5rem"} />
      </SocialLinksAndThemeButtonArea>
    </Container>
  );
};
