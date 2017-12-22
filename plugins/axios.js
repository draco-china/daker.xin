import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'

const options = {}
// The server-side needs a full url to works
if (process.server) {
  options.baseURL = process.env.baseUrl
}
// 名称: 全替换函数
// 功能: 把json中所有的undefined值替换成空字符串
// 返回: 处理完成的json
// 参数: json 指定的json
const replaceAll = json => {
  // 如果json无内容，返回json
  if (json.isNull || json.isNaN || json.isUndefined || json === {}) {
    return json
  }
  for (const key in json) {
    if (json[key].isArray) {
      for (let i = 0, len = json[key].length; i < len; i++) {
        if (json[key][i].isObject) {
          json[key][i] = replaceAll(json[key][i])
        }
        if (json[key][i].isNull) {
          json[key][i] = ''
        }
        if (json[key][i].isUndefined) {
          json[key][i] = ''
        }
      }
    }
    if (json[key].isObject) {
      json[key] = replaceAll(json[key])
    }
    if (json[key].isNull) {
      json[key] = ''
    }
    if (json[key].isUndefined) {
      json[key] = ''
    }
  }
  return json
}

// 拦截器
axios.interceptors.request.use(config => {
  if (config.method === 'post') {
    config.data = replaceAll(config.data)
    config.data = qs.stringify(config.data)
  }
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})

Vue.prototype.$http = axios
export default axios.create(options)
