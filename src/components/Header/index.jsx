import { Container, LogoArea, SocialLinksAndThemeButtonArea } from "./styles";
import { ProfileName } from "../profileData/ProfileName";
import { SocialLinks } from "../linksIcons/SocialLinks";
import { ThemeButton } from "../buttons/themeButton";
import { Menu } from "../Menu";

export const Header = ({ hiddenHeaderSocialLinks, hiddenHeaderLogo }) => {
  return (
    <Container>
      <LogoArea to="/">{!hiddenHeaderLogo && <ProfileName />}</LogoArea>

      <Menu />

      <SocialLinksAndThemeButtonArea>
        {!hiddenHeaderSocialLinks && <SocialLinks size={"1.5rem"} />}
        <ThemeButton size={"1.5rem"} />
      </SocialLinksAndThemeButtonArea>
    </Container>
  );
};
