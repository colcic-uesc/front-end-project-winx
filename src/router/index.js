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
      component: () => import('../views/SignUpView.vue'),
    },
    {
      path: '/professor/:id/profile',
      name: 'professor-profile',
      props: {professorMode: true},
      component: () => import('../views/ProfileView.vue'),
    },
    {
      path: '/student/:id/profile',
      name: 'student-profile',
      props: {professorMode: false},
      component: () => import('../views/ProfileView.vue'),
    },
    {
      path: '/professor/:id/profile/edit',
      name: 'professor-profile-edit',
      component: () => import('../views/SignUpView.vue'),
      props: {signUpMode: false}
    },
    {
      path: '/student/:id/profile/edit',
      name: 'student-profile-edit',
      component: () => import('../views/SignUpView.vue'),
      props: {signUpMode: false}
    },
    {
      path: '/vacancy/:id/edit',
      name: 'edit-vacancy',
      component: () => import('../views/VacancyView.vue'),
      props: {editMode: true}
    },
    {
      path: '/vacancy/create',
      name: 'create-vacancy',
      component: () => import('../views/VacancyView.vue'),
      props: {editMode: false}
    }
  ]
})

export default router
