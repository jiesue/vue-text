<template>
  <div class="goods-info">
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="showBall" ref="ball"></div>
    </transition>
    <div class="mui-card">
      <div class="mui-card-content">
        <!-- 这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等 -->
        <div class="mui-card-content-inner">
          <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in bannerList" :key="item.id">
              <img :src="item.src">
            </mt-swipe-item>
          </mt-swipe>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">商品的名称：154564654</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：
            <del>￥2399</del> &nbsp; &nbsp; &nbsp;销售价 ：
            <span class="now_price">￥2100</span>
          </p>
          <div>
            购买数量：
            <p class="mui-numbox" data-numbox-min="1" data-numbox-max="99">
              <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
              <input id="test" class="mui-input-numbox" type="number" value="5" v-model="buyNum">
              <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
            </p>
          </div>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="add">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">商品的参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品的货号：</p>
          <p>商品的库存：</p>
          <p>上架时间：</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain>图文介绍</mt-button>
        <mt-button type="danger" size="large" plain>图文评论</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
// import { Toast, Swipe, SwipeItem } from "mint-ui";
import mui from "../../lib/mui/js/mui.js";
mui.init();
export default {
  name: "New",
  data() {
    return {
      bannerList: [],
      showBall: false,
      buyNum:0,
    };
  },
  methods: {
    add() {
      this.showBall = !this.showBall;
    },
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      let ball = this.$refs.ball.getBoundingClientRect();
      let badge = document.querySelector("#badge").getBoundingClientRect();
      let disX = Math.abs(ball.left - badge.left);
      let disY = Math.abs(ball.top - badge.top);
      console.log(`${disX / 10}rem,${disY / 10}rem`);
      el.style.transform = `translate(${disX}px,${disY}px)`;
      el.style.transition = "all 1s cubic-bezier(.87,.26,.88,.43)";
      done();
    },
    afterEnter(el) {
      this.showBall = !this.showBall;
    }
  },
  created() {
    this.axios({
      methods: "get",
      url: "/bannerList",
      data: {}
    }).then(res => {
      console.log(res.data);
      this.bannerList = res.data.list;
    });
  },
  beforeRouteEnter(to, from, next) {
    console.log(to);
    next();
  }
};
</script>
<style lang="scss" scoped>
.goods-info {
  position: relative;
  height:100%;
}
.mint-swipe {
  width: 100%;
  height: 3.5rem;
}
.mint-swipe-item img {
  // width: 100%;
  height: 3.5rem;
  width: 6.5rem;
}
.now_price {
  color: red;
  font-weight: 500;
  font-size: 0.16rem;
}
.mui-card-footer {
  display: block;
}
.ball {
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 50%;
  background: red;
  position: absolute;
  z-index: 99;
  top: 6.1rem;
  left: 3.1rem;
  // transform: translate(2rem,2rem)
}
</style>
