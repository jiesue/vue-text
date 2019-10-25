<template>
  <div>New------------------</div>
</template>
<script>
export default {
  name: "New",
  data() {
    return {};
  },
  created() {
    // this.axios({
    //   method: "get",
    //   url: "//vue.studyit.io/api/getnewslist"
    // }).then(res => {
    //   return res;
    // });
  },
  beforeRouteEnter(to, from, next) {
    console.log(to);
    next();
  }
};
</script>
<style lang="scss" scoped>
</style>
