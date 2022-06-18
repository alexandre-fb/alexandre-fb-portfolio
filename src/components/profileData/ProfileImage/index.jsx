import { Img } from "./styles";
import profileImage from "../../../assets/images/profile-image.jpg"
export const ProfileImage = () => {
  return (
    <Img
      layoutId="profile-image"
      transition={{ duration: 0.7 }}
      src={profileImage}
      alt="Alexandre Bisognin"
    ></Img>
  );
};
