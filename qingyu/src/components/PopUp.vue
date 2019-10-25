<template>
    <div class="popup" ref="popup" :class="{'active':showName!=''}">
        <div class="wrapper" @click="checkClose" ref="wrapper">
            <transition name="selected">
                <div :class="{'selected':true}" v-show="showName=='selected'" ref="seleted">
                    <p class="item" @click="click1">只看男生</p>
                    <p class="item" @click="click2">只看男生</p>
                    <p class="item" @click="click3">男女都看</p>
                    <p class="item" @click="click4">取消</p>
                </div>
            </transition>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
    data() {
        return {
            showName: ""
        };
    },
    computed: {},
    methods: {
        checkClose(event) {
            if (event.target === this.$refs.wrapper) {
                this.closePop();
            }
        },
        showPop(param) {
            this.$store.dispatch("popupTarget", param);
        },
        closePop() {
            this.$store.dispatch("popupTarget", "");
        },
        click1() {
            this.closePop();
        },
        click2() {
            this.closePop();
        },
        click3() {
            this.closePop();
        },
        click4() {
            this.closePop();
        }
    },
    computed: {
        ...mapGetters(["popupTarget"])
    },
    watch: {
        popupTarget(v) {
            this.showName = v;
        }
    }
};
</script>
<style lang="scss" scoped>
@import "../assets/style/global.scss";
.selected-enter-active,
.selected-leave-active {
    transition: 0.5s ease-in-out;
}
.selected-enter,
.selected-leave-to {
    bottom: -100% !important;
    // opacity: 0;
}
.selected-enter-to,
.selected-leave {
    bottom: 0;
    // opacity: 1;
}

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
        // display: flex;
        // justify-content: center;
        // align-items: center;
        width: 100%;
        height: 100%;
        // & > div {
        //     display: none;
        //     &.active {
        //         display: block;
        //     }
        // }
        .selected {
            position: absolute;
            // bottom: -100%;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 3rem;
            background: #fff;
            height: 4.46rem;
            padding: 0 0.6rem;
            background: rgba(255, 255, 255, 1);
            border-radius: 0.16rem 0.16rem 0px 0px;
            // background: url(../images/rule.png) 0/100% 100% no-repeat;
            p {
                width: 100%;
                height: 1.12rem;
                line-height: 1.12rem;
                border-bottom: 1px solid #eee;
                text-align: center;
                font-size: 0.3rem;
                font-family: PingFang-SC-Medium;
                font-weight: 600;
                color: rgba(34, 34, 34, 1);
                &:last-of-type {
                    color: #888888;
                }
            }
        }
    }
}
</style>