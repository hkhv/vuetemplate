import Vue from 'vue'
import Router from 'vue-router'
import sendAssets from '@/components/sendAssets'
import home from '@/pages/home/home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/sendAssets',
      name: 'sendAssets',
      component: sendAssets
    }
  ]
})
