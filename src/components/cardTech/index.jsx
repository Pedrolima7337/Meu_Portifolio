import { Container, DescContent } from "./styles";

export const CardTech = ({ title, description, img, ferramentas, color }) => {
  return (
    <Container backGroundColor={color}>
      <DescContent>
        <h2>{title}</h2>
        <p>{description}</p>
        <span>
          <b> Ferramentas:</b>{" "}
          <span className="ferramentas">{ferramentas}</span>
        </span>
      </DescContent>
      <img src={img} alt={title} />
    </Container>
  );
};
