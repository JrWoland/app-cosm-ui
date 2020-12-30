import axios from 'axios'

const $http = axios.create({
  baseURL: 'http://localhost:3000/'
  // baseURL: 'https://coms-test.ct8.pl/'
})
const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '').token : ''
$http.defaults.headers.common.Authorization = `Bearer ${token}`

export default $http
