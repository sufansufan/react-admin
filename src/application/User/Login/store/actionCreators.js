import { GET_TOKEN, SET_TOKEN, SET_USERINFO, REMOVE_TOKEN } from "./contants";
import { loginByUsername } from '../../../../api/user'
import { fromJS } from "immutable";
import { setStorage } from "../../../../util/store"

export const setToken = (data) => ({
  type: SET_TOKEN,
  data: data
})

export const setUserInfo = (data) => ({
  type: SET_USERINFO,
  data: fromJS(data)
})

export const login = (data) => {
  return dispatch => {
    loginByUsername(data).then(({data}) => {
      let loginInfo = data.data
      const params = {
        name: 'token',
        content: loginInfo.accessToken,
        type: 'cookies'
      }
      setStorage(params)
      setStorage({...params, type: 'session'})
      dispatch(setToken(loginInfo.accessToken))
      dispatch(setUserInfo(loginInfo))
    }).catch(() => {
      console.log("登录失败！");
    })
  }
}
