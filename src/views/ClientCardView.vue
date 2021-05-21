<template>
  <div class="client">
      <AppNavComposed :action="toClients" :title="navTitle"/>
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
import AppNav from '../components/AppNav.vue'
import AppNavComposed from '../components/AppNavComposed.vue'

@Options({
  name: 'ClientCardView',
  components: { AppNav, AppInfoClient, AppInfoVisits, AppNavComposed }
})
export default class ClientCardView extends Vue {
  clientDetails= { name: '', surname: '' } as Client
  clientDetailsEditable = false

  get navTitle () {
    return `${this.clientDetails.name} ${this.clientDetails.surname}` || ''
  }

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
