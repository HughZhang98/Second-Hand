import Vue from 'vue'
import Router from 'vue-router'

import Start from '../pages/Start'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    {
      path: '/Home',
      name: 'Home',
      component: () => import('../pages/Home.vue')
    },
    {
      path: '/Class',
      name: 'Class',
      component: () => import('../pages/Class.vue')
    },
    {
      path: '/Shopping',
      name: 'Shopping',
      component: () => import('../pages/Shopping.vue')
    },
    {
      path: '/My',
      name: 'My',
      component: () => import('../pages/My.vue')
    },
    {
      path: '/Balance',
      name: 'Balance',
      component: () => import('../pages/Balance.vue')
    },
    {
      path: '/Detail/:id',//动态路由
      name: 'Detail',
      component: () => import('../pages/Detail.vue')
    },
  ]
})
