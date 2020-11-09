<template>
  <div class="client">
      <AppNavSecondary class="client__nav">
        <router-link to="/clients"><i  class="fas fa-arrow-left client__nav-arrow"></i></router-link>
        <span class="client__name">{{clientDetails.name}}</span>
      </AppNavSecondary>

      <div class="client__info">
        <span>Informacje</span>
        <div class="client__info-box">
          <div class="client__info-box__header">

          </div>
          <p><span class="client__info-box__header__label">Wiek</span> {{clientDetails.age || 'brak'}}</p>
          <p><span class="client__info-box__header__label">Telefon</span> {{clientDetails.phone}}</p>
          <p><span class="client__info-box__header__label">Nast. wizyta</span> {{clientDetails.nextVisit}}</p>
        </div>
      </div>

      <div class="client__info">
        <span>Wizyty</span>
        <div class="client__info-box">
          <div class="client__info-box__header">

          </div>

        </div>
      </div>

  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { client } from '../../mock/client'
import AppNavSecondary from './AppNavSecondary.vue'

@Options({
  name: 'AppClientsCard',
  components: { AppNavSecondary }
})
export default class AppClientsCard extends Vue {
  clientDetails = client
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
    }
  }

}
</style>
