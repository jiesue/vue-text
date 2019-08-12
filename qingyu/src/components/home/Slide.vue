<template>
  <div class="slide">
    <black-bg :cssText="bg1"></black-bg>
    <div>
      <img src alt />
    </div>
    <black-bg :cssText="bg2"></black-bg>
  </div>
</template>
<script>
import BlackBg from "@/components/home/BlackBg.vue";
export default {
  data() {
    return {
      bg1:
        "height:2.30rem; background:linear-gradient(to top,rgba(0,0,0,0),rgba(0,0,0,0.5));opacity:0.7;top:0;",
      bg2:
        "height:2.94rem; background:linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.5));opacity:0.7;bottom:0.97rem;"
    };
  },
  components: { BlackBg }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/global.scss";
.slide {
  width: 100%;
  height: 100%;
  //   padding-bottom: 0.97rem;
}
</style>