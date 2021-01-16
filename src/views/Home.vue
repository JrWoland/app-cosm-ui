<template>
  <div class="home">
    <form @submit.prevent="login">
      <label for="email" name="email"><span>Email </span><input v-model="email" type="email" name="email"></label>
      <label for="email" name="password"><span>Password </span><input v-model="password" type="password" name="password"></label>
      <AppButton class="login-btn" @click="login">
        <template v-slot:text>
          Login
        </template>
      </AppButton>
    </form>
    <span class="app-version">api.{{version}} ui.{{require('../../package.json').version}}</span>
  </div>
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component'
import AppButton from '../components/AppButton.vue'
import CosmApi from '@/api/CosmApi'
import store from '@/store'

@Options({
  name: 'Home',
  components: { AppButton }
})
export default class Home extends Vue {
  email = ''
  password = ''
  version = ''

  async mounted () {
    const result = await CosmApi.getApiVersion()
    this.version = result.version
  }

  async login () {
    try {
      await store.dispatch('login', { email: this.email, password: this.password })
      this.$router.push({ path: '/clients' })
    } catch (error) {
      alert('LOGIN ERROR')
    }
  }
}
</script>

<style lang="scss" scoped>
@import  '../assets/scss/mixins.scss';
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  form {
    @include app-form;
    width: 95%;
    max-width: 400px;
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

  .login-btn {
    padding: 10px;
  }

  .app-version {
    position: absolute;
    margin: 2px;
    font-size: 10px;
    bottom: 0;
    left: 0;
  }
}
</style>
