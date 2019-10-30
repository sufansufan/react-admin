import styled from 'styled-components';
import style from '../../assets/globalStyle';
export const BreadcrumbContainer = styled.div`
  height: 40px;
  padding: 0 20px;
  border-bottom: 1px solid  #dee4e8;
  display: flex;
  align-items: center;
  .ant-breadcrumb {
    font-size: 16px;
    line-height: 40px;
  }
`;

export const LeftTitle = styled.div`
  height: 20px;
  width: 2px;
  border-left: 2px solid ${style['primary-color']};
  margin-right: 10px;
`;
