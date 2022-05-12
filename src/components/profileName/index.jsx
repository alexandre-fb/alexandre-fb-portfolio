import styled from "styled-components";

export const ProfileName = ({ fontSize, textAlign }) => {
  return (
    <H1 fontSize={fontSize} textAlign={textAlign}>
      Alexandre <br />
      Bisognin
    </H1>
  );
};

const H1 = styled.h1`
  font-size: ${({fontSize}) => fontSize};
  font-weight: 500;
  text-align: ${(textAlign) => textAlign};
`;
