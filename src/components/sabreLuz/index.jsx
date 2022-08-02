import { Container, Plasma } from "./styles";
import sabre from "../../assets/sabreluz.png";
import { useState } from "react";
export const LightSaber = ({ color, tamanho }) => {
  const [lightOn, setLightOn] = useState(false);

  return (
    <Container onMouseEnter={() => setLightOn(true)}>
      <img src={sabre} alt="Sabre de Luz" />
      <Plasma
        className={"plasma"}
        lightOn={lightOn}
        colorSaber={color}
        tamanho={tamanho}
      />
    </Container>
  );
};
