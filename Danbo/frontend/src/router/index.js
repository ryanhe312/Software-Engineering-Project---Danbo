import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  //{
  //  path: '/',
  //  name: 'Home',
  //  component: () => import('../views/Home/Home.vue')
  //},
  {
<<<<<<< Updated upstream
    path: '/',
    name: 'Sign',
    component: () => import('../views/Sign/Sign.vue')
=======
     path: '/',
     name: 'Personal',
     component: () => import('../views/Personal/Personal.vue')
   }
]

const router = new VueRouter({
  routes
})

export default router
