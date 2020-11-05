<template>
  <div class="client">
    <nav class="app-navigation">
      <router-link to="/clients"><button>back</button></router-link>
      <span>{{$route.params.id}}</span>
    </nav>
    client card
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  name: 'AppClientsCard'
})

export default class AppClientsCard extends Vue {}
</script>

<style>

</style>
