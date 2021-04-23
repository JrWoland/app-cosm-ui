import Client from '@/interfaces/Client'
import { ActionTree, GetterTree, MutationTree } from 'vuex'

export interface ClientListState {
  list: Client[];
  search: string;
}

const state: ClientListState = {
  list: [],
  search: ''
}

const getters: GetterTree<Client[], unknown> = {

  clientList (state) {
    return state
  }
}

const mutations: MutationTree<ClientListState> = {

  SET_CLIENTS_LIST (state: ClientListState, list: Client[]) {
    state.list = [...list]
  },

  SET_SEARCH_VALUE (state: ClientListState, value: string) {
    state.search = value
  }
}

const actions: ActionTree<Client[], unknown> = {

  async setClientList ({ commit }, data) {
    commit('SET_CLIENTS_LIST', data)
  },

  setSearchValue ({ commit }, value) {
    commit('SET_SEARCH_VALUE', value)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
