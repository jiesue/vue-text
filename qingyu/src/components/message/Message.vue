<template>
    <div class="message">
        <NavMessage />
        <div class="show-area">
            <div class="change-con-w" ref="changeW">
                <div class="chatlist" @startmove.stop="startmove">
                    <div class="item" v-for="(item,i) in 20">
                        {{i}}
                    </div>
                </div>
                <div class="friendlist">friendlist</div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";

import NavMessage from "@/components/message/NavMessage";
export default {
    components: { NavMessage },
    computed: {
        ...mapGetters(["msgShowIndex"])
    },
    methods:{
        startmove(){},
    },
    watch: {
        msgShowIndex(v) {
            this.$refs.changeW.style.transform = `translateX(${-50 * v}%)`;
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/global.scss";
.message {
    width: 100%;
    height: 100%;
    // background: #eee;
    -webkit-overflow-scrolling: touch;

    .show-area {
        position: relative;
        width: 100%;
        height: 100%;
        padding-bottom: 0.97rem;
        overflow: hidden;
        .change-con-w {
            position: absolute;
            display: flex;
            justify-content: center;
            flex-wrap: nowrap;
            width: 200%;
            height: 100%;
            transition: 1s;
            div {
                width: 50%;
                height: 100%;
                padding-top: 1.1rem;
            }
            .chatlist {
                overflow: scroll;
                -webkit-overflow-scrolling: touch;
                .item {
                    width: 100%;
                    height: 1.2rem;
                    border: $b;
                }
            }
        }
    }
}
</style>