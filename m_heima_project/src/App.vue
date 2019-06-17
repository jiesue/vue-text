<template>
  <div id="app">
    <!-- header -->
    <mt-header class="header" fixed title="固定在顶部"></mt-header>
    <transition :name="transitionName" mode="">
      <router-view/>
    </transition>
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/vip">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/cart">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">9</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>

      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  name: "App",
  data() {
    return {
      transitionName: "left"
    };
  },
  created() {
    Toast("提示信息");
  },
  watch: {
    $route(to, from) {
      to.meta.index>from.meta.index?this.transitionName='left':this.transitionName='right'
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 0.8rem;
  overflow-x: hidden;
  background: #fff;
}
.header {
  height: 0.8rem;
}
.left-enter {
  opacity: 0;
  transform: translateX(100%);
}
.left-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.right-enter {
  opacity: 0;
  transform: translateX(-100%);
}
.right-leave-to {
  opacity: 0;
  transform: translateX(100%);
  position: absolute;
}

.left-enter-to,
.left-leave,
.right-enter-to,
.right-leave {
  opacity: 1;
  transform: translateX(0);
}
.left-enter-active,
.left-leave-active,
.right-enter-active,
.right-leave-active {
  transition: all 1s ease;
}
</style>
