import styled from "styled-components";

export const ProfileName = () => {
  return (
    <H1>
      Alexandre <br />
      Bisognin
    </H1>
  );
};

const H1 = styled.h1`
  font-size: 5rem;
  font-weight: 500;
  text-align: right;
  line-height: 6.5rem;
`;
