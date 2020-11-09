<template>
  <div class="clients-list">
    <router-link
      v-for="(client, index) in clientsList"
      :key="index"
      class="clients-list__item"
      :to="`/client/1`"
    >
      <span>{{ client.name }}</span>
      <span>{{ client.phone }}</span>
    </router-link>

    <AppButton class="clients-list__add-client" @click="goToClientCreateForm"
      ><i class="fas fa-plus"></i
    ></AppButton>
  </div>
</template>

<script lang="ts">
import AppButton from '../components/AppButton.vue'
import { Options, Vue } from 'vue-class-component'
import { clientList } from '../../mock/client'
import IClient from '../interfaces/IClient'

@Options({
  name: 'Clients',
  components: { AppButton }
})
export default class Clients extends Vue {
  public clientsList: Array<IClient> = [];

  async created () {
    this.clientsList = clientList
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
