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
  const fontSizesProfileName = {
    desktop: "4rem",
    tablet: "3.8rem",
    mobile: "3.5rem",
  };

  const textAlignsProfileName = {
    desktop: "right",
    tablet: "center",
  };

  const fontSizesProfilePosition = {
    desktop: "1.8rem",
    tablet: "1.5rem",
    mobile: "1.3rem",
  };

  return (
    <Container>
      <NameArea>
        <ProfileName
          fontSize={fontSizesProfileName}
          textAlign={textAlignsProfileName}
        />
      </NameArea>

      <DividerStyled />

      <ImageArea>
        <ProfileImage className="image" />
      </ImageArea>

      <PositionArea>
        <ProfilePosition fontSize={fontSizesProfilePosition} />
      </PositionArea>
    </Container>
  );
};
