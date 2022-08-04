import { NavBar } from "../../components/navBar";
import {
  Buttons,
  Container,
  ContentIcons,
  ContentList,
  ContentText,
  DivImg,
  Icons,
  IconsImg,
  PerfilDiv,
} from "./styles";
import foto from "../../assets/Foto.jpg";
import {
  SiJavascript,
  SiVite,
  SiTypescript,
  SiStyledcomponents,
  SiRedux,
  SiExpress,
  SiJsonwebtokens,
  SiJest,
  SiPostgresql,
  SiPython,
  SiDjango,
  SiHtml5,
  SiReact,
  SiGit,
  SiDocker,
  SiNodedotjs,
  SiGithub,
  SiLinkedin,
  SiDocusign,
  SiCss3,
} from "react-icons/si";

export const Dashboard = () => {
  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `Profile.pdf`;
    link.href = "./Profile.pdf";
    link.click();
  };

  return (
    <Container>
      <NavBar />
      <PerfilDiv>
        <DivImg className="">
          <img src={foto} alt="Foto do Pedro" />
        </DivImg>
        <ContentText>
          <div>
            <p>
              Sou uma pessoa calma e alegre, quando imponho metas, faço de tudo
              para cumpri-las com organização e utilização de metodologias ágeis
              para encontrar e resolver problemas de forma eficiente e saudável.
              Sou criativo e ao resolver problemas ou tomar decisões, busco os
              caminhos mais assertivos, dou o meu melhor a cada dia para
              aprimorar minhas habilidades.
            </p>
          </div>
          <Buttons>
            <a
              href="https://www.linkedin.com/in/pedro-lima-rosa/"
              target={"_blank"}
              rel={"noreferrer"}
            >
              {<SiLinkedin />} Linkedin
            </a>

            <a
              href="https://github.com/Pedrolima7337"
              target={"_blank"}
              rel={"noreferrer"}
            >
              {<SiGithub />} GitHub
            </a>

            <a onClick={onDownload} href>
              {<SiDocusign />} Baixar meu CV
            </a>
          </Buttons>
        </ContentText>
      </PerfilDiv>
      <ContentList className="list">
        <div className="infos">
          <div className="card">
            <span className="span_tittle">Nome :</span>
            <p>Pedro Henrique de Lima Rosa</p>
          </div>
          <div className="card">
            <span className="span_tittle">Cidade :</span>
            <p>São Paulo</p>
          </div>
        </div>

        <div className="infos">
          <div className="card">
            <span className="span_tittle">Idade :</span>
            <p>19 Anos</p>
          </div>

          <div className="card">
            <span className="span_tittle">Estado :</span>
            <p>São Paulo</p>
          </div>
        </div>

        <div className="infos">
          <div className="card">
            <span className="span_tittle">Especialização :</span>
            <p>Web developer Full-stack</p>
          </div>

          <div className="card">
            <span className="span_tittle">Email :</span>
            <p>pedroHplayer190@gmail.com</p>
          </div>
        </div>
      </ContentList>
      <ContentIcons>
        <h1>Habilidades em:</h1>
        <Icons className="icons">
          <IconsImg time={"0.5s"}>
            <SiJavascript size={"50px"} title={"JavaScript"} />
          </IconsImg>
          <IconsImg time={"0.7s"}>
            <SiVite size={"50px"} title={"Vite"} />
          </IconsImg>
          <IconsImg time={"1s"}>
            <SiTypescript size={"50px"} title={"TypeScript"} />
          </IconsImg>
          <IconsImg time={"1.3s"}>
            <SiStyledcomponents size={"50px"} title={"Styled Components"} />
          </IconsImg>
          <IconsImg time={"1.6s"}>
            <SiRedux size={"50px"} title={"Redux"} />
          </IconsImg>
          <IconsImg time={"2s"}>
            <SiJest size={"50px"} title={"Jest"} />
          </IconsImg>
          <IconsImg time={"2.2s"}>
            <SiExpress size={"50px"} title={"Express"} />
          </IconsImg>
          <IconsImg time={"2.5s"}>
            <SiPostgresql size={"50px"} title={"Postgre SQL"} />
          </IconsImg>
          <IconsImg time={"2.8s"}>
            <SiPython size={"50px"} title={"Python"} />
          </IconsImg>
          <IconsImg time={"3.1s"}>
            <SiReact size={"50px"} title={"React"} />
          </IconsImg>
          <IconsImg time={"3.4s"}>
            <SiDjango size={"50px"} title={"Django"} />
          </IconsImg>
          <IconsImg time={"3.7s"}>
            <SiJsonwebtokens size={"50px"} title={"JsonWebToken"} />
          </IconsImg>
          <IconsImg time={"4s"}>
            <SiNodedotjs size={"50px"} title={"NodeJS"} />
          </IconsImg>
          <IconsImg time={"4.2s"}>
            <SiGit size={"50px"} title={"Git"} />
          </IconsImg>
          <IconsImg time={"4.5s"}>
            <SiHtml5 size={"50px"} title={"HTMl5"} />
          </IconsImg>
          <IconsImg time={"5s"}>
            <SiDocker size={"50px"} title={"Docker"} />
          </IconsImg>
          <IconsImg time={"5.1s"}>
            <SiCss3 size={"50px"} title={"Css3"} />
          </IconsImg>
        </Icons>
      </ContentIcons>
    </Container>
  );
};
