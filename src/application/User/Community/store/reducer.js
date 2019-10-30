import * as actionTypes from "./contants";
import { fromJS } from 'immutable';

const defaultState = fromJS({
  list: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_COMMUNITY_LIST:
      return state.set("list", action.data)
    default:
      return state;
  }
}
