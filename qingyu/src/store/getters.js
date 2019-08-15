let getters = {
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
    msgShowIndex: state => state.msgShowIndex,
}

export default getters;