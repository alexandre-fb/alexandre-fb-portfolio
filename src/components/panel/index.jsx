import { Container } from "./styles";
import { ProfileName } from "../profileData/ProfileName";
import { ProfilePosition } from "../profileData/ProfilePosition";
import { Divider } from "../Divider";
import { ProfileImage } from "../profileData/ProfileImage";

export const Panel = () => {
  return (
    <Container>
      <ProfileName fontSize='5rem' textAlign='right'/>
      <Divider />
      <div>
        <ProfileImage />
      </div>
      <ProfilePosition />
    </Container>
  );
};

