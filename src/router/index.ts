import AppClientVisit from '@/components/AppClientVisit.vue'
import ClientCardView from '@/views/ClientCardView.vue'
import Clients from '@/views/Clients.vue'
import CreateClientView from '@/views/CreateClientView.vue'
import CreateVisitView from '@/views/CreateVisitView.vue'
import Home from '@/views/Home.vue'
import Panel from '@/views/Panel.vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home

  },
  {
    path: '/create-client',
    name: 'Create client',
    component: CreateClientView
  },
  {
    path: '/create-visit',
    name: 'Create visit',
    component: CreateVisitView
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
    component: ClientCardView,
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
