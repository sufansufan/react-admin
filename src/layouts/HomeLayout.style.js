import styled from 'styled-components';
import style from '../assets/globalStyle';

export const LayoutContainer = styled.div`
  aside {
    background: ${style['theme-color']};
    min-height: 100vh;
    flex: 0 0 250px !important;
    max-width: 250px !important;
    min-width: 250px !important;
    width: 250px !important;
  }
  header {
    background: #fff;
    box-shadow: 3px 3px 3px 1px #f2f2f2;
  }
`;

export const BreadcrumbContainer = styled.div`
  padding: 0 50px;
`;
