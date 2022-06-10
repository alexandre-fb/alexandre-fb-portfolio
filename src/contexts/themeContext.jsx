import { createContext } from "react";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../style/themes/dark";
import { lightTheme } from "../style/themes/light";

export const ThemeContext = createContext({});

export const ThemeContextProvider = ({ children }) => {

    const [ theme, setTheme ] = useState(darkTheme)

    const changeThemeColor = () => {
        setTheme(theme === darkTheme ? lightTheme : darkTheme) 
    }  

    return (
        <ThemeContext.Provider value={{ changeThemeColor }}>
            <ThemeProvider theme={theme}>
                { children }
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}