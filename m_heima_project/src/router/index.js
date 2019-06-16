import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/tabbar/Home'
import Vip from '@/components/tabbar/Vip'
import Cart from '@/components/tabbar/Cart'
import Search from '@/components/tabbar/Search'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: 'home',
      name: 'home',
      component: Home
    },{
      path: '/vip',
      name: 'Vip',
      component: Vip
    },{
      path: '/cart',
      name: 'Cart',
      component: Cart
    },{
      path: '/search',
      name: 'Search',
      component: Search
    },
  ],
  linkActiveClass:'mui-active'
})
