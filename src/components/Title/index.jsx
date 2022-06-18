import styled from "styled-components";
import { motion } from "framer-motion";

export const Title = styled(motion.h2)`
  font-family: "Fira Code", monospace;
  font-size: ${({fontSize}) => fontSize ? fontSize : '1.5rem'};
  text-align: center;
  margin: ${({ margin }) => margin && margin};
`;
