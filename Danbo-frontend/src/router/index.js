import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
   path: '/Home',
   name: 'Home',
   component: () => import('../views/Home/Home.vue')
  },
  {
    path: '/',
    name: 'Sign',
    component: () => import('../views/Sign/Sign.vue')
   },
   {
    path: '/forget',
    name: 'Forget',
    component: () => import('../views/Forget/Forget.vue')
   },
   {
     path:'/follow',
     name:'Follow',
     component: () => import("../views/Follow/Follow.vue")
   },
   {
    path:'/personal',
    name:'personal',
    component: () => import("../views/Personal/Personal.vue")
  },
]

const router = new VueRouter({
  routes
})

export default router
