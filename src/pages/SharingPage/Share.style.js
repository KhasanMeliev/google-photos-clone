import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Buttons = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;

  button {
    width: 150px;
    height: 35px;
    border-radius: 100px;
    border: none;
    background-color: #42b0f5;
    color: #181818;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3px;
    font-weight: 500;
  }
`;

export const Albums = styled.div`
  width: 100%;
  height: 200px;
  margin-top: 20px;

  p {
    font-size: 15px;
  }
`;

export const Texts = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;

  h3 {
    margin: 0;
    padding: 0px 5px;
    margin-bottom: 5px;
    font-weight: 400;
    font-size: 18px;

    &:nth-child(2) {
      color: blue;
      cursor: pointer;
      margin-bottom: 5px;
    }
  }
`;
export const Box = styled.div`
  width: 90px;
  height: 90px;
  color: white;
  background-color: #181818;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 30px;
  margin-left: 10px;
`;
