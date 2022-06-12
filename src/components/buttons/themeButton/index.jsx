import { useTheme } from "styled-components";
import { Button } from "./styles";
import { BsSunFill } from "react-icons/bs";
import { RiMoonFill } from "react-icons/ri";
import { useContext } from "react";
import { ThemeContext } from "../../../contexts/themeContext";

export const ThemeButton = ({ size }) => {
  const { changeTheme } = useContext(ThemeContext);
  const theme = useTheme();

  return (
    <Button onClick={() => changeTheme()}>
      {theme.name === "dark" ? (
        <BsSunFill size={size} />
      ) : (
        <RiMoonFill size={size} />
      )}
    </Button>
  );
};
