// import axios from 'axios'
import { ActionTree, GetterTree, MutationTree } from 'vuex'
import CosmApi from '../../api/CosmApi'
import $http from '../../api/HttpService'
import Credencials from '../../interfaces/Credencials'

interface User {
  token: string;
}

interface AuthState {
  user: User;
}

const state: AuthState = {
  user: { token: '' }
}

const getters: GetterTree<AuthState, any> = {

  loggedIn (state) {
    console.log('getter logged in')
    return !!state.user.token
  }
}

const mutations: MutationTree<AuthState> = {

  SET_USER_DATA (state: AuthState, userData: User) {
    state.user = userData
    localStorage.setItem('user', JSON.stringify(userData))
    $http.defaults.headers.common.Authorization = `Bearer ${userData.token}`
  },

  CLEAR_USER_DATA () {
    localStorage.removeItem('user')
    location.reload()
  }
}

const actions: ActionTree<AuthState, Credencials> = {

  async register ({ commit }, credentials: Credencials) {
    const response = await CosmApi.registerUser(credentials)
    commit('SET_USER_DATA', response)
  },

  async login ({ commit }, credentials: Credencials) {
    const response = await CosmApi.loginUser(credentials)
    commit('SET_USER_DATA', response)
  },

  logout ({ commit }) {
    commit('CLEAR_USER_DATA')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
