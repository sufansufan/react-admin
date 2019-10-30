import * as actionTypes from "./contants";
import { fromJS } from 'immutable';

const defaultState = fromJS({
  token: '',
  userInfo: [],
  menuList: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_TOKEN:
      return state.set("token", action.data)
    case actionTypes.SET_USERINFO:
      return state.set("userInfo", action.data)
    case actionTypes.SET_MENU:
        return state.set("menuList", action.data)
    default:
      return state;
  }
}
