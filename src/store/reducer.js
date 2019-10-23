import { combineReducers } from 'redux-immutable';
import { reducer as userLoginReducer  } from "../application/User/Login/store/index";

// 用来合并reducer
export default combineReducers({
  userLogin: userLoginReducer
})
