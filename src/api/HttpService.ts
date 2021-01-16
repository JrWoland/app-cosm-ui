import $store from '@/store/index'
import axios from 'axios'
const $http = axios.create({
<<<<<<< HEAD
  baseURL: 'http://localhost:3000/'
  // baseURL: 'https://coms-test.ct8.pl/'
=======
  // baseURL: 'http://localhost:3000/'
  baseURL: process.env.VUE_APP_API_LINK

>>>>>>> development
})
const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '').token : ''
$http.defaults.headers.common.Authorization = `Bearer ${token}`
$http.interceptors.response.use(
  res => res,
  err => {
<<<<<<< HEAD
    if (err.response === 401) $store.dispatch('logout')
=======
    if (err.response.status === 401) $store.dispatch('logout')
>>>>>>> development
    return Promise.reject(err)
  }
)

export default $http
