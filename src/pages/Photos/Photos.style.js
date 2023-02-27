import styled from "styled-components";

export const PhotosWrapper = styled.div`
  width: 100%;
  height: 80vh;
  overflow-y: scroll;
  background-color: #16191e;
  color: white;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SliderWrapper = styled.div`
  width: 100%;
  height: 200px;
  padding: 0px 2px;
`;

export const Box = styled.div`
  width: 120px;
  height: 180px;
  background-color: #18f08b;
  margin: 10px;
  border-radius: 10px;
  display: flex;
  align-items: flex-end;
  background-image: url("https://wallpaperaccess.com/full/7874669.jpg");
  background-repeat: no-repeat;
  background-size: cover;

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
  padding: 0px 8px;

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
    width: 75px;
    height: 75px;
    border-radius: 10px;
  }
`;
