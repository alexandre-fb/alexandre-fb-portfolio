import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './home.jsx'
export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
