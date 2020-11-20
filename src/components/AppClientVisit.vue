<template>
  <div>
    <AppLashesDetails />
  </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component'
import AppLashesDetails from './AppLashesDetails.vue'

@Options({
  name: 'AppClientVisit',
  components: { AppLashesDetails }
})
export default class AppClientVisit extends Vue {}
</script>

<style>

</style>
