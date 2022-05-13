import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  margin: 0 50px;
  padding: 80px 0 20px 0;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

    //==========Logo==========

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

      & > :first-child {
        display: none;
      }
    }
  
`;