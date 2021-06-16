import Vue from 'vue'
import App from './App.vue'
import '@/plugins/globalComponents.js'
import '@/directives/UI/UIDirectives.js'
require('bootstrap/dist/js/bootstrap.bundle')
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
