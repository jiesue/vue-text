<template>
  <div class="goods-list">
    <div class="goods-item" @click="go(1)">
      <img src="../../../static/img/01.jpg" alt>
      <h1 class="title">小米手机---------------------------的说法是的发送到</h1>
      <div class="info">
        <p class="price">
          <span class="new">￥100</span>
          <span class="old">￥99</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>
    <div class="goods-item"  @click="go(2)">
      <img src="../../../static/img/01.jpg" alt>
      <h1 class="title">小米手机---------------------------的说法是的发送到</h1>
      <div class="info">
        <p class="price">
          <span class="new">￥100</span>
          <span class="old">￥99</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>
    <div class="goods-item">
      <img src="../../../static/img/01.jpg" alt>
      <h1 class="title">小米手机---------------------------的说法是的发送到</h1>
      <div class="info">
        <p class="price">
          <span class="new">￥100</span>
          <span class="old">￥99</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "New",
  data() {
    return {};
  },
  created() {
   
  },
  methods:{
    go(id){
      this.$router.push({name:'GoodsInfo',params:{id:id}})
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log(to);
    next();
  }
};
</script>
<style lang="scss" scoped>
.goods-list {
  display: flex;
  justify-content: space-between;
  padding: 0 0.15rem;
  flex-wrap: wrap;
  .goods-item {
    width: 49%;
    // margin-left: 0.05rem;
    margin-top: 0.15rem;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    text-align: center;
    img {
      width: 100%;
    }
    .title {
      font-size: 0.14rem;
    }
  }
}
</style>
