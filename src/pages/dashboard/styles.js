import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  font-family: "Finlandica", sans-serif;
  flex-direction: column;
  button {
    width: 150px;
    margin: 20px auto 0;
    border: solid 1px black;
    border-radius: 5px;
  }
  .list {
    margin: auto;
  }
  h3 {
    font-weight: 600;
    font-size: 25px;
    margin: 20px 0;
  }
`;
export const PerfilDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
`;

export const ContentText = styled.div`
  font-size: 18px;
  width: 600px;
  margin: 0 auto 30px;
  line-height: 24px;
  display: flex;
  flex-direction: column;
  p {
    line-height: 26px;
    font-size: 25px;
  }
`;
export const Buttons = styled.div`
  display: flex;
  margin-top: 20px;
  a {
    display: flex;
    margin-right: 20px;
    padding: 8px;
    width: 180px;
    border: 2px solid var(--black);
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    gap: 10px;
  }

  a:hover {
    cursor: pointer;
    border: 2px solid #e6e6e6;
    background-color: var(--metallic_seaweed);
    transition: 0.8s;
  }
  a:visited,
  a:active {
    color: inherit;
  }
`;

export const ContentList = styled.div`
  display: flex;
  gap: 300px;
  font-size: 16px;
  .card {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .infos {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }
  .span_tittle {
    font-weight: 600;
    color: var(--metallic_seaweed);
  }
`;
export const DivImg = styled.div`
  img {
    border: 2px solid var(--metallic_seaweed);
    width: 350px;
    height: 300px;
    border-radius: 100%;
  }
`;
export const ContentIcons = styled.div`
  text-align: center;
  margin-top: 20px;
  color: var(--raisin_black);
  h1 {
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 20px;
  }
`;
export const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 50px;
    background: none;
    border: none;
    margin-right: 20px;
  }
  div:hover {
    cursor: pointer;
    transition: 1s;
    transform: scale(1.25, 1.25);
  }
`;
