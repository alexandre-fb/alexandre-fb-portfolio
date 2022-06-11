import {
  Container,
  NameArea,
  StyledDivider,
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

      <StyledDivider />

      <ImageArea>
        <ProfileImage />
      </ImageArea>

      <PositionArea>
        <ProfilePosition />
      </PositionArea>
    </Container>
  );
};
