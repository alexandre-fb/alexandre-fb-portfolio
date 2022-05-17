import { Link } from "react-router-dom";
import { Container } from './styles'
import { ProfileName } from "../ProfileName";
import { Menu } from "../Menu";
import { SocialLinks } from "../linksIcons/SocialLinksTogether";
import { ThemeButton } from "../buttons/ThemeButton";

export const Header = () => {
  return (
    <Container>

        <Link to="/">
          <ProfileName />
        </Link>

        <Menu />

        <div>
          <SocialLinks />
          <ThemeButton />
        </div>
        
    </Container>
  );
};


