<template>
  <div class="home">
    <nav-home></nav-home>
    <div class="tab-w" ref="tab_w">
      <!-- <div class="con-list" ref="conList">
        <slide-wrap></slide-wrap>
      </div>
      <div class="con-list">
        <slide-wrap></slide-wrap>
      </div>
      <div class="con-list">
        <slide-wrap></slide-wrap>
      </div>-->
      <div class="con-list" v-for="(item,i) in 3" :key="i" ref="conList">
        <slide-wrap :tabIndex="i"></slide-wrap>
      </div>
    </div>
  </div>
</template>
<script>
import NavHome from "@/components/home/NavHome.vue";
import SlideWrap from "@/components/home/SlideWrap.vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  components: { NavHome, SlideWrap },
  computed: {
    ...mapGetters(["showUserIndex", "index1", "index2", "index3"])
  },

  mounted() {
    let h = window.getComputedStyle(this.$refs.conList[0]).height;
    // console.log(h);
    this.$store.dispatch("itemH", h);
  },
  watch: {
    showUserIndex(newV, oldV) {
      this.$refs.tab_w.style.transform = `translate(${-33.333 *
        this.showUserIndex}%, 0)`;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/global.scss";
.home {
  position: relative;
  width: 100%;
  height: 100%;
  padding-bottom: 0.97rem;
  background: #222;
  //   border: $b;
  .tab-w {
    display: flex;
    flex-wrap: nowrap;
    width: 300%;
    height: 100%;
    transition: 0.3s linear;
    .con-list {
      width: 33.33333%;
      height: 100%;
      overflow: hidden;
      //   border: $b;
    }
  }
}
</style>