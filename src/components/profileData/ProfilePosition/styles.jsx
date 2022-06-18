import { motion } from "framer-motion";
import styled from "styled-components";

export const Position = styled(motion.h2)`
  font-weight: 300;
  color: ${({ theme }) => theme.colors.primary};

  span {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
