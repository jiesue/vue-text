<template>
    <div class="message">
        <NavMessage />
        <div class="show-area">
            <div class="change-con-w" ref="changeW">
                <div class="chatlist" @startmove.stop="startmove">
                    <div
                        class="item"
                        v-for="(item,i) in msgList"
                        :key="i"
                        @touchstart="touchstart"
                        @touchend="touchend"
                    >
                        <div class="avatar-w">
                            <img :src="item.avatar" class="avatar" />
                            <span class="msg-num" v-show="item.msgNum">{{item.msgNum}}</span>
                        </div>
                        <div class="info">
                            <p class="line1">
                                <span class="nick">{{item.nick}}</span>
                                <span class="icon-v"></span>
                                <span class="level-num">{{item.level}}</span>
                            </p>
                            <p class="chat-text">{{item.lastMsg}}</p>
                        </div>
                        <div class="time">{{item.time}}</div>
                    </div>
                </div>
                <div class="friendlist">
                    <div class="apply" @click="openApply">
                        <span class="icon-haoyou"></span>
                        <span class="text">我的好友请求</span>
                        <span class="applynum">09</span>
                        <span class="toright"></span>
                    </div>
                    <div class="list">
                        <div class="item" v-for="(item,i) in friendList" :key="i">
                            <div class="avatar-w">
                                <img :src="item.avatar" alt />
                            </div>
                            <div class="nick">{{item.nick}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";

import NavMessage from "@/components/message/NavMessage";
import { log } from "util";
export default {
    data() {
        return {
            msgList: [],
            friendList:[],
        };
    },
    created() {
        this.axios("/api/msgList").then(res => {
            this.msgList = res.data.data;
            console.log(res.data.data);
        });
         this.axios("/api/friendList").then(res => {
            this.friendList = res.data.data;
            console.log(res.data.data);
        });
    },
    components: { NavMessage },
    computed: {
        ...mapGetters(["msgShowIndex"])
    },
    methods: {
        startmove() {},
        touchstart(event) {
            event.currentTarget.style.background = "#F5F5F5";
        },
        touchend(event) {
            event.currentTarget.style.background = "#fff";
        },
        openApply(){
            this.$router.push({name:'Apply'})
        }
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
    overflow: hidden;
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
            & > div {
                width: 50%;
                height: 100%;
                padding-top: 1.1rem;
                padding-bottom: 0.97rem;
            }
            .chatlist {
                overflow: scroll;
                -webkit-overflow-scrolling: touch;
                .item {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    width: 100%;
                    height: 2rem;
                    padding: 0.4rem 0.3rem;
                    &.active {
                        background: #f5f5f5;
                    }
                    .avatar-w {
                        position: relative;
                        display: inline-block;
                        width: 1.2rem;
                        height: 1.2rem;

                        .avatar {
                            display: inline-block;
                            width: 1.2rem;
                            height: 1.2rem;
                            border-radius: 50%;
                        }
                        .msg-num {
                            position: absolute;
                            z-index: 0;
                            top: 0;
                            right: 0;
                            width: 0.38rem;
                            height: 0.38rem;
                            line-height: 0.38rem;
                            text-align: center;
                            background: rgba(253, 83, 83, 1);
                            border: 0.03rem solid rgba(255, 255, 255, 1);
                            border-radius: 0.17rem;
                            font-size: 0.22rem;
                            font-family: PingFang-SC-Medium;
                            font-weight: 500;
                            color: rgba(255, 255, 255, 1);
                        }
                    }
                    .info {
                        height: 100%;
                        margin-left: 0.2rem;
                        margin-top: 0.3rem;
                        width: 4.6rem;
                        text-align: left;
                        // border:$b;
                        .line1 {
                            .nick {
                                font-size: 0.36rem;
                                font-family: PingFang-SC-Bold;
                                font-weight: bold;
                                color: rgba(34, 34, 34, 1);
                            }
                            .icon-v {
                                position: relative;
                                display: inline-block;
                                width: 0.33rem;
                                height: 0.36rem;
                                vertical-align: middle;
                                background: url(~@/assets/img/v-icon.png) 0/100%
                                    no-repeat;
                                margin-left: 0.2rem;
                                z-index: 1;
                            }
                            .level-num {
                                display: inline-block;
                                vertical-align: middle;
                                width: 0.56rem;
                                height: 0.25rem;
                                text-align: center;
                                margin-left: -0.1rem;
                                background: url(~@/assets/img/level-bg.png) 0/100%
                                    no-repeat;
                                font-size: 0.19rem;
                                font-family: BigruixianBlackGBV10;
                                font-weight: 400;
                                color: rgba(255, 255, 255, 1);
                                line-height: 0.28rem;
                                -webkit-text-stroke: 1px undefined;
                                text-stroke: 1px undefined;
                            }
                        }
                        .chat-text {
                            margin-top: 0.19rem;
                            width: 100%;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            overflow: hidden;
                        }
                    }
                    .time {
                        margin-left: 0.1rem;
                    }
                }
            }
            .friendlist {
                position: relative;
                  overflow: hidden;
                  height: 100%;
                  padding-bottom: 0.97rem;
                -webkit-overflow-scrolling: touch;
                .apply {
                    position: absolute;
                    z-index: 1;
                    top:1.2rem;
                    left: 0.3rem;
                    width: 6.86rem;
                    height: 0.96rem;
                    background: rgba(245, 245, 245, 1);
                    border-radius: 0.48rem;
                  
                    span {
                        position: absolute;
                    }
                    .icon-haoyou {
                        top: 0.13rem;
                        left: 0.14rem;
                        width: 0.72rem;
                        height: 0.72rem;
                        background: url(~@/assets/img/haoyou.png) 0/100%
                            no-repeat;
                    }
                    .text {
                        top: 0.33rem;
                        left: 1.1rem;
                        font-size: 0.28rem;
                        font-family: PingFang-SC-Medium;
                        font-weight: 500;
                        color: rgba(34, 34, 34, 1);
                    }
                    .applynum {
                        top: 0.33rem;
                        right: 0.6rem;
                        width: 0.34rem;
                        height: 0.34rem;
                        line-height: 0.34rem;
                        background: rgba(253, 83, 83, 1);
                        border-radius: 50%;
                        font-size: 0.22rem;
                        font-family: PingFang-SC-Medium;
                        font-weight: 500;
                        color: rgba(255, 255, 255, 1);
                        text-align: center;
                    }
                    .toright {
                        top: 0.38rem;
                        right: 0.3rem;
                        width: 0.14rem;
                        height: 0.23rem;
                        background: url(~@/assets/img/toright.png) 0/100%
                            no-repeat;
                    }
                }
                .list {
                    padding-top: 0.98rem;
                  
                    height: 100%;
                    overflow: scroll;
                    padding-bottom: 0.3rem;
                    .item {
                        display: flex;
                        justify-content: flex-start;
                        width: 100%;
                        padding: 0 0.3rem;
                        height: 1.2rem;
                        margin-top:0.2rem;  
                        .avatar-w {
                            width: 1.2rem;
                            height: 1.2rem;
                            border-radius: 50%;
                            overflow: hidden;
                            img {
                                width: 1.2rem;
                                height: 1.2rem;
                                border-radius: 50%;
                                overflow: hidden;
                            }
                        }
                        .nick {
                            //  width: 3rem;
                            font-size: 0.3rem;
                            font-family: PingFang-SC-Bold;
                            font-weight: bold;
                            color: rgba(34, 34, 34, 1);
                            margin: 0.45rem 0 0 0.2rem;
                        }
                    }
                }
            }
        }
    }
}
</style>