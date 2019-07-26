import Vuex from 'vuex'
import Vue from 'vue'
import book from './modules/book'
import getters from './getters.js'
/* eslint-disable */
Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        book
    },

    getters
})