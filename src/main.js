import Vue from 'vue'
import App from './App.vue'
import '@/plugins/globalComponents.js'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
