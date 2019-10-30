import request from  '../config'

export const loginByUsername = (data) => (
  request({
    url: '/blade-auth/token',
    params: data,
    method: 'post'
  })
)

export const getMenu = () => (
  request({
    url: '/blade-system/menu/routes',
  })
)
