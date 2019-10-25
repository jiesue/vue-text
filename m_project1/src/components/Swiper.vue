<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(item,i) in swiperItem"
        :key="i"
        data-swiper-parallax-scale="0.15"
      >
        <img :src="item.imgUrl" alt>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper";

export default {
  props: ["swiperItem"],
  name: "Swiper",
  data() {
    return {};
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination"
      },
      autoplay: true,
      speed: 1000,
      effect: "flip",
      loop: true,
      parallax: true
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../../node_modules/swiper/dist/css/swiper.css";
.swiper-container {
  width: 100%;
  height: 2.54rem;
  margin-top: 0.4rem;
  .swiper-wrapper {
    width: 6.9rem;
    height: 2.54rem;
    margin: 0 auto;
    img {
      width: 6.9rem;
      height: 2.54rem;
    }
  }
  // border: 1px solid red;
}
</style>

