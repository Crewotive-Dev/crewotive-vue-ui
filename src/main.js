import Vue from 'vue'
import App from './App.vue'
require('./CreVueUI')
require('bootstrap/dist/js/bootstrap.bundle')
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
