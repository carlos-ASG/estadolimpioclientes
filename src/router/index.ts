import { createRouter, createWebHistory } from 'vue-router'
import landing from '../views/landingViews/LandingView.vue' // Ensure this path matches the actual file location

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: landing,
    },
    {
      path: '/acerca-de',
      name: 'about',
      component: () => import('../views/landingViews/AboutView.vue'),
    },
    {
      path: '/registro',
      name: 'register',
      component: () => import('../views/authViews/RegisterView.vue'),
    },
    {
      path: '/InicioSesion',
      name: 'login',
      component: () => import('../views/authViews/LogInView.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/dashboardViews/DashboardView.vue'),
    }
  ],
})

export default router
