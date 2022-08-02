import { Container, ContentView, DivCard, SectionCard } from "./styles";
import { CardTech } from "../../components/cardTech";
import borarachar from "../../assets/BoraRachar.png";
import { CardSaber } from "../../components/cardSaber";
import { RollView } from "../rollView";

export const LightSide = () => {
  return (
    <Container>
      <ContentView>
        <RollView
          colorPrint={"black"}
          colorBack={"#F5F1ED"}
          txt1={"Principais"}
          txt2={"Front-end"}
        />
        <SectionCard>
          <DivCard>
            <CardTech
              title={"Bora Rachar"}
              description={
                "Borarachar é um site para compartilhar serviços de streaming com outras pessoas, como Netflix, Spotify, entre outros"
              }
              img={borarachar}
              ferramentas={"sla,sla,lsal,las,asl,alskda"}
            />
            <CardSaber
              cor={"#0fff0f "}
              tech={"React"}
              tamanho={"70"}
              porcent={"100"}
            />
            <CardSaber
              cor={"#ad00ad"}
              tech={"JavaScrip"}
              tamanho={"70"}
              porcent={"100"}
            />
            <CardSaber
              cor={" #0000ff"}
              tech={"Git"}
              tamanho={"70"}
              porcent={"100"}
            />
          </DivCard>
          <DivCard>
            <CardTech
              title={"Bora Rachar"}
              description={
                "Borarachar é um site para compartilhar serviços de streaming com outras pessoas, como Netflix, Spotify, entre outros"
              }
              img={borarachar}
              ferramentas={"sla,sla,lsal,las,asl,alskda"}
            />
            <CardSaber
              cor={"#0000ff"}
              tech={"React"}
              tamanho={"70"}
              porcent={"100"}
            />
            <CardSaber
              cor={"#0fff0f"}
              tech={"JavaScrip"}
              tamanho={"70"}
              porcent={"100"}
            />
            <CardSaber
              cor={"#ad00ad"}
              tech={"Git"}
              tamanho={"70"}
              porcent={"100"}
            />
          </DivCard>
        </SectionCard>
      </ContentView>
    </Container>
  );
};
