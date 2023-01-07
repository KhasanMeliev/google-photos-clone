import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  overflow: scroll;
`;

export const ImagesWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
`;
export const Images = styled.div`
  width: 100%;
  margin-top: 15px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0px 10px;
`;

export const Box = styled.div`
  width: 100px;
  height: 100px;

  img {
    width: 100px;
    height: 100px;
  }

  p {
    margin-top: -30px;
    margin-left: 10px;
    color: white;
    font-weight: 450;
  }
`;
