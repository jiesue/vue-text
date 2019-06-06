import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Message from '@/components/Message'
import Find from '@/components/Find'
import Me from '@/components/Me'
import Heart from '@/components/Heart'
import Man from '@/components/Man'
import Woman from '@/components/Woman'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [

    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/heart',
      children: [
        { path: '/heart', name: 'Heart', component: Heart },
        { path: '/man', name: 'Man', component: Man },
        {path: '/woman', name: 'Woman', component: Woman}

      ]
    },
    {
      path: '/find',
      name: 'Find',
      component: Find
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: '/heart',
    }
  ]
})
