import styled, { keyframes } from "styled-components";
const flash = keyframes`
    0% {
      opacity:0
    }
    50% {
      opacity:100
    }
    100% {
      opacity:0
    }
`;

export const Container = styled.div`
  width: 100%;
  height: 93vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Finlandica", sans-serif;
  flex-direction: column;
  padding: 8px;
  background-color: var(--black);
`;
export const ButtonInciar = styled.button`
  padding: 1rem;
  width: 200px;
  background: none;
  animation: ${flash} 3s infinite;
  color: var(--white);
  border-radius: 6px;
  box-shadow: 5px 5px 15px 5px var(--white),
    5px 5px 15px 5px var(--white) insert;
  text-shadow: 0px 0px 10px var(--white), 0px 0px;
  position: relative;
  overflow: hidden;
  transition: 0.2s;
  &:hover {
    animation: none;
    box-shadow: 0 0 10px var(--pewter_blue), 0 0 15px #c9d1d4, 0 0 30px #a5aaac;
    transition-delay: 1s;
    border: 2px solid var(--white);
    span:nth-child(1) {
      left: 100%;
      transition: 1s;
    }
    span:nth-child(2) {
      top: 100%;
      transition: 1s;
      transition-delay: 0.25s;
    }
    span:nth-child(3) {
      right: 100%;
      transition: 1s;
      transition-delay: 0.5s;
    }
    span:nth-child(4) {
      bottom: 100%;
      transition: 1s;
      transition-delay: 0.75s;
    }
  }
  span {
    position: absolute;
    display: block;
  }
  span:nth-child(1) {
    width: 100%;
    height: 2px;
    top: 0;
    left: -100%;
    background: linear-gradient(90deg, transparent, var(--pewter_blue));
  }
  span:nth-child(2) {
    height: 100%;
    width: 2px;

    top: -100%;
    right: 0;

    background: linear-gradient(180deg, transparent, var(--pewter_blue));
  }
  span:nth-child(3) {
    width: 100%;
    height: 2px;

    right: -100%;
    bottom: 0;

    background: linear-gradient(270deg, transparent, var(--pewter_blue));
  }
  span:nth-child(4) {
    width: 2px;
    height: 100%;

    bottom: -100%;
    left: 0;

    background: linear-gradient(360deg, transparent, var(--pewter_blue));
  }
`;
export const ButtonPular = styled.button`
  width: 100px;
  background: none;
  color: var(--white);
  border-radius: 6px;
  box-shadow: 5px 5px 15px 5px var(--white),
    5px 5px 15px 5px var(--white) insert;
  text-shadow: 0px 0px 10px var(--white), 0px 0px;
  transition: 0.2s;
  font-size: 20px;
  &:hover {
    box-shadow: 0 0 10px var(--pewter_blue), 0 0 15px #c9d1d4, 0 0 30px #a5aaac;
  }
`;

export const Back = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--black);
  padding: 13.3px;
`;
