import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  margin-bottom: 100px;
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
  @media (max-width: 580px) {
    color: var(--black);
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
const run = keyframes`
  0% {
    right: -200px;
    overflow: hidden;
    opacity:0;
  }

  100% {
    right: 0; 
    opacity: 1;    
  }
  `;
export const DivCard = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #f7f7f7;
  padding: 15px;
  border-radius: 6px;
  position: relative;
  animation: ${run} 0.5s;
  overflow: hidden;
  margin-top: 25px;
  .techs {
    margin: 10px 0;
  }
  a {
    color: #a80000;
  }
`;

export const ContentView = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-size: 50px;
    font-weight: bold;
    text-align: center;
    margin: 15px 0;
  }
  @media (max-width: 1200px) {
    padding: 20px;
  }
`;
