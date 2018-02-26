import Vue from 'vue'
import Router from 'vue-router'
import goodDetail from '@/pages/goodDetail'
import cart from '@/pages/cart'
import home from '@/pages/home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/goodDetail',
    component: goodDetail
  }, {
    path: '/home',
    component: home
  }, {
    path: '/cart',
    component: cart
  }, {
    path: '*',
    redirect: '/goodDetail'
  }]
})
