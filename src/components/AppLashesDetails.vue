<template>
  <form class="visit-details app-form">

     <label for="visit-date">
       <span>Data wizyty</span>
       <input type="date" v-model="visit.date" :disabled="!isEditable">
     </label>

     <label for="visit-date">
       <span>Godzina</span>
       <input type="time" v-model="visit.time" :disabled="!isEditable">
     </label>

     <label for="visit-price">
       <span>Cena</span>
       <input class="price" type="number" v-model="visit.price" :disabled="!isEditable">
     </label>

    <label for="visit-purpose">
       <span>Cel wizyty</span>
       <select name="visit-purpose" id="visit-purpose" v-model="visit.purpose" :disabled="!isEditable">
         <option class="add-visit__option" v-for="purpose in visitPurposes" :value="purpose.value" :key="purpose.value">{{purpose['pl-PL']}}</option>
       </select>
     </label>

     <label for="visit-glue">
       <span>Klej</span>
       <input type="text" v-model="visit.glue" :disabled="!isEditable">
     </label>

     <label for="visit-remover">
       <span>Remover</span>
       <input type="text" v-model="visit.remover" :disabled="!isEditable">
     </label>

     <label>
       <span>Metoda</span>
       <AppCheckOption
        :available-options="['2d', '2/3d', '3d', '4/6d','5/8d', 'MV']"
        :checked-options="visit.method"
        :isEditable="isEditable"
         @list-updated="(newList) => visit.method = newList"
        />
     </label>

     <label>
       <span>Skręt</span>
       <AppCheckOption
        :available-options="['L','M','B','C','C+','D','D+']"
        :checked-options="visit.curve"
        :isEditable="isEditable"
         @list-updated="(newList) => visit.curve = newList"
        />
     </label>

     <label>
       <span>Grubość</span>
       <AppCheckOption
        :available-options="[0.03 , 0.05, 0.07, 0.1]"
        :checked-options="visit.width"
        :isEditable="isEditable"
        @list-updated="(newList) => visit.width = newList"
        />
     </label>

     <label>
       <span>Długość</span>
       <AppCheckOption
        :available-options="[4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]"
        :checked-options="visit.length"
        :isEditable="isEditable"
        @list-updated="(newList) => visit.length = newList"
        />
     </label>

     <label v-if="modelingOptions.length > 0" class="modeling-layout">
       <span>Modelowanie</span>
       <select name="lashes-modeling" id="lashes-modeling" v-model="visit.lashesModelingType" :disabled="!isEditable">
        <option class="add-visit__option" v-for="modeling in lashesModelingTypes" :value="modeling.value" :key="modeling.value">{{modeling['pl-PL']}}</option>
       </select>
       <AppCheckOption
        :isDynamic="true"
        :available-options="modelingOptions"
        :checked-options="visit.modeling"
        :isEditable="isEditable"
        @list-updated="(newList) => visit.modeling = newList"
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
import { lashesModelingTypes } from '@/assets/ts/lashesModelingTypes'

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

  lashesModelingTypes = lashesModelingTypes
  get modelingOptions () {
    if (!this.visit.length.length || !this.visit.width) return []
    return this.visit.length.map(len => {
      return this.visit.width.map(wth => ({ width: wth, length: len }))
    }).flat()
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/mixins.scss';
.app-form {
  @include app-form;
  padding: 5px;
  label {
    flex-direction: column;
    margin: 20px 0px;
  }

  span {
    // border-bottom: 1px solid $main-border-color;
    width: 100%;
  }

  .modeling-layout {
    flex-direction: column;
  }
  .price {
    width: 60px;
  }
}

</style>
