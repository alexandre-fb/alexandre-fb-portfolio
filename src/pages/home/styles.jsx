import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  //=========Foooter==========
  > & :nth-child(3) {
    position: absolute;
    bottom: 10px;
  }
`;