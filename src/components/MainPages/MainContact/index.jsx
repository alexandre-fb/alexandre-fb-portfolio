import {
  Container,
  NameAndPositionContainer,
  NameArea,
  StyledDivider,
  PositionArea,
  Contacts,
} from "./styles";
import { contactData } from "./contactData";
import { SocialLinks } from "../../linksIcons/SocialLinks";
import { ProfileName } from "../../profileData/ProfileName";
import { ProfilePosition } from "../../profileData/ProfilePosition";

export const MainContact = () => {
  return (
    <Container>
      <NameAndPositionContainer>
        <NameArea
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <ProfileName />
        </NameArea>
        <StyledDivider
          size="100px"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        />
        <PositionArea
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <ProfilePosition />
        </PositionArea>
      </NameAndPositionContainer>

      <Contacts
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <li>
          <SocialLinks size="1.5rem" />
        </li>
        <li>{contactData.email}</li>
        <li>{contactData.phone}</li>
        <li>{contactData.local}</li>
      </Contacts>
    </Container>
  );
};
