import styled, { keyframes } from "styled-components";

const play = keyframes`
    0%{
        transform: rotateX(21deg) translate3d(0,41rem, 0);
        opacity:1;
    }
    85%{
        opacity:1;
    }
    100%{
        transform: rotateX(21deg) translate3d(0, -150rem, 0);
        opacity:0;
    }
    `;

export const Body = styled.body`
  height: 100vh;
  width: 100%;
  background-color: var(--black);
`;
export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--black);
  color: var(--star_wars_color);
  font-family: "Finlandica", sans-serif;
  margin: 0 auto;
  perspective: 380px;
  perspective-origin: bottom;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: visible;
  transform: scaleY(1);
  font-size: 5vw;
  line-height: 1.3;
  overflow: hidden;
`;
export const Credits = styled.div`
  position: absolute;
  top: 0;
  left: 13%;
  right: 13%;
  height: 100%;
  animation: ${play} 65s;

  p {
    padding: 0.5rem 0;
  }
`;
export const Titles = styled.div`
  margin-bottom: 5rem;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
  }
  h2 {
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: bold;
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
  position: relative;
  overflow: hidden;
  transition: 0.2s;
  font-size: 20px;
  &:hover {
    box-shadow: 0 0 10px var(--pewter_blue), 0 0 15px #c9d1d4, 0 0 30px #a5aaac;
    border: 2px solid var(--white);
  }
`;
