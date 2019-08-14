<template>
  <div class="index">
    <router-view></router-view>
    <Msg/>
    <TabBar />
  </div>
</template>

<script>
// @ is an alias to /src
import TabBar from "@/components/TabBar.vue";
import Msg from "@/components/Msg.vue";

export default {
  name: "Index",
  data(){
    return{}
  },
  components: {TabBar,Msg}
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
