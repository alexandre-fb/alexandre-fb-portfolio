import styled from "styled-components";

export const ProfilePosition = () => {
  return (
    <H2>
      Dev FrontEnd<span>(Jr)</span>
    </H2>
  );
};

const H2 = styled.h2`
  font-size: 2rem;
  font-weight: 300;
  color: var(--light-green);
  text-align: right;

  span {
    color: var(--yellow);
  }
`;
