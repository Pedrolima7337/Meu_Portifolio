import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 570px;
  gap: 20px;
  padding: 10px;
  ${({ backGroundColor = "#f7f7f7" }) =>
    css`
      background-color: ${backGroundColor};
    `};
  border-radius: 10px;
  img {
    width: 250px;
    border-radius: 6px;
  }
  @media (max-width: 580px) {
    flex-direction: column-reverse;
  }
  .projeto {
    display: flex;
    align-items: center;
    p {
      width: 250px;
      text-align: center;
      font-weight: 600;
      color: var(--pewter_blue);
    }
    font-size: 30px;
  }
`;
export const DescContent = styled.div`
  font-size: 18px;

  h2 {
    color: var(--green_blue_crayoia);
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 10px;
  }
  p {
    margin-bottom: 10px;
    word-wrap: break-word;
    @media (max-width: 580px) {
      width: 300px;
    }
  }
  span {
    font-size: 15px;
    font-style: italic;
    font-weight: 500;
  }
  .ferramentas {
    font-weight: 100;
  }
  .links {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    text-decoration: underline;
    color: var(--dark_purple);
    margin-top: 10px;
    :hover {
      cursor: pointer;
    }
    :visited,
    :active {
      color: inherit;
    }
    @media (max-width: 580px) {
      width: 300px;
    }
  }
`;
