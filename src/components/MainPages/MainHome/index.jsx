import {
  Container,
  NameArea,
  DividerStyled,
  ImageArea,
  PositionArea,
} from "./styles";
import { ProfilePosition } from "../../profileData/ProfilePosition";
import { ProfileImage } from "../../profileData/ProfileImage";
import { ProfileName } from "../../profileData/ProfileName";

export const MainHome = () => {
  return (
    <Container>
      <NameArea>
        <ProfileName />
      </NameArea>

      <DividerStyled />

      <ImageArea>
        <ProfileImage  />
      </ImageArea>

      <PositionArea>
        <ProfilePosition
          // fontSize="1.8rem"
          // fontSizeTablet='1.5rem'
          // fontSizeMobile='1.3rem'
          // textAlign="rigth"
        />
      </PositionArea>
    </Container>
  );
};

