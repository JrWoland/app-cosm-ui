<template>
  <div class="clients-list">
    <router-link
      v-for="(client, index) in clientsList"
      :key="index"
      class="clients-list__item"
      :to="`/client/${client.id}`"
    >
      <span>{{ client.name }}</span>
      <span>{{ client.phone }}</span>
    </router-link>

    <AppButton class="clients-list__add-client" @click="goToClientCreateForm"><i class="fas fa-plus"></i></AppButton>
  </div>
</template>

<script lang="ts">
import AppButton from '../components/AppButton.vue'
import { Options, Vue } from 'vue-class-component'

import IClient from '../interfaces/IClient'

@Options({
  name: 'Clients',
  components: { AppButton }
})
export default class Clients extends Vue {
      public clientsList: Array<IClient> = [
        { id: 1, name: 'Anna asd', phone: '707-123-141' },
        { id: 2, name: 'Urszula Dzxc', phone: '505-123-312' },
        { id: 3, name: 'Agata Wzxc', phone: '606-123-125' },
        { id: 4, name: 'Karolina Czxc', phone: '405-123-341' },
        { id: 5, name: 'Barbara Adzxc', phone: '606-123-672' },
        { id: 6, name: 'Hanna Awezxc', phone: '123-123-512' },
        { id: 7, name: 'Wiesława Adzxc', phone: '555-123-312' },
        { id: 8, name: 'Anna asd', phone: '707-123-141' },
        { id: 9, name: 'Urszula Dzxc', phone: '505-123-312' },
        { id: 10, name: 'Agata Wzxc', phone: '606-123-125' },
        { id: 11, name: 'Karolina Czxc', phone: '405-123-341' },
        { id: 12, name: 'Barbara Adzxc', phone: '606-123-672' },
        { id: 13, name: 'Hanna Awezxc', phone: '123-123-512' }
      ]

      private goToClientCreateForm () {
        this.$router.push('/create-client')
      }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
.clients-list {
  list-style: none;
  text-align: left;

  &__item {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    margin: 15px;
    padding: 15px;
    box-shadow: $main-box-shadow;
    border-radius: $main-border-radius;
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
