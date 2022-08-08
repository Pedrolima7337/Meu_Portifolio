import { Container, ContentView, DivCard, SectionCard } from "./styles";
import { CardTech } from "../../components/cardTech";
import borarachar from "../../assets/BoraRachar.png";
import kenzieHub from "../../assets/KenzieHub.png";
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
          <DivCard direction={"right"}>
            <CardTech
              title={"Bora Rachar"}
              description={
                "Borarachar é um site para compartilhar serviços de streaming com outras pessoas, como Netflix, Spotify, entre outros."
              }
              img={borarachar}
              ferramentas={
                "React, React-router-dom, Styled-components, React-hook-form, Yup e Axios."
              }
              view={
                "https://capstone-m3-borarachar-git-master-henriquemarioto.vercel.app/"
              }
              git={"https://github.com/henriquemarioto/capstone-m3-borarachar"}
            />
            <span className="techs">Principais techs que eu usei:</span>
            <CardSaber
              cor={"#0fff0f "}
              tech={"React"}
              tamanho={"70"}
              porcent={"100"}
            />
            <CardSaber
              cor={"#ad00ad"}
              tech={"React-router-dom"}
              tamanho={"65"}
              porcent={"95"}
            />
            <CardSaber
              cor={" #0000ff"}
              tech={"Styled-components"}
              tamanho={"50"}
              porcent={"80"}
            />
          </DivCard>
          <DivCard direction={"left"}>
            <CardTech
              title={"Kenzie Hub"}
              description={
                "Kenzie Hub é um site organizador de tarefas, onde você pode criar task, edita-las ou exclui-las."
              }
              img={kenzieHub}
              ferramentas={
                "React, React-router-dom, Styled-components, React-hook-form, Yup, Axios e Jest."
              }
              view={"https://kenzie-hub-completo.vercel.app/"}
              git={"https://github.com/Pedrolima7337/kenzie-hub"}
            />
            <span className="techs">Principais techs que eu usei:</span>
            <CardSaber
              cor={"#0000ff"}
              tech={"React"}
              tamanho={"70"}
              porcent={"100"}
            />
            <CardSaber
              cor={"#0fff0f"}
              tech={"Yup"}
              tamanho={"67"}
              porcent={"97"}
            />
            <CardSaber
              cor={"#ad00ad"}
              tech={"Jest"}
              tamanho={"55"}
              porcent={"85"}
            />
          </DivCard>
        </SectionCard>
      </ContentView>
    </Container>
  );
};
