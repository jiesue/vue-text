<template>
  <div class="show">
    <div class="online-tips">
      <span class="icon"></span>
      <span class="text">你封刀挂剑</span>
    </div>
    <div class="avatar-w">
      <img src="" alt="">
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/style/global.scss";
.show {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 3rem;
  border: $b;
  .online-tips {
    position: absolute;
    left: 0.32rem;
    top: 0rem;
    width: 1.82rem;
    height: 0.53rem;
    background: url(../../assets/img/bg_zaixian.png) 0/100% no-repeat;
    .text {
      font-size: 0.22rem;
      font-family: PingFang-SC-Regular;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      margin-left: 0.1rem;
      vertical-align: middle;
    }
    .icon {
      display: inline-block;
      vertical-align: middle;

      width: 0.19rem;
      height: 0.19rem;
      background: url(../../assets/img/ic_zaixian.png) 0/100% no-repeat;
    }
  }
}
</style>