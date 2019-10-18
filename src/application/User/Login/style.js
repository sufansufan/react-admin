import styled from "styled-components";
import containerBg from "../../../assets/images/bg.png";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #289cd0;
  position: relative;
  .container-bg {
    width: 100vw;
    height: 35vh;
    position: absolute;
    top: 15vh;
    left: 0;
    background: url(${containerBg}) no-repeat;
    background-size: 100% 100%
  }
`
export const Box = styled.div`
  width: 400px;
  height: 400px;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border-radius: 10px;
  box-shadow: 1px 1px 20px #f2f2f2;
  text-align: center;
  .title {
    font-size: 36px;
    color: #289cd0;
    margin-top: 40px;
    & > h2 {
      color: #289cd0;
      margin: 0;
    }
    & > h3 {
      font-size: 20px;
      color: #289cd0;
    }
  }
`;
