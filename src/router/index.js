import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'login' }
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
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ]
})

export default router
