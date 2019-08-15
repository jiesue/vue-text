<template>
    <div class="index">
        <router-view></router-view>
        <Msg />
        <TabBar />
        <PopUp />
    </div>
</template>

<script>
// @ is an alias to /src
import TabBar from "@/components/TabBar.vue";
import Msg from "@/components/Msg.vue";
import PopUp from "@/components/PopUp.vue";

export default {
    name: "Index",
    data() {
        return {};
    },
    mounted() {},
    components: { TabBar, Msg, PopUp },
    computed: {}
};
</script>

<style lang="scss" >
@import "../assets/style/global";
.index {
    -webkit-overflow-scrolling: touch;
    width: 100%;
    height: 100%;
    overflow: scroll;
    background: #fff;
}
</style>
