<template>
  <div class="bg" ref="bg"></div>
</template>
<script>
export default {
  props: ["cssText"],
  data() {
    return {};
  },
  mounted() {
    let target = this.$refs.bg.style;
    target.cssText = this.cssText;
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/style/global.scss";
.bg {
  position: absolute;
  width: 100%;
//   z-index: 1;
}
</style>