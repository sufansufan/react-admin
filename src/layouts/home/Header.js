import React from "react";
import { Container } from "./Header.style";
import { Icon } from 'antd';

const Header = (props) => {
  return (
    <Container>
      <div>
        海思医疗管理系统
      </div>
      <div>
        <Icon type="poweroff" />
      </div>
    </Container>

  )
}

export default Header
