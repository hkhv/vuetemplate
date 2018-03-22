import Vue from 'vue'
import Router from 'vue-router'
import sendAssets from '@/components/sendAssets'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/sendAssets',
      name: 'sendAssets',
      component: sendAssets
    }
  ]
})
