<template>
  <ul
    class="slide-w"
    @touchstart="touchstart"
    @touchmove.prevent="touchmove"
    @touchend="touchend"
    ref="slide_w"
  >
    <slide tag="li" v-for="(item,i) in listData" :data="item" :key="i"></slide>
  </ul>
</template>
<script>
import Slide from "@/components/home/Slide.vue";
import { mapGetters, mapActions } from "vuex";
import { log } from "util";

export default {
  props: ["tabIndex"],
  data() {
    return {
      listData: [],

      //   startY: 0,
      moveY: 0,
      translateY: 0,
      oncedisY: 0
    };
  },
  components: { Slide },
  computed: {
    ...mapGetters(["itemH", "index0", "index1", "index2"]),
    getTranslateY() {
      return -parseFloat(this.itemH) * this["index" + this.tabIndex];
    }
  },
  methods: {
    ...mapActions(["preItem", "nextItem", "len0", "len1", "len2"]),
    touchstart(event) {
    
      let t = event.targetTouches[0];
      this.moveY = t.pageY;
      this.oncedisY = t.pageY;
      this.$refs.slide_w.style.transition = "0s";
    },
    touchmove(event) {
          // event.preventDefault();
      let t = event.targetTouches[0];
      let disY = t.pageY - this.moveY;
      //   console.log(this.translateY, disY);
      this.translateY = this.translateY + disY;
      this.moveY = this.moveY + disY;
    },
    touchend(event) {
      this.$refs.slide_w.style.transition = "0.5s linear";
      let t = event.changedTouches[0];
      let y = this.oncedisY - t.pageY;
      //   alert("end");
      if (y > 80) {
        //下一页
        console.log("下一页");
        this.nextItem(this.tabIndex);
        this.translateY = this.getTranslateY;
      } else if (y < -80) {
        //上一页
        // console.log("上一页");
        this.preItem(this.tabIndex);
        this.translateY = this.getTranslateY;
      } else {
        this.translateY = this.getTranslateY;
      }
    }
  },
  watch: {
    translateY(v) {
      this.$refs.slide_w.style.transform = `translateY(${v}px)`;
    }
  },
  created() {},
  mounted() {
    this.axios("/api/list" + this.tabIndex).then(res => {
      this.listData = res.data.data;
      this["len" + this.tabIndex](this.listData.length);
    });
    this.$nextTick(() => {
      this.translateY = this.getTranslateY;
    });
  }
};
</script>
<style lang="scss" scoped>
.slide-w {
  width: 100%;
  height: auto;
  transition: 1s;
}
</style>