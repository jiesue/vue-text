<template>
  <div class="slide">
    <black-bg :cssText="bg1"></black-bg>
    <div class="img-w">
      <img src="@/assets/img/1.jpg" alt />
    </div>
    <detail-show :imgSrc="imgSrc"></detail-show>
    <black-bg :cssText="bg2"></black-bg>
  </div>
</template>
<script>
import BlackBg from "@/components/home/BlackBg.vue";
import DetailShow from "@/components/home/DetailShow.vue";
export default {
  props: ["imgSrc"],
  data() {
    return {
      bg1:
        "height:2.30rem; background:linear-gradient(to top,rgba(0,0,0,0),rgba(0,0,0,0.5));opacity:0.7;top:0;",
      bg2:
        "height:2.94rem; background:linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.5));opacity:0.7;",
    
    };
  },
  components: { BlackBg, DetailShow }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/global.scss";
.slide {
  position: relative;
  width: 100%;
  height: 100%;
  //   padding-bottom: 0.97rem;
  .img-w {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      border:1px solid red;
    }
  }
}
</style>