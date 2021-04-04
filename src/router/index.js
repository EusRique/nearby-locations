import Vue from 'vue'
import VueRouter from 'vue-router'

//Modules
import Guides from '@/router/modules/guides.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import (/* webpackChunkName: "home" */ '@/views/Home/Home.vue'),
    meta: {
      title: 'Seja bem vindo'
    }
  },

  ...Guides
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router