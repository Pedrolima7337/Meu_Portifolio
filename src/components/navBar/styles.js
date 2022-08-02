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
  h1 {
    font-weight: bold;
    font-size: 18px;
  }
  h1:hover {
    cursor: pointer;
  }
  .list {
    list-style: none;
    display: flex;
    gap: 25px;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
    }
    li:hover {
      cursor: pointer;
      transition: 0.4s;
      filter: invert(1);
    }
  }
`;
