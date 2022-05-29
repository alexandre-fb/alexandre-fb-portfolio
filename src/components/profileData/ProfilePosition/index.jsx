import styled from "styled-components";
import { mediaSizes } from "../../../assets/mediaSizes/mediaSizes";

export const ProfilePosition = ({ fontSize, fontSizeResponsive }) => {
  return (
    <H2 fontSize={fontSize} fontSizeResponsive={fontSizeResponsive}>
      Dev FrontEnd<span>(Jr)</span>
    </H2>
  );
};

const H2 = styled.h2`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 300;
  color: var(--light-green);

  span {
    color: var(--yellow);
  }

  @media (max-width: ${mediaSizes.tablet}) {
    font-size: ${({ fontSizeResponsive }) =>
      fontSizeResponsive && fontSizeResponsive.tablet};
  }

  @media (max-width: ${mediaSizes.mobile}) {
    font-size: ${({ fontSizeResponsive }) =>
      fontSizeResponsive && fontSizeResponsive.mobile};
  }
`;
