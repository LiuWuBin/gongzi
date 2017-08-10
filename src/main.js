import Vue from 'vue'
import App from './App'
import router from './router'
import 'font-awesome-webpack'

import store from './vuex'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
