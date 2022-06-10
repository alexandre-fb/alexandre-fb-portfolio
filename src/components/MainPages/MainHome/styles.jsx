import styled from "styled-components";
import { mediaSizes } from "../../../style/mediaSizes/mediaSizes";
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

  //=====ProfileName=====
  & :first-child {
    font-size: 4rem;
    text-align: right;

    @media (max-width: ${mediaSizes.tablet}) {
      font-size: 3.6rem;
      text-align: center;
    }

    @media (max-width: ${mediaSizes.mobile}) {
      font-size: 3.2rem;
    }
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

  //=====ProfileImage======
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

  //=====ProfilePosition=====
  & :first-child {
    font-size: 1.8rem;

    @media (max-width: ${ mediaSizes.tablet }) {
      font-size: 1.5rem;
    }

    @media (max-width: ${ mediaSizes.mobile }) {
      font-size: 1.3rem;
    }
  }
`;

// fontSize="1.8rem"
          // fontSizeTablet='1.5rem'
          // fontSizeMobile='1.3rem'
          // textAlign="rigth"
