import { SET_COMMUNITY_LIST } from "./contants";
import { getList } from '../../../../api/user/community'
import { fromJS } from "immutable";

export const getCommunityList = (data) => ({
  type: SET_COMMUNITY_LIST,
  data: fromJS(data)
})

export const queryList = (data) => {
  return dispatch => {
    getList(data).then(({data}) => {
      const dataList = data.data.records;
      dataList.map(item => item.key = item.id)
      dispatch(getCommunityList(dataList))
    })
  }
}
