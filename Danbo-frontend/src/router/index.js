import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
   path: '/home',
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
  {
    path:'/topic',
    name:'topic',
    component: () => import("../views/topic/topic.vue")
  },
  {
    path:'/otherper',
    name:'otherper',
    component: () => import("../views/OtherPer/OtherPer.vue")
  },
  {
    path:'/search',
    name:'Search',
    component: () => import("../views/Search/Search.vue")
  },
  {
    path:'/blank',
    name:'blank',
    component: () => import("../views/blank/blank.vue")
  },
]

const router = new VueRouter({
  routes
})

export default router
