<template>
  <form class="visit-details app-form">

     <label for="visit-date">
       <span>Data wizyty:</span>
       <input type="date" :value="visit.date" :disabled="!isEditable">
     </label>

     <label for="visit-date">
       <span>Godzina:</span>
       <input type="time" :value="visit.time" :disabled="!isEditable">
     </label>

     <label for="visit-price">
       <span>Cena:</span>
       <input class="price" type="text" :value="visit.price" :disabled="!isEditable">PLN
     </label>

    <label for="visit-purpose">
      <span>Cel wizyty:</span>
       <select name="visit-purpose" id="visit-purpose" v-model="visit.purpose" :disabled="!isEditable">
         <option>Nowa aplikacja</option>
         <option>Usunięcie rzęs</option>
         <option>Uzupełnienie rzęs</option>
       </select>
     </label>

     <label for="visit-glue">
       <span>Klej:</span>
       <input type="text" :value="visit.glue" :disabled="!isEditable">
     </label>

     <label for="visit-remover">
       <span>Remover:</span>
       <input type="text" :value="visit.remover" :disabled="!isEditable">
     </label>

     <label for="visit-glue">
       <span>Skręt:</span>
       <AppCheckOption
        :available-options="['L','M','B','C','C+','D','D+']"
        :checked-options="visit.curve"
        :isEditable="isEditable"
        />
     </label>

     <label for="visit-glue">
       <span>Grubość:</span>
       <AppCheckOption
        :available-options="[0.03 ,0.05, 0.07, 1]"
        :checked-options="visit.width"
        :isEditable="isEditable"
        />
     </label>

    <span>Notatki:</span>
      <label for="visit-notes">
        <textarea cols="30" rows="10" :disabled="!isEditable" :value="visit.notes"></textarea>
      </label>

  </form>
</template>

<script>
import { Options, Vue } from 'vue-class-component'
import AppCheckOption from './AppCheckOption.vue'

@Options({
  name: 'AppLashesDetails',
  components: { AppCheckOption },
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
export default class AppLashesDetails extends Vue {}
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
