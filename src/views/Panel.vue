<template>
  <div class="panel">
    <AppNavSecondary>
      <!-- <router-link class="panel__link" to="/panel"><i class="fas fa-home"></i></router-link> -->
      <router-link class="panel__link" to="/clients"><i class="fas fa-users"></i></router-link>
    </AppNavSecondary>

    <router-view />

  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import AppNavSecondary from '../components/AppNavSecondary.vue'

@Options({
  name: 'Panel',
  components: { AppNavSecondary }
})

export default class Panel extends Vue {}
</script>

<style lang="scss" scoped>
@import  '../assets/scss/variables.scss';
.panel {
  margin-top: 55px;

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
