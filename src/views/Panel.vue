<template>
  <div class="panel">
    <AppNav>
      <router-link class="panel__link" :to="{name: 'Panel'}"><i class="fas fa-home"></i></router-link>
      <router-link class="panel__link" :to="{name: 'ClientsList'}"><i class="fas fa-users"></i></router-link>
    </AppNav>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import AppNav from '../components/AppNav.vue'

@Options({
  name: 'Panel',
  components: { AppNav }
})

export default class Panel extends Vue {}
</script>

<style lang="scss" scoped>
@import  '../assets/scss/variables.scss';
.panel {
  margin-top: $nav-bar-height;

  &__link {
    color: $font-color;
    font-size: 30px;
    margin-right: 15px;

  }

 a {
   &.router-link-exact-active {
       color: $main-color;
       border-bottom: 2px solid $main-color;
     }
 }
}

</style>
