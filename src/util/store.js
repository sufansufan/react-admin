import Cookies from "js-cookie";
const TokenKey = 'x-access-token'
var inFifteenMinutes = new Date(new Date().getTime() + 120 * 60 * 1000);

// 存储Storage
export const setStorage = (params = {}) => {
  const { name, content, type} = params
  const store = {
    dataType: typeof(content),
    type,
    content,
  }
  if(type === 'session') {
    window.sessionStorage.setItem(name, JSON.stringify(store))
  } else if(type === 'local') {
    window.localStorage.setItem(name, JSON.stringify(store));
  } else if(type === 'cookies') {
    Cookies.set(TokenKey, content, { expires: inFifteenMinutes })
  } else {
    console.log('存储出现问题')
  }
}

// 获取Storage
export const getStorage = (param = {}) => {
  const { name, type} = param
  if(type === 'session') {
    const data = JSON.parse(window.sessionStorage.getItem(name))
    return data && data.content
  }else if(type === 'local') {
    const data = JSON.parse(window.sessionStorage.getItem(name))
    return data && data.content
  } else if (type === 'cookies'){
    Cookies.get(TokenKey);
  }else {
    console.log('获取存储出现问题')
  }
}

// 删除
export const removeStorage = (param = {}) => {
  const { name, type} = param
  if(type === 'session') {
    window.sessionStorage.removeItem(name);
  }else if(type === 'local') {
    window.localStorage.removeItem(name);
  }else {
    console.log('删除存储出现问题')
  }
}
