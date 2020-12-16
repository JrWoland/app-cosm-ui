<template>
  <form class="visit-details app-form">

     <label for="visit-date">
       <span>Data wizyty:</span>
       <input type="date" v-model="visit.date" :disabled="!isEditable">
     </label>

     <label for="visit-date">
       <span>Godzina:</span>
       <input type="time" v-model="visit.time" :disabled="!isEditable">
     </label>

     <label for="visit-price">
       <span>Cena:</span>
       <input class="price" type="text" v-model="visit.price" :disabled="!isEditable">PLN
     </label>

    <label for="visit-purpose">
      <span>Cel wizyty:</span>
       <select name="visit-purpose" id="visit-purpose" v-model="visit.purpose" :disabled="!isEditable">
         <option class="add-visit__option" v-for="purpose in visitPurposes" :value="purpose.value" :key="purpose.value">{{purpose['pl-PL']}}</option>
       </select>
     </label>

     <label for="visit-glue">
       <span>Klej:</span>
       <input type="text" v-model="visit.glue" :disabled="!isEditable">
     </label>

     <label for="visit-remover">
       <span>Remover:</span>
       <input type="text" v-model="visit.remover" :disabled="!isEditable">
     </label>

     <label for="visit-glue">
       <span>Skręt:</span>
       <AppCheckOption
        :available-options="['L','M','B','C','C+','D','D+']"
        :checked-options="visit.curve"
        :isEditable="isEditable"
         @list-updated="(newList) => visit.curve = newList"
        />
     </label>

     <label for="visit-glue">
       <span>Grubość:</span>
       <AppCheckOption
        :available-options="[0.03 ,0.05, 0.07, 0.1]"
        :checked-options="visit.width"
        :isEditable="isEditable"
        @list-updated="(newList) => visit.width = newList"
        />
     </label>

    <span>Notatki:</span>
      <label for="visit-notes">
        <textarea cols="30" rows="10" :disabled="!isEditable" v-model="visit.notes"></textarea>
      </label>

  </form>
</template>

<script>
import { Options, Vue } from 'vue-class-component'
import AppCheckOption from './AppCheckOption.vue'
import { visitPurposes } from '@/assets/ts/visitsPurpose'

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
export default class AppLashesDetails extends Vue {
  visitPurposes = visitPurposes
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
