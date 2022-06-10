import styled from "styled-components";
import { mediaSizes } from "../../../style/mediaSizes/mediaSizes";

export const ProfilePosition = ({
  fontSize,
  fontSizeTablet,
  fontSizeMobile,
}) => {
  return (
    <Position
      // fontSize={fontSize}
      // fontSizeTablet={fontSizeTablet}
      // fontSizeMobile={fontSizeMobile}
    >
      Dev FrontEnd<span>(Jr)</span>
    </Position>
  );
};

const Position = styled.h2`
  /* font-size: ${({ fontSize }) => fontSize}; */
  font-weight: 300;
  color: ${({ theme }) => theme.colors.primary};

  span {
    color: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: ${mediaSizes.tablet}) {
    font-size: ${({ fontSizeTablet }) => fontSizeTablet && fontSizeTablet};
  }

  @media (max-width: ${mediaSizes.mobile}) {
    font-size: ${({ fontSizeMobile }) => fontSizeMobile && fontSizeMobile};
  }
`;
