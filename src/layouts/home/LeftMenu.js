import React, { useState, useEffect, memo} from "react";
import { NavLink } from "react-router-dom";
import { Logo, Image, MenuList } from "./LeftMenu.style";
import { Menu, Icon } from 'antd';
import { idToLevel } from "../../util/index";
import { setStorage } from "../../util/store";
const { SubMenu } = Menu;

const LeftMenu = (props) => {
  const { menuList, getBreadcrumb, defaultOpenKeys, defaultSelectedKeys } = props;
  const [ iconList ] = useState(['user', 'lock', 'medicine-box', 'export']);
  const [ menu, setMenu] = useState(() => {});
  const [ openKeys, setOpenKeys] = useState([]);
  useEffect(() => {
    const list = menuList.map((item, index) => {
      if(item.children && item.children.length) {
        return (
          <SubMenu
              key={item.id}
              title={
                <span>
                  <Icon type={iconList[index]} />
                  <span>{item.name}</span>
                </span>
              }
            >
              {
                item.children.map(d => (
                  <Menu.Item key={d.id}>
                    <NavLink to={d.path}>{d.name}</NavLink>
                  </Menu.Item>
                ))
              }

          </SubMenu>
        )
      }else {
        return (
          <Menu.Item key={item.id}>
            <NavLink to={item.path}>{item.name}</NavLink>
          </Menu.Item>
        )
      }
    })
    setMenu(list)
    setOpenKeys(defaultOpenKeys)
  }, [menuList, iconList, defaultOpenKeys])
  const selectMenu = ({ key }) => {
    const selectList = idToLevel(menuList, Number(key));
    setStorage({
      name: 'breadcrumb',
      content: selectList,
      type: 'session'
    })
    getBreadcrumb(selectList)
  }
  const openChange = openKeys => {
    if(openKeys.length) {
      setOpenKeys([openKeys[openKeys.length - 1]])
    }else {
      setOpenKeys([])
    }
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
          mode="inline"
          theme="dark"
          onClick={selectMenu}
          openKeys={ openKeys }
          selectedKeys={defaultSelectedKeys}
          onOpenChange={openChange}
        >
          {menu}
        </Menu>
      </MenuList>
    </>
  )
}

export default memo(LeftMenu)
