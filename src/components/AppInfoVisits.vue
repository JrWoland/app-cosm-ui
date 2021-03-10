<template>
  <div class="client__info">

  <span>Wizyty</span>

  <AppInfoBox :loading="isLoading">
      <template v-slot:header>
        <AppInfoBoxHeader>
          <span @click="createVisit" v-show="!isVisitDetailsShown"><i  class="fas fa-plus nav-arrow"></i></span>
          <span v-show="isVisitDetailsShown" @click="showVisitsList"><i  class="fas fa-arrow-left nav-arrow"></i></span>
          <AppSubMenuBtn v-show="!clientDetailsEditable && isVisitDetailsShown" @item-menu-clicked="catchEvent" :items="['Edit', 'Remove visit']"/>
          <div v-show="clientDetailsEditable">
            <AppButton class= "sub-menu-btn sub-menu-btn--cancel" @click="onCancel">
              <template v-slot:text>
                <span>Anuluj</span>
              </template>
            </AppButton>
            <AppButton class="sub-menu-btn"  @click="onUpdate">
              <template v-slot:text>
                <span>Zapisz</span>
              </template>
            </AppButton>
          </div>
        </AppInfoBoxHeader>
      </template>

      <template v-slot:content>
        <div v-if="!isVisitDetailsShown">
          <p v-for="(visit, index) in visitsList" class="list-item" :key="index" @click="showVisitDetails(visit._id)">
            {{visit.type}} <span>{{new Date(visit.date).toLocaleDateString()}}</span>
          </p>
        </div>
        <AppClientVisit v-if="isVisitDetailsShown" :visit="currentVisit" :isEditable="clientDetailsEditable"/>
      </template>

    </AppInfoBox>
  </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component'
import * as dayjs from 'dayjs'
import AppInfoBox from './AppInfoBox.vue'
import AppInfoBoxHeader from './AppInfoBoxHeader.vue'
import AppSubMenuBtn from './AppSubMenuBtn.vue'
import AppButton from './AppButton.vue'
import AppClientVisit from './AppClientVisit.vue'
import CosmApi from '@/api/CosmApi'

@Options({
  name: 'AppClientsCard',
  components: { AppInfoBox, AppInfoBoxHeader, AppSubMenuBtn, AppButton, AppClientVisit }
})
export default class AppInfoVisits extends Vue {
 clientDetailsEditable = false
 visitsList = []
 currentVisit = {}
 visitBeforeUpdate = {}
 isVisitDetailsShown = false
 isLoading = false

 created () {
   this.getVisitsList()
 }

 catchEvent (event) {
   const events = {
     Edit: () => { this.clientDetailsEditable = true },
     'Remove visit': () => confirm('Chcesz usunąć wizytę?') ? this.removeVisit(this.currentVisit._id) : null
   }
   events[event]()
 }

 async showVisitDetails (visitId) {
   const { clientId } = this.$route.params
   this.currentVisit = await CosmApi.getVisit(clientId, visitId)
   this.currentVisit.date = dayjs(this.currentVisit.date).format('YYYY-MM-DD')
   this.visitBeforeUpdate = JSON.stringify(this.currentVisit)
   this.isVisitDetailsShown = true
 }

 async showVisitsList () {
   await this.getVisitsList()
   this.currentVisit = {}
   this.isVisitDetailsShown = false
   this.clientDetailsEditable = false
 }

 onCancel () {
   this.currentVisit = JSON.parse(this.visitBeforeUpdate)
   this.clientDetailsEditable = false
 }

 async onUpdate () {
   this.isLoading = true
   try {
     const { clientId } = this.$route.params
     await CosmApi.updateVisit(clientId, this.currentVisit._id, this.currentVisit)
   } catch (error) {
     alert(error)
   }
   this.clientDetailsEditable = false
   this.isLoading = false
 }

 async getVisitsList () {
   const { clientId } = this.$route.params
   this.visitsList = await CosmApi.getVisitsList(clientId)
 }

 async removeVisit (visitId) {
   const { clientId } = this.$route.params
   await CosmApi.removeVisit(clientId, visitId)
   this.showVisitsList()
 }

 createVisit () {
   this.$router.push({
     path: '/create-visit',
     name: 'Create visit',
     state: { clientId: this.$route.params.clientId }
   })
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
