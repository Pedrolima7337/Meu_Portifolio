import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  img {
    display: block;
    width: 70px;
    transform: rotate(90deg);
    :hover ~ .plasma {
      ${({ colorSaber, tamanho }) =>
        css`
          width: ${tamanho}%;
          background: ${colorSaber};
          box-shadow: 0px 0px 20px ${colorSaber};
        `};
    }
  }
`;
export const Plasma = styled.div`
  position: absolute;
  bottom: 29.5px;
  left: 57px;
  border-radius: 0 100px 100px 0;
  width: 0px;
  height: 7px;
  transition: 0.5s linear;
  ${({ lightOn, colorSaber, tamanho }) =>
    lightOn === true &&
    css`
      width: ${tamanho}%;
      background: ${colorSaber};
      box-shadow: 0px 0px 20px ${colorSaber};
    `};
`;
