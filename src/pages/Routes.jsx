import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Projetos } from "./Projetos";
import { Skills } from "./Skills";
import { Sobre } from "./Sobre";
import { Contato } from "./Contato";

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
