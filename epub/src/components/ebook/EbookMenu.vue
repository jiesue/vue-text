<template>
  <div class="ebook-menu">
    <transition name="slide-up">
      <div
        class="menu-wrapper"
        :class="{'hide-box-shadow': settingVisible >= 0 || !menuVisible}"
        v-show="menuVisible"
      >
        <div class="icon-wrapper" :class="{'selected': settingVisible === 3}">
          <span class="icon-menu" @click="showSetting(3)"></span>
        </div>
        <div class="icon-wrapper" :class="{'selected': settingVisible === 2}">
          <span class="icon-progress" @click="showSetting(2)"></span>
        </div>
        <div class="icon-wrapper" :class="{'selected': settingVisible === 1}">
          <span class="icon-bright" @click="showSetting(1)"></span>
        </div>
        <div class="icon-wrapper" :class="{'selected': settingVisible === 0}">
          <span class="icon-A" @click="showSetting(0)"></span>
        </div>
      </div>
    </transition>
<<<<<<< HEAD
=======
    <ebook-setting-font></ebook-setting-font>
    <!-- <ebook-setting-font-popup></ebook-setting-font-popup>
    <ebook-setting-theme></ebook-setting-theme>
    <ebook-setting-progress></ebook-setting-progress>
    <ebook-slide></ebook-slide>
    <ebook-speaking-icon></ebook-speaking-icon>-->
>>>>>>> 22c67160f4a90fe50752c41a519ead484507b4dd
  </div>
</template>

<script type="text/ecmascript-6">
<<<<<<< HEAD
import { mapGetters } from "vuex";

export default {
    computed:{
        ...mapGetters(['menuVisible'])
    }
=======
import EbookSettingFont from './EbookSettingFont'
// import EbookSettingFontPopup from './EbookSettingFontPopup'
// import EbookSettingTheme from './EbookSettingTheme'
// import EbookSettingProgress from './EbookSettingProgress'
// import EbookSpeakingIcon from './EbookSpeakingIcon'

// import EbookSlide from './EbookSlide'
import { ebookMixin } from "../../utils/mixins";
import { log } from 'util';
// import EbookSettingFont from "@/components/ebook/EbookSettingFont";
export default {
  components: { EbookSettingFont },

  mixins: [ebookMixin],

  methods: {
    showSetting(key) {
      console.log(key);
      
     this.$store.dispatch('settingVisible',key)
    }
  }
  // EbookSettingFontPopup,
  // EbookSlide,
  // EbookSettingProgress,
  // EbookSettingTheme,
  // EbookSpeakingIcon
>>>>>>> 22c67160f4a90fe50752c41a519ead484507b4dd
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../../assets/styles/global";

.menu-wrapper {
  position: absolute;
  bottom: 0;
  left: 0;
<<<<<<< HEAD
  z-index: 400;
=======
  z-index: 200;
>>>>>>> 22c67160f4a90fe50752c41a519ead484507b4dd
  display: flex;
  width: 100%;
  height: px2rem(78);
  box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.15);
<<<<<<< HEAD
  font-size: px2rem(22);
  background: rgb(243, 239, 239);
=======
  font-size: px2rem(30);
>>>>>>> 22c67160f4a90fe50752c41a519ead484507b4dd
  &.hide-box-shadow {
    box-shadow: none;
  }
  .icon-wrapper {
    flex: 1;
    @include center;
    .icon-progress {
      font-size: px2rem(24);
    }
    .icon-A {
      font-size: px2rem(20);
    }
  }
}
</style>
