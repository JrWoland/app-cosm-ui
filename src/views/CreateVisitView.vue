<template>
  <div>
  <form class="add-visit" >
    <label class="add-visit__label" for="firstName">
      <span class="add-visit__label-title">Klient</span>
      <select class="add-visit__input" v-model="selectedClient">
        <option class="add-visit__option" v-for="client in clientList" :value="client.id" :key="client.id">{{client.name}}</option>
      </select>
      <span class="add-visit__label-title">Rodzaj wizyty</span>
      <select class="add-visit__input">
        <option class="add-visit__option" v-for="visit in visitTypes" :value="visit.value" :key="visit.value">{{visit['pl-PL']}}</option>
      </select>
      <span class="add-visit__label-title">Data</span>
      <input class="add-visit__input" type="date"/>
      <span class="add-visit__label-title">Godzina</span>
      <input class="add-visit__input" type="time" step="60"/>
    </label>
    <AppButton class="add-visit__save-btn" :animate="false" @click="createVisit">
      Dodaj wizytę
    </AppButton>
  </form>

  </div>

</template>

<script>
import { Options, Vue } from 'vue-class-component'
import AppButton from '@/components/AppButton.vue'
import { visitTypes } from '@/assets/ts/visitsTypes'
import { clientList } from '../../mock/client'

@Options({
  name: 'CreateVisitView',
  components: { AppButton }
})
export default class CreateVisitView extends Vue {
  visitTypes = visitTypes;
  selectedClient = 'asd';
  clientList = clientList

  mounted () {
    this.selectedClient = this.$router.options.history.state.back.split('/').pop()
  }

  createVisit () {
    this.$router.back()
  }
}
</script>

<style lang="scss">
.add-visit {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;

  &__label {
    margin-top:10px;
    display: block;
    width: 90%;
  }

  &__label-title {
    display: block;
    width: 200px;
  }

  &__option {
    color: #ddd;
  }

  &__input {
    width: 100%;
    padding: 10px;
    border: none;

    &:focus {
      border-bottom: 1px solid rgb(250, 99, 255);
      outline: none;
    }
  }

  &__save-btn {
    margin-top: 20px;
    background-color: #fff;
    color: blue;
    width: 90%;
  }
}
</style>
