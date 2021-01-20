<template>
  <div class="client__info">

  <span>Informacje</span>

  <AppInfoBox :loading="isLoading">
      <template v-slot:header>
        <AppInfoBoxHeader>
          <div></div>
          <div v-show="clientDetailsEditable">
            <AppButton class= "sub-menu-btn sub-menu-btn--cancel" @click="clientDetailsEditable = false">
              <template v-slot:text>
                <span>Anuluj</span>
              </template>
            </AppButton>
            <AppButton class="sub-menu-btn" @click="updateClient">
              <template v-slot:text>
                Zapisz
              </template>
            </AppButton>
          </div>
          <AppSubMenuBtn v-show="!clientDetailsEditable" @item-menu-clicked="catchEvent" :items="['Edit']"/>
        </AppInfoBoxHeader>
      </template>

      <template v-slot:content>
        <form class="app-form">
          <label><span>Imię</span><input type="text" v-model="client.name" :disabled="!clientDetailsEditable"></label>
          <label><span>Nazwisko</span><input type="text" v-model="client.surname" :disabled="!clientDetailsEditable"></label>
          <label><span>Wiek</span><input type="text" v-model="client.age" :disabled="!clientDetailsEditable"></label>
          <label><span>Telefon</span><input type="text" v-model="client.phone" :disabled="!clientDetailsEditable"></label>
        </form>
      </template>
    </AppInfoBox>
  </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component'

import AppInfoBox from './AppInfoBox.vue'
import AppInfoBoxHeader from './AppInfoBoxHeader.vue'
import AppSubMenuBtn from './AppSubMenuBtn.vue'
import AppButton from './AppButton.vue'
import CosmApi from '@/api/CosmApi'

@Options({
  name: 'AppInfoClient',
  components: { AppInfoBox, AppInfoBoxHeader, AppSubMenuBtn, AppButton },
  props: {
    client: {
      type: Object
    }
  }
})
export default class AppInfoClient extends Vue {
    clientDetailsEditable = false
    isLoading = false

    catchEvent (type) {
      const events = {
        Edit: () => { this.clientDetailsEditable = true }
      }
      events[type]()
    }

    async updateClient () {
      this.isLoading = true
      const { clientId } = this.$route.params
      const { name, surname, age, phone } = { ...this.client }
      const newData = { name, surname, age, phone }
      await CosmApi.updateClient(clientId, newData)
      this.clientDetailsEditable = false
      this.isLoading = false
    }
}
</script>

<style lang="scss" scoped>
@import  '../assets/scss/variables.scss';
@import  '../assets/scss/mixins.scss';
.sub-menu-btn {
  @include sub-menu-btn;
}

.client {
  &__info {
    padding: 15px 0px;
  }

  .app-form {
    @include app-form;
  }
}
</style>
