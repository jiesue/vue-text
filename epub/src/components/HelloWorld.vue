<template>
  <div id="container"></div>
</template>

<script>
import Epub from "epubjs";
global.epub = Epub;
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },

  created() {
    this.book = new Epub("/1.epub");
    console.log(this.book);
    this.rendition = this.book.renderTo("container", {
      width: window.innerWidth,
      height: window.innerHeight
    });
    this.rendition.display();
    var a = this.$store.getters.getLoginStatus
    console.log(a);
    this.$store.dispatch('setLogin',true)

    // this.rendition.next()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  width: 100%;
  height: 100%;
}
</style>
