import { motion } from "framer-motion";
import styled from "styled-components";

export const ProfileImage = () => {
  return (
    <Img
      layoutId="profile-image"
      transition={{ duration: .5 }}
      src="..\src\assets\images\profile-image.jpg"
      alt="Profile Image"
    ></Img>
  );
};

const Img = styled(motion.img)`
  grid-area: image;
  width: 100%;
  border-radius: 100%;
  border: 1px solid #fff;
  padding: 8px;
`;
