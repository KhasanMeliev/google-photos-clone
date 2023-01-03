import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
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
export const Box = styled.div`
  width: 70px;
  height: 75px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-color: blue;
  p {
    font-weight: 500;
  }
`;
export const Image = styled.img`
  width: 55px;
  height: 55px;
  background-color: blue;
  border-radius: 50%;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfmwFWkd7HSMq9jOp8KDaPnoyS7ScKag7ceQ&usqp=CAU");
  background-size: cover;
`;

export const Places = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
`;

export const PlaceBox = styled.div`
  width: 110px;
  height: 120px;
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
    color: white;
    font-size: 25px;
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
    width: 220px;
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
