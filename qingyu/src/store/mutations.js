let mutations = {
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
    msgShowIndex(state, v) {
        state.msgShowIndex = v;
    }
}

export default mutations;