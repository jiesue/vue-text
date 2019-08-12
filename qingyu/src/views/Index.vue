<template>
  <div class="index">
    <router-view></router-view>
    <TabBar msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import TabBar from "@/components/TabBar.vue";

export default {
  name: "Index",
  data(){
    return{}
  },
  components: {
    TabBar
  }
};
</script>

<style lang="scss" >
@import "../assets/style/global";
.index {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #fff;
}
</style>
