<template>
  <div class="client__info">

  <span>Wizyty</span>

  <AppInfoBox>
      <template v-slot:header>
        <AppInfoBoxHeader>
          <router-link to="/create-visit" v-show="!isVisitDetailsShown"><i  class="fas fa-plus nav-arrow"></i></router-link>
          <span v-show="isVisitDetailsShown" @click="() => isVisitDetailsShown=false"><i  class="fas fa-arrow-left nav-arrow"></i></span>
          <AppSubMenuBtn v-show="!clientDetailsEditable && isVisitDetailsShown" @item-menu-clicked="catchEvent" :items="['Edit', 'Remove visit']"/>
          <div v-show="clientDetailsEditable">
            <AppButton class= "sub-menu-btn sub-menu-btn--cancel" @click="clientDetailsEditable = false">Cancel</AppButton>
            <AppButton class="sub-menu-btn" >Save</AppButton>
          </div>
        </AppInfoBoxHeader>
      </template>

      <template v-slot:content>
        <div v-show="!isVisitDetailsShown">
          <p v-for="(visit, index) in visits" class="list-item" :key="index" @click="showVisitDetails(visit)">
            {{visit.type}} <span>{{new Date(visit.date).toLocaleString()}}</span></p>
        </div>
        <AppClientVisit v-if="isVisitDetailsShown" :visit="currentVisit" :isEditable="clientDetailsEditable"/>
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
import AppClientVisit from './AppClientVisit.vue'

@Options({
  name: 'AppClientsCard',
  components: { AppInfoBox, AppInfoBoxHeader, AppSubMenuBtn, AppButton, AppClientVisit },
  props: {
    visits: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    visit () {
      return this.visits[0]
    }
  }
})
export default class AppInfoVisits extends Vue {
 clientDetailsEditable = false
 currentVisit = {}
 isVisitDetailsShown = false

 catchEvent (event) {
   const events = {
     Edit: () => { this.clientDetailsEditable = true },
     'Remove visit': () => console.log('Remove', this.currentVisit)
   }

   events[event]()
 }

 showVisitDetails (visit) {
   this.currentVisit = visit
   this.isVisitDetailsShown = true
 }
}
</script>

<style lang="scss" scoped>
@import  '../assets/scss/variables.scss';
@import '../assets/scss/mixins.scss';

.list-item {
  cursor: pointer;
  list-style: none;
  @include list-item;
}

.sub-menu-btn {
  @include sub-menu-btn;
}

.nav-arrow {
  color: $main-color;
  font-size: 20px;
}
</style>
