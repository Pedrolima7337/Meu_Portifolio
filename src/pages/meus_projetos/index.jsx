import { useRef } from "react";
import { Container } from "./styles";
import { useEffect } from "react";
import { data } from "./data";
import { NavBar } from "../../components/navBar";

export const MeusProjetos = () => {
  const GroupRef = useRef([]);

  const onScroll = (el) => {
    const styles = GroupRef.current
      .map((group, i) => {
        const rect = group.getBoundingClientRect();

        return { group, rect };
      })
      .find((group) => group.rect.bottom >= window.innerHeight * 0.5);

    document.body.style.backgroundColor = `${styles.group.dataset.bgcolor}`;
    document.body.style.color = styles.group.dataset.txtcolor;
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <Container>
      <NavBar />
      {data.map((group, i) => (
        <>
          <div
            ref={(el) => (GroupRef.current[i] = el)}
            data-bgcolor={group.theme.background}
            data-txtcolor={group.theme.text}
            className="divAnimate"
          >
            <group.content
              ref={(el) => (GroupRef.current[i] = el)}
              data-bgcolor={group.theme.background}
              data-txtcolor={group.theme.text}
            />
          </div>
        </>
      ))}
    </Container>
  );
};
