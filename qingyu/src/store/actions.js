 let actions = {
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
     msgShowIndex({ commit }, v) {
         return commit('msgShowIndex', v)
     },
     userPhone({ commit }, v) {
         return commit('userPhone', v)
     },
 }

 export default actions;