import styled from "styled-components";
import { Divider } from "../../Divider";
import { SocialLinks } from "../../linksIcons/SocialLinksTogether";
import { ProfileName } from "../../profileData/ProfileName";
import { ProfilePosition } from "../../profileData/ProfilePosition";
import { Title } from "../../Title";
import { mediaSizes } from "../../../style/mediaSizes/mediaSizes";

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

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

const NameAndPositionContainer = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;

  @media (max-width: ${mediaSizes.tablet}) {
    gap: 30px;
  }

  @media (max-width: ${mediaSizes.mobile}) {
    flex-direction: column;
    gap: 15px;
  }
`;

const NameArea = styled.div`
  //=====ProfileName=====
  & :first-child {
    font-size: 3rem;
    text-align: right;
  }
`;
const PositionArea = styled.div`
  //=====ProfilePosition=====
  & :first-child {
    font-size: 1.5rem;
  }
`;

const StyledDivider = styled(Divider)`
  @media (max-width: ${mediaSizes.mobile}) {
    display: none;
  }
`;

const Contacts = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`;
