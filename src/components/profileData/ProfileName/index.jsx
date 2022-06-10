import styled from "styled-components";
import { motion } from "framer-motion";

export const ProfileName = () => {
  return (
    <Name layoutId="profile-name" transition={{ duration: 0.5 }}>
      Alexandre <br /> Bisognin
    </Name>
  );
};

const Name = styled(motion.h1)`
  font-weight: 500;
`;
