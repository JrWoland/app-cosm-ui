<template>
  <form class="visit-details app-form">

     <label for="visit-date">
       <span>Data wizyty:</span>
       <input type="date" :value="visit.date">
     </label>

     <label for="visit-date">
       <span>Godzina:</span>
       <input type="time" :value="visit.time">
     </label>

     <label for="visit-price">
       <span>Cena:</span>
       <input class="price" type="text" :value="visit.price">PLN
     </label>

    <label for="visit-purpose">
      <span>Cel wizyty:</span>
       <select name="visit-purpose" id="visit-purpose">
         <option value="1">Nowa aplikacja</option>
         <option value="2">Usunięcie rzęs</option>
         <option value="3">Uzupełnienie rzęs</option>
       </select>
     </label>

     <label for="visit-glue">
       <span>Klej:</span>
       <input type="text" :value="visit.glue">
     </label>

     <label for="visit-remover">
       <span>Remover:</span>
       <input type="text" :value="visit.remover">
     </label>

     <label for="visit-glue">
       <span>Skręt:</span>
       <AppCheckOption
        :available-options="['L','M','B','C','C+','D','D+']"
        :checked-options="visit.curve"
        />
     </label>

     <label for="visit-glue">
       <span>Grubość:</span>
       <AppCheckOption
        :available-options="[0.03 ,0.05, 0.07, 1]"
        :checked-options="visit.width"
        />
     </label>

  </form>
</template>

<script>
import { Options, Vue } from 'vue-class-component'
import AppCheckOption from './AppCheckOption.vue'
import { client } from '../../mock/client'

@Options({
  name: 'AppLashesDetails',
  components: { AppCheckOption }
})
export default class AppLashesDetails extends Vue {
  get visit () {
    return client.visits.find(visit => visit.id.toString() === this.$route.params.visitId.toString())
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/mixins.scss';
.app-form {
  @include app-form;
  .price {
    width: 60px;
  }
}

</style>
