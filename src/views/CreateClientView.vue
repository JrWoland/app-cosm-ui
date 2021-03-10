<template>
  <div>
  <form class="add-client" >
    <label class="add-client__label" for="firstName">
      <span class="add-client__label-title">Imię</span>
      <input class="add-client__input" v-model="formNewClient.name" type="text" name="firstName" id="firstName"
    /></label>
    <label class="add-client__label" for="surname">
      <span class="add-client__label-title">Nazwisko</span>
      <input class="add-client__input" v-model="formNewClient.surname" type="text" name="surname" id="surname"
    /></label>
    <label class="add-client__label" for="email">
      <span class="add-client__label-title">email</span>
      <input class="add-client__input" v-model="formNewClient.email" type="email" name="email" id="email"
    /></label>
    <label class="add-client__label" for="tel">
      <span class="add-client__label-title">Telefon</span>
      <input class="add-client__input" v-model="formNewClient.phone" type="tel" name="tel" id="tel"
    /></label>
    <label class="add-client__label" for="age">
      <span class="add-client__label-title">Wiek</span>
      <input class="add-client__input" v-model="formNewClient.age" age="number" type="number" name="age" id="age"
    /></label>
    <AppButton class="add-client__save-btn" :animate="false" @click="createClient">
      <template v-slot:text>
        <span>Dodaj klienta</span>
      </template>
    </AppButton>
  </form>

  </div>

</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import AppButton from '@/components/AppButton.vue'
import Client from '@/interfaces/Client'
import CosmApi from '@/api/CosmApi'

@Options({
  name: 'CreateClientView',
  components: { AppButton }
})
export default class CreateClientView extends Vue {
  formNewClient: Client = {
    _id: '',
    name: '',
    surname: '',
    phone: '',
    age: undefined
  }

  async createClient () {
    try {
      await CosmApi.addNewClient(this.formNewClient)
      this.$router.push('/clients')
    } catch (error) {
      throw new Error(error)
    }
  }
}
</script>

<style lang="scss">
.add-client {
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
