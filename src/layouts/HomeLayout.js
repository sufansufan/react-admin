import React, { memo, useEffect, useCallback, useState }from 'react'
import { renderRoutes } from "react-router-config";
import { connect } from "react-redux";
import { Layout } from 'antd';
import { LayoutContainer, MainContent } from "./HomeLayout.style";
import LeftMenu from "./home/LeftMenu";
import HeaderComponent from "./home/Header";
import { queryMenu } from "../application/User/Login/store/actionCreators";
import Breadcrumb from "./home/Breadcrumb";
import { getStorage } from "../util/store";
const { Header, Sider, Content } = Layout;


const HomeLayout = (props) => {
  const { route, getMenuDispatch, menuList } = props;
  const [breadcrumb, setBreadcrumb] = useState([])
  const [ defaultOpenKeys, setDefaultOpenKeys ] = useState([])
  const [ defaultSelectedKeys, setDefaultSelectedKeys ] = useState([])
  useEffect(() => {
    getMenuDispatch()
  }, [getMenuDispatch]);
  useEffect(() => {
    const breadcrumbList =  getStorage({
      name: 'breadcrumb',
      type: 'session'
    })
    if(breadcrumbList && breadcrumbList.length) {
      handlerBreadcrumb(breadcrumbList)
      setBreadcrumb(breadcrumbList)
    }
  }, []);
  const getBreadcrumb = useCallback((data) => {
    handlerBreadcrumb(data)
    setBreadcrumb(data)
  }, [])
  const handlerBreadcrumb = (data) => {
    const deepbreadcrumb = JSON.parse(JSON.stringify(data))
    const lastIndex = deepbreadcrumb.pop()
    setDefaultOpenKeys([deepbreadcrumb.length && deepbreadcrumb[0].id]);
    setDefaultSelectedKeys([lastIndex.id])
  }
  const menuListJs = menuList ? menuList.toJS() : [];
  return (
    <LayoutContainer>
      <Layout>
        <Sider>
          <LeftMenu menuList={menuListJs} getBreadcrumb={getBreadcrumb}  breadcrumb={breadcrumb} defaultOpenKeys={defaultOpenKeys} defaultSelectedKeys={defaultSelectedKeys}/>
        </Sider>
        <Layout>
          <Header>
            <HeaderComponent/>
          </Header>
          <Content>
            <Breadcrumb breadcrumb={breadcrumb}/>
            <MainContent>
                {renderRoutes(route.routes)}
            </MainContent>
          </Content>
        </Layout>
      </Layout>
    </LayoutContainer>
  )
}

const mapStateToProps = state => ({
  menuList: state.getIn(['userLogin', 'menuList'])
})

const mapDispatchToProps = dispatch => {
  return {
    getMenuDispatch() {
      dispatch(queryMenu())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(HomeLayout))
