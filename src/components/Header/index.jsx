import { Container, LogoArea, SocialLinksAndThemeButtonArea } from "./styles";
import { ProfileName } from "../profileData/ProfileName";
import { SocialLinks } from "../linksIcons/SocialLinks";
import { ThemeButton } from "../buttons/ThemeButton";
import { Menu } from "../Menu";

export const Header = ({ hiddenSocialLinks, hiddenLogo }) => {
  return (
    <Container>
      <LogoArea to="/">{!hiddenLogo && <ProfileName />}</LogoArea>

      <Menu />

      <SocialLinksAndThemeButtonArea>
        {!hiddenSocialLinks && <SocialLinks size={"1.5rem"} />}
        <ThemeButton size={"1.5rem"} />
      </SocialLinksAndThemeButtonArea>
    </Container>
  );
};
