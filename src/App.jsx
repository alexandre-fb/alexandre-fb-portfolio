import { AnimateSharedLayout } from "framer-motion";

import { GlobalStyle } from "./style/globalStyles";
import { AppRoutes } from "./pages/Routes";
import { ThemeContextProvider } from "./contexts/themeContext";

function App() {
  return (
    <>
      <AnimateSharedLayout>
        <ThemeContextProvider>
          <GlobalStyle />
          <AppRoutes />
        </ThemeContextProvider>
      </AnimateSharedLayout>
    </>
  );
}

export default App;
