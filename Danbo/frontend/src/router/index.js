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
    path: '/',
    name: 'Sign',
    component: () => import('../views/Sign/Sign.vue')
   }
]

const router = new VueRouter({
  routes
})

export default router
