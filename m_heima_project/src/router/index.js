import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/tabbar/Home'
import Vip from '@/components/tabbar/Vip'
import Cart from '@/components/tabbar/Cart'
import Search from '@/components/tabbar/Search'
import New from '@/components/grid/New'
import PhotoList from '@/components/grid/PhotoList'
import GoodsList from '@/components/goods/GoodsList'
import GoodsInfo from '@/components/goods/GoodsInfo'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        index: 1
      },
     
    }, {
      path: '/vip',
      name: 'Vip',
      component: Vip,
      meta: {
        index: 2
      }
    }, {
      path: '/cart',
      name: 'Cart',
      component: Cart,
      meta: {
        index: 3
      }
    }, {
      path: '/search',
      name: 'Search',
      component: Search,
      meta: {
        index: 4
      }
    },{
      path: '/home/new',
      name: 'New',
      component:New,
    },{
      path: '/home/photolist',
      name: 'PhotoList',
      component:PhotoList,
    },{
      path: '/home/goodslist',
      name: 'GoodsList',
      component:GoodsList,
    },{
      path: '/home/goodsinfo/:id',
      name: 'GoodsInfo',
      component:GoodsInfo,
    }
  ],
  linkActiveClass: 'mui-active'
})
