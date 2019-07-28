

export default {
    state: {
        fileName: '123',
        menuVisible: false,
        settingVisible: -1,  //0字号,1主题,2进度,3目录；
    },
    mutations: {
        setFileName(state, v) {
            state.fileName = v;
        },
        setMenuVisible(state, v) {
            console.log(state.menuVisible);
            state.menuVisible = v;
        },
        settingVisible(state, v) {
            state.settingVisible = v;
        },
    },
    actions: {
        setFileName(context, v) {
            return context.commit('setFileName', v)
        },
        setMenuVisible({ commit }, v) {
            return commit('setMenuVisible', v)
        },
        settingVisible(context, v) {
            return context.commit('settingVisible', v)
        },
    },


}