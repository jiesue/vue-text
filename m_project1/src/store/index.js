import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        isLogin:0
    },
    mutations: {
        setLogin(state,v) { 
            state.isLogin = v;
        }
    },
    actions: {
        //常常做异步请求
        setLogin(context,v) {
            context.commit('setLogin',v)
        }
    },
    getters: {
        getLoginStatus(state) { 
            
            // 对数据进行需要的处理返回
            return state.isLogin;
        }
    }

})