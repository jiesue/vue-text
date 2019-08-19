<template>
    <div class="entry">
        <p class="back" v-show="show!=='select'" @click="change('select')"></p>
        <div class="select" v-show="show=='select'">
            <h1>
                <img src="../assets/img/logo.png" alt />
            </h1>
            <p class="btn in" @click="change('login')">登录</p>
            <p class="btn reg" @click="change('register')">注册</p>
        </div>
        <div class="register" v-show="show=='register'">register</div>
        <div class="login" v-show="show=='login'">
            <p>
                <input v-model="inputPhone" type="number" placeholder="输入手机号" />
            </p>
            <p>
                <input type="password" placeholder="请输入密码" />
            </p>
            <p class="btn-w">
                <span @click="submit">登录</span>
            </p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            show: "select",
            inputPhone: ""
        };
    },
    methods: {
        change(v) {
            this.show = v;
        },
        submit() {
            if (this.inputPhone.length !== 0) {
                this.$store.dispatch("userPhone", this.inputPhone);
                this.$router.push({path:'/'});
            }
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../assets/style/global.scss";
.entry {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    background: #000;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    .back {
        position: absolute;
        top: 0.15rem;
        left: 0.15rem;
        width: 0.41rem;
        height: 0.3rem;
        background: url(~@/assets/img/back2.png) 0 / contain no-repeat;
    }
    .select {
        h1 {
            img {
                width: 1.82rem;
                height: 0.95rem;
            }
        }
        .btn {
            width: 6.22rem;
            height: 0.96rem;
            text-align: center;
            font-size: 0.34rem;
            line-height: 0.96rem;
            border-radius: 0.16rem;
            &.in {
                margin-top: 1.35rem;
                color: #222222;
                background: linear-gradient(
                    90deg,
                    rgba(246, 191, 138, 1) 0%,
                    rgba(225, 167, 94, 1) 100%
                );
            }
            &.reg {
                margin-top: 0.4rem;
                color: #e1a75e;
                border: 1px solid rgba(225, 167, 94, 1);
            }
        }
    }
    .register {
    }
    .login {
        .btn-w {
            width: 100%;
            text-align: center;
            margin-top: 0.5rem;
            span {
                display: inline-block;
                width: 5.9rem;
                height: 0.96rem;
                line-height: 0.96rem;
                background: linear-gradient(
                    90deg,
                    rgba(246, 191, 138, 1) 0%,
                    rgba(225, 167, 94, 1) 100%
                );
                border-radius: 0.16rem;
                font-size: 0.34rem;
                font-family: PingFang-SC-Medium;
                font-weight: 500;
                color: rgba(34, 34, 34, 1);
            }
        }
    }
}
</style>