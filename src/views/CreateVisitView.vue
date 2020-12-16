<template>
  <div>
  <form class="add-visit" >
    <label class="add-visit__label" for="firstName">
      <span class="add-visit__label-title">Klient</span>
      <select class="add-visit__input" v-model="selectedClientId">
        <option class="add-visit__option" v-for="client in clientList" :value="client._id" :key="client.id">{{client.name}}</option>
      </select>
      <span class="add-visit__label-title">Rodzaj wizyty</span>
      <select class="add-visit__input" v-model="selectedVisitType">
        <option class="add-visit__option" v-for="visit in visitTypes" :value="visit.value" :key="visit.value">{{visit['pl-PL']}}</option>
      </select>
      <span class="add-visit__label-title">Typ wizyty</span>
      <select class="add-visit__input" v-model="selectedVisitPurpose">
        <option class="add-visit__option" v-for="purpose in visitPurposes" :value="purpose.value" :key="purpose.value">{{purpose['pl-PL']}}</option>
      </select>
      <span class="add-visit__label-title">Data</span>
      <input class="add-visit__input" type="date" v-model="date"/>
      <span class="add-visit__label-title">Godzina</span>
      <input class="add-visit__input" type="time" step="60 " v-model="time"/>
    </label>
    <AppButton class="add-visit__save-btn" :animate="false" @click="createVisit">
      Dodaj wizytę
    </AppButton>
  </form>

  </div>

</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import AppButton from '@/components/AppButton.vue'
import { visitTypes } from '@/assets/ts/visitsTypes'
import { visitPurposes } from '@/assets/ts/visitsPurpose'
import Client from '@/interfaces/Client'
import CosmApi from '@/api/CosmApi'

@Options({
  name: 'CreateVisitView',
  components: { AppButton }
})
export default class CreateVisitView extends Vue {
  visitTypes = visitTypes;
  visitPurposes = visitPurposes;
  selectedClientId = '';
  selectedVisitType = '';
  selectedVisitPurpose = '';
  date = '';
  time = ''
  clientList: Array<Client> = [];

  async mounted () {
    this.clientList = await CosmApi.getClients()
    this.selectedClientId = this.$router.options.history.state.back.split('/').pop()
  }

  async createVisit () {
    const visit = {
      date: this.date,
      time: this.time,
      type: this.selectedVisitType,
      purpose: this.selectedVisitPurpose
    }
    await CosmApi.addVisit(this.selectedClientId, visit)
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
    color: rgb(107, 107, 107);
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
