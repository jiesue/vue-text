<template>
  <div class="home">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in bannerList" :key="item.id">
        <img :src="item.src">
      </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <img src="static/menu/menu1.png">
          <div class="mui-media-body">新闻资讯</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <img src="static/menu/menu2.png">

          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <img src="static/menu/menu3.png">
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <img src="static/menu/menu4.png">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <img src="static/menu/menu5.png">         
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <img src="static/menu/menu6.png">  
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast, Swipe, SwipeItem } from "mint-ui";
export default {
  name: "Home",
  data() {
    return {
      bannerList: []
    };
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
  methods: {},
 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home{
  // padding-top:.8rem;
  height: 100%;
}
.mint-swipe {
  width: 7.5rem;
  height: 3.5rem;
}
.mint-swipe-item img {
  // width: 100%;
  height: 3.5rem;
  width: 7.5rem;
}
.mui-grid-view.mui-grid-9 {
  background: #fff;
  img{
    width: 1.5rem;
  }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: none;
}
</style>

