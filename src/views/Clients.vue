<template>
  <div class="clients-list">
    <router-link
      v-for="(client, index) in clientsList"
      :key="index"
      class="clients-list__item"
      :to="`/client/${client._id}`"
    >
      <span>{{ client.name }} {{client.surname}}</span>
      <span>{{ client.phone }}</span>
    </router-link>

    <AppButton class="clients-list__add-client" @click="goToClientCreateForm">
      <i class="fas fa-plus"></i>
    </AppButton>
  </div>
</template>

<script lang="ts">
import AppButton from '../components/AppButton.vue'
import { Options, Vue } from 'vue-class-component'
import Client from '@/interfaces/Client'
import CosmApi from '@/api/CosmApi'

@Options({
  name: 'Clients',
  components: { AppButton }
})
export default class Clients extends Vue {
  public clientsList: Array<Client> = [];

  async created () {
    const clients: Array<Client> = await CosmApi.getClients()
    this.clientsList = clients
  }

  private goToClientCreateForm () {
    this.$router.push({
      path: '/create-client'
    })
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
@import "../assets/scss/mixins.scss";
.clients-list {
  list-style: none;
  text-align: left;
  padding: 0px 15px;

  &__item {
    @include list-item;
  }

  &__add-client {
    position: fixed;
    bottom: 20px;
    left: 20px;
    border-radius: 50px;
    height: 60px;
    width: 60px;
    padding: 0;
    font-size: 24px;
  }
}
</style>
