import { useNavigate } from "react-router-dom";
import { ButtonInciar, Container } from "./styles";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <ButtonInciar onClick={() => navigate("/inicio")}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Iniciar
      </ButtonInciar>
    </Container>
  );
};
