import { motion } from "framer-motion";
import styled from "styled-components";

export const Divider = styled(motion.div)`
  width: 1px;
  height: ${({ size }) => (size ? size : "150px")};
  background-color: ${({ theme }) =>
    theme.name === "light" ? "#c3c3c3" : theme.colors.textColor};
  transform: rotate(${({ horizontal }) => horizontal && "90deg"});
`;
