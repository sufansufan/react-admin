
import React, { useEffect }from 'react';
import { Container, Box } from "./style";
import LoginFrom from "./LoginForm/index";
const Login = props => {

  useEffect(() => {
    console.log(props)
  })
  return (
    <Container>
      <div className='container-bg' />
      <Box>
        <div className='title'>
          <h2>海思医疗</h2>
          <h3>Business Management System</h3>
        </div>
        <LoginFrom />
      </Box>
    </Container>
  )
}

export default Login
