import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import { useUserStore } from '../stores/user'

const requireAuth = async (to, from, next) => {
  const userStore = useUserStore()
  const user = await userStore.currentUser()
  if (user) {
    //console.log(user)
    next()
  } else {
    //console.log('no permitido')
    next('/login')
  }
}


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: requireAuth
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    }
  ]
})

export default router