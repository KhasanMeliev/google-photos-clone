import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-color: white;
  overflow: scroll;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 10px;
  gap: 15px;

  button {
    width: 45%;
  }
`;

export const PhotosWrapper = styled.div`
  width: 100%;
  margin-top: 25px;
`;

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

export const Photos = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px;
  margin-left: 5px;
`;

export const Box = styled.div`
  width: 95px;
  height: 150px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-color: blue;
  
  p {
    font-weight: 500;
  }
`;

export const Image = styled.img`
  width: 95px;
  height: 95px;
  background-size: cover;
  border-radius: 10px;
`;

export const Lists = styled.div``;
