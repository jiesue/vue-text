<template>
    <div class="msg">
        <span class="icon"></span>
        <span class="text">hahahhahahahaha</span>
    </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
@import "../assets/style/global.scss";
.msg {
    position: absolute;
    bottom: 1.4rem;
    left: 0.35rem;
    width: auto;
    height: 0.64rem;
    // border: $b;
    opacity: 0.6;
    border-radius: 0.32rem;
    line-height: 0.64rem;
    background: rgba(0, 0, 0, 0.9);
    padding: 0rem 0.05rem;
    .icon {
        display: inline-block;
        width: 0.56rem;
        height: 0.56rem;
        background: url("~@/assets/img/world.png") 0/100% no-repeat;
        vertical-align: top;
        margin-right: 0.1rem;
        margin-top:0.038rem;
    }
    .text {
        vertical-align: top;
        font-size: 0.24rem;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
    }
}
</style>