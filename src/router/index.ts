import { createRouter, createWebHistory } from 'vue-router'
import landing from '../ui/landing/components/LandingView.vue' // Ensure this path matches the actual file location

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
      component: () => import('@/ui/landing/components/AboutView.vue'),
    },
    {
      path: '/registro',
      name: 'register',
      component: () => import('@/ui/auth/register/components/RegisterView.vue'),
    },
    {
      path: '/InicioSesion',
      name: 'login',
      component: () => import('@/ui/auth/login/components/LogInView.vue'),
    },
    {
      path: '/dashboard',

      component: () => import('@/ui/dashboard/components/DashboardView.vue'),
      children: [
          {path: '', name: 'dashboardHome', component: () => import('@/ui/dashboard/components/DashBoardHomeView.vue')},
          {path: 'unidades', name: 'dashboard', component: () => import('@/ui/dashboard/components/UnidadesView.vue')},
          {path:'personal', name: 'personal', component: () => import('@/ui/dashboard/components/PersonalView.vue')},
          { path: 'padrones', name: 'padrones', component: () => import('@/ui/dashboard/PadronesView.vue') }, // Nueva ruta

        ]
    }
  ],
})

export default router
