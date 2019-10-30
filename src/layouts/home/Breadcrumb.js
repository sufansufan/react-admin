import React, { memo } from "react";
import { withRouter } from "react-router-dom";
import { Breadcrumb } from 'antd';
import { BreadcrumbContainer, LeftTitle } from "./Breadcrumb.style";

const BreadcrumbComponent = (props) => {
  const { breadcrumb } = props
  return (
    <BreadcrumbContainer>
      <LeftTitle />
      <Breadcrumb separator=">">
        <Breadcrumb.Item href="">首页</Breadcrumb.Item>
        {
          breadcrumb.map(item => (
            <Breadcrumb.Item key={item.id}>{item.name}</Breadcrumb.Item>
          ))
        }
      </Breadcrumb>
    </BreadcrumbContainer>
  )
}

export default withRouter(memo(BreadcrumbComponent))
