import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: var(--metallic_seaweed);
  color: var(--white);
  border-radius: 0 0 5px 5px;
  border-bottom: 1px solid var(--green_blue_crayoia);
  box-shadow: 1px 4px 15px -5px var(--green_blue_crayoia);
  height: 50px;

  .logo {
    display: flex;
    img {
      width: 40px;
    }
    :hover {
      cursor: pointer;
    }
    justify-content: center;
    align-items: center;
    h1 {
      font-weight: bold;
      font-size: 18px;
      color: #aaaaaa;
      margin-left: 3px;
      line-height: 15px;
    }
  }
  .nomeLogo {
    display: flex;
    border-left: 2px solid #aaaaaa;
    height: 30px;
    align-items: center;
  }

  .list {
    list-style: none;
    display: flex;
    gap: 25px;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
    }
    div:hover {
      cursor: pointer;
      transition: 0.4s;
      filter: invert(1);
    }
  }
  @media (max-width: 580px) {
    .dashboard {
      display: none;
    }
  }
`;
