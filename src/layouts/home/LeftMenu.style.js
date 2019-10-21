import styled from 'styled-components';
import logo from "../../assets/images/home/logo.png";
import user from "../../assets/images/home/userimg.png";
import line from "../../assets/images/home/line.png";

export const Logo = styled.div`
  width: 100%;
  height: 80px;
  background: url(${logo}) center no-repeat;
  background-size: 55% 55%;
  cursor: pointer;
`;

export const Image = styled.div`
  width: 100%;
  height: 140px;
  padding-top: 20px;
  .user-img {
    width: 61px;
    height: 61px;
    border-radius: 50%;
    background: url(${user}) no-repeat;
    background-size: 100% 100%;
    margin: 0 auto;
  }
  p {
    width: 100%;
    margin: 10px 0;
    text-align: center;
    font-size: 16px;
    color: #fff;
  }
  .line {
    width: 100%;
    height: 1px;
    background: url(${line}) no-repeat;
    background-size: 100% 100%;
  }
`;

export const MenuList = styled.div`
  width: 100%;
`;
