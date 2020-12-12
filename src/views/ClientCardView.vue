<template>
  <div class="client">
      <AppNavSecondary class="client__nav">
        <router-link to="/clients"><i  class="fas fa-arrow-left client__nav-arrow"></i></router-link>
        <span class="client__name">{{clientDetails.name}} {{clientDetails.surname}}</span>
      </AppNavSecondary>

      <AppInfoClient :client="clientDetails"/>
      <AppInfoVisits />

  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import AppNavSecondary from '../components/AppNavSecondary.vue'
import AppInfoClient from '../components/AppInfoClient.vue'
import AppInfoVisits from '../components/AppInfoVisits.vue'
import CosmApi from '@/api/CosmApi'

@Options({
  name: 'ClientCardView',
  components: { AppNavSecondary, AppInfoClient, AppInfoVisits }
})
export default class ClientCardView extends Vue {
  clientDetails = {}
  clientDetailsEditable = false

  created () {
    this.getClientInfo()
  }

  async getClientInfo () {
    const { clientId } = this.$route.params
    this.clientDetails = await CosmApi.getClient(clientId)
  }

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
