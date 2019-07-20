import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router/index'
import './assets/styles/icon.css'
Vue.config.productionTip = false
/* eslint-disable */
new Vue({
  render: h => h(App),
  store,
  router

}).$mount('#app')