import React, { useState } from "react";
import { Logo, Image, MenuList } from "./LeftMenu.style";
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;

const LeftMenu = (props) => {
  const [collapsed, setCollapsed] = useState(false)
  const changeMenu = ({ item, key, keyPath, domEvent }) => {
    console.log(item, key, keyPath, domEvent)
  }
  return (
    <>
      <Logo />
      <Image>
        <div className='user-img'/>
        <p>管理员</p>
        <div className='line'/>
      </Image>
      <MenuList>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          onClick={changeMenu}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                <span>用户管理</span>
              </span>
            }
          >
            <Menu.Item key="community">社区管理</Menu.Item>
            <Menu.Item key="2">医生管理</Menu.Item>
            <Menu.Item key="3">患者管理</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="lock" />
                <span>账号管理</span>
              </span>
            }
          >
            <Menu.Item key="4">用户管理</Menu.Item>
            <Menu.Item key="5">角色管理</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <Icon type="medicine-box" />
                <span>服务管理</span>
              </span>
            }
          >
            <Menu.Item key="6">项目分类</Menu.Item>
            <Menu.Item key="7">项目管理</Menu.Item>
            <Menu.Item key="8">服务包管理</Menu.Item>
            <Menu.Item key="9">销售记录</Menu.Item>
            <Menu.Item key="10">服务包回收站</Menu.Item>
            <Menu.Item key="11">服务包日志</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <Icon type="export" />
                <span>设备管理</span>
              </span>
            }
          >
            <Menu.Item key="12">设备分类</Menu.Item>
            <Menu.Item key="13">设备明细</Menu.Item>
            <Menu.Item key="14">设备统计</Menu.Item>
            <Menu.Item key="15">库存操作记录</Menu.Item>
          </SubMenu>
        </Menu>
      </MenuList>
    </>
  )
}

export default LeftMenu
