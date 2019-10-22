import axios from "axios";
import { getStorage } from "../util/store"

//  获取token
const token = getStorage({ name: 'token', type: 'session' })
const baseUrl = 'http://192.168.1.136:28008';

// axios实例化
const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 100000,
  validateStatus: (status) => {
    return status >= 200 && status <= 500; // 默认的
  },
  withCredentials: true
});

//HTTPrequest拦截
axiosInstance.interceptors.request.use(config => {
  const meta = (config.meta || {});
  const isToken = meta.isToken === false;
  config.headers['Authorization'] = 'Basic c3dvcmQ6c3dvcmRfc2VjcmV0';
  if (token && !isToken) {
    config.headers['Blade-Auth'] = 'bearer ' + token
  }
  //headers中配置serialize为true开启序列化
  if (config.method === 'post' && meta.isSerialize === true) {
    // config.data = serialize(config.data);
  }
  return config
}, error => {
    return Promise.reject(error)
});

//HTTPresponse拦截
axiosInstance.interceptors.response.use(res => {
  const status = res.data.code || 200
  // const statusWhiteList = website.statusWhiteList || [];
  const message = res.data.msg || '未知错误';
  //如果在白名单里则自行catch逻辑处理
  // if (statusWhiteList.includes(status)) return Promise.reject(res);
  //如果是401则跳转到登录页面
  // if (status === 401) store.dispatch('FedLogOut').then(() => router.push({path: '/login'}));
  // 如果请求为非200否者默认统一处理
  if (status !== 200) {
    return Promise.reject(new Error(message))
  }
  return res;
}, error => {
  return Promise.reject(new Error(error));
})

export default axiosInstance
