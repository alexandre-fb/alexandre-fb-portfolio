import { Img } from "./styles";

export const ProfileImage = () => {
  return (
    <Img
      layoutId="profile-image"
      transition={{ duration: 0.7 }}
      src="..\src\assets\images\profile-image.jpg"
      alt="Profile Image"
    ></Img>
  );
};
