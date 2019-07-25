

export default {
    state: {
        fileName: '123',
        menuVisible:false,
    },
    mutations: {
        setFileName(state, v) {
            state.fileName = v;
        },
        setMenuVisible(state, v) { 
            console.log(state.menuVisible);
            state.menuVisible = v;
        }
    },
    actions: {
        setFileName(context, v) {
           
          return  context.commit('setFileName', v)
        },
        setMenuVisible({ commit }, v) { 
           
            return  commit('setMenuVisible', v)
        }
    },

}