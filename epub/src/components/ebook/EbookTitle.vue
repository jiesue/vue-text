<template>
  <transition name="slide-down">
    <div class="title-wrapper" v-show="menuVisible">
      <div class="left">
        <span class="icon-back" @click="back"></span>
      </div>
      <div class="right">
        <div class="icon-wrapper">
          <span class="icon-shelf"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-cart"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-more"></span>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      // menuVisible:1
    };
  },
  computed: {
     ...mapGetters(["fileName","menuVisible"])
  },
  methods:{
   
  },
  mounted(){
    
  },
  methods: {
    back() {
      console.log("back");
      console.log(this.menuVisible);
      
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/styles/global.scss";
.title-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 101;
  display: flex;
  width: 100%;
  height: px2rem(78);
  background: white;
  box-shadow: 0 px2rem(8) px2rem(8) rgba(0, 0, 0, 0.15);
  font-size: px2rem(20);
  .left {
    flex: 0 0 px2rem(60);
    font-size: px2rem(40);
    margin-left: px2rem(15);
    @include center;
  }
  .right {
    flex: 1;
    font-size: px2rem(30);
    display: flex;
    justify-content: flex-end;
    .icon-wrapper {
      flex: 0 0 px2rem(40);
      @include center;
      .icon-cart {
        font-size: px2rem(32);
      }
      .icon-shelf {
        font-size: px2rem(32);
      }
    }
  }
}
</style>
