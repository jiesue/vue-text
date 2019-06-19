<template>
  <div>
    <div class="mui-card">
      <div class="mui-card-content">
          <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          >
          <div class="ball" v-show="showBall"></div>
          </transition>
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
              <input id="test" class="mui-input-numbox" type="number" value="5">
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
          <mt-button type='primary' size="large" plain>图文介绍</mt-button>
          <mt-button type='danger' size="large" plain>图文评论</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
// import { Toast, Swipe, SwipeItem } from "mint-ui";
import mui from '../../lib/mui/js/mui.js'
mui.init();
export default {
  name: "New",
  data() {
    return {
      bannerList: [],
      showBall:true
    };
  },
  methods:{
      add(){

      },
      beforeEnter(el){
          el.style.transform='translate(0,0)'
      },
      enter(el,done){
          el.style.transform='translate(3rem,6rem)';
          el.style.transition = 'all 1s ease';
            done()
      },
      afterEnter(el){
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
.mui-card-footer{
    display:block;
}
.ball{
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 50%;
    background: red;
    position: absolute;z-index: 99;
    top:1rem;
    left: 1rem;
    // transform: translate(2rem,2rem)
}
</style>
