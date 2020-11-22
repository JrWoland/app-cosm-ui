import { createStore } from 'vuex'
import authStore from './modules/authStore'

export default createStore({
  modules: {
    authStore
  }
})
