import { Link } from "react-router-dom";
import { Container } from "./styles";
import { ProfileName } from "../ProfileName";
import { Menu } from "../Menu";
import { SocialLinks } from "../linksIcons/SocialLinksTogether";
import { ThemeButton } from "../buttons/ThemeButton";

export const Header = ({ hiddenSocialLinks, hiddenLogo }) => {
  return (
    <Container>
      <Link to="/">{!hiddenLogo && <ProfileName fontSize={"1.5rem"} />}</Link>

      <Menu />

      <div>
        {!hiddenSocialLinks && <SocialLinks />}
        <ThemeButton />
      </div>
    </Container>
  );
};
