import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showUserIndex: 0,
    itemH: null,
    index0: 0,
    index1: 0,
    index2: 0
  },
  mutations: {
    showUserIndex(state, v) {
      state.showUserIndex = v;
    },
    itemH(state, v) {
      state.itemH = v;
    },
    index0(state, v) {
      state.index0 = v;
    }, index1(state, v) {
      state.index1 = v;
    }, index2(state, v) {
      state.index2 = v;
    },
  },
  actions: {
    showUserIndex(context, v) {

      return context.commit('showUserIndex', v)
    },
    itemH(context, v) {
      return context.commit('itemH', v)
    },
    nextItem({ commit, state }, i) {
      return commit('index' + i, state['index' + i]++)
    },
    preItem({ commit, state }, i) {
      return commit('index' + i, state['index' + i]++)
    }
  },
  getters: {
    showUserIndex(state) {
      return state.showUserIndex;
    },
    itemH(state) {
      return state.itemH;
    },
    index0(state) {
      return state.index0;
    },
    index1(state) {
      return state.index1;
    },
    index2(state) {
      return state.index2;
    },
  }
})
