<template>
  <div class="clients-list">
    <AppSearchBar :placeholder="'Szukaj klienta'" v-model="searchClient"/>
    <router-link
      v-for="(client, index) in clientListToDisplay"
      :key="index"
      class="clients-list__item"
      :to="`/client/${client._id}`"
    >
      <span class="clients-list__name">{{client.surname}} {{ client.name }}</span>
      <span class="clients-list__phone">{{ client.phone }}</span>
      <!-- <span class="tag">rzęsy</span> -->
    </router-link>

    <AppButton class="clients-list__add-client" @click="goToClientCreateForm">
      <template v-slot:icon>
        <i class="fas fa-plus"></i>
      </template>
    </AppButton>
  </div>
</template>

<script lang="ts">
import CosmApi from '@/api/CosmApi'
import Client from '@/interfaces/Client'
import { Options, Vue } from 'vue-class-component'
import AppButton from '../components/AppButton.vue'
import AppSearchBar from '../components/AppSearchBar.vue'

@Options({
  name: 'Clients',
  components: { AppButton, AppSearchBar }
})
export default class Clients extends Vue {
  public clientsList: Array<Client> = [];
  public searchClient = '';

  async created () {
    this.clientsList = await CosmApi.getClients()
  }

  get clientListToDisplay () {
    return this.clientsList
      .sort((clientA, clientB) => clientA.surname.localeCompare(clientB.surname))
      .filter(({ name, surname }) => surname.toLowerCase().includes(this.searchClient.toLowerCase()) || name.toLowerCase().includes(this.searchClient.toLowerCase()))
  }

  public goToClientCreateForm () {
    this.$router.push({
      path: '/create-client'
    })
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
@import "../assets/scss/mixins.scss";
.tag {
  background-color: rgb(35, 238, 218);
  color: rgb(0, 89, 18);
  width: fit-content;
  font-size: 10px;
  padding: 1px 5px;
  border-radius: 3px;
  margin: 3px 5px 3px 0px;

}
.clients-list {
  list-style: none;
  text-align: left;
  padding: 0px 15px 70px;

  &__item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
    margin: 15px 0px;
    padding: 15px;
    box-shadow: $main-box-shadow;
    border-radius: $main-border-radius;
  }

  &__phone {
    font-size: .7em;
    color: $secondary-font-color;
  }

  &__add-client {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    bottom: 20px;
    border-radius: 50px;
    height: 50px;
    width: 50px;
    padding: 0;
    font-size: 22px;
  }
}
</style>
