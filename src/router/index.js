import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import SignIn from '@/components/user/SignIn.vue'
import MainPage from '@/components/user/dashboard/MainPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn,
    },
    {
      path: '/user/dashboard',
      name: 'mainpage',
      component: MainPage,
    }
    
  ],
})

export default router
