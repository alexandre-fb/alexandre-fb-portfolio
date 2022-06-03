import { AnimateSharedLayout } from "framer-motion";
import { GlobalStyle } from "./globalStyles";
import { AppRoutes } from "./pages/Routes";

function App() {
  return (
    <>
      <AnimateSharedLayout>
        <GlobalStyle />
        <AppRoutes />
      </AnimateSharedLayout>
    </>
  );
}

export default App;
