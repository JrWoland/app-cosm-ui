<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Home from './views/Home.vue'
@Options({
  name: 'App',
  components: { Home }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "./assets/scss/variables.scss";
* {
    -webkit-tap-highlight-color: transparent;
}

body {
  background-color: #fafafa;
  margin: 0;
  color: $font-color;
  a {
    font-weight: bold;
    text-decoration: none;
    font-weight: 400;
    color: $font-color;
  }
}
#app {
  font-family: $main-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $font-color;
}

#nav {
  background-color: #fff;
  padding: 30px;

  a {
    font-weight: bold;
    text-decoration: none;
  }
}
</style>
