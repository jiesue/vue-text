<template>
  <ul id="tabbar">
    <router-link tag="li" :to="{name:'Home'}" class="item1">
      <span></span>
    </router-link>
    <router-link tag="li" :to="{name:'Message'}" class="item2">
      <span></span>
    </router-link>
    <router-link tag="li" :to="{name:'Club'}" class="item3">
      <span></span>
    </router-link>
    <router-link tag="li" :to="{name:'Me'}" class="item4">
      <span></span>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: "TabBar",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/style/global";
#tabbar {
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-items: center;
  bottom: 0;
  width: 100%;
  height: 97px;
  line-height: 97px;
  background: #000;
  li {
    width: 80px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    &.item1 {
      span {
        display: inline-block;
        vertical-align: middle;
        width: 47px;
        height: 47px;
        background: url(../assets/img/nav_home.png) 0/100% no-repeat;
      }
      &.active span {
        background: url(../assets/img/nav_home_a.png) 0/100% no-repeat;
      }
    }
    &.item2 {
      span {
        display: inline-block;
        vertical-align: middle;
        width: 45px;
        height: 45px;
        background: url(../assets/img/nav_xiaoxi.png) 0/100% no-repeat;
      }
      &.active span {
        background: url(../assets/img/nav_xiaoxi_a.png) 0/100% no-repeat;
      }
    }
    &.item3 {
      span {
        display: inline-block;
        vertical-align: middle;
        width: 57px;
        height: 57px;
        background: url(../assets/img/nav_bei.png) 0/100% no-repeat;
      }
      &.active span {
        background: url(../assets/img/nav_bei_a.png) 0/100% no-repeat;
      }
    }
    &.item4 {
      span {
        display: inline-block;
        vertical-align: middle;
        width: 40px;
        height: 51px;
        background: url(../assets/img/nav_me.png) 0/100% no-repeat;
      }
      &.active span {
        background: url(../assets/img/nav_me_a.png) 0/100% no-repeat;
      }
    }
  }
}
</style>