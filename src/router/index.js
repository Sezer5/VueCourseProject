import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/home/Home.vue'
import SignIn from '@/components/user/SignIn.vue'
import MainPage from '@/components/user/dashboard/MainPage.vue'
import Dashboard from '@/components/user/dashboard/Dashboard.vue'
import Profile from '@/components/user/dashboard/Profile.vue'
import Courses from '@/components/user/dashboard/admin/Courses.vue'
import AddCourse from '@/components/user/dashboard/admin/AddCourse.vue'
import EditCourse from '@/components/user/dashboard/admin/EditCourse.vue'
import {isAuth,isLoggedIn} from '@/composable/auth'
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
      beforeEnter:isLoggedIn,
      component: SignIn,
    },
    {
      path: '/user/dashboard',
      name: 'mainpage',
      beforeEnter:isAuth,
      component: MainPage,
      children:[
        {path:'',component:Dashboard,name:'dashboard'},
        {path:'profile',component:Profile,name:'profile'},
        {path:'courses',component:Courses,name:'courses'},
        {path:'courses/addCourse',component:AddCourse,name:'courses_add'},
        {path:'courses/edit/:id',component:EditCourse,name:'courses_edit'},
      ]
    }
    
  ],
})

export default router
