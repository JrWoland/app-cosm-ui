<template>
  <div>
    <AppLashesDetails :visit="visit" :isEditable="isEditable"/>
  </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component'
import AppLashesDetails from './AppLashesDetails.vue'

@Options({
  name: 'AppClientVisit',
  components: { AppLashesDetails },
  props: {
    visit: {
      type: Object
    },
    isEditable: {
      type: Boolean,
      default: false
    }
  }
})
export default class AppClientVisit extends Vue {}
</script>

<style>

</style>
