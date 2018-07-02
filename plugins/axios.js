import Vue from 'vue'
import axios from 'axios'
const isProdMode = Object.is(process.env.NODE_ENV, 'production')

const service = axios.create(
  {
    baseURL: isProdMode ? 'https://api.daker.xin/' : 'http://localhost:8080/'
  }
)

// 拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})

Vue.prototype.$http = axios
export default service
