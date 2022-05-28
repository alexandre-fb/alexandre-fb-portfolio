import styled from "styled-components";
import { mediaSizes } from "../../../assets/mediaSizes/mediaSizes";

export const ProfileName = ({ fontSize, textAlign, display }) => {
  return (
    <H1 fontSize={fontSize} textAlign={textAlign} display={display}>
      Alexandre <br />
      Bisognin
    </H1>
  );
};

const H1 = styled.h1`
  font-size: ${({ fontSize }) => fontSize.desktop};
  font-weight: 500;
  text-align: ${({ textAlign }) => textAlign.desktop};

  @media (max-width: ${mediaSizes.tablet}) {
    text-align: ${({ textAlign }) => textAlign.tablet};
    font-size: ${({ fontSize }) => fontSize.tablet};
  }

  @media (max-width: ${mediaSizes.mobile}) {
    font-size: ${({ fontSize }) => fontSize.mobile};
  }
`;
