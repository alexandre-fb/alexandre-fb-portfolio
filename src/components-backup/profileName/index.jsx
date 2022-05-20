import styled from "styled-components";

export const ProfileName = ({ fontSize, textAlign, display }) => {
  return (
    <H1 fontSize={fontSize} textAlign={textAlign} display={display}>
      Alexandre <br />
      Bisognin
    </H1>
  );
};

const H1 = styled.h1`
  font-size: ${({fontSize}) => fontSize};
  font-weight: 500;
  text-align: ${(textAlign) => textAlign};
  display: ${({display}) => display}
`;
