import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Home from './components/home/Home'
import Club from './components/club/Club'
import Me from './components/me/Me'
import Message from './components/message/Message'

Vue.use(Router)

let route = new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    // 配置router active的类名
    // 每个router都会经过/所以会被激活，通过exact可以精准选择所在路由
    linkActiveClass: '',
    linkExactActiveClass: 'active',
    routes: [{
        path: '/',
        redirect: '/login',
    }, {
        path: '/index',
        name: 'Index',
        redirect: '/index/home',
        component: Index,
        children: [{
            path: 'home',
            name: 'Home',
            component: Home,
        }, {
            path: 'message',
            name: 'Message',
            component: Message,
        }, {
            path: 'club',
            name: 'Club',
            component: Club,
        }, {
            path: 'me',
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
            import( /* webpackChunkName: "about" */ './views/Login.vue'),
        meta: {
            disNeedLogin: true
        }
    },
    {
        path: '/apply',
        name: 'Apply',
        component: () =>
            import('./views/Apply.vue'),
    }
    ]
})

route.beforeEach((to, from, next) => {
    console.log(to.path.slice(1));
    // console.log(from);

    if (to.matched.some(item => !item.meta.disNeedLogin)) {

        //  store是原来存储组件状态的，不是用来做本地数据存储的。
        // 本地存储可以用localStorage/sessionStorage或者cookie。
        // 你可以把它看做是一个js的缓存数据,所以刷新页面后下面语句会报错

        let info = route.app.$store.getters.userPhone;
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