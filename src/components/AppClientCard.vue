<template>
  <div class="client">
      <AppNavSecondary class="client__nav">
        <router-link to="/clients"><i  class="fas fa-arrow-left client__nav-arrow"></i></router-link>
        <span class="client__name">{{clientDetails.name}}</span>
      </AppNavSecondary>

      <AppInfoClient :client="clientDetails"/>
      <AppInfoVisits :visits="clientDetails.visits"/>

  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { client } from '../../mock/client'
import AppNavSecondary from './AppNavSecondary.vue'
import AppInfoClient from './AppInfoClient.vue'
import AppInfoVisits from './AppInfoVisits.vue'

@Options({
  name: 'AppClientsCard',
  components: { AppNavSecondary, AppInfoClient, AppInfoVisits }
})
export default class AppClientsCard extends Vue {
  clientDetails = client
  clientDetailsEditable = false

  catchEvent () {
    this.clientDetailsEditable = true
  }
}
</script>

<style lang="scss" scoped>
@import  '../assets/scss/variables.scss';
.client {
  margin: $nav-bar-height 15px 0px 15px;

  &__nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 24px;
  }

  &__nav-arrow {
    color: $main-color;
    width: 20px;
  }

  &__name{
    flex-grow: 1;
    text-align: center;
  }
}
</style>
