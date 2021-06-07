import Vue from 'vue'
import App from './App.vue'
import '@/plugins/globalComponents.js'
import '@/directives/UI/UIDirectives.js'
import '@/assets/js/bootstrap/bootstrap.min.js'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
