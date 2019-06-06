<template>
  <div>
    <header>
      <ul class="tab">
        <router-link
          @click.native="change(i)"
          tag="li"
          :to="{name:item.to}"
          v-for="(item,i) of tabItem"
          :key="i"
          :class="{active:item.isActive}"
        >{{item.text}}</router-link>
      </ul>
      <p class="search">
        <i></i>
        <transition name="input">
          <input type="text" placeholder="搜索" @focus="focus" @blur="blur" :class="isFocus?'long':'normal'">
        </transition>
        <span class="btn"></span>
      </p>

      <swiper :swiperItem="swiperItem"></swiper>
    </header>
    <p>子路由显示区域</p>
    <router-view/>
  </div>
</template>

<script>
import Swiper from "@/components/Swiper";
export default {
  name: "Home",
  data() {
    return {
      tabItem: [
        { text: "热门", to: "Heart", isActive: true },
        { text: "男神", to: "Man", isActive: false },
        { text: "女神", to: "Woman", isActive: false }
      ],
      swiperItem: [
        {
          imgUrl: "../../static/img/banner1.png",
          title: "",
          linkUtl: ""
        },
        {
          imgUrl: "../../static/img/banner1.png",
          title: "",
          linkUtl: ""
        },
        {
          imgUrl: "../../static/img/banner1.png",
          title: "",
          linkUtl: ""
        }
      ],
      isFocus:false
    };
  },
  methods: {
    change(i) {
      console.log(i);
      var _this = this;
      this.tabItem.forEach(function(item, i) {
        _this.tabItem[i].isActive = false;
      });
      _this.tabItem[i].isActive = true;
    },
    focus() {
      // alert(1)
      console.log(1)
      this.isFocus=true;
    },
    blur() {
      console.log(0)
      this.isFocus=false;
    }
  },
  components: { Swiper }
};
</script>

<style lang="scss" scoped>
.input-enter-active {
  transition: all 1s ease;
}
.input-leave-active {
  transition: all 1s ease;
}
.input-enter,
.input-leave-to {
  width: 2.72rem * 1;
}
.long{
   width: 2.72rem * 2;
   opacity: 1 !important;

}
// .normal{
//    width: 2.72rem * 1;
// }
header {
  width: 100%;
  height: 4.36rem;
  padding-top: 0.8rem;
  background: linear-gradient(to bottom, #ff5e84, #ff928a);
  .tab {
    position: absolute;
    top: 0.1rem;
    left: 0;
    width: 100%;
    height: 0.4rem;
    padding-left: 0.1rem;
    li {
      height: 100%;
      line-height: 0.4rem;
      width: 1rem;
      text-align: center;
      padding: 0 0.1rem;
      margin-left: 0.1rem;
      color: #fff;
      font-size: 0.25rem;
      float: left;
      &.active {
        font-size: 0.4rem;
        color: #fff;
      }
    }
  }
  .search {
    position: relative;
    width: 100%;
    height: 0.26rem * 2;
    // border:1px solid red;
    font-size: 0;
    i {
      position: absolute;
      z-index: 1;
      top: 0.14rem;
      left: 0.6rem;
      width: 0.24rem;
      height: 0.24rem;
      background: url(../../static/img/search.png) 0 / cover no-repeat;
    }
    input {
      position: absolute;
      left: 0.4rem;
      // width: 2.72rem * 1;
      height: 0.26rem * 2;
      background: rgba(242, 242, 242, 1);
      opacity: 0.5;
      border-radius: 0.5rem;
      text-indent: 0.27rem * 2;
      border: none;
      outline: none;
    }
    .btn {
      position: absolute;
      right: 0.2rem;
      width: 0.6rem * 2;
      height: 0.26rem * 2;
      background: url(../../static/img/ranking-btn.png) 0 / cover no-repeat;
    }
  }
}
</style>

