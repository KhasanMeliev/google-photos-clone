import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  overflow: scroll;
  background-color: #16191e;
  color: white;
  font-family: sans-serif;
  font-weight: bold;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ButtonWrapper = styled.div`
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
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3px;
    font-weight: 500;
    font-size: 13px;
  }
`;

export const Albums = styled.div`
  width: 100%;
  height: 200px;
  margin-top: 20px;

  p {
    font-size: 15px;
    margin-left: 10px;
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
      color: white;
      cursor: pointer;
      margin-bottom: 5px;
    }
  }
`;
export const Box = styled.div`
  width: 90px;
  height: 90px;
  color: white;
  background-color: #18f08b;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 30px;
  margin-left: 10px;
`;

export const Down = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  button {
    width: 90%;
    height: 100px;
    display: flex;

    img{
      width: 50px;
    }
  }
`;
