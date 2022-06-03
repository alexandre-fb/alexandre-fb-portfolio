import styled from "styled-components";

export const SocialIconLink = ({ children, href }) => {
  return (
    <IconLinkStyled href={ href } target="_blank">
     { children } 
    </IconLinkStyled>
  );
};

const IconLinkStyled = styled.a`
  svg{
    transition: 300ms;
    cursor: pointer;
  }

  svg:hover{
    color: var(--light-green);
  }
`;
