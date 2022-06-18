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
      <NameArea
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <ProfileName />
      </NameArea>

      <StyledDivider
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      />

      <ImageArea
        initial={{ x: -5, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ProfileImage />
      </ImageArea>

      <PositionArea
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <ProfilePosition />
      </PositionArea>
    </Container>
  );
};
