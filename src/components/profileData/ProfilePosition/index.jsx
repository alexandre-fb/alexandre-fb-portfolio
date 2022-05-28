import styled from "styled-components";
import { mediaSizes } from "../../../assets/mediaSizes/mediaSizes";

export const ProfilePosition = ({ fontSize = "2rem" }) => {
  console.log("fontSizedefault", fontSize);
  return (
    <H2 fontSize={fontSize}>
      Dev FrontEnd<span>(Jr)</span>
    </H2>
  );
};

const H2 = styled.h2`
  font-size: ${({ fontSize }) => (fontSize ? fontSize.desktop : "2rem")};
  font-weight: 300;
  color: var(--light-green);

  span {
    color: var(--yellow);
  }

  @media (max-width: ${mediaSizes.tablet}) {
    font-size: ${({ fontSize }) => fontSize.tablet};
  }

  @media (max-width: ${mediaSizes.mobile}) {
    font-size: ${({ fontSize }) => fontSize.mobile};
  }
`;
