<template>
  <div class="client__info">

  <span>Informacje</span>

  <AppInfoBox>
      <template v-slot:header>
        <AppInfoBoxHeader>
          <div></div>
          <div v-show="clientDetailsEditable">
            <AppButton class= "sub-menu-btn sub-menu-btn--cancel" @click="clientDetailsEditable = false">Cancel</AppButton>
            <AppButton class="sub-menu-btn" >Save</AppButton>
          </div>
          <AppSubMenuBtn v-show="!clientDetailsEditable" @item-menu-clicked="catchEvent" :items="['Edit']"/>
        </AppInfoBoxHeader>
      </template>

      <template v-slot:content>
        <p><span class="client__info-box__header__label">Wiek</span><input class="client__info-box__header__input" type="text" v-model="client.age" :disabled="!clientDetailsEditable"></p>
        <p><span class="client__info-box__header__label">Telefon</span><input class="client__info-box__header__input" type="text" v-model="client.phone" :disabled="!clientDetailsEditable"></p>
        <p><span class="client__info-box__header__label">Nast. wizyta</span><input class="client__info-box__header__input" type="datetime-local" v-model="client.nextVisit" disabled></p>
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

@Options({
  name: 'AppClientsCard',
  components: { AppInfoBox, AppInfoBoxHeader, AppSubMenuBtn, AppButton },
  props: {
    client: {
      type: Object
    }
  }
})
export default class AppInfoClient extends Vue {
    clientDetailsEditable = false

    catchEvent (type) {
      const events = {
        Edit: () => { this.clientDetailsEditable = true }
      }
      events[type]()
    }
}
</script>

<style lang="scss" scoped>
@import  '../assets/scss/variables.scss';
.sub-menu-btn {
  width: 80px;
  margin: 0px 5px;
  font-size: 13px;
  padding: 5px;
  border:  1px solid $main-color;

  &--cancel {
    background-color: white;
    color:  $main-color
  }
}

.client {
  &__info {
    padding: 15px 0px;
  }

  &__info-box {
    width: 100%;
    min-height: 100px;
    margin-top: 5px;
    padding: 10px;
    background-color: #fff;
    box-shadow: $main-box-shadow;
    border-radius: $main-border-radius;

     &__header {
       width: 100%;
       height: 40px;
       border-bottom: 1px solid $main-border-color;

       &__label {
         display: inline-block;
         width: 120px;
         font-weight: 700;
       }

       &__input {
         outline: none;
         color: $font-color;
         padding: 5px 10px;
         color: $main-color;
         border: 1px solid $main-color;
         border-radius: 5px;

         &:disabled {
           color: $font-color;
           background-color: transparent;
           border: none;
           border: 1px solid transparent;
         }
       }
    }
  }
}
</style>
