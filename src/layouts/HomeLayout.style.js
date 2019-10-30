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
    padding: 0 20px;
  }
`;

export const BreadcrumbContainer = styled.div`
  padding: 0 50px;
`;

export const MainContent = styled.div`
  margin: 20px;
  background: #fff;
  border-radius: 10px;
  min-height: calc(100vh - 145px);
  animation: changeRouter 1s;
  @keyframes changeRouter{
    0%{
      transform: translateX(-100px);
    }
    10%{
      transform: translateX(-80px);
    }
    20%{
      transform: translateX(-60px);
    }
    30%{
      transform: translateX(-40px);
    }
    40%{
      transform: translateX(-20px);
    }
    50%{
      transform: translateX(100px);
    }
    60%{
      transform: translateX(80px);
    }
    70%{
      transform: translateX(60px);
    }
    80%{
      transform: translateX(40px);
    }
    90%{
      transform: translateX(20px);
    }
    100%{
      transform: translateX(0px);
    }
  }
`;
