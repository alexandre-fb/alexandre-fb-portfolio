import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;

  display: flex;
  justify-content: center;

  //=========Second Container=========
  & > :first-child {
    width: 100%;
    max-width: 1440px;
    margin: 0 50px;
    padding: 80px 0 20px 0;

    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    //==========Logo - NameProfile==========

    & > :nth-child(1) {
      display: none;

      position: absolute;
      left: 0;
    }

    //==========Containet Links and Theme button==========

    & > :nth-child(3) {
      position: absolute;
      right: 0;

      display: flex;
      gap: 10px;
      align-items: center;

      //=========Social Links=========

      & > :nth-child(1) {
        display: flex;
      }
    }
  }
`;