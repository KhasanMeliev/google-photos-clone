import styled from "styled-components";

export const PhotosWrapper = styled.div`
  width: 100%;
  height: 78vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SliderWrapper = styled.div`
  width: 100%;
  height: 200px;
`;

export const Box = styled.div`
  width: 120px;
  height: 180px;
  background-color: #181818;
  margin: 10px;
  border-radius: 10px;
  display: flex;
  align-items: flex-end;

  p {
    margin-bottom: 20px;
    margin-left: 8px;
    font-size: 20px;
    color: white;
  }
`;

export const ImagesWrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;

  h1 {
    margin-top: 15px;
  }
`;

export const Images = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 10px;
  img {
    width: 90px;
    height: 90px;
    border-radius: 10px;
  }
`;
