<template>
  <div class="clients-list">
    <input type="text" class="clients-list__search" v-model="searchClient" placeholder="Szukaj klienta">
    <i class="fas fa-search"></i>
    <router-link
      v-for="(client, index) in clientListToDisplay"
      :key="index"
      class="clients-list__item"
      :to="`/client/${client._id}`"
    >
      <span>{{client.surname}} {{ client.name }}</span>
      <span>{{ client.phone }}</span>
    </router-link>

    <AppButton class="clients-list__add-client" @click="goToClientCreateForm">
      <template v-slot:icon>
        <i class="fas fa-plus"></i>
      </template>
      <template v-slot:text>
        <span class="clients-list__add-client-text">nowy klient</span>
      </template>
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
  public searchClient = '';

  async created () {
    this.clientsList = await CosmApi.getClients()
  }

  get clientListToDisplay () {
    return this.clientsList
      .sort((clientA, clientB) => clientA.surname > clientB.surname ? 1 : -1)
      .filter(({ name, surname }) => surname.toLowerCase().includes(this.searchClient.toLowerCase()) || name.toLowerCase().includes(this.searchClient.toLowerCase()))
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

  &__search {
    @include search-input;
    padding: 10px;
  }

  &__item {
    @include list-item;
  }

  &__add-client {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    bottom: 20px;
    left: 20px;
    border-radius: 50px;
    height: 60px;
    width: 60px;
    padding: 0;
    font-size: 22px;
  }

  &__add-client-text {
    margin-top: 5px;
    font-size: 8px;
  }
}
</style>
