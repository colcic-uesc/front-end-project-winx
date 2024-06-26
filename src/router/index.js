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
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/vacancy-list',
      name: 'vacancy-list',
      component: () => import('../views/VacanciesListView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/profile/:id',
      name: 'profile',
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/profile/:id/edit',
      name: 'profile-edit',
      component: () => import('../views/SignUpView.vue')
    }
  ]
})

export default router
