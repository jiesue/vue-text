import Vue from 'vue'
import Router from 'vue-router'
import EbookReader from '@/components/ebook/EbookReader'
import Ebook from '@/view/ebook/index.vue'
Vue.use(Router)
/* eslint-disable */
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/ebook',
            name: 'Ebook',
            component: Ebook,
            children:[
                {
                    path:':fileName',
                    component:EbookReader
                }
            ]
        },
        {
            path: '/',
            redirect: '/ebook'
        }
    ]















})