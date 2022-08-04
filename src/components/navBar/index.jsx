import { Container } from "./styles";
import { MdRestartAlt, MdViewSidebar } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";
export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="logo" onClick={() => navigate("/dashboard")}>
        <img src={Logo} alt={"Logo"} />
        <div className="nomeLogo">
          <h1>
            Pedro <br /> Lima
          </h1>
        </div>
      </div>
      <div>
        <ul className="list">
          <li onClick={() => navigate("/")}>
            <div>
              <MdRestartAlt /> Inicio
            </div>
          </li>
          <li className="dashboard" onClick={() => navigate("/dashboard")}>
            <div>
              <FaHome />
              DashBoard
            </div>
          </li>
          <li onClick={() => navigate("/meus_projetos")}>
            <div>
              <MdViewSidebar />
              Meus Projetos
            </div>
          </li>
        </ul>
      </div>
    </Container>
  );
};
