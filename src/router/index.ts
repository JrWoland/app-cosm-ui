import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AppAddClientForm from '../components/AppAddClientForm.vue'
import AppClientCard from '../components/AppClientCard.vue'
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
    path: '/client/:id',
    name: 'Client',
    component: AppClientCard
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
