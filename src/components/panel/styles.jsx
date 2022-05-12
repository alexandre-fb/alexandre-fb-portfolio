import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto;
  justify-content: center;
  align-items: center;

  grid-column-gap: 60px;
  grid-row-gap: 10px;

  grid-template-areas:
    "name divider image"
    "position . .";

  & :nth-child(1) {
    grid-area: name;
  }
  & :nth-child(2) {
    grid-area: divider;
  }
  & :nth-child(3) {
    grid-area: image;
    position: relative;
    display: flex;
    align-items: center;
    width: 256px;

    & :first-child {
      position: absolute;
      width: 100%;
    }
  }
  & :nth-child(4) {
    grid-area: position;
  }
`;
