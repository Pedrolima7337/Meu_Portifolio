import styled, { keyframes, css } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0 25px;
  ${({ backGroundColor }) =>
    css`
      background-color: ${backGroundColor};
    `};
`;

export const Content = styled.section`
  display: inline-flex;
`;
export const Estatico = styled.div`
  display: flex;
  align-items: center;
  font-size: 50px;
  font-weight: 600;
  color: var(--green_blue_crayoia);
`;

const typing = keyframes`
    100%{
        left: 100%;
        margin: 0 -35px 0 35px;
    }
`;
const slide = keyframes`
    100%{
        top: -360px;
        margin: 0 -35px 0 35px;
    }
`;
export const Dinamico = styled.ul`
  width: 300px;
  margin-left: 13px;
  line-height: 90px;
  height: 90px;
  overflow: hidden;
  ${({ colorPrint }) =>
    css`
      color: ${colorPrint};
    `};
  li {
    list-style: none;
    font-size: 50px;
    font-weight: 600;
    left: 0;
    top: 0;
    position: relative;
    animation: ${slide} 6s steps(4) infinite;
  }
  .spanDinamic {
    position: relative;
    text-align: center;
  }
  .spanDinamic::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    ${({ colorBack, colorPrint }) =>
      css`
        color: ${colorPrint};
        border-left: 2px solid ${colorPrint};
        background-color: ${colorBack};
      `};
    animation: ${typing} 1.5s steps(10) infinite;
    padding: 6px;
  }
`;
