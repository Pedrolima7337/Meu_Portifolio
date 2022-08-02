import { Container, Content, Dinamico, Estatico } from "./styles";

export const RollView = ({ colorPrint, colorBack, txt1, txt2 }) => {
  return (
    <Container backGroundColor={colorBack}>
      <Content>
        <Estatico>Meus Projetos</Estatico>
        <Dinamico colorPrint={colorPrint} colorBack={colorBack}>
          <li>
            <span className="spanDinamic">{txt1}</span>
          </li>
          <li>
            <span className="spanDinamic">{txt2}</span>
          </li>
          <li>
            <span className="spanDinamic">{txt1}</span>
          </li>
          <li>
            <span className="spanDinamic">{txt2}</span>
          </li>
        </Dinamico>
      </Content>
    </Container>
  );
};
