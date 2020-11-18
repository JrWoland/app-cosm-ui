<template>
  <div class="client__info">

  <span>Wizyty</span>

  <AppInfoBox>
      <template v-slot:header>
        <AppInfoBoxHeader>
          <router-link to="/create-visit" v-show="!isVisitDetailsShown"><i  class="fas fa-plus nav-arrow"></i></router-link>
          <router-link :to="`/client/${$route.params.clientId}`" v-show="isVisitDetailsShown"><i  class="fas fa-arrow-left nav-arrow"></i></router-link>
          <AppSubMenuBtn v-show="isVisitDetailsShown" @item-menu-clicked="catchEvent" :items="['Edit', 'Remove visit']"/>
        </AppInfoBoxHeader>
      </template>

      <template v-slot:content>
        <router-link v-show="!isVisitDetailsShown" :to="`/client/${$route.params.clientId}/visit/${visit.id}`" v-for="(visit, index) in visits" class="list-item" :key="index">
          {{visit.type}} <span>{{new Date(visit.date).toLocaleString()}}</span>
        </router-link>
        <router-view v-show="isVisitDetailsShown" />
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
    visits: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    isVisitDetailsShown () {
      return !!this.$route.params.visitId
    }
  }
})
export default class AppInfoVisits extends Vue {
 clientDetailsEditable = false

 catchEvent () {
   console.log('clicked')
 }
}
</script>

<style lang="scss" scoped>
@import  '../assets/scss/variables.scss';
@import '../assets/scss/mixins.scss';

.list-item {
  @include list-item;
}

.nav-arrow {
  color: $main-color;
  font-size: 20px;
}
</style>
