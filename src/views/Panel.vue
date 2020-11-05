<template>
  <div class="panel">

    <nav class="app-navigation">
      <router-link class="app-navigation__link" to="/panel"><i class="fas fa-home"></i></router-link>
      <router-link class="app-navigation__link" to="/clients"><i class="fas fa-users"></i></router-link>
    </nav>

    <router-view />
  </div>
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component'

@Options({
  name: 'Panel'
})

export default class Panel extends Vue {}
</script>

<style lang="scss" scoped>
@import  '../assets/scss/variables.scss';
.app-navigation {
  display: block;
  width: 100%;
  height: 45px;
  background-color: #fff;
  text-align: left;
  box-shadow: $main-box-shadow;
  &__link {
    color: $font-color;
    font-size: 30px;
    margin: 0px 5px;
  }

  &.router-link-exact-active {
      color: #42b983;
    }
}
</style>
