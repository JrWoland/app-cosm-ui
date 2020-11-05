<template>
  <div class="home">
    <AppButton @click="navigateToPanel">Admin test</AppButton>
  </div>
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component'
import AppButton from '../components/AppButton.vue'

@Options({
  name: 'Home',
  components: { AppButton }
})

export default class Home extends Vue {
  private navigateToPanel () {
    this.$router.push({ path: '/panel' })
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
