import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 100%;
  height: 10vh;
  background-color: #181818;
  color: white;
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;

  ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    li {
      list-style: none;
      font-size: 16px;
      cursor: pointer;

      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: inherit;
        text-decoration: none;
      }
      svg {
        font-size: 25px;
      }
    }
  }
`;
