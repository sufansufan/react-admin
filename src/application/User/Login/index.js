
import React, { useEffect, memo }from 'react';
import { Container, Box } from "./style";
import { connect } from "react-redux";
import LoginFrom from "./LoginForm/index";
import { login } from "./store/actionCreators"

const Login = props => {
  const { loginDispatch } = props
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
        <LoginFrom loginByName={loginDispatch}/>
      </Box>
    </Container>
  )
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => {
  return {
    loginDispatch(data) {
      return new Promise((resolve, reject) => {
        dispatch(login(data))
        resolve()
      });
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(memo(Login));
