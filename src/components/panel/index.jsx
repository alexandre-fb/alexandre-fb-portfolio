import { Container } from "./styles";
import { ProfileName } from "../profileName";
import { ProfilePosition } from "../profilePosition";
import { Divider } from "../divider";
import { ProfileImage } from "../profileImage";

export const Panel = () => {
  return (
    <Container>
      <ProfileName />
      <Divider />
      <div>
        <ProfileImage />
      </div>
      <ProfilePosition />
    </Container>
  );
};

