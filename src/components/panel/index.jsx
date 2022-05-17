import { Container } from "./styles";
import { ProfileName } from "../ProfileName";
import { ProfilePosition } from "../ProfilePosition";
import { Divider } from "../Divider";
import { ProfileImage } from "../ProfileImage";

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

