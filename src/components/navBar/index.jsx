import { Container } from "./styles";
import { MdRestartAlt, MdViewSidebar } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div>
        <h1 onClick={() => navigate("/dashboard")}>Pedro Lima</h1>
      </div>
      <div>
        <ul className="list">
          <li onClick={() => navigate("/")}>
            <MdRestartAlt /> Inicio
          </li>
          <li onClick={() => navigate("/dashboard")}>
            <FaHome />
            DashBoard
          </li>
          <li onClick={() => navigate("/meus_projetos")}>
            <MdViewSidebar />
            Meus Projetos
          </li>
        </ul>
      </div>
    </Container>
  );
};
