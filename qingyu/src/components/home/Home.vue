<template>
  <div class="home">
    <nav-home></nav-home>
    <ul class="con-list">
      <slide tag="li"></slide>
    </ul>
  </div>
</template>
<script>
import NavHome from "@/components/home/NavHome.vue";
import Slide from "@/components/home/Slide.vue";
export default {
  data() {
      return{}
  },
  components: { NavHome, Slide }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/global.scss";
.home {
  width: 100%;
  height: 100%;
  padding-bottom: 0.97rem;
  //   border: $b;
  .con-list {
    width: 100%;
    height: 100%;
    // border: 0.01rem solid greenyellow;
  }
}
</style>