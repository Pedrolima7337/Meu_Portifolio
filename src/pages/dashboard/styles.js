import styled, { keyframes } from "styled-components";
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #000;
  color: var(--white);
  justify-content: center;
  font-family: "Finlandica", sans-serif;
  flex-direction: column;
  button {
    width: 150px;
    margin: 20px auto 0;
    border: solid 1px black;
    border-radius: 5px;
  }

  h3 {
    font-weight: 600;
    font-size: 25px;
    margin: 20px 0;
  }
  @media (max-width: 1024px) {
    height: 100%;
    width: 100%;
  }
`;

const run = keyframes`
  0% {
    left: -200px;
    opacity:0;
  }

  100% {
    left: 0; 
    opacity: 1;    
  }
  `;
export const PerfilDiv = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 20px;

  @media (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const ContentText = styled.div`
  font-size: 18px;
  width: 600px;
  margin: 0 auto 30px;
  line-height: 24px;
  display: flex;
  flex-direction: column;
  position: relative;
  animation: ${run} 0.5s;
  p {
    line-height: 26px;
    font-size: 25px;
    width: 100%;
  }
  @media (max-width: 1024px) {
    p {
      font-size: 18px;
    }
    width: 100%;
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
    border: 2px solid var(--white);
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
  @media (max-width: 1024px) {
    width: 100%;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    align-items: center;
  }
`;

export const ContentList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
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
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 50px;
  }
`;
export const DivImg = styled.div`
  position: relative;
  animation: ${run} 0.5s;
  overflow: hidden;
  margin-right: 20px;
  img {
    border: 2px solid var(--metallic_seaweed);
    width: 320px;
    height: 280px;
    border-radius: 100%;
  }
  @media (max-width: 1024px) {
    img {
      width: 220px;
      height: 180px;
    }
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;
const runIcons = keyframes`
  0% {
    bottom: -200px;
    opacity:0;
  }

  100% {
    bottom: 0; 
    opacity: 1;    
  }
  `;
export const ContentIcons = styled.div`
  margin-top: 20px;
  color: #c9c9c9;
  h1 {
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
`;
export const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  flex-wrap: wrap;
`;
export const IconsImg = styled.div`
  width: 50px;
  background: none;
  border: none;
  margin-right: 20px;
  position: relative;
  animation: ${runIcons} ${({ time }) => time};
  overflow: hidden;
  :hover {
    cursor: pointer;
    transition: 1s;
    transform: scale(1.25, 1.25);
  }
  @media (max-width: 1024px) {
    margin-right: 10px;
  }
`;
