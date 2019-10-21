import React from "react";
import { Container } from "./Header.style";
import { Icon, Breadcrumb } from 'antd';

const Header = (props) => {
  return (
    <Container>
      <div>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
          <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
          <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div>
        <Icon type="poweroff" />
      </div>
    </Container>

  )
}

export default Header
