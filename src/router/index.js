import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'home' }
    },
    {
      path: '/inicio',
      name: 'home',
      component: HomeView
    },
    {
      path: '/lista-vagas',
      name: 'lista-vagas',
      component: () => import('../views/VacanciesListView.vue')
    }
  ]
})

export default router
