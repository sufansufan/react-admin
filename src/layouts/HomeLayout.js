import React, { memo, useEffect }from 'react'
import { renderRoutes } from "react-router-config";
import { Layout } from 'antd';
import { LayoutContainer } from "./HomeLayout.style";
import LeftMenu from "./home/LeftMenu";
import HeaderComponent from "./home/Header";
const { Header, Sider, Content } = Layout;


const HomeLayout = (props) => {
  const { route } = props;
  useEffect(() => {
    console.log(props)
  }, );
  return (
    <LayoutContainer>
      <Layout>
        <Sider>
          <LeftMenu/>
        </Sider>
        <Layout>
          <Header>
            <HeaderComponent/>
          </Header>
          <Content>
            {renderRoutes(route.routes)}
          </Content>
        </Layout>
      </Layout>
    </LayoutContainer>
  )
}

export default memo(HomeLayout)
