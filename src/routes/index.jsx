import { MeusProjetos } from "../pages/meus_projetos";
import { Dashboard } from "../pages/dashboard";
import { Route, Routes } from "react-router";
import { Home } from "../pages/home";
import { Inicio } from "../pages/inicio";
const Rotas = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="inicio" element={<Inicio />} />
      <Route path="/" element={<Home />} />
      <Route path="meus_projetos" element={<MeusProjetos />} />
    </Routes>
  );
};
export default Rotas;
