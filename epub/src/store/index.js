import Vuex from 'vuex'
import Vue from 'vue'
/* eslint-disable */
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        fileName: ''
    },
    mutations: {
        setFileName(state, v) {
            state.fileName = v;
        }
    },
    actions: {
        //常常做异步请求
        // setLogin({commit,state}, v) {
        //     commit('setLogin', v)
        // }

        setFileName(context, v) {
          return  context.commit('setFileName', v)
        }
    },
    getters: {
        getFileName(state) {
            // 对数据进行需要的处理返回
            return state.fileName;
        }
    }
})