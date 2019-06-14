// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from '../node_modules/vue/types'
import App from './App'
import router from './router'
import Mint from '../node_modules/mint-ui/lib/mint-ui.common';
Vue.use(Mint);
import './node_modules/mint-ui/lib/style.css';
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
