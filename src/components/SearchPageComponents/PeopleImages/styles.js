import styled from "styled-components";

export const Texts = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    margin: 0;
    padding: 0px 5px;
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 18px;

    &:nth-child(2) {
      color: blue;
      cursor: pointer;
      margin-bottom: 5px;
    }
  }
`;

export const Box = styled.div`
  width: 70px;
  height: 75px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-color: blue;
  p {
    font-weight: 500;
  }
`;

export const Image = styled.img`
  width: 55px;
  height: 55px;
  background-color: blue;
  border-radius: 50%;
  background-size: cover;
`;

export const Lists = styled.div``;
