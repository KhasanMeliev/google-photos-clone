import styled from "styled-components";

export const CategoryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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
