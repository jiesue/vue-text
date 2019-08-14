<template>
  <div class="slide" ref="slide">
    <black-bg :cssText="bg1"></black-bg>
    <div class="img-w">
      <img ref="img" :src="data.imgSrc" alt />
    </div>
    <detail-show :info="data"></detail-show>
    <black-bg :cssText="bg2"></black-bg>
  </div>
</template>
<script>
import BlackBg from "@/components/home/BlackBg.vue";
import DetailShow from "@/components/home/DetailShow.vue";
export default {
  props: ["data"],
  data() {
    return {
      bg1:
        "height:2.30rem; background:linear-gradient(to top,rgba(0,0,0,0),rgba(0,0,0,0.5));opacity:0.7;top:0;",
      bg2:
        "height:2.94rem; background:linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.5));opacity:0.7;bottom:0"
    };
  },
  components: { BlackBg, DetailShow },
  created() {},
  mounted() {
    this.$nextTick(() => {
      var itemH = this.$store.getters.itemH;
      this.$refs.slide.style.height = itemH;
    });
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/global.scss";
.slide {
  position: relative;
  width: 100%;
  height: 100%;
  line-height: 100%;
  //   padding-bottom: 0.97rem;
  .img-w {
      display: flex;
     align-items: center;

    width: 100%;
    height: 100%;
    img {
      display: inline-block;
      width: 100%;

        // margin-top:-1rem;
      //   height: 100%;
      //   border:1px solid red;
    }
  }
}
</style>