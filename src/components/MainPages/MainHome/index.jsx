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
  const fontSizesResponsiveProfileName = {
    tablet: "3.8rem",
    mobile: "3.5rem",
  };

  const textAlignsResponsiveProfileName = {
    desktop: "right",
    tablet: "center",
  };

  const fontSizesResponsiveProfilePosition = {
    tablet: "1.5rem",
    mobile: "1.3rem",
  };

  return (
    <Container>
      <NameArea>
        <ProfileName
          fontSize={"4rem"}
          fontSizeResponsive={fontSizesResponsiveProfileName}
          textAlign={textAlignsResponsiveProfileName}
        />
      </NameArea>

      <DividerStyled />

      <ImageArea>
        <ProfileImage className="image" />
      </ImageArea>

      <PositionArea>
        <ProfilePosition
          fontSize="1.8rem"
          fontSizeResponsive={fontSizesResponsiveProfilePosition}
          textAlign="rigth"
        />
      </PositionArea>
    </Container>
  );
};
