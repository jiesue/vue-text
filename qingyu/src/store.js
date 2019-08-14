import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showUserIndex: 0,
    popupTarget: '',
    itemH: null,
    index0: 0,
    index1: 0,
    index2: 0,
    len0: 0,
    len1: 0,
    len2: 0,
  },
  mutations: {
    showUserIndex(state, v) {
      state.showUserIndex = v;
    },
    popupTarget(state, v) { 
      state.popupTarget = v;
    },
    itemH(state, v) {
      state.itemH = v;
    },
    index0(state, v) {
      v < 0 ? v = 0 : '';
      v > state.len0 - 1 ? v = state.len0 - 1 : '';
      state.index0 = v;
    },
    index1(state, v) {
      v < 0 ? v = 0 : '';
      v > state.len1 - 1 ? v = state.len1 - 1 : '';
      state.index1 = v;
    },
    index2(state, v) {
      v < 0 ? v = 0 : '';
      v > state.len2 - 1 ? v = state.len2 - 1 : '';
      state.index2 = v;
    },
    len0(state, v) {
      state.len0 = v;
    },
    len1(state, v) {
      state.len1 = v;
    },
    len2(state, v) {
      state.len2 = v;
    },
  },
  actions: {
    showUserIndex(context, v) {
      return context.commit('showUserIndex', v)
    },
    popupTarget(context, v) {
      return context.commit('popupTarget', v)
    },
    itemH(context, v) {
      return context.commit('itemH', v)
    },
    nextItem({ commit, state }, i) {
      return commit('index' + i, state['index' + i] + 1)
    },
    preItem({ commit, state }, i) {
      console.log("上一页");

      return commit('index' + i, state['index' + i] - 1)
    },
    len0({ commit }, v) {
      return commit('len0', v)
    },
    len1({ commit }, v) {
      return commit('len1', v)
    },
    len2({ commit }, v) {
      return commit('len2', v)
    },
  },
  getters: {
    showUserIndex(state) {
      return state.showUserIndex;
    },
    popupTarget(state) {
      return state.popupTarget;
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
    len0: state => state.len0,
    len1: state => state.len1,
    len2: state => state.len2,
  }
})
