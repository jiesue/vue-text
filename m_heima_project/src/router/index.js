import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/tabbar/Home'
import Vip from '@/components/tabbar/Vip'
import Cart from '@/components/tabbar/Cart'
import Search from '@/components/tabbar/Search'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        index:1
      }
    }, {
      path: '/vip',
      name: 'Vip',
      component: Vip,
      meta: {
        index:2
      }
    }, {
      path: '/cart',
      name: 'Cart',
      component: Cart,
      meta: {
        index:3
      }
    }, {
      path: '/search',
      name: 'Search',
      component: Search,
      meta: {
        index:4
      }
    },
  ],
  linkActiveClass: 'mui-active'
})
