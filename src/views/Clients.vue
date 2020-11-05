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
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  name: 'Clients'
})
export default class Clients extends Vue {
  data () {
    return {
      clientsList: [
        { id: 1, name: 'Anna asd', phone: '707-123-141' },
        { id: 2, name: 'Urszula zxc', phone: '505-123-141' }
      ]
    }
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
}
</style>
