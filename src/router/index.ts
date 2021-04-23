import AppClientVisit from '@/components/AppClientVisit.vue'
import ClientCardView from '@/views/ClientCardView.vue'
import ClientsList from '@/views/ClientsList.vue'
import CreateClientView from '@/views/CreateClientView.vue'
import CreateVisitView from '@/views/CreateVisitView.vue'
import Login from '@/views/Login.vue'
import Panel from '@/views/Panel.vue'
import { createRouter, createWebHistory, RouteLocationNormalizedLoaded, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/create-client',
    name: 'Create client',
    component: CreateClientView,
    meta: { requiresAuth: true }
  },
  {
    path: '/create-visit',
    name: 'Create visit',
    component: CreateVisitView,
    meta: { requiresAuth: true }
  },
  {
    path: '/panel',
    name: 'Panel',
    component: Panel,
    meta: { requiresAuth: true },
    children: [
      {
        path: '/clients',
        name: 'ClientsList',
        component: ClientsList,
        meta: { requiresAuth: true }
      },
      {
        path: '/client/:clientId',
        name: 'Client',
        component: ClientCardView,
        meta: { requiresAuth: true },
        children: [
          {
            path: 'visit/:visitId',
            name: 'Visit',
            component: AppClientVisit
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to: RouteLocationNormalizedLoaded, from: RouteLocationNormalizedLoaded, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user')
  if (to.matched.some(route => route.meta.requiresAuth) && !loggedIn) {
    next('/')
  } else {
    next()
  }
})

export default router
