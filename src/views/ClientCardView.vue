<template>
  <div class="client">
      <AppNavSecondary class="client__nav">
        <span @click="toClients"><i  class="fas fa-arrow-left client__nav-arrow"></i></span>
        <span class="client__name">{{clientDetails.name}} {{clientDetails.surname}}</span>
      </AppNavSecondary>

      <AppInfoClient :client="clientDetails"/>
      <AppInfoVisits />

  </div>
</template>

<script lang="ts">
import CosmApi from '@/api/CosmApi'
import Client from '@/interfaces/Client'
import { Options, Vue } from 'vue-class-component'
import AppInfoClient from '../components/AppInfoClient.vue'
import AppInfoVisits from '../components/AppInfoVisits.vue'
import AppNavSecondary from '../components/AppNavSecondary.vue'

@Options({
  name: 'ClientCardView',
  components: { AppNavSecondary, AppInfoClient, AppInfoVisits }
})
export default class ClientCardView extends Vue {
  clientDetails= { } as Client
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

  toClients () {
    this.$router.back()
  }
}
</script>

<style lang="scss" scoped>
@import  '../assets/scss/variables.scss';
.client {
  margin: $nav-bar-height 10px 0px 10px;

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
