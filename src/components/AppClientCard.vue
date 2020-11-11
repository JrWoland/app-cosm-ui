<template>
  <div class="client">
      <AppNavSecondary class="client__nav">
        <router-link to="/clients"><i  class="fas fa-arrow-left client__nav-arrow"></i></router-link>
        <span class="client__name">{{clientDetails.name}}</span>
      </AppNavSecondary>

      <div class="client__info">

        <span>Informacje</span>

        <AppInfoBox>
          <template v-slot:header>
            <AppInfoBoxHeader>
              <AppSubMenuBtn :items="['Edit', 'Delete']"/>
            </AppInfoBoxHeader>
          </template>

          <template v-slot:content>
            <p><span class="client__info-box__header__label">Wiek</span><input class="client__info-box__header__input" type="text" v-model="clientDetails.age" :disabled="clientDetailsEditable"></p>
            <p><span class="client__info-box__header__label">Telefon</span><input class="client__info-box__header__input" type="text" v-model="clientDetails.phone" :disabled="clientDetailsEditable"></p>
            <p><span class="client__info-box__header__label">Nast. wizyta</span><input class="client__info-box__header__input" type="text" v-model="clientDetails.nextVisit" :disabled="clientDetailsEditable"></p>
          </template>
        </AppInfoBox>
      </div>

      <AppInfoBox>
        <template class="header" v-slot:header>
          <AppInfoBoxHeader/>
        </template>

        <template>

        </template>

      </AppInfoBox>

  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { client } from '../../mock/client'
import AppNavSecondary from './AppNavSecondary.vue'
import AppInfoBox from './AppInfoBox.vue'
import AppInfoBoxHeader from './AppInfoBoxHeader.vue'
import AppSubMenuBtn from './AppSubMenuBtn.vue'

@Options({
  name: 'AppClientsCard',
  components: { AppNavSecondary, AppInfoBox, AppInfoBoxHeader, AppSubMenuBtn }
})
export default class AppClientsCard extends Vue {
  clientDetails = client
  clientDetailsEditable = true

  catchEvent (event: Event) {
    console.log(event)
  }
}
</script>

<style lang="scss" scoped>
@import  '../assets/scss/variables.scss';

.client {

  margin: $nav-bar-height 15px 0px 15px;
  &__nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 24px;
  }

  &__nav-arrow {
    color: $main-color;
    width: 20px;
  }

  &__name{
    flex-grow: 1;
    text-align: center;
  }

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
         color: plum;
         border: 1px solid plum;
         border-radius: $main-border-radius;

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
