import styled from "styled-components";
import { mediaSizes } from "../../../assets/mediaSizes/mediaSizes";

export const ProfileName = ({
  fontSize,
  fontSizeResponsive,
  textAlign = "left",
  textAlignResponsive,
}) => {
  return (
    <H1
      fontSize={fontSize}
      fontSizeResponsive={fontSizeResponsive}
      textAlign={textAlign}
      textAlignResponsive={textAlignResponsive}
    >
      Alexandre <br />
      Bisognin
    </H1>
  );
};

const H1 = styled.h1`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 500;
  text-align: ${({ textAlign }) => textAlign.desktop};

  @media (max-width: ${mediaSizes.tablet}) {
    text-align: ${({ textAlign }) => textAlign.tablet};
    font-size: ${({ fontSizeResponsive }) =>
      fontSizeResponsive && fontSizeResponsive.tablet};
  }

  @media (max-width: ${mediaSizes.mobile}) {
    font-size: ${({ fontSizeResponsive }) =>
      fontSizeResponsive && fontSizeResponsive.mobile};
  }
`;
