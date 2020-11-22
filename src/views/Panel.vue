<template>
  <div class="panel">
    <AppNavSecondary>
      <router-link class="panel__link" to="/panel"><i class="fas fa-home"></i></router-link>
      <router-link class="panel__link" to="/clients"><i class="fas fa-users"></i></router-link>
      <button @click="getProducts" class="panel__link" to="/clients"><i class="fas fa-plus"></i></button>
    </AppNavSecondary>

    <router-view />

  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import AppNavSecondary from '../components/AppNavSecondary.vue'
import CosmApi from '../api/CosmApi'

@Options({
  name: 'Panel',
  components: { AppNavSecondary }
})

export default class Panel extends Vue {
  async getProducts () {
    const response = await CosmApi.getOrders()
    console.log(response)
  }
}
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
