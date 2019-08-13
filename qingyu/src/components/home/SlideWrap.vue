<template>
  <ul
    class="slide-w"
    @touchstart="touchstart"
    @touchmove="touchmove"
    @touchend="touchend"
    ref="slide_w"
  >
    <slide tag="li" :imgSrc="imgSrc"></slide>
    <slide tag="li" :imgSrc="imgSrc"></slide>
    <slide tag="li" :imgSrc="imgSrc"></slide>
  </ul>
</template>
<script>
import Slide from "@/components/home/Slide.vue";
import { mapGetters } from "vuex";
export default {
  props: [],
  data() {
    return {
      startY: 0,
      moveY: 0,
      translateY: 0,
      oncedisY: 0
    };
  },
  components: { Slide },
  computed: {
    ...mapGetters(["index1", "index2", "index3"])
  },
  methods: {
    touchstart(event) {
      let t = event.targetTouches[0];
      this.moveY = t.pageY;
      this.oncedisY = t.pageY;
    },
    touchmove(event) {
      let t = event.targetTouches[0];
      let disY = t.pageY - this.moveY;
      //   console.log(this.translateY, disY);
      this.translateY = this.translateY + disY;
      this.moveY = this.moveY + disY;
    },
    touchend(event) {
      let t = event.changedTouches[0];
      let y = this.oncedisY - t.pageY;
      console.log(y);
    }
  }
};
</script>
<style lang="scss" scoped>
.slide-w {
  width: 100%;
  height: auto;
}
</style>