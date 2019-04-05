import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Home from '@/pages/Home'
import Login from '@/pages/login'
import Register from '@/pages/register'
import Profile from '@/pages/profile'

Vue.use(Router)

export default new Router({
  routes: [
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
        }
      ]
    }

  ]
})
