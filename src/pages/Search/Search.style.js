import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #16191e;
  color: white;
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
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

export const PlacesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
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
