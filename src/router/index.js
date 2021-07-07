import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Restaurant from '../components/Restaurant.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/restaurant/:id',
    name: 'Restaurant',
    props: true,
    component: Restaurant
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
