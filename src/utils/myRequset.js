import axios from 'axios'
import store from '@/store'
import * as qs from 'qs'
// import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: 'http://localhost:8081', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout

  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
})

console.log(service.defaults.headers)
// service.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded'
// service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      // config.withCredentials = true
    }
    config.method === 'post'
      ? config.data = qs.stringify({ ...config.data })
      : config.params = { ...config.params }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)
// console.log(service.defaults.headers)

export default service
