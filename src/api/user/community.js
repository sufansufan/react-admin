import request from  '../config'

export const getList = (data) => (
  request({
    url: '/maiun-hsyl/community/page',
    params: data,
    method: 'post'
  })
)

export const changeStatus = (data) => (
  request({
    url: '/maiun-hsyl/community/update/status',
    params: data,
    method: 'post'
  })
)
