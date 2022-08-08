import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  a {
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button {
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    border: 2px black solid;
  }
`;
export const SectionCard = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 1200px) {
    justify-content: center;
  }
`;
export const DivCard = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #252323;
  padding: 15px;
  border-radius: 6px;
  overflow: hidden;
  margin-top: 25px;
  a {
    color: var(--grenn_ryb);
  }
  .techs {
    margin-bottom: 10px;
  }
`;

export const ContentView = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 20px;
  h1 {
    color: #fff;
    font-size: 50px;
    font-weight: bold;
    text-align: center;
    margin: 15px 0;
  }
  @media (max-width: 1200px) {
    padding: 10px;
  }
`;
