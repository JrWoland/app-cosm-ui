import Client from '../interfaces/Client'
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

  async getClients () {
    const result = await $http.get('/account/clients')
    return result.data
  }

  async getClient (clientId: string | string[]) {
    const result = await $http.get(`/account/client/${clientId}`)
    return result.data
  }

  async addNewClient (data: Client) {
    const result = await $http.post('/account/client', data)
    return result.data
  }

  async updateClient (clientId: string | string[], data: Client) {
    const result = await $http.patch(`/account/client/${clientId}`, data)
    return result.data
  }

  async getVisitsList (clientId: string | string[]) {
    const result = await $http.get(`/account/client/${clientId}/visits`)
    return result.data
  }

  async getVisit (clientId: string | string[], visitId: string | string[]) {
    const result = await $http.get(`/account/client/${clientId}/visit/${visitId}`)
    return result.data
  }

  async updateVisit (clientId: string | string[], visitId: string | string[], data: any) {
    const result = await $http.patch(`/account/client/${clientId}/visit/${visitId}`, data)
    return result.data
  }
}

export default new CosmApi()
