import styled from "styled-components";

export const Title = styled.h2`
  font-family: "Fira Code", monospace;
  font-size: 1.5rem;
  text-align: center;
  margin: ${({ margin }) => margin && margin};
`;
