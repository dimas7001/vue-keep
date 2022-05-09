import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/MainView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/MainView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/EnterView.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import('../views/EnterView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
