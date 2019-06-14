import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Message from '@/components/Message'
import Find from '@/components/Find'
import Me from '@/components/Me'
import Heart from '@/components/Heart'
import Man from '@/components/Man'
import Woman from '@/components/Woman'
// import Login from '@/components/Login'

//懒加载 require.ensure()第一个参数为依赖对象数组  第三个参数为标识 同一标识的组件会打包在一起
// let Login = (resolve) => {
//   return require.ensure([], () => {
//     resolve(require('@/components/Login'))
//   },'abc')
// }
//另外一种方法 import(不支持标识) 
let Login = (resolve) => {
  return import('@/components/Login')
}
Vue.use(Router)

let route = new Router({
  mode: 'history',
  routes: [

    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/home/heart',
      children: [
        { path: 'heart', name: 'Heart', component: Heart },
        { path: 'man', name: 'Man', component: Man },
        { path: 'woman', name: 'Woman', component: Woman }

      ]
    },
    {
      path: '/',
      redirect: '/home/heart',
    },
    {
      path: '/find',
      name: 'Find',
      component: Find
    },
    {
      path: '/message',
      name: 'Message',
      component: Message,
      meta: {
        needLogin: true
      }
    },
    {
      path: '/me/:userId?',
      name: 'Me',
      component: Me,
      meta: {
        needLogin: true
      },
      children: [

      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },

  ],

})

route.beforeEach((to, from, next) => {
  if (to.matched.some(item => item.meta.needLogin)) {

    //  store是原来存储组件状态的，不是用来做本地数据存储的。
    // 本地存储可以用localStorage/sessionStorage或者cookie。
    // 你可以把它看做是一个js的缓存数据,所以刷新页面后下面语句会报错
    let info = route.app.$store.getters.getLoginStatus;
    if (info) {
      next()
    } else {
      route.push({
        path: '/login',
        query: {
          redirect: to.path.slice(1)
        }
      });
    }
  } else {
    next()
  }

})































export default route;