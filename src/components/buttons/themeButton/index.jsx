import styled from "styled-components";
import { useTheme } from "styled-components";
import { BsSunFill } from "react-icons/bs";
import { RiMoonFill } from "react-icons/ri";
import { useContext } from "react";
import { ThemeContext } from "../../../contexts/themeContext";

export const ThemeButton = ({ size }) => {
  const { changeThemeColor } = useContext(ThemeContext);
  const theme = useTheme();

  console.log("theme", theme);
  return (
    <Button onClick={() => changeThemeColor()}>
      {theme.name === "dark" ? (
        <BsSunFill size={size} />
      ) : (
        <RiMoonFill size={size} />
      )}
    </Button>
  );
};

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transform: scale(1);
  transition: all 300ms;

  :hover {
    transform: scale(0.95);
  }

  svg {
    color: ${({ theme }) =>
      theme.name === "dark" ? theme.colors.secondary : theme.colors.textColor};
  }
`;
