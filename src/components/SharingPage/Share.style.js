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
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    width: 15 0px;
    height: 35px;
    border-radius: 100px;
    border: none;
    background-color: #181818;
    color: white;
    margin: 20px;
  }
`;
