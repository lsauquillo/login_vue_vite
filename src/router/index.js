import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass:  "active",
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/login',
      name: 'login',      
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',      
      component: () => import('../views/RegisterView.vue')
    }
  ]
})

export default router