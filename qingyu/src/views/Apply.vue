<template>
    <div class="apply">
        <div class="topbar">
            <p class="title">biaoti</p>
            <div class="back-w" @click="back">
                <span class="icon-b"></span>
            </div>
        </div>
        <div class="list">
            <div class="item" v-for="(item,i) in applers" :key="i">
                <div class="info-w">
                    <div class="avatar-w">
                        <img :src="item.avatar" class="avatar" />
                    </div>
                    <div class="info">
                        <p class="line1">
                            <span class="nick">{{item.nick}}</span>
                            <span class="icon-v"></span>
                            <span class="level-num">{{item.level}}</span>
                        </p>
                        <p class="line2">
                            <span class="age">12岁</span>
                            <span class="city">广州市</span>
                            <span class="xing">天秤座</span>
                        </p>
                    </div>
                </div>
                <div class="chat-con">我是ada阿瑟东，很高兴认识你...</div>
                <div class="btn-w">
                    <div class="gif-w">
                        <img :src="item.avatar" alt />
                        <span>x00</span>
                    </div>
                    <div class="reject">拒绝</div>
                    <div class="receive">接受</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            applers: []
        };
    },
    created() {
        this.axios("/api/msgList").then(res => {
            this.applers = res.data.data;
        });
    },
    methods:{
        back(){
            this.$router.back()
            // this.$router.go(-1);//返回上一层
        }
    }
};
</script>
<style lang="scss" scoped>
@import "../assets/style/global.scss";

.apply {
    width: 100%;
    height: 100%;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
    .topbar {
        position: fiexd;
        top: 0;
        z-index: 1;
        height: 0.8rem;
        line-height: 0.8rem;
        width: 100%;
        .title {
            width: 100%;
            text-align: center;
            height: 0.8rem;
            font-size: 0.34rem;
            font-family: PingFang-SC-Regular;
            font-weight: bold;
            color: rgba(0, 0, 0, 1);
        }
        .back-w {
            position: absolute;
            top: 0;
            left: 0;
            width: 1rem;
            height: 0.8rem;
            text-align: center;
            .icon-b {
                display: inline-block;
                width: 0.41rem;
                height: 0.3rem;
                background: url(~@/assets/img/back.png) 0/100% no-repeat;
            }
        }
    }
    .list {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        overflow: auto;
        padding-bottom:0.8rem;

        .item {
            width: 7.2rem;
            height: 4.56rem;
            margin: 0 auto;
            padding: 0.43rem 0.4rem 0.53rem 0.4rem;

            background: url(~@/assets/img/card.png) 0/100% no-repeat;
            .info-w {
                width: 100%;
                height: 1.2rem;
                display: flex;
                justify-content: flex-start;
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
                            color: rgb(252, 248, 248);
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
                    .line2 {
                        margin-top: 0.19rem;
                        width: 100%;
                        font-size: 0.22rem;
                        font-weight: 400;
                        color: rgba(255, 255, 255, 1);
                        opacity: 0.4;
                        span {
                            margin-left: 0.23rem;
                        }
                    }
                }
            }
            .chat-con {
                margin-top: 0.34rem;
                width: 6.38rem;
                height: 0.8rem;
                background: rgba(0, 0, 0, 1);
                border-radius: 0px 0.08rem 0.08rem 0.08rem;
                font-size: 0.24rem;
                font-weight: 400;
                color: rgba(255, 255, 255, 1);
                line-height: 0.8rem;
                opacity: 0.6;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }
            .btn-w {
                width: 100%;
                height: 1.03rem;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                margin-top: 0.32rem;

                .gif-w {
                    // width: 1.03rem;

                    height: 1.03rem;
                    img {
                        display: inline-block;
                        width: 1.03rem;
                        height: 1.03rem;
                        vertical-align: middle;
                    }
                    span {
                        display: inline-block;
                        font-size: 0.24rem;
                        width: 0.44rem;
                        font-family: PingFang-SC-Bold;
                        font-weight: bold;
                        color: rgba(198, 149, 87, 1);
                        line-height: 0.24rem;
                        vertical-align: middle;
                        margin-left: 0.23rem;
                        // margin-top: 0.38rem;
                    }
                }
                .reject {
                    width: 1.85rem;
                    height: 0.8rem;
                    background: rgba(255, 255, 255, 0);
                    opacity: 0.8;
                    border-radius: 0.08rem;
                    border:1px solid rgba(225,167,94,1);
                    font-size: 0.28rem;
                    font-family: PingFang-SC-Medium;
                    font-weight: 500;
                    color: rgba(225, 167, 94, 1);
                    line-height: 0.8rem;
                    opacity: 0.8;
                    margin-left: 0.55rem;
                }
                .receive {
                    width: 1.85rem;
                    height: 0.8rem;
                    line-height: 0.8rem;
                    margin-left: 0.4rem;
                    background: linear-gradient(
                        90deg,
                        rgba(246, 191, 138, 1),
                        rgba(225, 167, 94, 1)
                    );
                    border-radius: 0.08rem;
                }
            }
        }
    }
}
</style>