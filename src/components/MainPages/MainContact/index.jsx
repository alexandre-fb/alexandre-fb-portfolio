import {
  Container,
  NameAndPositionContainer,
  NameArea,
  StyledDivider,
  PositionArea,
  Contacts,
} from "./styles";
import { SocialLinks } from "../../linksIcons/SocialLinks";
import { ProfileName } from "../../profileData/ProfileName";
import { ProfilePosition } from "../../profileData/ProfilePosition";

export const MainContact = () => {
  return (
    <Container>
      <NameAndPositionContainer>
        <NameArea>
          <ProfileName />
        </NameArea>
        <StyledDivider height="100px" />
        <PositionArea>
          <ProfilePosition />
        </PositionArea>
      </NameAndPositionContainer>

      <Contacts>
        <li>
          <SocialLinks size="1.5rem" />
        </li>
        <li>alexandrefb.86@gmail.com</li>
        <li>51 9 9009 1871</li>
        <li>Porto Alegre / RS</li>
      </Contacts>
    </Container>
  );
};
