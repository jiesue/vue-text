<template>
    <div class="popup" ref="popup" :class="{'active':this.popupTarget!=''}">
        <div class="wrapper" @click="checkClose" ref="wrapper">
            <transition name="selected">
                <div :class="{'selected':true,'active':this.popupTarget=='selected'}" ref="seleted">
                    <div class="close" onclick="closePop()"></div>
                </div>
            </transition>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
    methods: {
        checkClose(event) {
            if (event.target === this.$refs.wrapper) {
                closePop();
            }
        },
        showPop(param) {},
        closePop() {
            $(".popup").hide();
        }
    },
    computed: {
        ...mapGetters(["popupTarget"])
    },
    watch: {
        popupTarget() {}
    }
};
</script>
<style lang="scss" scoped>
@import "../assets/style/global.scss";
.popup {
    display: none;
    position: fixed;
    z-index: 20;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    &.active {
        display: block;
    }
    .wrapper {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        & > div {
            display: none;
            &.active {
                display: block;
            }
        }
        .selected {
            position: absolute;
        //    bottom: -100%;
            width: 100%;

            height: 3rem;
            background: #f40;
            // background: url(../images/rule.png) 0/100% 100% no-repeat;
        }
    }
}
</style>