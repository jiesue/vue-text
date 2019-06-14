<template>
  <div>
    <div>
      <p>
        我是user：{{username}}
        <button @click="logout">注销登录</button>
      </p>
      <ul>
        <router-link
          v-for="(item,i) of users"
          :key="i"
          :to="item.to"
          tag="li"
          active-class="active"
        >{{item.name}}</router-link>
      </ul>
      <br>
      <br>
      <br>
      <br>
      <ul>
        <li>姓名：{{nowUser.name}}</li>
        <li>昵称：{{nowUser.nick}}</li>
        <li>Id:{{nowUser.id}}</li>
      </ul>
      <br>
      <br>
      <br>
      <br>
      <div v-if="nowUser.name">
        <router-link exact active-class="active" to="?show=follow" :key="'jie2'" @click.native="change('Follow')">
          <span>关注</span>
        </router-link>&nbsp;&nbsp;&nbsp;&nbsp;
        <router-link exact active-class="active" to="?show=share" :key="'jie1'" @click.native="change('Share')">
          <span>分享</span>
        </router-link>
        <div class="bottom">
          <component :is="view">
             <h1 slot='title'>大标题</h1>
             <p slot='subtitle'>小标题</p>
            </component> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import Share from '@/components/Share'
import Follow from '@/components/Follow'
export default {
  name: "Me",
  data() {
    return {
      username: "",
      view:'Follow',
      nowUser: { id: "", name: "", nick: "" },
      users: [
        { name: "leo1", to: "/me/1" },
        { name: "leo2", to: "/me/2" },
        { name: "leo3", to: "/me/3" }
      ],
      data: [
        { id: 1, name: "leo1", nick: "鲁班1号" },
        { id: 2, name: "leo12", nick: "鲁班2号" },
        { id: 3, name: "leo123", nick: "鲁班3号" }
      ]
    };
  },
  components:{Share,Follow},
  methods: {
    ...mapActions(['setLogin']),
    logout() {
      this.setLogin(false);
      this.$router.push("/login");
    },
    change(params){
      this.view=params;
    }
  },
  created() {
    this.username = this.$local.get("username");
    let id = this.$route.params.userId;
    id ? "" : (id = 1);
    this.nowUser.id = id;
    this.nowUser.name = this.data[id - 1].name;
    this.nowUser.nick = this.data[id - 1].nick;
  },
  watch: {
    $route: function(to, from) {
      let id = to.params.userId;
      id ? "" : (id = 1);

      this.nowUser.id = id;
      this.nowUser.name = this.data[id - 1].name;
      this.nowUser.nick = this.data[id - 1].nick;
    }
  },
  beforeRouteEnter(to, from, next) {
    to.params.userId = 1;
    next(vm => {});
  }
};
</script>

<style lang="scss" scoped>
* {
  text-align: center;
  font-size: 0.3rem;
}
ul {
  width: 100%;
}
li {
  float: left;
  margin-left: 1rem;
}
.active {
  color: red;
}
.btn {
  margin-top: 1rem;
}
</style>