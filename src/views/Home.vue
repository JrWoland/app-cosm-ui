<template>
  <div class="home">
    <form @submit.prevent="login">
      <label for="email" name="email">Email: <input v-model="email" type="email" name="email"></label>
      <label for="email" name="password">Password: <input v-model="password" type="password" name="password"></label>
      <AppButton @click="login">Login</AppButton>
    </form>
  </div>
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component'
import AppButton from '../components/AppButton.vue'
import store from '@/store'

@Options({
  name: 'Home',
  components: { AppButton }
})
export default class Home extends Vue {
  email = ''
  password = ''

  async login () {
    try {
      await store.dispatch('login', { email: this.email, password: this.password })
      this.$router.push({ path: '/clients' })
    } catch (error) {
      console.log(error, 'FAILED LOGIN')
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 100vh;
  form {
    display: flex;
    flex-direction: column;
  }
  a {
    text-decoration: none;
  }
  .go-to {
    background-color: #ff3beb;
    padding: 15px;
    color: white;
    border-radius: 5px;
  }
}
</style>
