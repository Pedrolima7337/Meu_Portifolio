import { useNavigate } from "react-router-dom";
import { Back, ButtonInciar, ButtonPular, Container } from "./styles";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <Back>
      <Container>
        <ButtonInciar onClick={() => navigate("/inicio")}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Iniciar
        </ButtonInciar>
      </Container>
      <ButtonPular onClick={() => navigate("/dashboard")}>Pular</ButtonPular>
    </Back>
  );
};
