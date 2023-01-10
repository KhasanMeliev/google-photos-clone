import styled from "styled-components";

export const PlaceBox = styled.div`
  width: 90px;
  height: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 20px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    position: absolute;
  }

  p {
    margin-top: 80px;
    position: absolute;
    color: #16191e;
    font-size: 25px;
    font-weight: bold;
  }
`;

export const Lists = styled.div`
  width: 100%;
  height: 720px;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  margin-left: 5px;

  h1 {
    font-size: 22px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: 500;
  }

  hr {
    width: 90%;
    margin-left: 30px;
  }

  ul {
    padding: 0px 15px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    svg {
      font-size: 20px;
      margin-right: 8px;
      cursor: pointer;
    }
    li {
      list-style: none;
      font-size: 18px;
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
    }
  }

  button {
    width: 85%;
    height: 60px;
    border: none;
    border-radius: 8px;
    margin-top: 30px;
    background-color: inherit;
    border: 2px solid #181818;
    color: #181818;
    margin-left: 5px;

    h3 {
      font-weight: 550;
    }
    p {
      margin-top: 3px;
    }
  }
`;

export const Image = styled.img`
  width: 55px;
  height: 55px;
  background-color: blue;
  border-radius: 50%;
  background-size: cover;
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
