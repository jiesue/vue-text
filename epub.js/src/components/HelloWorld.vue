<template>
  <div id="container"></div>
</template>

<script>
import Epub from "epubjs";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },

  created() {
    this.book = new Epub('@/static/1.epub');
    this.rendition = this.book.renderTo("container", {
      width: 600,
      height: 600,
    });
    this.rendition.display();
    console.log(this.book);
    console.log(this.rendition);
    
 
      // this.rendition.next()
   
  }
    
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{
  width: 100%;
  height: 100%;
}
</style>
