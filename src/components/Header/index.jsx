import { Link } from "react-router-dom";
import { Container } from './styles'
import { ProfileName } from "../profileName";
import { Menu } from "../menu";
import { SocialLinks } from "../linksIcons/allSocialLinksTogether";
import { ThemeButton } from "../buttons/themeButton";

export const Header = () => {
  return (
    <Container>
      <div>
        <Link to="/">
          <ProfileName />
        </Link>

        <Menu />

        <div>
          <SocialLinks />
          <ThemeButton />
        </div>
      </div>
    </Container>
  );
};


