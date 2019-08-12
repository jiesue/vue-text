<template>
  <div class="top">
    <ul class="nav">
      <router-link tag="li" class="active" :to="{path:'/login'}">
        <span class="text">附近</span>
        <span class="icon-dotted"></span>
      </router-link>
      <router-link tag="li" :to="{path:'/login'}">
        <span class="text">活跃</span>
        <span class="icon-dotted"></span>
      </router-link>
      <router-link tag="li" :to="{path:'/login'}">
        <span class="text">新人</span>
        <span class="icon-dotted"></span>
      </router-link>
    </ul>
    <div class="more"></div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/style/global.scss";
.top {
  position: absolute;
  width: 100%;
  top: 0.2rem;
  left: 0;
  padding-left: 0.35rem;
  height: 0.8rem;
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
          color: rgba(255, 255, 255, 1);
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
        color: rgb(112, 106, 106);
        // opacity: 0.5;
      }
      .icon-dotted {
        position: absolute;
        display: none;
        bottom: 0;
        left: 0.54rem;
        width: 0.2rem;
        height: 0.24rem;
        background: url(../../assets/img/nav_dian.png) 0/100% no-repeat;
      }
    }
  }
  .more {
    position: absolute;
    top: 0.16rem;
    right: 0.32rem;
    width: 0.55rem;
    height: 0.4rem;
    background: url(../../assets/img/nav_more.png) 0/100% no-repeat;
  }
}
</style>