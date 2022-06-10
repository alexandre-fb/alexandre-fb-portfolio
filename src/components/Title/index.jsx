import styled from "styled-components";

export const Title = styled.h2`
  font-family: "Fira Code", monospace;
  color: var(--grey);
  font-size: 1.5rem;
  margin: ${({ margin }) => margin && margin}
`;
