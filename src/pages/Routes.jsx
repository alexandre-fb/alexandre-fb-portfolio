import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./home";
import { Projetos } from "./projetos";
import { Skills } from "./skills";
import { Sobre } from "./sobre";
import { Contato } from "./contato";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sobre" element={<Sobre />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/projetos" element={<Projetos />} />
        <Route exact path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
};
