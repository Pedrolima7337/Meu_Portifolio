import { Container, DescContent } from "./styles";

export const CardTech = ({
  title,
  description,
  img,
  ferramentas,
  color,
  view,
  git,
  dark,
}) => {
  return (
    <Container backGroundColor={color}>
      <DescContent>
        <h2>{title}</h2>
        <p>{description}</p>
        <span>
          <b> Ferramentas:</b>
          <span className="ferramentas">
            <p>{ferramentas}</p>
          </span>
        </span>
        <div className="links">
          <a href={view} target={"_blank"} rel={"noreferrer"}>
            view
          </a>
          <a href={git} target={"_blank"} rel={"noreferrer"}>
            GitHub
          </a>
        </div>
      </DescContent>

      {dark ? (
        <div className="projeto">
          <p>Projeto Back-End</p>
        </div>
      ) : (
        <img src={img} alt={title} />
      )}
    </Container>
  );
};
