import Credencials from '../interfaces/Credencials'
import $http from './HttpService'

class CosmApi {
  async getApiVersion () {
    const result = await $http.get('/')
    return result.data
  }

  async registerUser (credencials: Credencials) {
    const result = await $http.post('/register', credencials)
    return result.data
  }

  async loginUser (credencials: Credencials) {
    const result = await $http.post('/user/login', credencials)
    return result.data
  }

  async getOrders () {
    const result = await $http.get('/orders')
    return result.data
  }
}

export default new CosmApi()
