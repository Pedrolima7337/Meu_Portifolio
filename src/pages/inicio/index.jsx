import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Body, ButtonPular, Container, Credits, Titles } from "./styles";

export const Inicio = () => {
  const navigate = useNavigate();
  const [time, setTime] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setTime(true);
    }, 33000);
  });

  return (
    <Body>
      <Container>
        <Credits>
          <Titles>
            <h1>Episódio I</h1>

            <h2>Meu Portifolio</h2>
          </Titles>
          <p>
            Este portfólio foi desenvolvido para mostrar minhas habilidades e me
            apresentar para vocês que o visitam, nele foi usado algumas
            tecnologias como React e Styled-components. Algumas duas dessas
            paginas desenvolvidas tem algumas referências a star wars. Testei
            algumas coisas afim de me aprimorar minhas habilidades
            principalmente no animation com Styled-components. Enfim, espero que
            gostem...
          </p>
        </Credits>
        <ButtonPular onClick={() => navigate("/dashboard")}>Pular</ButtonPular>
        {time && time && (
          <button onClick={navigate("/dashboard")}>Dashbord</button>
        )}
      </Container>
    </Body>
  );
};
