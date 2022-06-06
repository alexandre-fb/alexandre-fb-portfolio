import styled from "styled-components";
import { mediaSizes } from "../../../assets/mediaSizes/mediaSizes";
import { motion } from "framer-motion";

export const ProfileName = ({
  fontSize,
  fontSizeTablet,
  fontSizeMobile,
  textAlign,
  textAlignTablet,
  textAlignMobile
}) => {
  return (
    <H1
      layoutId="profile-name"
      transition={{ duration: 0.5 }}
      fontSize={fontSize}
      fontSizeTablet={fontSizeTablet}
      fontSizeMobile={fontSizeMobile}
      textAlign={textAlign}
      textAlignTablet={textAlignTablet}
      textAlignMobile={textAlignMobile}
    >
      Alexandre <br />
      Bisognin
    </H1>
  );
};

const H1 = styled(motion.h1)`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 500;
  text-align: ${({ textAlign }) => textAlign};

  @media (max-width: ${mediaSizes.tablet}) {
    text-align: ${({ textAlignTablet }) => textAlignTablet && textAlignTablet};
    font-size: ${({ fontSizeTablet }) => fontSizeTablet && fontSizeTablet};
  }

  @media (max-width: ${mediaSizes.mobile}) {
    font-size: ${({ fontSizeMobile }) => fontSizeMobile && fontSizeMobile};
    text-align: ${({ textAlignMobile }) => textAlignMobile && textAlignMobile};
  }
`;
