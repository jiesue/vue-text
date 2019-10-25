<template>
  <div class="tab">
    <li v-for="(item,i) in tabItem" :key="i">
      <img :src="item.imgSrc" alt>
      <router-link :to="{name:item.to}" active-class="active">{{item.text}}</router-link>
    </li>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabItem: [
        { text: "首页", to: "Home", imgSrc: "../static/img/home.png" },
        { text: "发现", to: "Find", imgSrc: "../static/img/home.png" },
        { text: "消息", to: "Message", imgSrc: "../static/img/home.png" }, 
        { text: "我的", to: "Me", imgSrc: "../static/img/home.png" }
      ]
    };
  }
};
</script>
<style scoped lang="scss">
$b: 1px dashed red;
.active{
    color:blue;
  }
.tab {
  position: fixed;
  /* // z-index:2; */
  display: flex;
  /* justify-item: center; */

  bottom: 0;
  width: 100%;
  height: 0.7rem;
  background: #fff;
//   border: $b;

  color: #fff;
  li {
    flex-grow: 1;
    // border: $b;
    text-align: center;
    font-size: 0.2rem;
    line-height: 0.7rem;
    vertical-align: middle;
    color:blueviolet;
  }
  img {
    width: 0.5rem;
    height: 0.5rem;
    margin-top: -0.08rem;
    vertical-align: middle;
  }
}
</style>


