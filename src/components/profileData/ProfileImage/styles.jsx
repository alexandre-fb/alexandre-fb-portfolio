import styled from "styled-components";
import { motion } from "framer-motion";

export const Img = styled(motion.img)`
  width: 100%;
  border-radius: 100%;
  border: 1px solid
    ${({ theme }) =>
      theme.name === "light" ? "#c3c3c3" : theme.colors.textColor};
  padding: 8px;
`;
