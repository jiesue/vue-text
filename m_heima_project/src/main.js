// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui';
import axios from 'axios';
import mock from './mock/mock'
Vue.prototype.axios = axios;
Vue.use(Mint);
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';
Vue.config.productionTip = false
import 'mint-ui/lib/style.css'
// import 'lib-flexible/flexible'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  mock,
  router,
  components: { App },
  template: '<App/>'
})
