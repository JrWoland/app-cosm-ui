<template>
  <div class="clients-list__search">
    <AppSearchBar @update:modelValue="storeSearchingString" :placeholder="'Szukaj wg nazwiska'" v-model="searchClient" />
  </div>

  <div class="clients-list">
    <span v-for="(value, key, i) in clientListToDisplay" :key="i">
      <span class="clients-list__delimiter">{{ key }}</span>
      <router-link
        v-for="(client, j) in value"
        class="clients-list__item"
        :to="`/client/${client._id}`"
        :key="j"
      >
        <span class="clients-list__surname">{{
          client.surname.toUpperCase()
        }}</span>
        <span class="clients-list__name">{{ client.name }}</span>
        <span class="clients-list__phone">{{ client.phone }}</span>
      </router-link>
    </span>

    <AppButton class="clients-list__add-client" @click="goToClientCreateForm">
      <template v-slot:icon>
        <i class="lni lni-plus"></i>
      </template>
    </AppButton>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import CosmApi from '@/api/CosmApi'
import Client from '@/interfaces/Client'
import AppButton from '@/components/AppButton.vue'
import AppSearchBar from '@/components/AppSearchBar.vue'
import ClientCardView from './ClientCardView.vue'

@Options({
  name: 'ClientsList',
  components: { AppButton, AppSearchBar, ClientCardView }
})
export default class Clients extends Vue {
  public clientsList: Client[] = [];
  public searchClient = '';
  public test = {};

  async created () {
    if (this.$store.state.clientListStore.list.length > 0) {
      this.clientsList = [...this.$store.state.clientListStore.list]
    } else {
      this.clientsList = await CosmApi.getClients()
      this.$store.dispatch('setClientList', this.clientsList)
    }
  }

  mounted () {
    this.searchClient = this.$store.state.clientListStore.search
  }

  storeSearchingString (value: string) {
    this.searchClient = value
    this.$store.dispatch('setSearchValue', value)
  }

  get clientListFiltered (): Client[] {
    return this.clientsList
      .sort((clientA, clientB) =>
        clientA.surname.localeCompare(clientB.surname)
      )
      .filter(({ name, surname }) =>
        surname.toLowerCase().includes(this.searchClient.toLowerCase())
      )
  }

  get clientListToDisplay () {
    return [...this.clientListFiltered].reduce((prev, curr) => {
      if (!prev.hasOwnProperty(curr.surname.charAt(0))) {
        Object.defineProperty(prev, curr.surname.charAt(0).toString(), {
          value: [curr],
          enumerable: true
        })
      } else {
        prev[curr.surname.charAt(0).toString()].push(curr)
      }
      return prev
    }, {} as any)
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

  &__search {
    position: sticky;
    top: $nav-bar-height;
    background-color: #fff;
    width: 100%;
    margin-bottom: 20px;
    padding: 10px 10px 10px 50px;
  }

  &__delimiter {
    position: sticky;
    top: calc(#{$nav-bar-height} + 10px);
    width: 100%;
    display: block;
    width: 30px;
    height: 30px;
    background-color: #c6ff9d;
    text-align: center;
    line-height: 30px;
    border-radius: 50%;
    color: rgb(13, 111, 0);
    font-weight: bold;
  }

  &__surname {
    font-weight: bold;
    color: black;
  }

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
    font-size: 0.7em;
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
