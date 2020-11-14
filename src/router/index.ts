import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AppAddClientForm from '../components/AppAddClientForm.vue'
import AppAddVisitForm from '../components/AppAddVisitForm.vue'
import AppClientCard from '../components/AppClientCard.vue'
import AppClientVisit from '../components/AppClientVisit.vue'
import Clients from '../views/Clients.vue'
import Home from '../views/Home.vue'
import Panel from '../views/Panel.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home

  },
  {
    path: '/create-client',
    name: 'Create client',
    component: AppAddClientForm
  },
  {
    path: '/create-visit',
    name: 'Create visit',
    component: AppAddVisitForm
  },
  {
    path: '/panel',
    name: 'Panel',
    component: Panel,
    children: [
      {
        path: '/clients',
        name: 'Clients',
        component: Clients
      }
    ]
  },
  {
    path: '/client/:clientId',
    name: 'Client',
    component: AppClientCard,
    children: [
      {
        path: 'visit/:visitId',
        name: 'Visit',
        component: AppClientVisit
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
