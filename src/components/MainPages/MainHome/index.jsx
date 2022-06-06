import {
  Container,
  NameArea,
  DividerStyled,
  ImageArea,
  PositionArea,
} from "./styles";
import { ProfileName } from "../../profileData/ProfileName";
import { ProfilePosition } from "../../profileData/ProfilePosition";
import { ProfileImage } from "../../profileData/ProfileImage";

export const MainHome = () => {
  return (
    <Container>
      <NameArea>
        <ProfileName
          fontSize={"4rem"}
          fontSizeTablet={"3.8rem"}
          fontSizeMobile={"3.5rem"}
          textAlign={"right"}
          textAlignResponsive={"center"}
        />
      </NameArea>

      <DividerStyled />

      <ImageArea>
        <ProfileImage className="image" />
      </ImageArea>

      <PositionArea>
        <ProfilePosition
          fontSize="1.8rem"
          fontSizeTablet='1.5rem'
          fontSizeMobile='1.3rem'
          textAlign="rigth"
        />
      </PositionArea>
    </Container>
  );
};
