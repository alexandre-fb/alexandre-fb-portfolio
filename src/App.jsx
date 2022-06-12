import { AnimateSharedLayout } from "framer-motion";

import { GlobalStyle } from "./style/globalStyles";
import { AppRoutes } from "./pages/Routes";
import { ThemeContextProvider } from "./contexts/themeContext";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <GlobalStyle />
        <AppRoutes />
      </ThemeContextProvider>
    </>
  );
}

export default App;
