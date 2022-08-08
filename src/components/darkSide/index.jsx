import { Container, ContentView, DivCard, SectionCard } from "./styles";
import { CardTech } from "../../components/cardTech";
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
              title={"Well Being System"}
              description={
                "Borarachar é um site para compartilhar serviços de streaming com outras pessoas, como Netflix, Spotify, entre outros."
              }
              img={""}
              ferramentas={"Python, Docker, Django e Django RF."}
              color={"#252323"}
              dark
              git={
                "https://github.com/liuiti/capstone-m5-wellbeingsystem/tree/main/accounts"
              }
            />
            <span className="techs">Principais techs que eu usei:</span>
            <CardSaber
              cor={"#ff0000"}
              tech={"Python"}
              tamanho={"70"}
              porcent={"100"}
            />
            <CardSaber
              cor={"#ff0000"}
              tech={"Django RF"}
              tamanho={"70"}
              porcent={"100"}
            />
            <CardSaber
              cor={"#ff0000"}
              tech={"Docker"}
              tamanho={"45"}
              porcent={"75"}
            />
          </DivCard>
          <DivCard>
            <CardTech
              title={"Returning"}
              description={
                "Uma API para aluguel de jogos e consoles, você pode alugar um console ou jogo ou colocar o seu para alugar e deixar outros."
              }
              img={""}
              ferramentas={"Typescript, Docker, NodeJS, Express e Jest."}
              color={"#252323"}
              dark
              git={"https://github.com/liuiti/m4-capstone-returning"}
            />
            <span className="techs">Principais techs que eu usei:</span>
            <CardSaber
              cor={"#ff0000"}
              tech={"NodeJS"}
              tamanho={"70"}
              porcent={"100"}
            />
            <CardSaber
              cor={"#ff0000"}
              tech={"TypeScript"}
              tamanho={"68"}
              porcent={"98"}
            />
            <CardSaber
              cor={"#ff0000"}
              tech={"Docker"}
              tamanho={"40"}
              porcent={"70"}
            />
          </DivCard>
        </SectionCard>
      </ContentView>
    </Container>
  );
};
