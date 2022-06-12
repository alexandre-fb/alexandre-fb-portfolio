import { IconLinkStyled } from "./styles";

export const SocialIconLink = ({ children, href }) => {
  return (
    <IconLinkStyled href={href} target="_blank">
      {children}
    </IconLinkStyled>
  );
};
