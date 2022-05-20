import { Link } from "react-router-dom";
import styled from "styled-components";
import { HiMenu } from "react-icons/hi";

export const MenuArea = styled.div``
export const StyledLink = styled(Link)``;
export const SocialLinksAndThemeButton = styled.div``;
export const IconMenuMobile = styled(HiMenu)`
display: none;
`;

export const Container = styled.header`
  width: 100%;
  padding: 80px 0 20px 0;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  ${StyledLink} {
    position: absolute;
    left: 0;
  }

  ${SocialLinksAndThemeButton} {
    position: absolute;
    right: 0;

    display: flex;
    gap: 10px;
    align-items: center;
  }


`;
