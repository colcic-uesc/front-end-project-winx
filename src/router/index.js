import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // not found route
    { path: '/:pathMatch(.*)*', 
      redirect: { name: 'home' }
    },
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
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignUpView.vue')
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
    },
    {
      path: '/edit/:id',
      name: 'edit-vacancy',
      component: () => import('../views/EditVacancyView.vue')
    }
  ]
})

export default router
