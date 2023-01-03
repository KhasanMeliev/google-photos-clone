import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 10vh;
  background-color: #181818;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.div`
  width: 85%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    margin-left: 18px;
    font-weight: 500;
    font-size: 20px;
    span {
      color: blue;

      &:nth-child(2) {
        color: red;
      }
      &:nth-child(3) {
        color: yellow;
      }
      &:nth-child(4) {
        color: blue;
      }
      &:nth-child(5) {
        color: #26a60f;
      }
      &:nth-child(6) {
        color: red;
      }
      &:nth-child(7) {
        color: inherit;
        margin-left: 8px;
      }
    }
  }
`;

export const Profile = styled.div`
  width: 15%;
  cursor: pointer;
`;

export const Box = styled.div`
  width: 30px;
  height: 30px;
  background-color: white;
  background-size: cover;
  border-radius: 50%;
  margin-right: 15px;
`;
