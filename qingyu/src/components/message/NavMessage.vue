<template>
    <div class="top">
        <ul class="nav">
            <li
                v-for="(item,i) of tabCons"
                :key="i"
                :class="{'active':i===a_index}"
                @click="changeTab(i)"
            >
                <span class="text">{{item}}</span>
                <span class="icon-dotted"></span>
                <span class="circle" v-show="hasMsg&&a_index!=i"></span>
            </li>
        </ul>
    </div>
</template>
<script>
import { log } from "util";
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            tabCons: ["私聊", "好友"],
            a_index: 0,
            hasMsg: true
        };
    },
    computed: {
        ...mapGetters(["msgShowIndex"])
    },
    methods: {
        changeTab(i) {
            this.a_index = i;
            this.$store.dispatch('msgShowIndex',i)
        }
    },
   
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/global.scss";
.top {
    position: absolute;
    width: 100%;
    top: 0rem;
    left: 0;
    padding-left: 0.35rem;
    padding-top: 0.2rem;
    background: #fff;
    height: 1rem;
    z-index: 10;
    .nav {
        li {
            position: relative;
            float: left;
            width: 1.2rem;
            height: 0.8rem;
            line-height: 0.4rem;
            &.active {
                .text {
                    font-size: 0.48rem;
                    font-family: PingFang-SC-Bold;
                    font-weight: bold;
                    color: rgba(0, 0, 0, 1);
                    //   vertical-align: top;
                }
                .icon-dotted {
                    display: block;
                }
            }
            .text {
                padding-top: 0.5rem;
                margin-top: 0.5rem;
                font-size: 0.34rem;
                font-family: PingFang-SC-Regular;
                font-weight: 400;
                transition: 0.5s;
                color: rgb(112, 106, 106);
                // opacity: 0.5;
            }
            .icon-dotted {
                position: absolute;
                bottom: 0;
                display: none;
                left: 0.54rem;
                width: 0.2rem;
                height: 0.24rem;
                background:  url(~@/assets/img/dian_msg.png) 0/100%
                    no-repeat;
            }
            .circle {
              position: absolute;
              right: 0;
              width: 0.16rem;
              height: 0.16rem;
              background: #FD5353;
              border-radius: 50%;
            }
        }
    }
}
</style>