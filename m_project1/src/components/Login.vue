<template>
  <div class="login">
    <h2>请先登录~</h2>
    <div class="wrap">
      <p class="input-line">
        <input type="text" placeholder="用户名" ref="username">
      </p>
      <p class="input-line">
        <input type="password" placeholder="密码" ref="password">
      </p>
      <p class="btn-line">
        <input type="button" value="重置" @click="reset">
        <input type="button" value="登录" @click="login">
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    reset() {
      this.$refs.username.value = this.$refs.password.value = "";
    },
    login() {
      let username = this.$refs.username.value;
      let password = this.$refs.password.value;
      if(username&&password){
          this.$local.save('username',username)
          this.$local.save('password',password)
          this.$store.dispatch('setLogin',true)
        // this.$store.commit('setLogin');
        let redirect = this.$route.query.redirect;
        if(redirect){
          this.$router.push('/'+redirect)
        }else{
          this.$router.push('/')

        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;

  h2 {
    text-align: center;
    font-size: 0.4rem;
    color: aquamarine;
    margin-top: 0.5rem;
  }
  .wrap {
    width: 5.5rem;
    height: 4rem;
    // border: 1px solid red;
    box-shadow: 0 0 0.1rem #000;
    border-radius: 0.5rem;
    margin: 0.5rem auto;
    text-align: center;
    .input-line {
      padding-top: 0.6rem;
      input {
        width: 3rem;
        height: 0.5rem;
        border: 0;
        outline: 0;
        background: #eee;
        color: #f40;
        padding-left: 0.1rem;
      }
    }
    .btn-line {
      margin-top: 0.5rem;
      input {
        width: 1rem;
        height: 0.5rem;
        border: 0;
        text-align: center;
        outline: 0;
        background: #eee;
        color: #f40;
      }
    }
  }
}
</style>

