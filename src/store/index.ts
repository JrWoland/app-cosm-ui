import { createStore } from 'vuex'
import authStore from './modules/authStore'
import clientListStore from './modules/clientListStore'

export default createStore({
  modules: {
    authStore,
    clientListStore
  }
})
