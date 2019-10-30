import { SET_MENU, SET_TOKEN, SET_USERINFO } from "./contants";
import { loginByUsername, getMenu } from '../../../../api/user/index'
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

export const setMenu = (data) => ({
  type: SET_MENU,
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
      setStorage({name: 'userInfo', content:loginInfo, type: 'local'})
      setStorage({name: 'breadcrumb', content: [], type: 'session'})
      dispatch(setToken(loginInfo.accessToken))
      dispatch(setUserInfo(loginInfo))
    }).catch(() => {
      console.log("登录失败！");
    })
  }
}

export const queryMenu = () => {
  return dispatch => {
    getMenu().then(({data}) => {
      dispatch(setMenu(data.data))
    })
  }
}
