import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Home from '@/pages/home'
import Login from '@/pages/login'
import Register from '@/pages/register'
import Profile from '@/pages/profile'
import Favorite from '@/pages/favorite'
import Order from '@/pages/order'
import Detail from '@/pages/detail'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: 'login',
          name: 'login',
          component: Login
        }, {
          path: 'register',
          name: 'register',
          component: Register
        }, {
          path: 'home',
          name: 'home',
          component: Home
        }, {
          path: 'profile',
          name: 'profile',
          component: Profile
        }, {
          path: 'favorite',
          name: 'favorite',
          component: Favorite
        }, {
          path: 'order',
          name: 'order',
          component: Order
        }, {
          path: 'detail',
          name: 'detail',
          component: Detail
        }
      ]
    }

  ]
})
