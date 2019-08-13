<template>
  <div class="home">
    <nav-home></nav-home>
    <div class="tab-w" ref="tab_w">
      <div class="con-list" ref="conList">
       
      </div>
      <div class="con-list">
       
      </div>
      <div class="con-list">
      
      </div>
    </div>
  </div>
</template>
<script>
import NavHome from "@/components/home/NavHome.vue";
import { mapGetters } from "vuex";
import { parse } from "path";

export default {
  data() {
    return {
      imgSrc: require("@/assets/img/1.jpg"),
    };
  },
  components: { NavHome, Slide },
  computed: {
    ...mapGetters(["showUserIndex", "index1", "index2", "index3"])
  },
 

  mounted() {
    let h = window.getComputedStyle(this.$refs.conList).height;
    // console.log(h);
    this.$store.dispatch("itemH", h);
  },
  watch: {
    showUserIndex(newV, oldV) {
      this.$refs.tab_w.style.transform = `translate(${-33.333 *
        this.showUserIndex}%, 0)`;
    },
    translateY(v) {
      //   console.log(v);
      this.$refs.slide_w.style.transform = `translateY(${v}px)`;
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