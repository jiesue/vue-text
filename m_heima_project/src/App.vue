<template>
  <div id="app">
    <!-- header -->
    <mt-header class="header" fixed title="固定在顶部"></mt-header>
    <transition :name="transitionName" mode>
      <router-view/>
    </transition>
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item1" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item1" to="/vip">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item1" to="/cart">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="badge">9</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>

      <router-link class="mui-tab-item1" to="/search">
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
      to.meta.index > from.meta.index
        ? (this.transitionName = "left")
        : (this.transitionName = "right");
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  // text-align: center;
  color: #2c3e50;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
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



// 重命名.mui-tab-item类解决切换冲突失效问题
.mui-bar-tab .mui-tab-item1.mui-active {
  color: #007aff;
}
.mui-bar-tab .mui-tab-item1 {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}
.mui-bar-tab .mui-tab-item1 .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item1 {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}
.mui-bar-tab .mui-tab-item1 .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
