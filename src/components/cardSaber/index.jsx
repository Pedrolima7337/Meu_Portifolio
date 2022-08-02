import { LightSaber } from "../sabreLuz";
import { Container, ContentSaber } from "./styes";

export const CardSaber = ({ tech, tamanho, cor, porcent }) => {
  return (
    <Container>
      <ContentSaber>
        <span>{tech}</span>
        <span>{porcent}%</span>
      </ContentSaber>
      <LightSaber color={cor} tamanho={tamanho} />
    </Container>
  );
};
