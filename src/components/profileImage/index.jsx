import styled from "styled-components";

export const ProfileImage = () => {
  return (
    <Img
      src="..\src\assets\images\profile-image.jpg"
      alt="Profile Image"
    ></Img>
  );
};

const Img = styled.img`
  grid-area: image;
  width: 256px;
  border-radius: 100%;
  border: 1px solid #fff;
  padding: 8px;
`;
