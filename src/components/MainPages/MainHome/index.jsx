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
        transition={{ duration: 1, delay: 0.5 }}
      >
        <ProfileName />
      </NameArea>

      <StyledDivider
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      />

      <ImageArea
        initial={{ x: -5, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8, type: "ease-out" }}
      >
        <ProfileImage />
      </ImageArea>

      <PositionArea
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.7 }}
      >
        <ProfilePosition />
      </PositionArea>
    </Container>
  );
};
