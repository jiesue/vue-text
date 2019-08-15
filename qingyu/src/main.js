import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import axios from 'axios'
import './utils/rem'
import './api/mock';
import Toast from './utils/toast.js'
Vue.use(Toast)
Vue.config.productionTip = false
Vue.prototype.axios = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
