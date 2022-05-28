import styled from "styled-components";
import { mediaSizes } from "../../../assets/mediaSizes/mediaSizes";
import { Divider } from "../../Divider";

export const Container = styled.main`
  display: grid;
  grid-template-rows: auto;

  align-items: center;

  grid-column-gap: 60px;
  grid-row-gap: 10px;

  grid-template-areas:
    "name divider image"
    "position . .";

  @media (max-width: ${mediaSizes.tablet}) {
    grid-row-gap: 40px;

    grid-template-areas:
      "name"
      "position";
  }
`;

export const NameArea = styled.div`
  grid-area: name;

  @media (max-width: ${mediaSizes.tablet}) {
  }
`;

export const DividerStyled = styled(Divider)`
  grid-area: divider;

  @media (max-width: ${mediaSizes.tablet}) {
    display: none;
  }
`;

export const ImageArea = styled.div`
  grid-area: image;
  position: relative;
  display: flex;
  align-items: center;
  width: 240px;

  & :first-child {
    position: absolute;
    width: 100%;
  }

  @media (max-width: ${mediaSizes.tablet}) {
    display: none;
  }
`;

export const PositionArea = styled.div`
  grid-area: position;
  justify-self: end;

  @media (max-width: ${mediaSizes.tablet}) {
    justify-self: center;
  }
`;
