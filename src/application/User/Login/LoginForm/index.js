import React, { memo } from 'react';
import useForm from "rc-form-hooks";
import { Form, Icon, Input, Button} from 'antd';
import { FromBox } from "./style";

const LoginFrom = props => {
  const { getFieldDecorator,  validateFields, values } = useForm();
  const handleSubmit = e => {
    e.preventDefault();
    validateFields().then(console.log(values)).catch(e => console.error(e.message));
  }
  return (
    <FromBox>
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              size="large"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="请输入用户名"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              size="large"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="请输入密码"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary" size="large">
            登录
          </Button>
        </Form.Item>
      </Form>
    </FromBox>
  )
}

export default memo(LoginFrom)
