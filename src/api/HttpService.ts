import $store from '@/store/index'
import axios from 'axios'
const $http = axios.create({
  // baseURL: 'http://localhost:3000/'
  baseURL: process.env.VUE_APP_API_LINK

})
const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '').token : ''
$http.defaults.headers.common.Authorization = `Bearer ${token}`
$http.interceptors.response.use(
  res => res,
  err => {
    if (err.response.status === 401) $store.dispatch('logout')
    return Promise.reject(err)
  }
)

export default $http
