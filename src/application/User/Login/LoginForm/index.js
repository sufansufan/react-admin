import React, { memo, useCallback } from 'react';
import { withRouter } from "react-router-dom";
import useForm from "rc-form-hooks";
import { Form, Icon, Input, Button} from 'antd';
import { FromBox } from "./style";

const LoginFrom = props => {
  const { loginByName } = props
  const { getFieldDecorator,  validateFields, values } = useForm();
  const triggerLogin = useCallback(() => {
    loginByName({
      loginType: 1,
      ...values
    }).then(res => {
      props.history.push('/')
    })
  }, [loginByName, values, props.history])

  const handleSubmit = e => {
    e.preventDefault();
    validateFields().then(() => {
        triggerLogin()
      }
    ).catch(e =>
      console.error(e.message)
    );
  }
  return (
    <FromBox>
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('account', {
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
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              size="large"
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="请输入密码"
              type="password"
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

export default memo(withRouter(LoginFrom))
