import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Home from './components/home/Home'
import Club from './components/club/Club'
import Me from './components/me/Me'
import Message from './components/message/Message'

Vue.use(Router)

export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    // 配置router active的类名
    // 每个router都会经过/所以会被激活，通过exact可以精准选择所在路由
    linkActiveClass: '',
    linkExactActiveClass: 'active',
    routes: [{
            path: '/',
            name: 'Index',
            redirect: '/home',
            component: Index,
            children: [{
                    path: '/home',
                    name: 'Home',
                    component: Home,
                }, {
                    path: '/message',
                    name: 'Message',
                    component: Message,
                }, {
                    path: '/club',
                    name: 'Club',
                    component: Club,
                }, {
                    path: '/me',
                    name: 'Me',
                    component: Me,
                }

            ]
        },
        {
            path: '/login',
            name: 'Login',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/Login.vue')
        },
        {
            path: '/apply',
            name: 'Apply',
            component: () =>
                import ('./views/Apply.vue'),
        }
    ]
})