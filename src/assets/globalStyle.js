import styled from 'styled-components';
const ContentHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & > .left {
    width: calc(100% - 300px);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    & > div {
      display: flex;
      align-items: center;
      & > div {
        width: 300px;
        margin-left: 10px;
        margin-top: 10px;
        display: flex;
      }
      & > span {
        margin-left: 20px;
        margin-top: 10px;
      }
    }
  }
  & > .right {
    width: 300px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    & > div {
      margin-top: 10px;
      margin-right: 20px;
    }
  }
`;

export const ContentTable = styled.div`
  padding: 20px;
`;


export default {
  "theme-color": '#001529',
  "primary-color": "#1890ff",
  ContentHeader,
  ContentTable
}
