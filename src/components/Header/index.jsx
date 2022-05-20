import {
  Container,
  StyledLink,
  SocialLinksAndThemeButton,
  IconMenuMobile,
  MenuArea,
} from "./styles";
import { ProfileName } from "../profileData/ProfileName";
import { SocialLinks } from "../linksIcons/SocialLinksTogether";
import { ThemeButton } from "../buttons/ThemeButton";
import { MenuMobile } from "../menus/MenuMobile";
import { Menu } from "../menus/DesktopMenu";
export const Header = ({ hiddenSocialLinks, hiddenLogo }) => {
  return (
    <Container>
      <IconMenuMobile />

      <StyledLink to="/">
        {!hiddenLogo && <ProfileName fontSize={"1.2rem"} />}
      </StyledLink>

      <MenuArea>
        <Menu />
      </MenuArea>
      <h1>ola</h1>
      

      <SocialLinksAndThemeButton>
        {!hiddenSocialLinks && <SocialLinks />}
        <ThemeButton />
      </SocialLinksAndThemeButton>
    </Container>
  );
};
