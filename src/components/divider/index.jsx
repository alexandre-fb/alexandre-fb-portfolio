import styled from "styled-components";

export const Divider = styled.div`
  width: 1px;
  height: 150px;
  background-color: #fff;
  transform: rotate(${({ horizontal }) => horizontal && '90deg'});
`;
