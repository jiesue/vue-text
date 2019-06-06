<template>
  <div id="app">
    <div class="content">
      <router-view/>
    </div>
    <nav-bar></nav-bar>
  </div>
</template>

<script>
//rem适配，一开始加载
!(function() {
  var documentElement = document.documentElement;
  var resizeEvt =
    "orientationchange" in window ? "orientationchange" : "resize";
  function resize() {
    var clientWidth = documentElement.clientWidth;
    clientWidth = clientWidth > 750 ? 750 : clientWidth;
    clientWidth = clientWidth < 320 ? 320 : clientWidth;
    var a = clientWidth / 7.5;
    documentElement.style.fontSize = a + "px";
    var real = parseFloat(
      window.getComputedStyle(document.getElementsByTagName("html")[0]).fontSize
    );
    if (Math.abs(a - real) > 1) {
      documentElement.style.fontSize = a * (a / real) + "px";
    }
  }
  resize();
  window.addEventListener(resizeEvt, resize, false);
  document.addEventListener("DOMContentLoaded", resize, false);
})(window, document);

// ---------------------------------------------
import NavBar from "@/components/NavBar";
export default {
  name: "App",
  components: {
    "nav-bar": NavBar
  }
};
</script>
  
<style lang="scss">
$b: 1px dashed red;
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}
html,
body {
  width: 100%;
  height: 100%;
  font-family: PingFang-SC-Bold;
  background: #fcfcfc;
  position: relative;
  overflow: hidden;
  #app {
    width: 100%;
    height: 100%;
    font-size: 0.14rem;
    overflow: auto;

    .content {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding-bottom: 0.7rem;
      overflow: auto;
    }
  }
}
</style>

