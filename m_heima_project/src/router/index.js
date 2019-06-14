import Vue from '../../node_modules/vue/types'
import Router from '../../node_modules/vue-router/types'
import HelloWorld from './node_modules/@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
