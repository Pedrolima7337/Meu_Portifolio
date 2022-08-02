import { Container, ContentView, DivCard, SectionCard } from "./styles";
import { CardTech } from "../../components/cardTech";
import borarachar from "../../assets/BoraRachar.png";
import { CardSaber } from "../../components/cardSaber";
import { RollView } from "../rollView";

export const DarkSide = () => {
  return (
    <Container>
      <ContentView>
        <RollView
          colorPrint={"white"}
          colorBack={"#252323"}
          txt1={"Principais"}
          txt2={"Back-end"}
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
              color={"#252323"}
            />
            <CardSaber
              cor={"#ff0000"}
              tech={"React"}
              tamanho={"70"}
              porcent={"100"}
            />
            <CardSaber
              cor={"#ff0000"}
              tech={"JavaScrip"}
              tamanho={"70"}
              porcent={"100"}
            />
            <CardSaber
              cor={"#ff0000"}
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
              color={"#252323"}
            />
            <CardSaber
              cor={"#ff0000"}
              tech={"React"}
              tamanho={"70"}
              porcent={"100"}
            />
            <CardSaber
              cor={"#ff0000"}
              tech={"JavaScrip"}
              tamanho={"70"}
              porcent={"100"}
            />
            <CardSaber
              cor={"#ff0000"}
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
