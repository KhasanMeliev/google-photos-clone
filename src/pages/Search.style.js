import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  font-family: cursive;
`;

export const SearchWrapper = styled.div`
  width: 100%;
  height: 80vh;
  overflow-y: scroll;
`;
export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  margin-top: 20px;
  width: 250px;
  height: 40px;
  text-indent: 10px;
  border-radius: 4px;
  border: none;
  outline: none;
  background-color: #c6cfc8;
`;

export const People = styled.div`
  width: 100%;
  height: 150px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const PlacesWrapper = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Lists = styled.div`
  button {
    display: block;
    margin: 0 auto;
    width: 80%;
    height: 45px;
    margin-bottom: 20px;
    background-color: white;
    border: 2px solid #181818;
    border-radius: 8px;
    cursor: pointer;
    h3 {
      font-size: 15px;
    }
  }
`;
